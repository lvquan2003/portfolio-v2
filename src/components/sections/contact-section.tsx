"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const email = "your.email@example.com"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Let&apos;s connect and discuss opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className={`space-y-6 opacity-0 ${isVisible ? "slide-in-left" : ""}`}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 hover:text-primary transition-colors group">
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="flex-1">{email}</span>
                  <Button variant="ghost" size="sm" onClick={copyEmail} className="h-8 w-8 p-0 hover:bg-primary/10">
                    {emailCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 hover:text-primary transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center space-x-3 hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Your City, Country</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  I&apos;m always interested in new opportunities and exciting projects. Feel free to reach out through any
                  of the channels below!
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="hover:scale-110 transition-transform bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="hover:scale-110 transition-transform bg-transparent">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="hover:scale-110 transition-transform bg-transparent">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`opacity-0 ${isVisible ? "slide-in-right animate-delay-200" : ""}`}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Let&apos;s Work Together</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Currently Available For:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Full-stack development projects</li>
                    <li>• Frontend consulting</li>
                    <li>• Code reviews and mentoring</li>
                    <li>• Open source collaborations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time:</h4>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to emails within 24-48 hours. For urgent matters, feel free to reach out via
                    LinkedIn.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full hover:scale-105 transition-transform"
                    onClick={copyEmail}
                    variant={emailCopied ? "secondary" : "default"}
                  >
                    {emailCopied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Email Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy My Email
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
