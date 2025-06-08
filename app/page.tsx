import type React from "react"
import Link from "next/link"
import { Book, Database, Github, Linkedin, Mail, Server, Terminal, Utensils, PhoneIcon as WhatsApp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

// Add the ExperienceItem component definition
function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <Badge variant="outline">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-left">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Terminal className="h-5 w-5" />
            <span>Arowosere Abdulkhabeer</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Button className="hidden md:flex">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28 container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Backend Developer</h1>
              <p className="text-xl text-muted-foreground">
                Building robust, scalable, and efficient backend systems. Specializing in Node.js, Express.js, API
                design, and database architecture.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg"
                  alt="Arowosere Abdulkhabeer"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* About Me Section */}
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Backend Engineer who optimizes high-traffic systems, achieving 30–50% performance gains. Delivered
                secure payment APIs processing 5K+ transactions/month (99.8% uptime). Skilled in Node.js, Express,
                TypeScript, PostgreSQL, MongoDB, Redis, and CI/CD pipelines. Passionate about solving scalability
                challenges with clean, maintainable code.
                <br />
                <br />
                Highly motivated to learn and apply new technologies to deliver efficient and innovative solutions. My
                experience in web development and programming allows me to effectively contribute to collaborative teams
                and tackle complex projects.
                <br />
                <br />
                I'm constantly exploring new technologies and best practices to enhance my development skills
              </p>
            </div>

            {/* Quick Facts Section */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-semibold">Location:</span> Nigeria
                </div>
                <div>
                  <span className="font-semibold">Experience:</span> Backend Development, API Integration, DevOps
                  (GitHub Actions)
                </div>
                <div>
                  <span className="font-semibold">Education:</span> Physics (B.Tech.)
                </div>
                <div>
                  <span className="font-semibold">Technologies:</span> Node.js, Express.js, TypeScript, JavaScript,
                  .NET, MongoDB, MySQL, Redis
                </div>
                <div>
                  <span className="font-semibold">Languages:</span> English
                </div>
                <div>
                  <span className="font-semibold">Interests:</span> .NET Development, API Design, Payment Integration,
                  Database Optimization
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Technical Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My technical expertise spans across various backend technologies, frameworks, and tools.
            </p>

            <Tabs defaultValue="languages" className="w-full max-w-3xl mt-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="tools">DevOps & Tools</TabsTrigger>
              </TabsList>
              <TabsContent value="languages" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["C#", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Bash"].map((skill) => (
                    <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frameworks" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[".NET Core", "ASP.NET", "Entity Framework", "Node.js", "Express", "Next.js"].map((skill) => (
                    <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="databases" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase", "DynamoDB"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["Git", "Docker", "Azure", "AWS", "CI/CD", "Visual Studio", "VS Code", "Postman"].map((skill) => (
                    <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of my key projects that demonstrate my technical expertise and problem-solving abilities.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full">
              <ProjectCard
                title="PEDMONIE - Unified Payment Platform"
                description="Led the backend development of Pedmonie, a comprehensive digital payment solution, with a focus on integrating the Stripe payment gateway. Engineered and optimized RESTful APIs, ensured secure transaction processing, and collaborated with a cross-functional team to enhance system scalability and reliability. Additionally, worked on database schema design, API authentication, and automated payment workflows to streamline operations."
                technologies={["Node.js", "Express.js", "MySQL", "ERD", "Payment Gateway Integration"]}
                githubUrl="https://github.com/InternPulse/pedmonie-express-backend"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Database className="h-10 w-10" />}
              />
              <ProjectCard
                title="Car Dealer API"
                description="A RESTful API for managing a car dealership platform, built with Node.js, Express, TypeScript, and MongoDB. It supports user authentication, car inventory management, purchase transactions, payment integration (Paystack), and role-based access for admins, managers, and customers."
                technologies={[
                  "Node.js",
                  "Express.js",
                  "TypeScript",
                  "MongoDB",
                  "JWT Authentication",
                  "Paystack API",
                  "RBAC",
                ]}
                githubUrl="https://github.com/maxim-ld/car-dealer-api"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Server className="h-10 w-10" />}
              />
              <ProjectCard
                title="Library Management System"
                description="Designed and built a backend system for a digital library, implementing book cataloging, user borrowing functionality, and role-based access control to enhance efficiency and accessibility."
                technologies={["Node.js", "Express", "MongoDB", "JWT Authentication"]}
                githubUrl="https://github.com/Maxim-LD/library-management"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Book className="h-10 w-10" />}
              />
              <ProjectCard
                title="Food Recipe Management"
                description="Built a backend system for a recipe-sharing platform, allowing users to discover, share, and rate recipes. Implemented user authentication, recipe management, and a rating system to enhance user engagement and experience."
                technologies={["Node.js", "Express.js", "MongoDB", "JWT Authentication", "RESTful APIs"]}
                githubUrl="https://github.com/Maxim-LD/Recipe-Management-Project"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Utensils className="h-10 w-10" />}
              />
              <ProjectCard
                title="Donation Platform"
                description="Developing a platform that connects donors with causes, enabling secure online donations. Currently focused on implementing user authentication and payment processing to ensure seamless and trustworthy transactions."
                technologies={["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Payment Gateway Integration"]}
                githubUrl="https://github.com/Maxim-LD/donation-platform-2.0"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Server className="h-10 w-10" />}
              />
              <ProjectCard
                title="DevOps & Payment Integration Automation"
                description="Implemented CI/CD pipeline automation using GitHub Actions, optimizing deployment workflows and ensuring seamless Paystack payment gateway integration. Developed tools that reduced deployment time by 70% and automated testing procedures, improving overall code quality and team productivity."
                technologies={[
                  "Node.js",
                  "Express.js",
                  "GitHub Actions",
                  "Paystack API",
                  "Docker",
                  "Azure DevOps",
                  "Unit Testing",
                ]}
                githubUrl="https://github.com/Maxim-LD/payment-integration"
                imageUrl="/placeholder.svg?height=200&width=400"
                icon={<Database className="h-10 w-10" />}
              />
            </div>

            <div className="mt-8">
              <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Experience Section - now as a separate section */}
        <section id="experience" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Work Experience</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My professional journey and roles in the tech industry.
            </p>

            <div className="w-full space-y-6 mt-8">
              <ExperienceItem
                title="Backend Developer (Volunteer)"
                company="ScholarGuide TECH"
                period="March 2025 – Present"
                description="Architected JWT-based authentication system with RBAC, securing access for users (Admins/Teachers/Students) and preventing unauthorized breaches via rate limiting and session encryption. Built RESTful APIs for study plans, tracking, resources, and analytics; reduced response time by 30% via Redis caching and query optimization. Implemented input sanitization and rate limiting to mitigate common web vulnerabilities. Sped up MongoDB queries by 40% by strategically applying .lean() and .populate(), reducing CPU load and enabling faster analytics for 500+ daily active users. Reduced debugging time by 50% through middleware-based centralized error handling and structured API responses."
                technologies={[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Redis",
                  "JWT Authentication",
                  "RBAC",
                  "RESTful APIs",
                  "Rate Limiting",
                  "Query Optimization",
                ]}
              />

              <ExperienceItem
                title="Backend Developer"
                company="InternPulse"
                period="2024 - 2025"
                description="Developing and maintaining backend systems for Pedmonie, an all-in-one payment platform. Integrated Paystack and currently working on Interswitch for seamless payment processing. Designed ERD and optimized database schemas for scalability."
                technologies={["Node.js", "Express.js", "MongoDB", "MySQL", "GitHub Actions", "REST API"]}
              />

              <ExperienceItem
                title="Telecoms Intern"
                company="BT Technologies Limited"
                period="2024"
                description="Gained hands-on experience in network design and infrastructure. Assisted in LAN and fiber optic installation for enterprise clients. Managed information systems and participated in multiple trainings on web development, data analysis, finance, and leadership."
                technologies={["Network Infrastructure", "Fiber Optics", "LAN Installation", "Information Systems"]}
              />

              <ExperienceItem
                title="Freelance Backend Developer"
                company="Self-employed"
                period="2024 - Present"
                description="Designing and developing backend systems for various projects. Building scalable RESTful APIs, integrating payment gateways, and optimizing database performance for client solutions."
                technologies={[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Redis",
                  "MySQL",
                  "Paystack API",
                  "Stripe API",
                  "REST API",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Interested in working together? Feel free to reach out to discuss your project or any opportunities.
            </p>

            <div className="grid w-full max-w-lg gap-6 mt-8">
              <ContactForm />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <Link href="mailto:arowosere.ak@gmail.com">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  Gmail
                </Button>
              </Link>
              <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://wa.me/2348168905506" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <WhatsApp className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arowosere Abdulkhabeer. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://wa.me/2348168905506" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <WhatsApp className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  icon,
}: {
  title: string
  description: string
  technologies: string[]
  icon: React.ReactNode
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-left">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

function ContactForm() {
  return (
    <form className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
          >
            Name
          </label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
        >
          Subject
        </label>
        <input
          id="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Subject of your message"
        />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
