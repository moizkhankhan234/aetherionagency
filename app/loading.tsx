"use client"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Logo/Brand */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin animation-delay-200"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            Aetherion
          </h2>
          <p className="text-gray-400 text-sm mt-2 animate-pulse animation-delay-400">
            Loading experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-float-delayed"></div>
      </div>
    </div>
  )
}
