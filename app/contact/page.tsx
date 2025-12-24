
"use client"

import React, { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star,
  Zap,
  Award,
  Shield,
  ArrowRight,
  Target,
  TrendingUp,
  Palette,
  Code,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Sparkles,
  Lightbulb,
  Brain,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    pages: "",
    timeline: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    message: "",
    gdprConsent: false,
  })
  const [focusedField, setFocusedField] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  // Fix hydration mismatch by ensuring no client-only code runs during SSR
  useEffect(() => {
    setFocusedField("")
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitted) return

    // Basic client-side validation
    if (!formData.firstName || !formData.email || !formData.company || !formData.gdprConsent) {
      toast({
        title: "Missing required fields",
        description: "Please provide your first name, email, company and accept the privacy consent.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitted(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || "Failed to send request")
      }

      setShowThankYou(true)
      toast({ title: "Request sent", description: "Thanks — we'll be in touch within 24 hours." })

      // clear form after success
      setFormData({
        service: "",
        budget: "",
        pages: "",
        timeline: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        website: "",
        message: "",
        gdprConsent: false,
      })
    } catch (err: any) {
      console.error("Contact submission error:", err)
      toast({ title: "Submission failed", description: err?.message || "Could not send your request. Try again later.", variant: "destructive" })
    } finally {
      setIsSubmitted(false)
      // hide thank you after a short delay
      setTimeout(() => setShowThankYou(false), 3500)
    }
  }

  const packages = [
    {
      name: "Starter",
      price: "$5,000",
      duration: "4-6 weeks",
      icon: <Zap className="w-8 h-8" />,
      description: "Perfect for startups and small businesses looking to establish their digital presence",
      features: [
        "Brand Identity Design",
        "Logo & Visual Guidelines",
        "Business Card Design",
        "Social Media Templates",
        "Brand Style Guide",
        "2 Revision Rounds",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$15,000",
      duration: "8-12 weeks",
      icon: <Star className="w-8 h-8" />,
      description: "Comprehensive solution for growing businesses ready to scale their digital presence",
      features: [
        "Complete Brand Identity",
        "Responsive Website Design",
        "Custom Web Development",
        "SEO Optimization",
        "Content Management System",
        "3 Months Support",
        "Analytics Integration",
        "Mobile Optimization",
      ],
      popular: true,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "$50,000+",
      duration: "12-20 weeks",
      icon: <Award className="w-8 h-8" />,
      description: "Full-scale digital transformation for established businesses and enterprises",
      features: [
        "Complete Digital Strategy",
        "Advanced Web Platform",
        "E-commerce Integration",
        "Marketing Automation",
        "Custom Integrations",
        "Dedicated Project Manager",
        "6 Months Support",
        "Performance Monitoring",
        "Team Training",
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@aetherion.com", "projects@aetherion.com"],
      description: "Send us an email anytime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri from 9am to 6pm EST",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Creative Street", "Design District, NY 10001"],
      description: "Our creative studio",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      description: "We're here to help",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const services = [
    "Digital Strategy",
    "Webflow design / branding",
    "Webflow development",
    "All of the above",
    "Other",
  ]

  const budgetRanges = ["€10.000 - €20.000", "€20.000 - €30.000", "€30.000 - €50.000", "€50.000 - €100.000", "€100.000+"]

  const pagesOptions = ["Less than 5", "6 - 10", "11 - 20", "21 - 30", "31+"]

  const timelineOptions = ["Faster than Friday night pizza", "High prio (< 3 weeks)", "Regular (still faster than your current agency)", "Take your time"]

  const serviceHighlights = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Award-winning design that captures your brand essence",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      description: "Cutting-edge technology and performance optimization",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Strategy",
      description: "Data-driven strategies that deliver measurable results",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Support",
      description: "Ongoing support and maintenance for peace of mind",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-3xl opacity-25 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: "0s" }}>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60"></div>
          </div>
          <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: "0.5s" }}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce" style={{ animationDelay: "1s" }}>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-sm opacity-60"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/30 to-purple-500/30 border-2 border-red-500/50 rounded-full px-8 py-3 mb-10 backdrop-blur-md hover:border-red-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-110 group animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-red-300 animate-pulse group-hover:text-red-200 group-hover:scale-125 transition-all" />
            <span className="text-red-200 font-bold tracking-widest group-hover:text-red-100 transition-colors">READY TO CREATE SOMETHING AMAZING</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tighter animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl hover:from-orange-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 cursor-pointer">
              Let's Build
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl hover:from-cyan-200 hover:via-blue-300 hover:to-purple-300 transition-all duration-500 cursor-pointer">
              Your Vision
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We're here to transform your ideas into <span className="font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">stunning digital experiences</span> that captivate users and drive real business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110 flex items-center gap-3">
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-gray-300 text-white font-bold rounded-full transition-all duration-300 hover:bg-transparent hover:scale-105">
              See Our Work
              <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
      
      </section>

      {/* Process Steps Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-xs sm:text-sm">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 px-2">
              Your Journey to <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Digital Success</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              A simple, transparent process designed to deliver exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 sm:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30"></div>

            {[
              { number: 1, title: "Discovery", description: "We listen, learn, and understand your vision, goals, and challenges", icon: Brain },
              { number: 2, title: "Strategy", description: "Crafting a customized roadmap aligned with your business objectives", icon: Target },
              { number: 3, title: "Creation", description: "Building beautiful, functional solutions with cutting-edge technology", icon: Code },
              { number: 4, title: "Growth", description: "Ongoing support and optimization for continuous success", icon: TrendingUp },
            ].map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative group"
                >
                  <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    hoveredStep === idx ? "border-pink-500/70 shadow-2xl shadow-pink-500/40 -translate-y-2 sm:-translate-y-4" : "border-gray-700"
                  }`}>
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 rounded-lg sm:rounded-2xl`}></div>

                    {/* Step Number Circle */}
                    <div className={`relative z-10 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500 shadow-lg`}>
                      <span className="text-lg sm:text-xl md:text-2xl font-black text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-purple-400 mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-pink-300 transition-colors">{step.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Us Section (replaces Pricing) */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 sm:px-6 py-2 mb-3 sm:mb-4 text-xs sm:text-sm">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">Contact Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 px-2">
              Let's <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Talk About Your Project</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Need a custom solution or have questions? Reach out and our team will respond within 24 hours. Use the form below
              or choose one of the quick contact options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-start mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">hello@aetherion.com — For general inquiries</p>
              <a href="#contact-form" className="inline-flex items-center gap-2 text-purple-300 font-semibold hover:underline">
                Send a message
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-sm text-gray-300 mb-4">+1 (555) 123-4567 — Schedule a discovery call</p>
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-purple-300 font-semibold hover:underline">
                Request a call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-sm text-gray-300 mb-4">123 Creative Street, Design District, NY</p>
              <a href="#studio" className="inline-flex items-center gap-2 text-purple-300 font-semibold hover:underline">
                View location
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl border-2 border-gray-700 hover:border-red-500/70 transition-all duration-300 hover:scale-105 sm:hover:scale-110 fade-in-up group overflow-hidden transform hover:-translate-y-2 sm:hover:-translate-y-3 cursor-pointer hover:shadow-2xl hover:shadow-red-500/30"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-red-500 mb-3 sm:mb-6 group-hover:scale-150 group-hover:text-red-300 transition-all duration-300 text-2xl sm:text-4xl group-hover:-translate-y-2 group-hover:rotate-12">
                    {info.icon}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-red-300 transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 font-semibold group-hover:text-gray-100 transition-colors">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">{info.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Ready to Get <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Started?</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Share your project details with us and we'll create a customized proposal that brings your vision to life with stunning design and powerful functionality.
                </p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-2xl hover:border-purple-500/30 transition-all duration-300">
                {/* Service Selection */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      What service do you need?*
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none appearance-none cursor-pointer font-medium ${
                        focusedField === "service" ? "border-purple-500 shadow-lg shadow-purple-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Budget & Pages Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Budget */}
                  <div className="group">
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-pink-300 transition-colors">
                      <span className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Project budget?*
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("budget")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none appearance-none cursor-pointer font-medium ${
                          focusedField === "budget" ? "border-pink-500 shadow-lg shadow-pink-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Pages */}
                  <div className="group">
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-orange-300 transition-colors">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Number of pages?*
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        name="pages"
                        value={formData.pages}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("pages")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none appearance-none cursor-pointer font-medium ${
                          focusedField === "pages" ? "border-orange-500 shadow-lg shadow-orange-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <option value="">Select pages</option>
                        {pagesOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-red-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Timeline
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("timeline")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none appearance-none cursor-pointer font-medium ${
                        focusedField === "timeline" ? "border-red-500 shadow-lg shadow-red-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
                  <div className="group">
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">First name*</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
                        focusedField === "firstName" ? "border-purple-500 shadow-lg shadow-purple-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                      }`}
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">Last name*</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
                        focusedField === "lastName" ? "border-purple-500 shadow-lg shadow-purple-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                      }`}
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">Email*</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    required
                    className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
                      focusedField === "email" ? "border-pink-500 shadow-lg shadow-pink-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">Company name*</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField("")}
                    required
                    className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
                      focusedField === "company" ? "border-orange-500 shadow-lg shadow-orange-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="Your company name"
                  />
                </div>

                {/* Website */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">Website URL</label>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("website")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
                      focusedField === "website" ? "border-red-500 shadow-lg shadow-red-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5 sm:mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    rows={4}
                    className={`w-full rounded-lg sm:rounded-xl border-2 bg-gray-900/60 text-white text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3.5 transition-all duration-300 focus:outline-none placeholder-gray-500 resize-none ${
                      focusedField === "message" ? "border-cyan-500 shadow-lg shadow-cyan-500/30 bg-gray-900/80" : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start space-x-2 sm:space-x-3 pt-2 sm:pt-4">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 sm:mt-1.5 h-4 w-4 sm:h-5 sm:w-5 text-purple-600 bg-gray-900 border-2 border-gray-600 rounded-lg focus:ring-purple-500 focus:ring-2 cursor-pointer accent-purple-600"
                  />
                  <label htmlFor="gdprConsent" className="text-xs sm:text-sm text-gray-300 leading-relaxed cursor-pointer">
                    I agree to the processing of my personal data in accordance with the{" "}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline font-semibold transition-colors">
                      Privacy Policy
                    </a>{" "}
                    and consent to receive marketing communications from Aetherion.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full relative group/btn py-2.5 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden ${
                    isSubmitted
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transform"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">Request Sent!</span>
                        <span className="inline sm:hidden">Sent!</span>
                      </>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-y-1 transition-transform" />
                        <span className="hidden sm:inline">Send Project Request</span>
                        <span className="inline sm:hidden">Send Request</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {/* Success Message */}
                {showThankYou && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 rounded-lg sm:rounded-xl animate-fade-in-up backdrop-blur-sm">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-green-400">Thank You!</h3>
                        <p className="text-green-300 text-xs sm:text-sm">Your request has been received. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 sm:top-24 space-y-4 sm:space-y-6">
                {/* Quick Contact Box */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Contact</h3>

                  {[
                    { icon: Mail, title: "Email", value: "hello@aetherion.com", color: "text-blue-400", bgColor: "bg-blue-500/10" },
                    { icon: Phone, title: "Call", value: "+1 (555) 123-4567", color: "text-green-400", bgColor: "bg-green-500/10" },
                    { icon: MapPin, title: "Visit", value: "123 Creative Street, NY", color: "text-red-400", bgColor: "bg-red-500/10" },
                  ].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <div key={idx} className="flex gap-3 sm:gap-4 group cursor-pointer">
                        <div className={`${item.bgColor} p-2.5 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.title}</p>
                          <p className="font-semibold text-sm sm:text-base text-gray-100 group-hover:text-white transition-colors">{item.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/20 space-y-3 sm:space-y-4">
                  <h4 className="font-bold text-purple-300 flex items-center gap-2 text-sm sm:text-base">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    Why Choose Aetherion?
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    {["Award-winning team", "Fast turnaround", "100% Custom work", "24/7 Support", "Results-driven approach"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Connect with us</h2>
          <div className="flex justify-center gap-4 sm:gap-6">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Stay <span className="gradient-text animate-gradient">Updated</span>
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
            Subscribe to our newsletter for the latest insights, trends, and exclusive offers in digital design and development.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 text-xs sm:text-sm bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text animate-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What services does Aetherion provide?",
                answer:
                  "Aetherion is a full-stack digital agency. We specialize in web design, app development, branding, and digital marketing solutions tailored to your business.",
              },
              {
                question: "How do I start a project with Aetherion?",
                answer:
                  "Simply contact us through our website. We’ll schedule a consultation to understand your needs and provide a tailored digital strategy.",
              },
              {
                question: "Do you work with startups and small businesses?",
                answer:
                  "Absolutely! We love helping startups and small businesses grow by providing scalable, affordable digital solutions.",
              },
              {
                question: "What makes Aetherion different from other agencies?",
                answer:
                  "Aetherion blends creativity with technology. Our focus is not just on design or code, but on building impactful digital experiences that grow brands.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple branding projects take 4-6 weeks, while complex web development can take 12-16 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with startups and small businesses?",
                answer:
                  "We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible packages and payment options to accommodate different budgets and needs.",
              },
              {
                question: "What's included in your web development services?",
                answer:
                  "Our web development includes custom design, responsive development, CMS integration, SEO optimization, performance optimization, security implementation, and 3 months of post-launch support and maintenance.",
              },
              {
                question: "Can you help with ongoing marketing and maintenance?",
                answer:
                  "Yes! We offer ongoing marketing services, website maintenance, and digital strategy consulting. Many of our clients work with us long-term as their dedicated digital growth partner.",
              },
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-orange-400 list-none">
                  <span>{faq.question}</span>
                  <span className="text-gray-400">▾</span>
                </summary>
                <div className="mt-3 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )}

