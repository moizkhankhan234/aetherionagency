"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email")
      setStatus("error")
      return
    }
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus("success")
        setMessage(data.message || "Subscribed — check your inbox")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Subscription failed")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
      setMessage("Network error — please try again")
    }
  }

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-6 footer-appear footer-stagger-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black gradient-text">Aetherion</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Crafting digital experiences that transform businesses. Strategy, design, and engineering working in perfect harmony.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 flex-wrap">
              <a href="https://x.com/aetherionagency" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social group relative w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                <Twitter size={18} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social group relative w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                <Facebook size={18} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/aetherion_agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social group relative w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                <Instagram size={18} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social group relative w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                <Linkedin size={18} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </a>
            
            </div>
          </div>

          {/* Services */}
          <div className="footer-appear footer-stagger-2">
            <h4 className="text-white font-semibold mb-6 text-lg md:text-xl uppercase tracking-wider transition-all duration-300 hover:text-orange-400 hover:tracking-widest cursor-default">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Web Development</Link>
              </li>
              <li>
                <Link href="/services" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Branding</Link>
              </li>
              <li>
                <Link href="/services" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Strategy</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-appear footer-stagger-3">
            <h4 className="text-white font-semibold mb-6 text-lg md:text-xl uppercase tracking-wider transition-all duration-300 hover:text-orange-400 hover:tracking-widest cursor-default">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-appear footer-stagger-4">
            <h4 className="text-white font-semibold mb-6 text-lg md:text-xl uppercase tracking-wider transition-all duration-300 hover:text-orange-400 hover:tracking-widest cursor-default">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on our latest projects and industry insights.</p>
            
            
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input 
                aria-label="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="aetherionagency@gmail.com" 
                className="w-full bg-white/5 border border-gray-700 text-gray-200 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300" 
              />
              <button 
                disabled={status === "loading"} 
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium disabled:opacity-60 transition-all duration-300"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {message && (
              <div className={`mt-3 text-xs ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50"></div>

        {/* Footer bottom */}
        <div className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 footer-appear">
          <div>© {year} Aetherion Agency. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-link hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="footer-link hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
