"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer (Fresher)",
    company: "BEQ HOLDINGS",
    period: "12/2024 - 08/2025",
    description: "Starting as an intern and transitioning to a full-time role, contributed to developing dynamic and responsive user interfaces using JavaScript, TypeScript, Next.js, and React.js.",
    responsibilities: [
      "Built, edited, and fixed UI components to align with design specifications.",
      "Fetched and displayed data through RESTful API integration, ensuring seamless data flow.",
      "Implemented front-end logic to enhance user interactions and functionality.",
      "Created data visualizations, such as charts, to present information clearly and effectively.",
      "Collaborated with backend teams to integrate APIs and ensure smooth functionality.",
    ],
    technologies: ["JavaScript", "TypeScript", "Next.js", "React.js", "Node.js", "PostgreSQL", "MongoDB", "Payload CMS", "TailwindCSS"],
  }
]

export function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My early career steps and the technologies I&apos;m mastering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-index={index}
              className={`opacity-0 ${
                visibleCards.includes(index) ? (index % 2 === 0 ? "slide-in-left" : "slide-in-right") : ""
              }`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl font-heading">{exp.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span> • {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:scale-105 transition-transform">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}