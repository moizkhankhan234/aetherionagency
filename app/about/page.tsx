"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Sparkles,
  Rocket,
  Eye,
  Compass,
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Settings,
  Trophy,
  Medal,
  Crown,
  GitBranch,
  Terminal,
  Box,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 150, clients: 50, awards: 12, satisfaction: 98 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          awards: Math.floor(targets.awards * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to transform digital experiences through innovative design",
      icon: <Lightbulb className="w-6 h-6" />,
      achievement: "Seed funding secured",
      stats: "$50K initial investment",
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Delivered breakthrough branding solutions for Fortune 500 companies worldwide",
      icon: <Award className="w-6 h-6" />,
      achievement: "Fortune 500 partnership",
      stats: "500% growth in revenue",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 15+ creative professionals, developers, and strategic consultants",
      icon: <Users className="w-6 h-6" />,
      achievement: "Expert team assembled",
      stats: "15+ specialists onboard",
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services to clients across 3 continents with 24/7 support",
      icon: <Globe className="w-6 h-6" />,
      achievement: "International presence",
      stats: "3 continents, 24/7 support",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched AI-powered design and development solutions for next-gen experiences",
      icon: <Zap className="w-6 h-6" />,
      achievement: "AI integration complete",
      stats: "10+ AI-powered tools",
    },
    {
      year: "2025",
      title: "Next Frontier",
      description: "Pioneering immersive technologies and metaverse experiences for the future",
      icon: <Rocket className="w-6 h-6" />,
      achievement: "Metaverse ready",
      stats: "VR/AR solutions launching",
    },
  ]



  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional, future-ready results.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and close partnerships to create meaningful, lasting relationships.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every project, ensuring quality that exceeds expectations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results",
      description: "We measure success by the tangible impact and measurable growth we create for our clients.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "TypeScript", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create exceptional user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences.",
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern businesses.",
      features: ["AWS/Azure", "DevOps", "CI/CD", "Monitoring"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const technologies = [
    { name: "React", category: "Frontend", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Next.js", category: "Framework", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: ".NET", category: "Framework", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "TypeScript", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "JavaScript", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Python", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "PHP", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Swift", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Kotlin", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Ruby", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "SQL", category: "Language", icon: <Database className="w-8 h-8 mx-auto mb-2" /> },
    { name: "R", category: "Language", icon: <TrendingUp className="w-8 h-8 mx-auto mb-2" /> },
    { name: "MATLAB", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Perl", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Scala", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Dart", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Elixir", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Haskell", category: "Language", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Node.js", category: "Backend", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Flutter", category: "Mobile", icon: <Smartphone className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Firebase", category: "Backend", icon: <Database className="w-8 h-8 mx-auto mb-2" /> },
    { name: "PostgreSQL", category: "Database", icon: <Database className="w-8 h-8 mx-auto mb-2" /> },
    { name: "MongoDB", category: "Database", icon: <Database className="w-8 h-8 mx-auto mb-2" /> },
    { name: "AWS", category: "Cloud", icon: <Cloud className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Docker", category: "DevOps", icon: <Box className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Kubernetes", category: "DevOps", icon: <Layers className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Figma", category: "Design", icon: <Palette className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Adobe CC", category: "Design", icon: <Palette className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Tailwind CSS", category: "Styling", icon: <Palette className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Framer Motion", category: "Animation", icon: <Code className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Git", category: "Version Control", icon: <GitBranch className="w-8 h-8 mx-auto mb-2" /> },
    { name: "CLI", category: "Tools", icon: <Terminal className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Google Analytics", category: "Marketing", icon: <TrendingUp className="w-8 h-8 mx-auto mb-2" /> },
    { name: "SEO", category: "Marketing", icon: <Target className="w-8 h-8 mx-auto mb-2" /> },
    { name: "Social Media", category: "Marketing", icon: <Globe className="w-8 h-8 mx-auto mb-2" /> },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into understanding your business goals, target audience, and competitive landscape to develop a comprehensive strategy.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our designers create stunning visual concepts while our developers plan the technical architecture for optimal performance.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies, with rigorous testing at every stage to ensure quality and reliability.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle deployment, provide ongoing maintenance, and offer continuous support to ensure your success long-term.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ]

  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Global Excellence Recognition",
      organization: "Worldwide Digital Community",
      year: "",
      description: ""
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Innovation Excellence Award",
      organization: "Industry Recognition",
      year: "",
      description: ""
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Community Leadership Honor",
      organization: "Creative & Tech Communities",
      year: "",
      description: ""
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leadership Partnership",
      organization: "Strategic Alliances",
      year: "",
      description: ""
    },
  ]

  const stats = [
    { icon: <CheckCircle className="w-8 h-8" />, number: counters.projects, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, number: counters.clients, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="w-8 h-8" />, number: counters.awards, label: "Awards Won", suffix: "" },
    { icon: <Star className="w-8 h-8" />, number: counters.satisfaction, label: "Client Satisfaction", suffix: "%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="about-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-56 sm:w-96 h-56 sm:h-96 bg-gradient-to-r 
            from-orange-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-56 sm:w-96 h-56 sm:h-96 bg-gradient-to-r 
            from-blue-500 via-purple-500 to-red-500 rounded-full blur-3xl opacity-25 animate-float-delayed">
          </div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[500px] sm:w-[1000px] h-[500px] sm:h-[1000px] bg-gradient-to-r 
            from-orange-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-spin-slow">
          </div>
          <div 
            className="absolute top-0 left-0 w-full h-full 
            bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          <div 
            className="absolute top-0 right-0 w-full h-full 
            bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div 
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-500/20 
              to-purple-500/20 border border-red-500/40 rounded-full px-4 sm:px-8 py-2 sm:py-3 
              mb-6 sm:mb-10 backdrop-blur-sm hover:border-red-500/60 transition-all duration-300 
              hover:shadow-lg hover:shadow-red-500/20">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold tracking-wide text-xs sm:text-sm">
                DIGITAL TRANSFORMATION
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 sm:mb-8 leading-none tracking-tighter">
              <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                We Are
              </span>
              <span className="block bg-gradient-to-r from-transparent via-gray-200 to-cyan-200 bg-clip-text text-transparent animate-text-shimmer drop-shadow-2xl">
                Aetherion
              </span>
            </h1>
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 
              max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-light px-2">
              A creative digital agency that 
              <span className="font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                transforms brands
              </span>
              {" "}
              through innovative design, cutting-edge technology, and strategic thinking that drives real business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-400 px-2">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                text-white px-6 sm:px-10 py-3 sm:py-6 rounded-full text-base sm:text-lg font-bold 
                transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110 
                group w-full sm:w-auto">
                <a href="#about-mission" className="flex items-center justify-center sm:justify-start gap-2">
                  Explore Our Story
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 
                hover:border-purple-400 px-6 sm:px-10 py-3 sm:py-6 rounded-full text-base sm:text-lg 
                font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

<br/>
      {/* Stats Section */}

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-500/10 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                  <div 
                    className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                    p-8 rounded-xl border border-gray-700 group-hover:border-red-500/50 
                    transition-all duration-300">
                    <div 
                      className="text-red-500 mb-4 flex justify-center group-hover:scale-125 
                      group-hover:text-red-400 transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div 
                      className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r 
                      from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-gray-300 font-semibold group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-purple-500/30 rounded-2xl blur-2xl"></div>
                <Image
                  src="/images/aboutus.png"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform 
                  duration-500 border-2 border-red-500/20"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                We Bridge 
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Imagination
                </span>
                {" "}&{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Reality
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium">
                Every pixel, every line of code, and every strategic decision is crafted with unwavering purpose to elevate your brand and create meaningful, lasting connections with your audience.
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Our team combines creative vision with technical expertise to deliver digital experiences that not only look stunning but drive real business results and sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div 
                  className="flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-red-500/10 
                  border border-red-500/30 rounded-full px-6 py-3 hover:border-red-500/60 
                  transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/20">
                  <CheckCircle className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-red-300 font-semibold group-hover:text-red-200 transition-colors">
                    Creative Excellence
                  </span>
                </div>/
                <div 
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-purple-500/10 
                  border border-purple-500/30 rounded-full px-6 py-3 hover:border-purple-500/60 
                  transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20">
                  <Sparkles className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                    Technical Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section ID anchor */}
      <div id="about-mission"></div>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900/80 via-gray-800/80 to-gray-900/80 relative overflow-hidden">
          <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 
            to-red-500/10 rounded-full blur-3xl animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 
            to-pink-500/10 rounded-full blur-3xl animate-float-delayed">
          </div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Rocket className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Our Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              From Vision to <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Transforming the digital landscape since 2020</p>
          </div>
          <div className="relative">
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full 
              bg-gradient-to-b from-orange-500 via-red-500 to-purple-500 rounded-full">
            </div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div 
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl 
                    shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 
                    hover:border-red-500/50 group relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 justify-center">
                        <div 
                          className="text-red-400 group-hover:scale-110 group-hover:text-red-300 
                          transition-all duration-300 text-2xl">
                          {milestone.icon}
                        </div>
                        <div 
                          className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 
                          bg-clip-text text-transparent">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">{milestone.description}</p>
                      <div 
                        className="flex flex-col gap-2 pt-4 border-t border-gray-600 
                        group-hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-2 justify-center">
                          <Badge 
                            variant="secondary" 
                            className="bg-red-500/20 text-red-300 border-red-500/30">
                            {milestone.achievement}
                          </Badge>
                        </div>
                        <div 
                          className="text-sm font-semibold text-purple-400 
                          group-hover:text-purple-300 transition-colors">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 
                  bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-4 border-black 
                  shadow-xl group-hover:scale-150 transition-transform duration-300 z-20">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900/50 to-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r 
            from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r 
            from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed">
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Core Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              What Drives <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Us Forward</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our principles shape every decision and every project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group animate-card-fade-in-up">
                <div className="equal-height-card relative overflow-hidden flex flex-col h-full rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} 
                    opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                  ></div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 
                    opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  </div>
                  <div className="relative z-10 p-10 flex flex-col justify-center flex-grow">
                    <div 
                      className={`text-red-500 mb-6 flex justify-center group-hover:scale-125 
                      group-hover:-translate-y-2 transition-all duration-300 text-4xl`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors">
                      {value.description}
                    </p>
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                    from-transparent via-red-500 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r 
            from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r 
            from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed">
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Settings className="w-5 h-5 text-red-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-red-400 font-semibold">Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              What We <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">Do Best</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions that transform your vision into impactful reality
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div 
                  className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                  p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 
                  border border-gray-700 hover:border-red-500/50 overflow-hidden min-h-[280px]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} 
                    opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                  ></div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent 
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                  <div className="relative z-10">
                    <div 
                      className="text-red-500 mb-6 flex justify-start group-hover:scale-125 
                      group-hover:-translate-y-1 transition-all duration-300 text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p 
                      className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 
                      transition-colors text-base">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r 
            from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r 
            from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed">
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Database className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Technology Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Cutting-Edge <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We leverage the latest and most powerful technologies to build robust, scalable, and future-proof solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                  p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 
                  border border-gray-700 hover:border-purple-500/50 group-hover:bg-gray-700/80 
                  min-h-[200px] flex flex-col items-center justify-center relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                  <div className="relative z-10">
                    <div 
                      className="text-purple-500 group-hover:text-purple-400 transition-colors text-3xl 
                      flex justify-center mb-3 group-hover:scale-125 group-hover:-translate-y-1 transition-all">
                      {tech.icon}
                    </div>
                    <div className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {tech.name}
                    </div>
                    <div 
                      className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors 
                      font-semibold tracking-wide">
                      {tech.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-orange-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Compass className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Our Proven Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              How We <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our strategic methodology ensures every project is delivered on time, on budget, and exceeds expectations
            </p>
          </div>
          <div className="relative">
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full 
              bg-gradient-to-b from-orange-500 via-purple-500 to-pink-500 rounded-full">
            </div>
            <div className="space-y-16">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div 
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                      p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 
                      border border-gray-700 hover:border-red-500/50 group relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-6 justify-center">
                          <div 
                            className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 
                            bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-red-400 transition-all">
                            {step.step}
                          </div>
                          <div 
                            className="text-red-500 group-hover:scale-125 group-hover:-translate-y-2 
                            group-hover:text-red-400 transition-all duration-300 text-3xl">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                          {step.title}
                        </h3>
                        <p 
                          className="text-gray-300 leading-relaxed group-hover:text-gray-200 
                          transition-colors text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 
                    bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-4 border-black 
                    shadow-xl group-hover:scale-150 transition-transform duration-300 z-20">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r 
            from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r 
            from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed">
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <Trophy className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Awards & Recognition</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Industry <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to excellence has been recognized by industry leaders and peers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards
              .slice()
              .sort((a, b) => parseInt(a.year) - parseInt(b.year))
              .map((award, index) => (
                <div key={index} className="text-center group animate-card-fade-in-up">
                  <div className="equal-height-card relative overflow-hidden flex flex-col h-full rounded-2xl">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 
                      opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                    </div>
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent 
                      to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div className="relative z-10 p-10 flex flex-col justify-center flex-grow">
                      <div className="flex flex-col items-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-yellow-400 transition-all duration-300">
                        <div className="text-5xl mb-3 group-hover:animate-bounce">{award.icon}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors text-center leading-tight">
                          {award.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2 group-hover:text-gray-200 transition-colors font-semibold text-center">
                          {award.organization}
                        </p>
                        <p className="text-red-400 text-sm font-bold mb-2 group-hover:text-red-300 transition-colors text-center">
                          {award.year}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors text-center">
                        {award.description}
                      </p>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                      from-yellow-500 via-orange-500 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-purple-900/30">
          </div>
          <div 
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r 
            from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-float">
          </div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r 
            from-red-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-25 animate-float-delayed">
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-purple-500/20 
            border border-red-500/40 rounded-full px-8 py-3 mb-8 backdrop-blur-sm hover:border-red-500/60 
            transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-300 font-semibold tracking-wide">IGNITE YOUR BUSINESS</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Ready to <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">Transform</span> Your Business?
          </h2>
          <p className="text-2xl text-gray-200 mb-8 leading-relaxed font-semibold animate-fade-in-up animation-delay-300">
            Unleash your brand’s full potential with our creative, tech-driven solutions. Let’s make your vision a reality—starting today.
          </p>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
            Connect with us to discover how we can elevate your business and create extraordinary results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-600 to-purple-700 hover:from-orange-700 
              hover:to-purple-800 text-white px-10 py-6 rounded-full text-lg font-bold 
              transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-110 group">
              <a href="/contact" className="flex items-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 
              hover:border-purple-400 px-10 py-6 rounded-full text-lg font-bold transition-all 
              duration-300 hover:scale-105 backdrop-blur-sm">
              <a href="/portfolio">See Our Impact</a>
            </Button>
          </div>
          <div className="mt-10 flex justify-center animate-fade-in-up animation-delay-800">
            <span 
              className="inline-block bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 
              bg-clip-text text-transparent text-2xl font-bold tracking-wide drop-shadow-lg animate-text-shimmer">
              Let's build something legendary together.
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
