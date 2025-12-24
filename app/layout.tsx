import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Libre_Baskerville } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Suspense } from "react"

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})

const libreBaskerv = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

export const metadata: Metadata = {
  title: "Aetherion - Creative Digital Agency",
  description:
    "Transform your brand with cutting-edge digital solutions. Premium web design, branding, and digital marketing services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerv.variable} ${playfairDisplay.variable} ${GeistMono.variable} font-libre-baskerville`}>
        <Suspense fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin animation-delay-200"></div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Aetherion
                </h2>
                <p className="text-gray-400 text-sm mt-2 animate-pulse animation-delay-400">
                  Loading experience...
                </p>
              </div>
            </div>
          </div>
        }>
          <Navigation />
          <Suspense fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin animation-delay-200"></div>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                    Aetherion
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 animate-pulse animation-delay-400">
                    Loading experience...
                  </p>
                </div>
              </div>
            </div>
          }>
            {children}
          </Suspense>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
