"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function CVModal() {
  const [isOpen, setIsOpen] = useState(false)

  const downloadCV = () => {
    const element = document.createElement("a")
    element.href = "/cv.pdf"
    element.download = "Arowosere_Abdulkhabeer_CV.pdf";
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-transparent">
          <FileText className="mr-2 h-4 w-4" />
          View CV
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-slate-800">
        <div className="bg-slate-800 text-white">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-600">
            <h1 className="text-xl font-bold">Arowosere Abdulkhabeer - CV</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCV}
              className="bg-transparent border-slate-500 text-white hover:bg-slate-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          <ScrollArea className="h-[70vh]">
            <div className="p-8">
              {/* Name and Title */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">AROWOSERE ABDULKHABEER AYODEJI</h1>
                <p className="text-blue-400 text-xl">Backend Engineer</p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>arowosere.ak@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+234-816-890-5506</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>linkedin.com/in/arowosere-ak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>github.com/Maxim-LD</span>
                </div>
              </div>

              <hr className="border-slate-600 mb-8" />

              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Backend Engineer who optimizes high-traffic systems, achieving 30–50% performance gains. Delivered
                  secure payment APIs processing 5K+ transactions/month (99.8% uptime). Skilled in Node.js, Express,
                  TypeScript, PostgreSQL, MongoDB, Redis, and CI/CD pipelines. Passionate about solving scalability
                  challenges with clean, maintainable code.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">TECHNICAL SKILLS</h2>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Languages & Frameworks:</strong> Node.js, Express.js, TypeScript, JavaScript
                  </p>
                  <p>
                    <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis
                  </p>
                  <p>
                    <strong>Tools & DevOps:</strong> Git, GitHub Actions, CI/CD, Postman, Docker (basic)
                  </p>
                  <p>
                    <strong>Others:</strong> RESTful APIs, JWT, RBAC, Stripe, Paystack, API caching, Cron Jobs, Rate
                    Limiting, Testing (Jest, Supertest)
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">EXPERIENCE</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="font-bold text-white">ScholarGuide Tech — Remote Backend Software Engineer</h3>
                    <p className="text-blue-400 mb-2">Remote | Sep 2025 – Present</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Built and maintained core backend services using Node.js and TypeScript.</li>
                      <li>Designed and enforced role-based access control (RBAC).</li>
                      <li>Improved API performance and responsiveness through query optimization.</li>
                      <li>Optimized MongoDB aggregation pipelines, reducing CPU usage by 40%.</li>
                    </ul>
                  </div>


                  <div>
                    <h3 className="font-bold text-white">Dala Innovation — Remote Backend Developer (Contract)</h3>
                    <p className="text-blue-400 mb-2">Remote | Jul 2025 – Dec 2025</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Developed secure backend access controls for the DalaCare App.</li>
                      <li>Implemented JWT/OAuth authentication flows and middleware-based authorization.</li>
                      <li>Applied core software security principles to mitigate vulnerabilities.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Crude City Global — Backend Software Engineer (Contract)</h3>
                    <p className="text-blue-400 mb-2">Remote | Mar 2025 – Aug 2025</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Engineered backend services for an HR management platform using TypeScript and Node.js.</li>
                      <li>Designed and implemented RESTful APIs and role-based access controls.</li>
                      <li>Modeled relational data and implemented persistence logic using SQL and ORM tools.</li>
                      <li>Implemented complex business rules and validations for HR processes.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">InternPulse — Backend Developer (Internship)</h3>
                    <p className="text-blue-400 mb-2">Remote | Sep 2024 – Feb 2025</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Developed and maintained backend services using Node.js and JavaScript.</li>
                      <li>Integrated third-party payment APIs to improve transaction reliability.</li>
                      <li>Implemented API logic for concurrent requests and real-time validations.</li>
                      <li>Wrote and maintained unit and integration tests.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">EDUCATION</h2>
                <div className="text-gray-300">
                  <h3 className="font-bold text-white">Bachelor of Technology (BTech) in Physics</h3>
                  <p className="text-blue-400">Federal University of Technology, Minna Niger State | 2019 – 2024</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">CERTIFICATIONS</h2>
                <div className="text-gray-300 space-y-1">
                  <p>• InternPulse Backend Development Finalist - March 2025</p>
                  <p>• Databases for Node.js Developers - March 2025</p>
                  <p>• Career X Youthrive Software Development - September 2024</p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">PROJECTS</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="font-bold text-white">ScholarGuide TECH – Educational Management System</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Built features for user roles, resource categorization, performance tracking</li>
                      <li>Implemented scheduled background jobs using cron tasks for notifications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Pedmonie – All-in-One Payment Platform</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Scaled payment APIs to handle 100+ concurrent transactions/sec</li>
                      <li>Employed service separation for authentication and payment modules</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Car Dealer API</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Built full-featured REST API with Node.js, Express, TypeScript, and MongoDB</li>
                      <li>Included user registration, payment processing (Paystack), and RBAC</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Intelligent Productivity & Life-Management System</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Developed a full-stack system using TypeScript, Node.js, React.js, and MySQL.</li>
                      <li>Designed streak tracking and built a real-time task engine.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Node.js Payment Service</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Developed a RESTful payment-processing API using Node.js and Express.</li>
                      <li>Delivered a reliable rule-driven engine to parse financial instructions.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Heuristic Engine API</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Built a backend service that detects phishing threats across URLs, emails, and QR codes.</li>
                      <li>Designed a scoring system that evaluates risk levels and explains flagged resources.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
