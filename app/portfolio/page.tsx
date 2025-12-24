"use client"

import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import ProjectModal from "../../components/ProjectModal"
import Image from "next/image"
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Filter,
  Star,
  Award,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap,
  CheckCircle,
  BarChart3,
  Globe,
} from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  tags: string[]
  challenge: string
  solution: string
  results: Record<string, number | undefined>
  featured: boolean
  client: string
  industry: string
  year: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [counters, setCounters] = useState<Record<string, number>>({})
  const [globalCounters, setGlobalCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    satisfaction: 0,
  })
  const [visibleCount, setVisibleCount] = useState(6)

  const filters = [
    { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
    { id: "branding", label: "Branding", icon: <Star className="w-4 h-4" /> },
    { id: "web", label: "Web Development", icon: <Zap className="w-4 h-4" /> },
    { id: "marketing", label: "Marketing", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "ecommerce", label: "E-commerce", icon: <BarChart3 className="w-4 h-4" /> },
  ]

  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600&text=TechFlow+Branding",
      description: "Complete brand transformation for a B2B SaaS company targeting enterprise clients",
      tags: ["Brand Identity", "Logo Design", "Guidelines", "Strategy"],
      challenge:
        "TechFlow needed to rebrand from a generic tech company to a premium SaaS solution provider targeting enterprise clients with credibility and trust.",
      solution:
        "We developed a sophisticated brand identity with clean typography, professional color palette, and modern iconography that communicates trust, innovation, and enterprise-grade reliability.",
      results: {
        brandRecognition: 85,
        leadIncrease: 150,
        conversionRate: 23,
        timeframe: 8,
      },
      featured: true,
      client: "TechFlow Inc.",
      industry: "SaaS Technology",
      year: "2024",
    },
    {
      id: 2,
      title: "EcoMarket Platform",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=EcoMarket+Platform",
      description: "Sustainable e-commerce platform with advanced filtering and vendor management system",
      tags: ["React", "Node.js", "E-commerce", "Sustainability"],
      challenge:
        "Create an intuitive e-commerce platform for sustainable products with complex filtering, vendor management, and sustainability scoring system.",
      solution:
        "Built a modern React-based platform with advanced search capabilities, comprehensive vendor dashboards, and an innovative sustainability scoring system that educates consumers.",
      results: {
        userEngagement: 92,
        salesIncrease: 200,
        pageSpeed: 95,
        timeframe: 12,
      },
      featured: true,
      client: "EcoMarket Ltd.",
      industry: "Sustainable Commerce",
      year: "2024",
    },
    {
      id: 3,
      title: "FinanceFirst Campaign",
      category: "marketing",
      image: "/placeholder.svg?height=400&width=600&text=FinanceFirst+Campaign",
      description: "Comprehensive digital marketing campaign for financial advisory services",
      tags: ["PPC", "Content Marketing", "Analytics", "Lead Generation"],
      challenge:
        "Increase qualified leads for a financial advisory firm in a highly competitive market while maintaining compliance with financial regulations.",
      solution:
        "Implemented multi-channel campaign with targeted content marketing, PPC optimization, conversion tracking, and compliance-focused messaging strategies.",
      results: {
        leadQuality: 78,
        costReduction: 45,
        roiIncrease: 180,
        timeframe: 6,
      },
      featured: false,
      client: "FinanceFirst Advisory",
      industry: "Financial Services",
      year: "2023",
    },
    {
      id: 4,
      title: "Artisan Marketplace",
      category: "ecommerce",
      image: "/placeholder.svg?height=400&width=600&text=Artisan+Marketplace",
      description: "Handcrafted goods marketplace featuring artist profiles and storytelling integration",
      tags: ["Shopify", "Custom Design", "Payment Integration", "Artist Profiles"],
      challenge:
        "Build a marketplace that showcases artisan stories and craftsmanship while providing a seamless shopping experience for customers.",
      solution:
        "Created custom Shopify solution with integrated artist profiles, story-driven product pages, and streamlined checkout process optimized for mobile commerce.",
      results: {
        artistRetention: 88,
        averageOrder: 165,
        customerSatisfaction: 94,
        timeframe: 10,
      },
      featured: false,
      client: "Artisan Collective",
      industry: "Handcrafted Goods",
      year: "2023",
    },
    {
      id: 5,
      title: "MedTech Innovations",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600&text=MedTech+Branding",
      description: "Medical technology startup brand development with regulatory compliance focus",
      tags: ["Healthcare", "Brand Strategy", "Visual Identity", "Compliance"],
      challenge:
        "Establish credibility and trust for a new medical device startup entering highly regulated markets with strict compliance requirements.",
      solution:
        "Developed professional brand identity emphasizing safety, innovation, and regulatory compliance while maintaining approachable healthcare communication.",
      results: {
        investorInterest: 120,
        partnershipDeals: 8,
        marketCredibility: 91,
        timeframe: 14,
      },
      featured: false,
      client: "MedTech Innovations",
      industry: "Medical Technology",
      year: "2023",
    },
    {
      id: 6,
      title: "FitLife Mobile App",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=FitLife+App",
      description: "Comprehensive fitness tracking app with social features and gamification elements",
      tags: ["React Native", "UI/UX", "Social Features", "Gamification"],
      challenge:
        "Create an engaging fitness app that motivates users through social interaction, gamification, and personalized workout experiences.",
      solution:
        "Built React Native app with social challenges, progress tracking, community features, and AI-powered workout recommendations for sustained user engagement.",
      results: {
        userRetention: 76,
        dailyActive: 68,
        socialEngagement: 84,
        timeframe: 16,
      },
      featured: true,
      client: "FitLife Technologies",
      industry: "Health & Fitness",
      year: "2024",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 160, damping: 18 },
    },
  }

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.12 } },
  }

  const animateCounters = (targetResults: Record<string, number>) => {
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      const newCounters: Record<string, number> = {}
      Object.keys(targetResults).forEach((key) => {
        if (typeof targetResults[key] === "number") {
          newCounters[key] = Math.floor(targetResults[key] * progress)
        }
      })

      setCounters(newCounters)

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targetResults)
      }
    }, stepTime)
  }

  useEffect(() => {
    if (selectedProject) {
      // Filter out undefined values from results
      const filteredResults: Record<string, number> = {}
      Object.entries(selectedProject.results).forEach(([key, value]) => {
        if (value !== undefined) {
          filteredResults[key] = value
        }
      })
      animateCounters(filteredResults)
    }
  }, [selectedProject])

  // Close modal on Escape key for accessibility
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedProject) return

      if (e.key === "Escape") {
        setSelectedProject(null)
        return
      }

      // navigate between projects when modal is open
      if (e.key === "ArrowRight") {
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        const next = filteredProjects[(idx + 1) % filteredProjects.length]
        if (next) setSelectedProject(next)
      }

      if (e.key === "ArrowLeft") {
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        const prev = filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length]
        if (prev) setSelectedProject(prev)
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedProject, filteredProjects])

  useEffect(() => {
    const animateGlobalCounters = () => {
      const targets = { projects: 150, clients: 50, awards: 12, satisfaction: 98 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setGlobalCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          awards: Math.floor(targets.awards * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setGlobalCounters(targets)
        }
      }, stepTime)
    }

    const timer = setTimeout(animateGlobalCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gray-800 text-sm font-semibold text-red-400 mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 text-red-400" />
            Portfolio
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight animate-fade-in-up">
            <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">Exceptional</span>
            <span className="block text-white drop-shadow-2xl">Works</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">Curated case studies that showcase measurable impact, elegant design, and product-driven thinking.</p>
          <hr className="mx-auto mt-8 sm:mt-12 mb-12 sm:mb-20 w-40 sm:w-48 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 animate-gradient-x shadow-lg" />
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="group bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 text-center h-full flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{globalCounters.projects}+</div>
              <div className="text-sm text-gray-400 mt-2">Projects</div>
            </div>
            <div className="group bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 text-center h-full flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{globalCounters.clients}+</div>
              <div className="text-sm text-gray-400 mt-2">Clients</div>
            </div>
            <div className="group bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 text-center h-full flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{globalCounters.awards}</div>
              <div className="text-sm text-gray-400 mt-2">Awards</div>
            </div>
            <div className="group bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 text-center h-full flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{globalCounters.satisfaction}%</div>
              <div className="text-sm text-gray-400 mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-red-500" />
            <span className="text-gray-300 font-medium">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-gray-900/60 text-gray-300 hover:bg-gray-800 border border-gray-800 hover:border-orange-500/30"
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                role="button"
                tabIndex={0}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                variants={cardVariants}
                whileHover={{ translateY: -6 }}
                whileTap={{ scale: 0.995 }}
                className="group relative bg-transparent overflow-hidden cursor-pointer transition-transform duration-300"
                aria-label={`Open case study for ${project.title}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="rounded-2xl p-[1px] bg-gradient-to-r from-red-600 to-pink-500 shadow-md h-full flex flex-col">
                  <div className="bg-black rounded-xl overflow-hidden border border-gray-800 flex flex-col h-full">
                    {/* Image */}
                    <div className="w-full">
                      <div className="aspect-[16/9] w-full overflow-hidden relative">
                        <Image src={project.image || "/placeholder.svg"} alt={project.title} width={1200} height={675} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                        <div className="absolute top-4 left-4 z-20">
                          {project.featured && (
                            <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                              <Star className="w-4 h-4" />
                              Featured
                            </div>
                          )}
                        </div>

                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">{project.year}</span>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                          <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">View Case Study</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                          <div className="text-red-400 text-xs font-semibold uppercase tracking-wider">{project.industry}</div>
                        </div>
                        <div className="text-sm text-gray-400">{project.client}</div>
                      </div>

                      <h3 className="text-xl font-extrabold text-white mb-2 leading-tight">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className="bg-gray-800 px-2 py-1 rounded-full text-xs text-gray-300 border border-gray-700">{tag}</span>
                          ))}
                          {project.tags.length > 4 && <span className="text-xs text-gray-400">+{project.tags.length - 4}</span>}
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-sm text-white font-semibold bg-gray-800/60 px-3 py-1 rounded-lg border border-gray-700">{Object.values(project.results).find(v => typeof v === 'number') || ''}</div>
                          <button className="bg-red-600 text-white rounded-full p-2 flex items-center justify-center shadow-md">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl sm:text-2xl text-gray-300">No projects match that category yet. Try another filter or check back soon.</p>
              </div>
            )}
          </motion.div>

          <div className="mt-8 flex justify-center">
            {visibleCount < filteredProjects.length && (
              <button
                onClick={() => setVisibleCount((v) => Math.min(filteredProjects.length, v + 3))}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Ready to Create</span>
            <span className="block text-white">Your Success Story?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create something extraordinary that drives real business results and
            sustainable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        filteredProjects={filteredProjects}
        setSelectedProject={setSelectedProject}
        counters={counters}
      />
    </div>
  )
}


