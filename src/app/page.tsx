import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Users, Calendar, AlertTriangle, Volume2, ThermometerSun, ArrowRight } from "lucide-react"
import { VideoGallery } from "@/components/video-gallery"
import { ImageLightbox } from "@/components/image-lightbox"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Save Fort Greene Park&apos;s
              <span className="text-primary block">Mature Trees</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              NYC Parks wants to cut down 78 mature trees and pave 13,000 sq ft of our beloved Fort Greene Park. 
              We&apos;re showing them that their plan is unwanted by the people.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/action">Take Action</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/better-plan">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Update */}
      <section className="bg-destructive/10 border-y border-destructive/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <p className="text-sm font-medium">
              <strong>July 2025 Update:</strong> Judge dismissed our lawsuit - NYC Parks approved to cut down trees. 
              <Link href="/news" className="underline ml-1">Stay informed →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Counter-Proposal Section */}
      <section className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              There&apos;s a Better Way
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We support sensible improvements that preserve trees and serve the community. 
              See how we can enhance the park without destroying its natural character.
            </p>
          </div>

          {/* Before/After Concept */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-destructive mb-4 text-center">NYC Parks Plan</h3>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <ImageLightbox
                    src="/img/Proposal-01.webp" 
                    alt="NYC Parks Plan: Remove 78 Trees + Concrete Plaza" 
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                  />
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cut down 78 mature trees</li>
                  <li>• Pave 13,314 sq ft with concrete</li>
                  <li>• Remove natural landscape mounds</li>
                  <li>• Create heat island effect</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">Community Counter-Proposal</h3>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <ImageLightbox
                    src="/img/Counter-proposal-01.webp" 
                    alt="Community Counter-Proposal: Preserve Trees + Smart Improvements" 
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                  />
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Preserve all healthy mature trees</li>
                  <li>• Improve ADA accessibility</li>
                  <li>• Restore historic landscape features</li>
                  <li>• Enhance drainage infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/better-plan">
                See Full Counter-Proposal Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why This Matters
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The people using Fort Greene Park today depend on these trees for their daily comfort and health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <span className="text-4xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Kids & Families</h3>
                <p className="text-muted-foreground">Children playing, families picnicking, and neighbors exercising all rely on the cooling shade these mature trees provide</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <ThermometerSun className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Less Heat</h3>
                <p className="text-muted-foreground">Concrete plaza creates urban heat island effect, making the park uncomfortably hot instead of the cool oasis it is today</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <Volume2 className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Noise Buffer</h3>
                <p className="text-muted-foreground">Trees naturally absorb city noise, creating the peaceful atmosphere that makes this park a true escape from urban stress</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <span className="text-4xl">🫁</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Clean Air</h3>
                <p className="text-muted-foreground">Mature trees remove 70× more pollution than saplings, cleaning the air that Brooklyn families breathe every day</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Videos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Voices from the Community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from neighbors, families, and experts about why Fort Greene Park's trees matter.
            </p>
          </div>
          <VideoGallery />
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/stories">
                Read More Community Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Join the Movement</h3>
                <p className="text-muted-foreground mb-6">
                  Add your voice to thousands of Brooklyn residents fighting to save our trees.
                </p>
                <Button asChild className="w-full">
                  <Link href="/action">Sign Petition</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Follow our 8-year campaign timeline and latest court developments.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/news">View Timeline</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <TreePine className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Learn the Science</h3>
                <p className="text-muted-foreground mb-6">
                  Understand why preserving mature trees matters for climate resilience.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/better-plan">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Friends of Fort Greene Park is a 501(c)(3) non-profit supporting protection and preservation of the urban forest.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                Resources
              </Link>
              <Link href="/action" className="text-muted-foreground hover:text-foreground">
                Contact Officials
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
