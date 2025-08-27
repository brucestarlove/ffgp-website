import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, TreePine, Calendar, ArrowRight, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About 
              <span className="text-primary block">Friends of Fort Greene Park</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              We are neighbors and enjoyers of Fort Greene Park, some for decades, who are giving 
              time and effort to convince NYC Parks that parts of their plan are very unwanted by 
              the people of the park!
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We are everyday people who love Fort Greene Park - families who picnic under the trees, 
                  morning joggers who appreciate the shade, children who play on the natural mounds, and 
                  neighbors who find peace away from the city&apos;s noise.
                </p>
                <p>
                  We just want to see <strong>sensible improvements</strong> made, with emphasis on the 
                  immediate needs of the people, the benefits of preserving nature as-is, and maintaining 
                  the original design which helps people escape the noise of the city for some time.
                </p>
                <p>
                  The Friends group started 8 years ago, and we&apos;re still gathered together in August 2025 
                  to spread awareness of this immediate danger and seek these few changes to their plan!
                </p>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <TreePine className="h-16 w-16 mx-auto text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
                  <p className="text-muted-foreground">
                  Friends of Fort Greene Park supports the protection and preservation of the urban forest in Fort Greene Park, 
                  with appropriate forestry care to maintain the canopy of mature trees.  The tree grove, greenspace, and play 
                  areas along Myrtle Avenue should remain a beloved community gathering place for residents. NYC has declared a 
                  climate emergency, and our preservation efforts are aligned with the need to repair and maintain Fort Greene Park 
                  in the face of increasing heat effects and escalating climate change.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our vision for Fort Greene Park prioritizes both environmental preservation and community needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  People First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on the immediate needs of park users - better drainage, ADA accessibility, 
                  improved benches, and functional barbecue areas that serve the community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-6 w-6 text-primary" />
                  Preserve Nature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect mature trees that provide irreplaceable environmental benefits - air purification, 
                  stormwater management, cooling shade, and habitat for urban wildlife.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  Honor Design Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintain Olmsted and Vaux&apos;s original naturalistic vision that creates an urban oasis - 
                  a place where people can escape city noise and find tranquility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              8 Years of Community Advocacy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From concerned neighbors to organized advocates - our journey to save Fort Greene Park.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">2017</h3>
                <p className="text-muted-foreground">
                  Friends of Fort Greene Park formed when NYC Parks announced tree removal plans
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">2019-2023</h3>
                <p className="text-muted-foreground">
                  Community organizing, legal challenges, and coalition building with partner organizations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-4xl mb-4 block">⚖️</span>
                <h3 className="text-xl font-bold mb-2">2020-2024</h3>
                <p className="text-muted-foreground">
                  Court victories, environmental review demands, and continued community resistance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">2025</h3>
                <p className="text-muted-foreground">
                  Still fighting - spreading awareness and seeking changes to protect our urban forest
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Coalition */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Partners
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work alongside established organizations that share our vision for thoughtful urban planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>City Club of New York</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advocates for thoughtful urban land-use policy and has been instrumental in our legal challenges 
                  to ensure proper environmental review.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sierra Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Environmental organization that explores, enjoys, and protects the planet. They understand 
                  that replacing green land with hardscape contradicts sustainable planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A Better Way</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grassroots group seeking alternatives to destructive redevelopment projects. 
                  They support community-driven solutions over top-down planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Advisors */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Expert Advisors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional expertise guiding our advocacy for sensible park improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Michael Gotkin</h4>
                <p className="text-sm text-muted-foreground mb-2">Landscape Architect</p>
                <p className="text-sm text-muted-foreground">
                  Professional expertise in park design and naturalistic landscape preservation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Carsten W. Glaeser, Ph.D.</h4>
                <p className="text-sm text-muted-foreground mb-2">Urban Tree Advisor</p>
                <p className="text-sm text-muted-foreground">
                  Scientific expertise on urban forestry and tree health management
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Lynn Ellsworth</h4>
                <p className="text-sm text-muted-foreground mb-2">Humanscale NYC Co-founder</p>
                <p className="text-sm text-muted-foreground">
                  Advocacy for human-scale urban planning and community-centered design
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Simeon Bankoff</h4>
                <p className="text-sm text-muted-foreground mb-2">Historic Districts Council</p>
                <p className="text-sm text-muted-foreground">
                  Historic preservation expertise and landmark protection advocacy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Sylvia Morse</h4>
                <p className="text-sm text-muted-foreground mb-2">Urban Planner</p>
                <p className="text-sm text-muted-foreground">
                  Professional urban planning guidance and community development expertise
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Kathleen Webster</h4>
                <p className="text-sm text-muted-foreground mb-2">Sara D. Roosevelt Park Coalition</p>
                <p className="text-sm text-muted-foreground">
                  Experience in successful community park advocacy and preservation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Fort Greene Park, Brooklyn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our beautiful 30-acre park sits atop a hill in Brooklyn, designed by Frederick Law Olmsted 
                  and Calvert Vaux in the 1860s. Home to the Prison Ship Martyrs&apos; Monument and countless 
                  mature trees that have grown for decades.
                </p>
                <p className="text-muted-foreground">
                  Visit us any day to see why this green oasis is worth protecting - from the rolling mounds 
                  where families picnic to the shaded paths where neighbors find peace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>501(c)(3) Non-Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Friends of Fort Greene Park is a registered 501(c)(3) non-profit organization dedicated 
                  to protecting and preserving our urban forest.
                </p>
                <p className="text-muted-foreground mb-6">
                  All donations support legal advocacy, community organizing, environmental education, 
                  and efforts to ensure proper stewardship of this historic park.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Founded:</strong> 2017</p>
                  <p><strong>Status:</strong> Active community advocacy</p>
                  <p><strong>Focus:</strong> Environmental preservation & community needs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;ve been visiting Fort Greene Park for decades or discovered it recently, 
              your voice matters in preserving this urban oasis for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/action">
                  Take Action Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/stories">Read Community Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}