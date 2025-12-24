"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react"

type Project = {
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

type Props = {
  project: Project | null
  onClose: () => void
  filteredProjects: Project[]
  setSelectedProject: (p: Project | null) => void
  counters: Record<string, number>
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.12 } },
}

export default function ProjectModal({ project, onClose, filteredProjects, setSelectedProject, counters }: Props) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={project ? `project-title-${project.id}` : undefined}
        aria-describedby={project ? `project-desc-${project.id}` : undefined}
        className="bg-black/95 rounded-lg sm:rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 my-4 sm:my-auto relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Prev / Next controls */}
        <button
          onClick={() => {
            if (!project) return
            const idx = filteredProjects.findIndex((p) => p.id === project.id)
            const prev = filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length]
            if (prev) setSelectedProject(prev)
          }}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            if (!project) return
            const idx = filteredProjects.findIndex((p) => p.id === project.id)
            const next = filteredProjects[(idx + 1) % filteredProjects.length]
            if (next) setSelectedProject(next)
          }}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        <div className="relative">
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-red-500 text-2xl sm:text-3xl z-10 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm transition-all duration-200"
          >
            ×
          </button>
          <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-48 sm:h-60 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 flex-wrap">
                <span className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  {project.featured ? "Featured Project" : "Case Study"}
                </span>
                <span className="bg-transparent backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                  {project.year}
                </span>
              </div>
              <h2 id={`project-title-${project.id}`} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{project.title}</h2>
              <p id={`project-desc-${project.id}`} className="text-sm sm:text-base md:text-lg text-gray-200">
                {project.client} • {project.industry}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <div className="fade-in-up">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="fade-in-up">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">Solution</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
            <div className="fade-in-up">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">Results</h3>
              </div>
              <div className="space-y-2 sm:space-y-4">
                {Object.entries(project.results).map(([key, value], index) => {
                  const labels: Record<string, string> = {
                    brandRecognition: "Brand Recognition",
                    leadIncrease: "Lead Increase",
                    conversionRate: "Conversion Rate",
                    userEngagement: "User Engagement",
                    salesIncrease: "Sales Increase",
                    pageSpeed: "Page Speed Score",
                    leadQuality: "Lead Quality Score",
                    costReduction: "Cost Reduction",
                    roiIncrease: "ROI Increase",
                    artistRetention: "Artist Retention",
                    averageOrder: "Average Order Value",
                    customerSatisfaction: "Customer Satisfaction",
                    investorInterest: "Investor Interest",
                    partnershipDeals: "Partnership Deals",
                    marketCredibility: "Market Credibility",
                    userRetention: "User Retention",
                    dailyActive: "Daily Active Users",
                    socialEngagement: "Social Engagement",
                    timeframe: "Project Timeline",
                  }

                const suffixes: Record<string, string> = {
                  brandRecognition: "%",
                  leadIncrease: "%",
                  conversionRate: "%",
                  userEngagement: "%",
                  salesIncrease: "%",
                  pageSpeed: "/100",
                  leadQuality: "%",
                  costReduction: "%",
                  roiIncrease: "%",
                  artistRetention: "%",
                  averageOrder: "$",
                  customerSatisfaction: "%",
                  investorInterest: "%",
                  partnershipDeals: "",
                  marketCredibility: "%",
                  userRetention: "%",
                  dailyActive: "%",
                  socialEngagement: "%",
                  timeframe: " weeks",
                }

                const icons: Record<string, JSX.Element> = {
                  brandRecognition: <Star className="w-4 h-4" />,
                  leadIncrease: <TrendingUp className="w-4 h-4" />,
                  conversionRate: <Target className="w-4 h-4" />,
                  userEngagement: <Users className="w-4 h-4" />,
                  salesIncrease: <BarChart3 className="w-4 h-4" />,
                  pageSpeed: <Zap className="w-4 h-4" />,
                  leadQuality: <CheckCircle className="w-4 h-4" />,
                  costReduction: <TrendingUp className="w-4 h-4" />,
                  roiIncrease: <BarChart3 className="w-4 h-4" />,
                  artistRetention: <Users className="w-4 h-4" />,
                  averageOrder: <BarChart3 className="w-4 h-4" />,
                  customerSatisfaction: <Star className="w-4 h-4" />,
                  investorInterest: <TrendingUp className="w-4 h-4" />,
                  partnershipDeals: <CheckCircle className="w-4 h-4" />,
                  marketCredibility: <Award className="w-4 h-4" />,
                  userRetention: <Users className="w-4 h-4" />,
                  dailyActive: <Users className="w-4 h-4" />,
                  socialEngagement: <Users className="w-4 h-4" />,
                  timeframe: <Clock className="w-4 h-4" />,
                }

                const label = labels[key] || key
                const suffix = suffixes[key] || ""
                const icon = icons[key] || <Star className="w-4 h-4" />

                return (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-red-500">{icon}</div>
                      <span className="text-gray-400 text-sm">{label}</span>
                    </div>
                    <span className="font-bold text-white text-lg">
                      {key === "averageOrder" ? suffix : ""}
                      {counters[key] || 0}
                      {key !== "averageOrder" ? suffix : ""}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                aria-label={`Start a project similar to ${project.title}`}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                Start Similar Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onClose}
                className="border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </div>
  )
}
