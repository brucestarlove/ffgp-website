import { PetitionCounter } from "@/components/petition-counter"
import { SignatureMosaic } from "@/components/signature-mosaic"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Petition Signatures - Community Forest | FFGP",
  description: "See thousands of Brooklyn neighbors who have signed our petition to save Fort Greene Park's mature trees. Each signature represents community support for preserving our urban forest.",
  keywords: ["petition signatures", "community support", "Fort Greene Park", "tree preservation", "Brooklyn neighbors", "urban forest"],
  openGraph: {
    title: "Petition Signatures - Community Forest Growing Together",
    description: "See thousands of Brooklyn neighbors who have signed our petition to save Fort Greene Park's mature trees.",
    images: ["/og-image.svg"],
  },
  twitter: {
    title: "Petition Signatures - Community Forest",
    description: "Thousands of Brooklyn neighbors standing together to save Fort Greene Park's mature trees.",
  },
}

export default function PetitionSignaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Community Forest
              <span className="text-primary block">Growing Together</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Each signature represents a Brooklyn neighbor standing with us to save Fort Greene Park&apos;s mature trees. Together, we show NYC Parks that there are truly thousands of park users who wish to preserve the canopy and do not wish to see more concrete.
            </p>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PetitionCounter showViewSignaturesButton={false} size="large" />
        </div>
      </section>

      {/* Signatures Forest */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Growing Forest</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each leaf represents a neighbor who&apos;s signed the petition. Click on leaves with message icons to see supporter comments.
              </p>
            </div>

            <SignatureMosaic 
              className="animate-fade-in-up"
            />
          </div>
        </div>
      </section>
    </div>
  )
}