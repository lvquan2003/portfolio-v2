"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, Link } from "lucide-react"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Le_Van_Quan_CV.pdf"
    link.click()
  }

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4">
      <div className={`max-w-4xl mx-auto text-center space-y-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <div className="space-y-8">
          <div className={`opacity-0 ${isVisible ? "scale-in animate-delay-200" : ""}`}>
            <div className="relative inline-block">
              <img
                src="https://res.cloudinary.com/dsq2ux962/image/upload/v1755501342/gen-h-abcd_wfnaye.jpg"
                alt="Profile Avatar"
                className="w-64 h-64 rounded-full object-cover border-4 border-background shadow-lg hover:scale-105 transition-transform duration-300 mx-auto"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Hi, I&apos;m{" "}
                <span className="inline-flex name-container">
                  {"Le Van Quan".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block text-primary animate-letter hacker-letter-vertical-fast"
                      data-letter={letter === " " ? " " : letter}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              </h1>
              <div className="h-2"></div>
            </div>

            <p
              className={`text-lg md:text-xl text-muted-foreground opacity-0 ${isVisible ? "slide-in-left animate-delay-400" : ""}`}
            >
              Full Stack Developer crafting digital experiences with modern technologies
            </p>

            <div
              className={`text-base text-muted-foreground opacity-0 ${isVisible ? "slide-in-right animate-delay-600" : ""}`}
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences
            </div>

            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${isVisible ? "scale-in animate-delay-800" : ""}`}
            >
              <Button
                variant="default"
                size="lg"
                className="group float hover:scale-105 transition-all duration-300"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="float animate-delay-200 bg-transparent hover:scale-105 transition-all duration-300"
                onClick={downloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div
              className={`flex justify-center space-x-6 pt-8 opacity-0 ${isVisible ? "fade-in-up animate-delay-800" : ""}`}
            >
              <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform">
                <a href="https://github.com/lvquan2003"><Github className="h-5 w-5" /></a>
                
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform">
                <a href="https://github.com/lvquan2003"><Linkedin className="h-5 w-5" /></a>
                
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
