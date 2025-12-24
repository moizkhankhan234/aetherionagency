import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Mailchimp integration: configure these env vars:
// - MAILCHIMP_API_KEY
// - MAILCHIMP_LIST_ID
// - MAILCHIMP_SERVER_PREFIX (e.g. 'us19')
// - MAILCHIMP_DOUBLE_OPTIN (optional: '1' or 'true' to enable double opt-in -> Mailchimp status 'pending')
//
// Email notification: configure these env vars for Nodemailer:
// - SMTP_HOST (e.g. 'smtp.gmail.com')
// - SMTP_PORT (e.g. 587 or 465)
// - SMTP_USER (your email address or account)
// - SMTP_PASS (your password or app-specific password)
// - ADMIN_EMAIL (your email to receive notifications)

// Basic in-memory rate limiter (per-IP).
// NOTE: This is an in-memory Map and will not persist across serverless instances or restarts.
// For production, use a central store (Redis) or a managed rate-limiter.
const RATE_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_MAX = 5
const rateMap = new Map<string, number[]>()

function getIpFromRequest(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp
  try {
    // NextRequest doesn't expose req.socket.remoteAddress in edge runtime; this is a best-effort
    // Fallback to 'unknown' so limiter still works per-instance
    return 'unknown'
  } catch {
    return 'unknown'
  }
}

async function sendNotificationEmail(email: string) {
  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10)
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    console.warn('[newsletter] email config incomplete, skipping notification')
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        <p>This subscriber has been added to your Mailchimp list.</p>
      `,
    })
    console.log('[newsletter] notification sent to', ADMIN_EMAIL)
  } catch (err) {
    console.error('[newsletter] email notification failed', err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body || {}
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Rate limiting
    const ip = getIpFromRequest(request) || 'unknown'
    const now = Date.now()
    const entries = rateMap.get(ip) || []
    const recent = entries.filter((t) => now - t < RATE_WINDOW_MS)
    recent.push(now)
    rateMap.set(ip, recent)
    if (recent.length > RATE_MAX) {
      return NextResponse.json({ error: 'Too many requests, please try later' }, { status: 429 })
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX
    const MAILCHIMP_DOUBLE_OPTIN = (process.env.MAILCHIMP_DOUBLE_OPTIN || '').toLowerCase()

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.warn('[newsletter] Mailchimp env vars missing')
      if (process.env.NODE_ENV !== 'production') {
        console.log('[newsletter] subscribe (dev fallback):', email)
        return NextResponse.json({ message: 'Subscribed (dev fallback)' }, { status: 200 })
      }
      return NextResponse.json({ error: 'Mailchimp not configured' }, { status: 500 })
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

    // If double opt-in is enabled, use 'pending' to trigger confirmation email; otherwise 'subscribed'
    const status = MAILCHIMP_DOUBLE_OPTIN === '1' || MAILCHIMP_DOUBLE_OPTIN === 'true' ? 'pending' : 'subscribed'

    const payload = {
      email_address: email,
      status,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (res.ok) {
      // Send notification email to admin
      await sendNotificationEmail(email)

      // Provide different messages if status === 'pending'
      if (status === 'pending') {
        return NextResponse.json({ message: 'Please confirm your email (check your inbox).' }, { status: 200 })
      }
      return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 })
    }

    if (data.title === 'Member Exists') {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }

    console.error('[newsletter] mailchimp error', data)
    return NextResponse.json({ error: data.detail || 'Mailchimp error' }, { status: res.status || 500 })
  } catch (err) {
    console.error('[newsletter] error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
