import nodemailer from "nodemailer"

type ContactData = {
  service?: string
  budget?: string
  pages?: string
  timeline?: string
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  website?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const data: ContactData = await req.json()

    // Basic validation
    if (!data.email || !data.firstName) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    // Configure transporter using environment variables
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    })

    let usingTestAccount = false

    // If SMTP isn't configured (or still using the example host), create an Ethereal test account
    if (!process.env.SMTP_HOST || process.env.SMTP_HOST.includes("example.com") || !process.env.SMTP_USER) {
      try {
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        })
        usingTestAccount = true
        console.warn("Using Ethereal test account for email delivery (development).")
      } catch (acctErr: any) {
        console.error("Failed to create Ethereal test account:", acctErr)
      }
    }

    const toEmail = process.env.TO_EMAIL || "aetherionagency@gmail.com"
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@aetherion.com"

    const subject = `New contact request from ${data.firstName} ${data.lastName || ""}`

    // Simple HTML-escape to avoid breaking the template
    const escapeHtml = (unsafe?: string) => {
      if (!unsafe) return ""
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;")
    }

    const submittedAt = new Date().toLocaleString()

    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Request</title>
        <style>
          /* Minimal inline styles and animations for modern clients */
          @keyframes gradientShift { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
          .header-gradient { background: linear-gradient(90deg,#7c3aed,#fb7185,#f97316); background-size:200% 200%; animation:gradientShift 6s ease infinite; }
          .pulse { animation: pulse 2.5s infinite; }
          @keyframes pulse { 0%{opacity:1; transform:scale(1)}50%{opacity:0.85; transform:scale(0.995)}100%{opacity:1; transform:scale(1)} }
          .btn { background:linear-gradient(90deg,#7c3aed,#fb7185); color:#fff; padding:10px 18px; border-radius:8px; text-decoration:none; display:inline-block; }
          .btn:hover { opacity:0.95; }
          .muted { color:#94a3b8; }
          @media (max-width:620px){ .container{width:100% !important; border-radius:0 !important;} }
        </style>
      </head>
      <body style="margin:0;padding:0;background:#06070a;color:#e6e6e6;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding:28px 12px">
              <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="container" style="border-radius:14px;overflow:hidden;background:#0b1220;border:1px solid rgba(255,255,255,0.03);">
                <tr>
                  <td class="header-gradient" style="padding:22px 28px;color:#fff;">
                    <table role="presentation" width="100%">
                      <tr>
                        <td style="vertical-align:middle">
                          <h1 style="margin:0;font-size:20px;letter-spacing:0.3px;">New contact request — <span style="font-weight:800">Aetherion</span></h1>
                          <p style="margin:6px 0 0 0;font-size:12px;opacity:0.95;" class="muted">Received: ${escapeHtml(submittedAt)}</p>
                        </td>
                        <td style="text-align:right;vertical-align:middle">
                          <!-- Animated dot accent -->
                          <div style="width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);box-shadow:0 0 12px rgba(255,255,255,0.12);" class="pulse"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="width:44%;vertical-align:top;padding-right:16px;">
                          <div style="background:#071023;border:1px solid rgba(255,255,255,0.02);padding:14px;border-radius:8px;">
                            <h3 style="margin:0 0 8px 0;font-size:14px;color:#fff;">Contact</h3>
                            <p style="margin:0;font-size:13px;color:#cbd5e1;line-height:1.5">
                              <strong>Name:</strong><br /> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}
                            </p>
                            <p style="margin:10px 0 0 0;font-size:13px;color:#cbd5e1;line-height:1.5">
                              <strong>Email:</strong><br /><a href="mailto:${escapeHtml(data.email)}" style="color:#7c3aed;text-decoration:none">${escapeHtml(data.email)}</a>
                            </p>
                            <p style="margin:10px 0 0 0;font-size:13px;color:#cbd5e1;line-height:1.5">
                              <strong>Company:</strong><br /> ${escapeHtml(data.company)}
                            </p>
                            ${data.website ? `<p style="margin:10px 0 0 0;font-size:13px;color:#7ea2ff;line-height:1.5"><strong>Website:</strong><br /><a href="${escapeHtml(data.website)}" style="color:#7ea2ff;text-decoration:none">${escapeHtml(data.website)}</a></p>` : ''}
                          </div>
                        </td>

                        <td style="vertical-align:top;padding-left:8px;">
                          <div style="background:#061126;border:1px solid rgba(255,255,255,0.02);padding:14px;border-radius:8px;">
                            <h3 style="margin:0 0 8px 0;font-size:14px;color:#fff;">Project Info</h3>
                            <p style="margin:0;font-size:13px;color:#cbd5e1;line-height:1.5">
                              <strong>Service:</strong> ${escapeHtml(data.service)}<br />
                              <strong>Budget:</strong> ${escapeHtml(data.budget)}<br />
                              <strong>Pages:</strong> ${escapeHtml(data.pages)}<br />
                              <strong>Timeline:</strong> ${escapeHtml(data.timeline)}
                            </p>
                            <div style="margin-top:12px;">
                              <a href="#" class="btn">Open in Dashboard</a>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2" style="padding-top:14px;">
                          <h3 style="margin:0 0 8px 0;font-size:14px;color:#fff;">Message</h3>
                          <div style="background:#051026;border:1px solid rgba(255,255,255,0.02);padding:14px;border-radius:10px;color:#dbe7ff;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message || '').replace(/\n/g, '<br />')}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="background:#040512;padding:14px 20px;color:#94a3b8;font-size:12px;text-align:center;">
                    <div>Reply to <a href="mailto:${escapeHtml(data.email)}" style="color:#7c3aed;text-decoration:none">${escapeHtml(data.email)}</a></div>
                    <div style="margin-top:6px;opacity:0.85">Aetherion • <a href="mailto:${escapeHtml(process.env.TO_EMAIL || 'aetherionagency@gmail.com')}" style="color:#94a3b8;text-decoration:none">${escapeHtml(process.env.TO_EMAIL || 'aetherionagency@gmail.com')}</a></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`

    // Verify transporter configuration (helps surface SMTP auth/connection issues)
    try {
      await transporter.verify()
    } catch (verifyErr: any) {
      console.error("SMTP verify failed:", verifyErr)
      return new Response(JSON.stringify({ error: "SMTP connection/auth failed: " + (verifyErr?.message || verifyErr) }), { status: 502 })
    }

    // Send mail
    try {
      // Use authenticated SMTP user as envelope/from when available to improve deliverability
      const senderAddress = process.env.SMTP_USER || fromEmail
      const displayFrom = `Aetherion Website <${senderAddress}>`

      const mailOptions: any = {
        from: displayFrom,
        to: toEmail,
        subject,
        text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nCompany: ${data.company}\nWebsite: ${data.website}\nService: ${data.service}\nBudget: ${data.budget}\nPages: ${data.pages}\nTimeline: ${data.timeline}\nMessage: ${data.message}`,
        html,
        replyTo: data.email || undefined,
      }

      // If we have an authenticated SMTP user, set the envelope to that address (some providers require this)
      if (process.env.SMTP_USER) {
        mailOptions.envelope = { from: process.env.SMTP_USER, to: toEmail }
      }

      const info = await transporter.sendMail(mailOptions)
      console.log("Message sent:", info?.messageId || info)

      const previewUrl = usingTestAccount ? nodemailer.getTestMessageUrl(info) : undefined
      if (previewUrl) console.log("Preview URL:", previewUrl)

      return new Response(JSON.stringify({ ok: true, messageId: info?.messageId, previewUrl }), { status: 200 })
    } catch (sendErr: any) {
      console.error("Error sending mail:", sendErr)
      return new Response(JSON.stringify({ error: "Failed to send email: " + (sendErr?.message || sendErr) }), { status: 500 })
    }
  } catch (err: any) {
    console.error("Error sending contact email:", err)
    return new Response(JSON.stringify({ error: err?.message || "Unknown error" }), { status: 500 })
  }
}
