import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://arowosere-abdulkhabeer-portfolio.vercel.app/sitemap.xml",
  }
}
