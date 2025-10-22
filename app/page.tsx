"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  WheatIcon as WhatsApp,
  Code2,
  Database,
  Shield,
  Zap,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = [heroRef, aboutRef, projectsRef, skillsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const whatsappMessage = encodeURIComponent(
    "Hi Arowosere! I came across your portfolio and would love to discuss potential opportunities with you.",
  )

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-text/10 bg-primary/95 backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg"
              alt="Arowosere Abdulkhabeer Logo"
              width={32} // Sets the image width to 32px
              height={30} // Sets the image height to 32px
              className="rounded-full object-cover border border-accent" // Makes it circular and adds a border
              priority // Keep priority for the logo in the header
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-text/80 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-text/80 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm text-text/80 hover:text-accent transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm text-text/80 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-text hover:text-accent hover:bg-accent/10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-text hover:text-accent hover:bg-accent/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/A_Quintet" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-text hover:text-accent hover:bg-accent/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  Available for opportunities
                </Badge>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
                Backend Software <span className="text-accent">Engineer</span>
              </h1>

              <p className="text-lg text-text/70 leading-relaxed">
                Crafting scalable architectures and secure APIs with a focus on clean code, system design, and
                leadership in modern backend development.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button className="bg-accent hover:bg-accent/90 text-primary">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-accent/20 text-text hover:bg-accent/10 bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-accent">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg"
                    alt="Arowosere Abdulkhabeer - Backend Software Engineer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 bg-primary/50 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">About Me</h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              A passionate engineer focused on building robust, maintainable systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-text/80 leading-relaxed">
                As a <strong className="text-accent">Backend Software Engineer</strong>, I specialize in designing and
                implementing scalable architectures that power modern applications. My approach combines technical
                expertise with leadership principles to deliver solutions that are both efficient and maintainable.
              </p>

              <p className="text-text/80 leading-relaxed">
                I'm passionate about <strong className="text-accent-secondary">clean code practices</strong>,
                security-first development, and mentoring teams to adopt best practices. My experience spans from
                optimizing high-traffic systems to integrating complex payment gateways with 99.8% uptime.
              </p>

              <p className="text-text/80 leading-relaxed">
                Currently, I'm focused on architectural thinking, system design patterns, and exploring how to build
                resilient distributed systems that scale gracefully under load.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  System Design
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Clean Architecture
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Security Best Practices
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Team Leadership
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary border-accent/20">
                <CardHeader className="pb-3">
                  <Code2 className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-text text-base">Clean Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text/70">Writing maintainable, testable, and scalable code</p>
                </CardContent>
              </Card>

              <Card className="bg-primary border-accent/20">
                <CardHeader className="pb-3">
                  <Database className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-text text-base">Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text/70">Designing robust system architectures</p>
                </CardContent>
              </Card>

              <Card className="bg-primary border-accent/20">
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-text text-base">Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text/70">Implementing secure, compliant solutions</p>
                </CardContent>
              </Card>

              <Card className="bg-primary border-accent/20">
                <CardHeader className="pb-3">
                  <Zap className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-text text-base">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text/70">Optimizing for speed and efficiency</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">Featured Projects</h2>
            <p className="text-text/70 max-w-2xl mx-auto">A showcase of my work in building scalable backend systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agendos */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Database className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent-secondary/10 text-accent-secondary">
                    In Progress
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">Agendos</CardTitle>
                <CardDescription className="text-text/70">
                  A comprehensive productivity platform featuring task management, reminders, and collaborative
                  workspaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Redis
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Real-time Collab
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    WebSocket
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="https://github.com/Maxim-LD/agendos-api" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://agendos.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Demo Credit App */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Code2 className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Completed
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">Demo Credit App</CardTitle>
                <CardDescription className="text-text/70">
                  A credit simulation backend built for learning wallet systems, transaction processing, and financial
                  APIs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Knex.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    FinTech
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Wallet System
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Testing
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="https://github.com/Maxim-LD" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* PEDMONIE */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Shield className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Production
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">PEDMONIE</CardTitle>
                <CardDescription className="text-text/70">
                  Unified payment platform with Stripe integration, processing 5K+ transactions/month with 99.8% uptime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Stripe API
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Payments
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    High Availability
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link
                  href="https://github.com/InternPulse/pedmonie-express-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Car Dealer API */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Database className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Completed
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">Car Dealer API</CardTitle>
                <CardDescription className="text-text/70">
                  RESTful API for car dealership management with authentication, inventory tracking, and payment
                  integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    JWT
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Paystack
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link
                  href="https://github.com/Maxim-LD/Car-Dealer-API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Sweetened Cleaning Services */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Code2 className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Live
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">Sweetened Cleaning Services</CardTitle>
                <CardDescription className="text-text/70">
                  Professional website for UK-based cleaning company with modern design and client inquiry system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    SEO
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link
                  href="https://github.com/LIZCODE-STUDIO/Sweetened-Cleaning-Services-updated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="http://sweetenedcleaningservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Library Management */}
            <Card className="bg-primary border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Database className="h-10 w-10 text-accent" />
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Completed
                  </Badge>
                </div>
                <CardTitle className="text-text text-xl mt-4">Library Management System</CardTitle>
                <CardDescription className="text-text/70">
                  Digital library backend with book cataloging, borrowing functionality, and role-based access control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    RBAC
                  </Badge>
                  <Badge variant="outline" className="text-xs border-accent/20 text-text/70">
                    JWT
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link
                  href="https://github.com/Maxim-LD/library-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent/20 text-text hover:bg-accent/10 bg-transparent">
                View All Projects on GitHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-4 bg-primary/50 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">Technical Expertise</h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Technologies and tools I use to build robust backend systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-accent mb-4">Languages</h3>
              <div className="space-y-2">
                {["TypeScript", "JavaScript", "Node.js", "SQL", "C#", "Bash"].map((skill) => (
                  <div key={skill} className="text-text/80 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-accent mb-4">Frameworks</h3>
              <div className="space-y-2">
                {["Express.js", "Next.js", ".NET", "ASP.NET"].map((skill) => (
                  <div key={skill} className="text-text/80 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-accent mb-4">Databases</h3>
              <div className="space-y-2">
                {["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"].map((skill) => (
                  <div key={skill} className="text-text/80 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-accent mb-4">DevOps & Tools</h3>
              <div className="space-y-2">
                {["Docker", "AWS", "Azure", "Git", "CI/CD", "Jest", "Postman"].map((skill) => (
                  <div key={skill} className="text-text/80 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">Let's Work Together</h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Have a project in mind? I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>

          <Card className="bg-primary border-accent/20">
            <CardContent className="pt-6">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const name = formData.get("name")
                  const email = formData.get("email")
                  const subject = formData.get("subject")
                  const message = formData.get("message")
                  const mailtoLink = `mailto:arowosere.ak@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
                  window.location.href = mailtoLink
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-text/80">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="bg-primary border-accent/20 text-text focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-text/80">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="bg-primary border-accent/20 text-text focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-text/80">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="bg-primary border-accent/20 text-text focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-text/80">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-primary border-accent/20 text-text focus:border-accent resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-primary">
                    Send Message
                  </Button>
                  <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-accent/20 text-text hover:bg-accent/10 bg-transparent"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="mailto:arowosere.ak@gmail.com">
              <Button variant="outline" className="border-accent/20 text-text hover:bg-accent/10 bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                arowosere.ak@gmail.com
              </Button>
            </Link>
            <Link
              href={`https://wa.me/2348168905506?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-accent/20 text-text hover:bg-accent/10 bg-transparent">
                <WhatsApp className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-text/10 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text/60">
              © {new Date().getFullYear()} Arowosere Abdulkhabeer. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-text/60 hover:text-accent">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-text/60 hover:text-accent">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://x.com/A_Quintet" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-text/60 hover:text-accent">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
