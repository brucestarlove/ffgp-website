import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Users, Calendar, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Save Fort Greene Park's
              <span className="text-primary block">Mature Trees</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              NYC Parks wants to cut down 78 mature trees and pave 13,000 sq ft of our beloved Fort Greene Park. 
              We're fighting to save our urban forest.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/action">Sign the Petition</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/issue">Learn More</Link>
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

      {/* Key Facts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why This Matters
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Mature trees provide irreplaceable environmental benefits that take decades to restore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <TreePine className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">70×</h3>
                <p className="text-muted-foreground">More pollution removal than saplings</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <span className="text-4xl">🫁</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">77 tons</h3>
                <p className="text-muted-foreground">Air pollution removed by London plane trees annually</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <span className="text-4xl">💧</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">1,432</h3>
                <p className="text-muted-foreground">Gallons of stormwater intercepted per tree annually</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">$47</h3>
                <p className="text-muted-foreground">Annual energy savings per street tree</p>
              </CardContent>
            </Card>
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
                  <Link href="/issue">Read More</Link>
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
