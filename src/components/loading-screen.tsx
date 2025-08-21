"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none" />
    )
  }

  const dotsEaten = Math.floor((progress / 100) * 10)

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-8 relative">
        <div className="text-lg text-muted-foreground animate-pulse">snake is coming......</div>

        <div className="relative w-80 h-16 mx-auto flex items-center justify-center">
          <div className="flex space-x-4 absolute">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < dotsEaten
                    ? "opacity-0 scale-0 transform rotate-180"
                    : "bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-400/50 animate-pulse"
                }`}
              />
            ))}
          </div>

          <div
            className="absolute left-0 transition-all duration-100 ease-linear snake-container"
            style={{ transform: `translateX(${(progress / 100) * 280}px)` }}
          >
            <div className="flex items-center">
              {Array.from({ length: Math.floor(dotsEaten / 2) }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-700 border border-gray-500 rounded-sm shadow-sm transform transition-all duration-200"
                  style={{
                    animationDelay: `${i * 50}ms`,
                    transform: `scale(${1 - i * 0.05})`,
                  }}
                />
              ))}

              <div className="w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-sm shadow-md snake-head">
                <div className="flex justify-between px-0.5 pt-0.5">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                {/* Mouth indicator when eating */}
                {dotsEaten > 0 && (
                  <div className="absolute -right-0.5 top-1 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
