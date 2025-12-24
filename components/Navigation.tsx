"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return
    if (isMobileMenuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close on Escape key for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/98 backdrop-blur-xl border-b border-gradient-to-r border-orange-500/30 shadow-2xl shadow-orange-500/10"
            : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center nav-brand group transition-all duration-300"
              onClick={() => setActiveLink("/")}
            >
              <span className="font-extrabold text-lg sm:text-2xl gradient-text tracking-tight">Aetherion</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 lg:px-5 py-2 rounded-md transition-all duration-300 font-medium relative group text-sm lg:text-base ${
                    activeLink === link.href ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeLink === link.href && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full bg-gradient-to-r from-orange-400 via-purple-500 to-pink-400 animate-gradient-x"></span>
                  )}
                  <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-transparent to-transparent -z-10 transition-all duration-300"></span>
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-gradient-to-b border-gray-600 group relative overflow-hidden"
                onClick={() => setActiveLink("/contact")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <button className="relative z-10 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 group-hover:from-orange-400 group-hover:via-purple-500 group-hover:to-pink-500 text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform group-hover:scale-105 font-semibold text-xs lg:text-sm whitespace-nowrap flex items-center gap-2">
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 group z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Menu size={20} className={`transition-all duration-300 absolute ${isMobileMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"} text-white`} />
                <X size={20} className={`transition-all duration-300 absolute ${isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} text-orange-400`} />
              </div>
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`md:hidden transition-[max-height,opacity,transform] duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? "max-h-[80vh] opacity-100 translate-y-0 pb-6" : "max-h-0 opacity-0 -translate-y-2"
            }`}
            role="region"
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="relative mt-4 p-3 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-xl rounded-2xl border border-orange-500/20 z-40">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link block w-full px-4 py-3.5 rounded-xl transition-all duration-300 transform font-medium text-sm group relative overflow-hidden ${
                      activeLink === link.href
                        ? "text-white bg-gradient-to-r from-orange-500/30 to-purple-500/30 border border-orange-500/50"
                        : "text-gray-300"
                    }`}
                    style={{
                      animation: isMobileMenuOpen ? ("slideInLeft 0.4s ease-out " + index * 60 + "ms both") : "none",
                    }}
                    onClick={() => {
                      setActiveLink(link.href)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <span className="relative z-10 flex-1">{link.label}</span>
                    {activeLink === link.href && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-400"></div>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:to-purple-500/5 -z-10"></span>
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-orange-500/20">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full mt-4 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-400 hover:via-purple-500 hover:to-pink-500 text-white px-6 py-3.5 rounded-xl text-center text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold shadow-lg hover:shadow-purple-500/30 relative group overflow-hidden"
                    style={{ animation: isMobileMenuOpen ? "slideInLeft 0.4s ease-out 300ms both" : "none" }}
                    onClick={() => {
                      setActiveLink("/contact")
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
