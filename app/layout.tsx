import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://arowosere-abdulkhabeer-portfolio.vercel.app"),
  title: {
    default: "Arowosere Abdulkhabeer | Backend Software Engineer",
    template: "%s | Arowosere Abdulkhabeer",
  },
  description:
    "Backend Software Engineer specializing in system design, scalable architectures, and secure API development. Experienced with Node.js, TypeScript, Express.js, and cloud technologies.",
  keywords: [
    "Backend Engineer",
    "Software Developer",
    "Node.js",
    "System Design",
    "API Development",
    "TypeScript",
    "Arowosere Abdulkhabeer",
  ],
  icons: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg",
  authors: [{ name: "Arowosere Abdulkhabeer" }],
  creator: "Arowosere Abdulkhabeer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arowosere-abdulkhabeer-portfolio.vercel.app",
    title: "Arowosere Abdulkhabeer | Backend Software Engineer",
    description:
      "Backend Software Engineer specializing in system design, scalable architectures, and secure API development.",
    siteName: "Arowosere Abdulkhabeer Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg",
        width: 1200,
        height: 630,
        alt: "Arowosere Abdulkhabeer - Backend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arowosere Abdulkhabeer | Backend Software Engineer",
    description:
      "Backend Software Engineer specializing in system design, scalable architectures, and secure API development.",
    creator: "@A_Quintet",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googled511cf04454654b3",
  },
  
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arowosere Abdulkhabeer Ayodeji",
    url: "https://arowosere-abdulkhabeer-portfolio.vercel.app",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg",
    sameAs: ["https://github.com/maxim-ld", "https://linkedin.com/in/arowosere-ak", "https://x.com/A_Quintet"],
    jobTitle: "Backend Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "ScholarGuide TECH",
    },
    email: "arowosere.ak@gmail.com",
    telephone: "+2348168905506",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head> 
        <meta name="google-site-verification" content="googled511cf04454654b3" />

        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DLJBBKEE8V" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DLJBBKEE8V');
          `}
        </Script>
      </head>
      <body className="bg-primary text-text antialiased">{children}</body>
    </html>
  )
}
