"use client"

import { useEffect, useState } from "react"
import {
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  Zap,
  Rocket,
  Target,
  Award,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ProjectModal from "@/components/ProjectModal"

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

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [projects] = useState<Project[]>(() => [
    {
      id: 1,
      title: 'Brand Refresh for RetailX',
      category: 'Branding',
      image: '/creative-design-branding.jpg',
      description: 'Rebuilt e‑commerce funnel, increased AOV by 32%',
      tags: ['Brand', 'E‑commerce', 'Design'],
      challenge: 'Outdated brand and low conversions',
      solution: 'Complete redesign, CRO improvements and new checkout flow',
      results: { averageOrder: 32, conversionRate: 12, salesIncrease: 32 },
      featured: true,
      client: 'RetailX',
      industry: 'E‑commerce',
      year: '2024',
    },
    {
      id: 2,
      title: 'Lead Gen for GrowthCo',
      category: 'Marketing',
      image: '/market-branding-strategy.jpg',
      description: 'Marketing + SEO strategy that tripled qualified leads',
      tags: ['SEO', 'Ads', 'Growth'],
      challenge: 'Low lead volume and poor targeting',
      solution: 'Data-driven SEO and targeted ad campaigns',
      results: { leadIncrease: 300, leadQuality: 85 },
      featured: false,
      client: 'GrowthCo',
      industry: 'SaaS',
      year: '2024',
    },
    {
      id: 3,
      title: 'Platform Migration',
      category: 'Engineering',
      image: '/digital-experience-web-design.jpg',
      description: 'Legacy to modern stack with 99.9% uptime',
      tags: ['Migration', 'Infrastructure', 'Performance'],
      challenge: 'Outdated platform and downtime',
      solution: 'Re-architecture and cloud migration',
      results: { uptime: 99.9, pageSpeed: 92 },
      featured: false,
      client: 'EnterpriseCo',
      industry: 'Enterprise',
      year: '2023',
    },
  ])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
   
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full blur-3xl opacity-15 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 sm:mb-8 leading-none tracking-tight">
           
              <span className="block bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl animate-text-reveal hover:animate-gradient-x transition-all duration-300">
               Aetherion
              </span>
              <span className="block text-white drop-shadow-2xl animate-text-reveal text-4xl sm:text-5xl md:text-7xl lg:text-8xl hover:animate-gradient-x transition-all duration-300" style={{ animationDelay: "0.2s" }}>AGENCY</span>
            </h1>
          
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-20 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-light px-2">
            Exceptional creativity is transformed into captivating digital experiences.
            <span className="text-white font-medium"> Step into the future.</span>
            Creative solutions that push the boundaries of innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-400 mb-12 sm:mb-16 px-2">
            <Button className="relative bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-400 hover:via-purple-500 hover:to-pink-500 text-white px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold group shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden animate-pulse-subtle w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                Start Your Project
                <ChevronRight className="ml-2 sm:ml-3 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-purple-500/30 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Button>
            <Button
              variant="outline"
              className="relative border-2 border-white/40 text-white hover:bg-transparent hover:text-black px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold group bg-transparent backdrop-blur-md shadow-2xl hover:shadow-black/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                <Play className="mr-2 sm:mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                Watch Our Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animation-delay-600 px-2">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                250+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Team Members</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
          <hr className="mx-auto mt-8 sm:mt-12 mb-12 sm:mb-20 w-40 sm:w-48 h-1 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 animate-gradient-x shadow-lg" />
        </div>
      </section>
      {/* Partners / Technologies */}
      <section id="partners" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="text-white">Trusted By</span>{' '}
            <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Forward-Thinking Brands</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8">We partner with modern platforms and tools to deliver robust, scalable solutions.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-center max-w-4xl mx-auto">
            {[
              { name: 'Figma', icon: Globe },
              { name: 'React', icon: Rocket },
              { name: 'Next.js', icon: Rocket },
              { name: 'Vercel', icon: Globe },
              { name: 'Stripe', icon: Users },
              { name: 'AWS', icon: Globe },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-800/60 to-gray-700/40 border border-gray-700/40 flex items-center justify-center text-white/90">
                  <p className="sr-only">{p.name}</p>
                  <p className="text-sm font-semibold">{p.name[0]}</p>
                </div>
                <div className="text-xs text-gray-400">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 relative px-4 sm:px-6 group">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight px-2">
              <span className="text-white">Turn Information Into</span>{' '}
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal group-hover:animate-gradient-x transition-all duration-300">Actionable Insights</span>
              <div className="mt-3 sm:mt-4 h-1 w-32 sm:w-40 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 line-animate"></div>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6 sm:mt-8 px-2">
              We transform your vision into digital reality with cutting-edge solutions that drive results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                number: "01",
                title: "Marketing & SEO Campaigns",
                description:
                  "Boost your online presence with data-driven marketing strategies and SEO optimization that deliver measurable results.",
                icon: <Target className="w-10 sm:w-12 h-10 sm:h-12" />,
                color: "from-red-500 to-orange-500",
              },
              {
                number: "02",
                title: "Mobile App & Web Development",
                description:
                  "Custom applications built with modern technologies for exceptional user experiences across all platforms.",
                icon: <Rocket className="w-10 sm:w-12 h-10 sm:h-12" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "03",
                title: "Access to the Latest Technology",
                description:
                  "Leverage cutting-edge tools and frameworks to stay ahead of the competition and future-proof your business.",
                icon: <Zap className="w-10 sm:w-12 h-10 sm:h-12" />,
                color: "from-blue-500 to-purple-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl border border-gray-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-transparent transition-all duration-500 group hover:-translate-y-4 hover:scale-105 animate-fade-in-up overflow-hidden service-card-hover`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 animate-icon-bounce`}
                  >
                    {service.icon}
                  </div>
                  <div
                    className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text text-base sm:text-lg font-bold mb-3 sm:mb-4 counter-animate`}
                  >
                    {service.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-dark">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black animate-fade-in-up group">
              <span className="text-white">Industries</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal group-hover:animate-gradient-x transition-all duration-500">We Serve</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mt-3">We deliver tailored digital solutions across a range of industries.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'E‑commerce', desc: 'Conversion-focused storefronts and headless commerce.' },
              { title: 'Fintech', desc: 'Secure, compliant financial experiences.' },
              { title: 'Healthcare', desc: 'HIPAA-aware portals and patient experiences.' },
              { title: 'SaaS', desc: 'Product-led growth, onboarding and analytics.' },
              { title: 'Education', desc: 'Engaging learning platforms and LMS integrations.' },
              { title: 'Media & Entertainment', desc: 'Rich media experiences and performance at scale.' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer hover:-translate-y-3 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/80 border border-gray-900/60 group-hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                  <div className="h-44 sm:h-56 md:h-64 bg-gradient-to-r from-black/80 to-black/60 flex items-center justify-center text-white text-4xl font-black">{item.title[0]}</div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Industry</div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black animate-fade-in-up">
              <span className="text-white">Case</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Studies</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mt-3">Selected examples of work that delivered measurable outcomes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((caseItem, i) => (
              <div key={caseItem.id} className="group cursor-pointer hover:-translate-y-3 transition-all duration-300">
                <div
                  onClick={() => setSelectedProject(caseItem)}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black border border-gray-800 group-hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full"
                >
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    width={800}
                    height={520}
                    className="w-full h-44 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Case Study</div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">{caseItem.title}</h4>
                      <p className="text-sm text-gray-300 mb-4">{caseItem.description}</p>
                    </div>
                    <div>
                      <Button className="bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600">Read Case Study</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          filteredProjects={projects}
          setSelectedProject={(p) => setSelectedProject(p)}
          counters={{ averageOrder: 32, conversionRate: 12, salesIncrease: 32, leadIncrease: 300, leadQuality: 85, uptime: 99 }}
        />
      )}

  
      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-dark px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
              <span className="text-white">Featured</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Works</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2">Showcasing our latest creative projects and digital transformations</p>
            <div className="mt-3 sm:mt-4 h-1 w-28 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-pink-500 line-animate"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Motion Graphics",
                category: "Animation",
                date: "January 15, 2024",
                image: "/abstract-motion-graphics.png",
              },
              {
                title: "Creative Design",
                category: "Branding",
                date: "August 24, 2024",
                image: "/creative-design-branding.jpg",
              },
              {
                title: "Market Branding",
                category: "Strategy",
                date: "February 18, 2024",
                image: "/market-branding-strategy.jpg",
              },
              {
                title: "Digital Experience",
                category: "Web Design",
                date: "March 10, 2024",
                image: "/digital-experience-web-design.jpg",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer hover:-translate-y-3 transition-all duration-300 animate-fade-in-up card-hover`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/80 border border-gray-900/60 group-hover:border-purple-500/30 transition-all duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500 image-zoom"
                    loading={index < 2 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs sm:text-sm text-orange-300 font-semibold mb-1 sm:mb-2 animate-text-reveal hover:animate-gradient-x transition-all duration-300">{project.date}</div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">{project.title}</h3>
                    <div className="inline-block px-3 sm:px-4 py-1 bg-gradient-to-r from-red-500/30 to-orange-500/30 border border-red-500/50 rounded-full text-red-400 text-xs sm:text-sm font-semibold">{project.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="/creative-team-collaboration.png"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-xl sm:rounded-2xl border border-gray-700/50 group hover:border-purple-500/30 transition-all duration-300 image-zoom w-full h-auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
              />
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="text-white">Boost the growth development agency</span>{' '}
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">your branding!</span>
              </h2>
              <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mb-6 sm:mb-8 line-animate"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                About Us: We are a passionate team of creative professionals dedicated to transforming your vision into
                reality. Our expertise spans across digital marketing, web development, and brand strategy. With years of experience, we've helped hundreds of brands achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-black/60 border border-gray-900/60 rounded-lg p-3 sm:p-4 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">100+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Active Clients</div>
                </div>
                <div className="bg-black/60 border border-gray-900/60 rounded-lg p-3 sm:p-4 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">250+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Projects Delivered</div>
                </div>
              </div>
              <Button className="relative bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-400 hover:via-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold group shadow-xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden float-cta w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Explore More</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-dark-900/30 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6">
              <span className="text-white">What Our</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Real feedback from brands we've transformed</p>
            <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-pink-500 line-animate"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                className={`relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl border border-gray-900/60 rounded-2xl p-8 animate-fade-in-up card-hover overflow-hidden group`}
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

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-dark animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="text-white">Ready to</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Transform</span>
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 md:mb-12 leading-tight">
              <span className="text-white">Your</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-reveal hover:animate-gradient-x transition-all duration-300">Business?</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Get in touch and let's discuss your next digital transformation project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-200">
              <Button className="relative bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-400 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-7 text-xl font-bold group shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden float-cta">
                <span className="relative z-10 flex items-center">
                  Start Your Project Today
                  <ChevronRight className="ml-3 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-purple-500/30 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
              <Button
                variant="outline"
                className="relative border-2 border-white/40 text-white hover:bg-transparent hover:text-white px-12 py-7 text-xl font-bold group bg-transparent backdrop-blur-md shadow-xl hover:shadow-black/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer removed from home page — using shared Footer component in layout */}
    </div>
  )
}
