"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies.",
    achievements: [
      "Architected and developed 5+ high-traffic web applications serving 100K+ users",
      "Reduced application load time by 40% through performance optimization",
      "Mentored 3 junior developers and established code review processes",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Built responsive web applications and collaborated with design teams to create engaging user experiences.",
    achievements: [
      "Developed 15+ responsive websites with 99% cross-browser compatibility",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Improved website performance scores by 35% using modern optimization techniques",
      "Led frontend architecture decisions for client projects worth $500K+",
    ],
    technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "SASS", "Webpack"],
  },
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
            My professional journey and the technologies I&apos;ve worked with
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
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
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
