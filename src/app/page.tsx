"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { TopNavigation } from "@/components/top-navigation"
import { IntroSection } from "@/components/sections/intro-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <TopNavigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
