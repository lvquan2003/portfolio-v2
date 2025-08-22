"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  // {
  //   title: "Task Management App",
  //   description: "Collaborative task management application with real-time updates and team collaboration features.",
  //   image: "/task-management-dashboard.png",
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "Dragging Trello App",
    description:
      "Built a lightweight Trello-inspired web application focusing on core task board interactions.",
    image: "https://res.cloudinary.com/dsq2ux962/image/upload/v1755855345/gen-h-abcccc_rkkqrm.jpg",
    technologies: ["ReactJS", "Material UI", "DnDKit", "Node.js", "Express"],
    liveUrl: "https://trello-frontend-two.vercel.app",
    githubUrl: "https://github.com/lvquan2003/trello-frontend",
  },
  {
    title: "Dragging Trello App",
    description:
      "Built a lightweight Trello-inspired web application focusing on core task board interactions.",
    image: "https://res.cloudinary.com/dsq2ux962/image/upload/v1755855345/gen-h-abcccc_rkkqrm.jpg",
    technologies: ["ReactJS", "Material UI", "DnDKit", "Node.js", "Express"],
    liveUrl: "https://trello-frontend-two.vercel.app",
    githubUrl: "https://github.com/lvquan2003/trello-frontend",
  }
]

const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    "Next.js": "tech-nextjs",
    React: "tech-react",
    "Vue.js": "tech-vue",
    TypeScript: "tech-typescript",
    JavaScript: "tech-javascript",
    "Node.js": "tech-nodejs",
    MongoDB: "tech-database",
    PostgreSQL: "tech-database",
    Stripe: "tech-devops",
    "Socket.io": "tech-nodejs",
    "Chart.js": "tech-devops",
    "Tailwind CSS": "tech-tailwind",
    "Weather API": "tech-devops",
    "Material UI": "tech-material",
    Express: "tech-express",
    DnDKit: "tech-dnd",

  }
  return colors[tech] || "tech-default"
}

export function ProjectsSection() {
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
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-index={index}
              className={`opacity-0 ${visibleCards.includes(index) ? `scale-in animate-delay-${index * 200}` : ""}`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-[1.02] h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className={`text-xs font-medium transition-all duration-200 hover:scale-105 border-0 ${getTechColor(tech)}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent hover:scale-105 transition-transform"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
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
