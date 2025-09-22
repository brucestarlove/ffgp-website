import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"
import { AllNewsClient } from "./all-news-client"

export const metadata: Metadata = {
  title: "All News Coverage - Fort Greene Park Campaign | FFGP",
  description: "Complete timeline of media coverage for the Fort Greene Park tree preservation campaign. Browse all news articles, interviews, and reports from 8 years of advocacy.",
  keywords: ["all news", "media coverage", "Fort Greene Park", "complete timeline", "news articles", "campaign coverage"],
  openGraph: {
    title: "All News Coverage - Fort Greene Park Campaign",
    description: "Complete timeline of media coverage for the Fort Greene Park tree preservation campaign spanning 8 years of advocacy.",
    images: ["/og-image.svg"],
  },
  twitter: {
    title: "All News Coverage - Fort Greene Park Campaign",
    description: "Complete media coverage timeline for Fort Greene Park tree preservation campaign.",
  },
}

export default function AllNewsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/news" className="inline-flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to News
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              8 Years of News
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Media coverage and updates from our campaign to save Fort Greene Park&apos;s trees.
            </p>
          </div>
        </div>
      </section>

      {/* News Archive - Client Component */}
      <AllNewsClient />
    </div>
  )
}