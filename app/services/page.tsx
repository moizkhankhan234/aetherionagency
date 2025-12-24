"use client"

import { useState, useEffect } from "react"
import {
  Palette,
  Code,
  TrendingUp,
  Users,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Shield,
  Search,
  Share2,
  Video,
  Layout,
  DollarSign,
  Mail,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 150, clients: 50, years: 4, satisfaction: 98 }
      const duration = 2500
      const steps = 80
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = Math.min(1, currentStep / steps)
        // Easing function for smooth animation
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress

        setCounters({
          projects: Math.floor(targets.projects * easeProgress),
          clients: Math.floor(targets.clients * easeProgress),
          years: Math.floor(targets.years * easeProgress),
          satisfaction: Math.floor(targets.satisfaction * easeProgress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const timer = setTimeout(animateCounters, 800)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design & Development",
      description:
        "Crafting modern, responsive, and high-performing websites tailored to your brand and audience.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Creative",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Branding & Identity",
      description:
        "Building powerful visual identities that leave a lasting impression and set you apart.",
      features: [],
      price: "",
      duration: "",
      popular: true,
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Driving growth with SEO, social media, and data-driven ad campaigns.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Growth",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "E-Commerce Solutions",
      description:
        "From small shops to large marketplaces, we design seamless online shopping experiences.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "E-Commerce",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Innovative apps for iOS and Android that connect you with customers anywhere.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Mobile",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "AI & Automation",
      description:
        "Smart solutions like chatbots, personalized workflows, and AI tools to streamline business.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "AI",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Data & Analytics",
      description:
        "Turning raw data into clear insights that power your business decisions.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Data",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Consulting & Strategy",
      description:
        "Expert guidance to develop effective strategies and optimize your business growth.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Consulting",
      color: "from-green-500 to-lime-500",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure tailored to your business needs.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Cloud",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with advanced security measures and monitoring.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Security",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Content Creation",
      description:
        "Engaging content strategies and production to captivate your audience.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Content",
      color: "from-yellow-600 to-amber-600",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description:
        "Boost your online visibility and drive organic traffic with expert search engine optimization strategies.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "SEO",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Management",
      description:
        "Build and engage your community across all social platforms with strategic content and growth tactics.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Social",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description:
        "Create compelling video content that tells your story and connects with your audience on a deeper level.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Video",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Design intuitive and beautiful user experiences that delight customers and drive conversions.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Design",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "PPC Advertising",
      description:
        "Maximize your ROI with targeted pay-per-click campaigns that reach the right audience at the right time.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Ads",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Marketing",
      description:
        "Build lasting relationships with personalized email campaigns that nurture leads and drive sales.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Email",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Web Hosting & Maintenance",
      description:
        "Reliable hosting solutions with ongoing maintenance to keep your website secure and performing optimally.",
      features: [],
      price: "",
      duration: "",
      popular: false,
      badge: "Hosting",
      color: "from-slate-500 to-gray-500",
    },
  ]

  const process = [
    {
      step: "01",
      icon: <Target className="w-8 h-8" />,
      title: "Discovery & Research",
      description:
        "We conduct comprehensive research into your business goals, target audience, competitive landscape, and market opportunities to create a solid foundation.",
    },
    {
      step: "02",
      icon: <Zap className="w-8 h-8" />,
      title: "Strategy & Planning",
      description:
        "We develop a detailed strategy and project roadmap tailored to your unique needs, objectives, and budget constraints for maximum impact.",
    },
    {
      step: "03",
      icon: <Code className="w-8 h-8" />,
      title: "Design & Development",
      description:
        "Our expert team brings your vision to life using cutting-edge design principles and development technologies for exceptional results.",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Launch & Optimization",
      description:
        "We launch your project with comprehensive testing and provide ongoing optimization and support to ensure continued success.",
    },
    {
      step: "05",
      icon: <Users className="w-8 h-8" />,
      title: "Post-Launch Support",
      description:
        "We provide continuous support and maintenance to ensure your digital solutions remain effective and up-to-date.",
    },
  ]

  const stats = [
    { icon: <Target className="w-8 h-8" />, number: counters.projects, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, number: counters.clients, label: "Happy Clients", suffix: "+" },
    { icon: <Clock className="w-8 h-8" />, number: counters.years, label: "Years Experience", suffix: "" },
    {
      icon: <Star className="w-8 h-8" />,
      number: counters.satisfaction,
      label: "Client Satisfaction",
      suffix: "%",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full blur-3xl opacity-15 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 hover:border-orange-500/60 transition-all duration-300 animate-text-reveal text-xs sm:text-sm">
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">Comprehensive Digital Solutions</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl animate-text-reveal">
                Transform Your Vision
              </span>
              <span className="block text-white drop-shadow-2xl animate-text-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ animationDelay: "0.2s" }}>
                Into Digital Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-light px-2">
              Comprehensive digital solutions designed to transform your business, accelerate growth, and create
              lasting impact in the digital landscape with our proven expertise
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-400">
              <div className="h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 line-animate"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              What We <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Offer</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Industry-leading digital solutions tailored to your specific business needs
            </p>
            <div className="h-1 w-28 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 line-animate"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-purple-500/30 animate-fade-in-up service-card-hover overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center mb-4 sm:mb-6 rounded-xl w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-icon-bounce`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">{service.title}</h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
                  
                  {service.badge && (
                    <Badge className={`bg-gradient-to-r ${service.color} text-white border-0 px-3 sm:px-4 py-1 sm:py-1.5 font-semibold uppercase text-xs`}>
                      {service.badge}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Our <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              A proven methodology refined through years of experience that ensures exceptional results for every project
            </p>
            <div className="h-1 w-28 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 line-animate"></div>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-orange-500/30 service-card-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-xl sm:rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-xl sm:text-2xl font-black">{item.step}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">{item.title}</h3>
                    
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 translate-x-8">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center animate-fade-in-up bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-orange-500/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300 counter-animate">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 font-semibold group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              What Our <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Hear from our satisfied clients who have experienced transformative digital solutions
            </p>
            <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 line-animate"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "Aetherion transformed our digital presence completely. Their creative approach and technical expertise exceeded our expectations.",
                rating: 5,
                color: "from-orange-500 to-red-500"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director, GrowthCo",
                content:
                  "The team's attention to detail and innovative solutions helped us achieve a 300% increase in online engagement.",
                rating: 5,
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, CreativeSpace",
                content:
                  "Working with Aetherion was a game-changer. They understood our vision and brought it to life beautifully.",
                rating: 5,
                color: "from-blue-500 to-purple-500"
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 animate-fade-in-up card-hover overflow-hidden transition-all duration-500 hover:border-purple-500/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex mb-6 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700/50 pt-6">
                    <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up max-w-3xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Business?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss your project goals and create a custom digital solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-200">
              <button className="relative bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-400 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-7 text-lg font-bold group shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden rounded-full float-cta">
                <span className="relative z-10 flex items-center justify-center">
                  Get Your Free Consultation
                  <ArrowRight className="ml-3 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-purple-500/30 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
              <button className="relative border-2 border-white/40 text-white hover:bg-transparent hover:text-white px-12 py-7 text-lg font-bold group bg-transparent backdrop-blur-md shadow-xl hover:shadow-black/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden rounded-full">
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
