import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, Droplets, Wind, ThermometerSun, Building2, Users, Scale, ArrowRight, Target, Award, Leaf, Landmark, FileText, Megaphone } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import { TableOfContents } from "@/components/table-of-contents"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A Better Plan - Fort Greene Park Counter-Proposal | FFGP",
  description: "Our community counter-proposal preserves 78 mature trees while improving accessibility and drainage. See how we can enhance Fort Greene Park without destroying its natural character.",
  keywords: ["Fort Greene Park", "counter-proposal", "save trees", "NYC Parks", "community plan", "preserve trees", "accessibility"],
}

export default function IssuePage() {
  const tocItems = [
    {
      id: "counter-proposal",
      label: "Our Counter-Proposal",
      icon: <Target className="h-4 w-4" />
    },
    {
      id: "benefits",
      label: "The Benefits",
      icon: <Award className="h-4 w-4" />
    },
    {
      id: "trees-matter",
      label: "Why Trees Matter",
      icon: <Leaf className="h-4 w-4" />
    },
    {
      id: "historic-legacy",
      label: "Historic Legacy",
      icon: <Landmark className="h-4 w-4" />
    },
    {
      id: "legal-concerns",
      label: "Legal Concerns",
      icon: <FileText className="h-4 w-4" />
    },
    {
      id: "take-action",
      label: "Take Action",
      icon: <Megaphone className="h-4 w-4" />
    }
  ]

  const nycParksPlanImages = [
    {
      src: "/img/Proposal-01.webp",
      alt: "NYC Parks Plan: Remove 78 Trees + Concrete Plaza",
      width: 800,
      height: 450
    },
    {
      src: "/img/proposal-byemounds.webp",
      alt: "NYC Parks Plan: Remove 78 Trees + Concrete Plaza",
      width: 800,
      height: 450
    },
    {
      src: "/img/proposal-corner-trees.webp",
      alt: "NYC Parks Plan: Remove 78 Trees + Concrete Plaza",
      width: 800,
      height: 450
    },
  ]

  const counterProposalImages = [
    {
      src: "/img/Counter-proposal-01.webp",
      alt: "Community Counter-Proposal: Preserve Trees + Smart Improvements",
      width: 800,
      height: 450
    },
    {
      src: "/img/existing-byemounds.webp",
      alt: "Community Counter-Proposal: Preserve Trees + Smart Improvements",
      width: 800,
      height: 450
    },
    {
      src: "/img/existing-corner-trees.webp",
      alt: "Community Counter-Proposal: Preserve Trees + Smart Improvements",
      width: 800,
      height: 450
    },
    // {
    //   src: "/img/Save-71-trees.webp",
    //   alt: "Save 71 Trees Campaign Visual",
    //   width: 800,
    //   height: 450
    // }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A Better Path Forward for
              <span className="text-primary block">Fort Greene Park</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              We support many parts of NYC Parks&apos; plan, but we oppose the removal of 78 mature trees 
              and the historic design changes that would fundamentally alter this beloved community space.
            </p>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              While we support improvements to accessibility, drainage, and benches, we cannot support 
              plans that erase 78 mature shade trees and historic design features—especially when hundreds 
              of neighbors have spoken out against them. There&apos;s a collaborative way forward that preserves 
              what makes this park special while addressing the community&apos;s real needs.
            </p>
          </div>
        </div>
      </section>

      {/* Counter-Proposal Highlight */}
      <section id="counter-proposal" className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Community Counter-Proposal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sensible improvements that preserve trees, enhance accessibility, and restore historic features 
              without destroying the park&apos;s natural character.
            </p>
          </div>

          {/* Before/After Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-destructive mb-4 text-center">NYC Parks Plan</h3>
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center mb-4">
                <ImageCarousel
                  images={nycParksPlanImages}
                  className="w-full h-full"
                  autoPlay={true}
                  interval={4000}
                />
              </div>
              <div className="text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pdfs/Fort Greene Park PWB Proposal and Tree Removal Diagram.pdf" target="_blank">
                    View Full NYC Parks Plan (PDF)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Community Counter-Proposal</h3>
              <div className="aspect-video bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center mb-4">
                <ImageCarousel
                  images={counterProposalImages}
                  className="w-full h-full"
                  autoPlay={true}
                  interval={4000}
                />
              </div>
              <div className="text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pdfs/Friends of Fort Greene Park on PWB Redesign 03.19.18.pdf" target="_blank">
                    View Full Counter-Proposal (PDF)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section id="benefits" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Counter-Proposal Benefits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our plan addresses all community needs while preserving the park&apos;s environmental and historic value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="text-2xl">🏛️</span>
                    Restore Historic Landscape Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Repair masonry walls</li>
                    <li>• Restore landscape mounds</li>
                    <li>• Rebuild circular plaza</li>
                    <li>• Restore hierarchy of historically appropriate benches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="text-2xl">♿</span>
                    Implement ADA Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Install accessible ramps at stairs, providing equal access for all</li>
                    <li>• Install accessible granite block paving at benches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="text-2xl">🌧️</span>
                    Upgrade Drainage Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maintain/repair masonry perimeter retaining wall</li>
                    <li>• Rebuild paths to control runoff</li>
                    <li>• Reduce plaza width to minimize site runoff</li>
                    <li>• Maintain/enhance granite block paving to absorb runoff</li>
                    <li>• Maintain/enhance site plantings as rain gardens</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TreePine className="h-6 w-6" />
                    Retain/Enhance Historic Tree Canopy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Retain historic varieties of tree species</li>
                    <li>• Replace trees as needed for risk management and tree health</li>
                    <li>• Selectively prune mature trees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="text-2xl">🪨</span>
                    Preserve Historic Paving/Reduce Concrete
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Minimize paving at circular plaza by expanding planting circle</li>
                    <li>• Retain historic pink granite block paving at park perimeter</li>
                    <li>• Reduce extent of concrete paving at barbecue areas</li>
                    <li>• Expand tree pits/enhance herbaceous ground cover</li>
                    <li>• No fencing at tree pits</li>
                    <li>• Reduce extraneous/non-historic decorative paving</li>
                    <li>• No Jet Mist granite banding or tinted concrete pavers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="text-2xl">🏘️</span>
                    Preserve Neighborhood Scale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Retain or minimize width of plaza and park paths</li>
                    <li>• Maintain human-scale proportions that encourage community use</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan vs Counter-Proposal */}
      <section id="comparison" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive text-2xl">NYC Parks&apos; Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <TreePine className="h-5 w-5 text-destructive" />
                  <span>Remove 78 mature trees across the park</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-destructive" />
                  <span>Pave 13,314 sq ft of open lawn with concrete</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-destructive text-lg">💰</span>
                  <span>$10.5 million cost + $858,732 for replacement trees</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-destructive text-lg">👁️</span>
                  <span>Create unobstructed monument view from Myrtle Avenue</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-destructive text-lg">🌱</span>
                  <span>Plant 3-inch-caliper saplings as &quot;restitution&quot;</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Community Counter-Proposal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <TreePine className="h-5 w-5 text-primary" />
                  <span>Preserve and selectively prune mature trees</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-lg">🔧</span>
                  <span>Repair masonry walls and improve drainage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-lg">♿</span>
                  <span>Improve ADA access at existing entrances</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-lg">🪨</span>
                  <span>Retain historic granite paving</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-lg">🏔️</span>
                  <span>Restore A.E. Bye&apos;s naturalistic landscape mounds</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-lg">🔍</span>
                  <span>Conduct full environmental review (SEQRA)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section id="trees-matter" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Mature Trees Matter
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The environmental and health benefits of mature trees cannot be replaced by saplings for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Wind className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">70×</h3>
                <p className="text-muted-foreground">More air pollution removal than small, newly planted trees</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <TreePine className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">77 tons</h3>
                <p className="text-muted-foreground">Air pollution removed by London plane trees each year</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">1,432</h3>
                <p className="text-muted-foreground">Gallons of stormwater intercepted per street tree annually</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-4xl mb-4 block">⚡</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">$47</h3>
                <p className="text-muted-foreground">Annual electricity and natural-gas savings per tree</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🫁</span>
                  Public Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  NYC&apos;s existing tree canopy helped children avoid <strong>7,380 asthma-related school absences</strong> 
                  and prevented <strong>54 emergency-room visits</strong> and <strong>46 hospital stays</strong> for respiratory illness.
                </p>
                <p className="text-sm text-muted-foreground">
                  Brooklyn neighborhoods have higher air-pollution and asthma rates, making tree removal particularly harmful.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ThermometerSun className="h-6 w-6" />
                  Climate Resilience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Replacing trees with pavement will create a <strong>&quot;frying-pan effect,&quot;</strong> trapping heat 
                  in the plaza and worsening the urban heat island.
                </p>
                <p className="text-sm text-muted-foreground">
                  According to <a href="https://gothamist.com/news/new-york-city-has-americas-greatest-heat-islands-by-great-we-mean-the-worst" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">one report</a>, New York City ranks as having the worst heat island effect.
                </p>
                <p className="text-sm text-muted-foreground">
                  New York has declared a climate emergency and should preserve mature trees to mitigate rising temperatures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🌧️</span>
                  Stormwater Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  All NYC street trees together capture <strong>890 million gallons</strong> of stormwater annually, 
                  preventing flooding and reducing strain on the sewer system.
                </p>
                <p className="text-sm text-muted-foreground">
                  Mature trees have extensive root systems that far exceed saplings&apos; water absorption capacity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historic and Design Legacy */}
      <section id="historic-legacy" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Historic and Design Legacy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The proposed plaza contradicts the park&apos;s original naturalistic design philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Olmsted and Vaux&apos;s Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Fort Greene Park&apos;s original design by <strong>Frederick Law Olmsted and Calvert Vaux </strong> 
                  emphasized naturalistic landscapes and surprise. Olmsted drew inspiration from English country 
                  gardens to create &quot;lungs of the city&quot; where visitors enter an oasis, not a boulevard.
                </p>
                <p className="text-muted-foreground">
                  The low stone wall and tree grove create a bucolic approach where glimpses of the monument 
                  appear gradually - opening the vista would eliminate the surprise and remove reasons to enter the park.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A.E. Bye&apos;s Naturalistic Mounds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Landscape architect <strong>Arthur Edwin Bye</strong> added rolling earth-mound features in the 1970s. 
                  He enhanced natural features to intensify human experience, and his work is considered an early ecological approach.
                </p>
                <p className="text-muted-foreground">
                  The proposed plaza would bulldoze these mounds, replacing popular picnic and play areas with 
                  a pedestrian thoroughfare - critics call this <strong>&quot;a scandalous act of social engineering.&quot;</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal and Procedural Issues */}
      <section id="legal-concerns" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Legal and Procedural Concerns
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Environmental Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  FFGP and partners sued NYC Parks demanding an Environmental Impact Statement under SEQRA. 
                  NYC Parks tried to avoid review by claiming &quot;no significant impact.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-6 w-6" />
                  Tree Health Misrepresentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  FOIL-released inventory shows only 9 of 58 trees scheduled for removal due to poor condition. 
                  The other 49 healthy shade trees are being cut for plaza design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  LPC Commission Critique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Landmarks commissioners called the design &quot;antithetical to all approaches&quot; of Olmsted, 
                  &quot;more like a passage,&quot; and warned it would make the park &quot;much like a tomb.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="take-action" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Take Action Now
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands fighting to preserve Fort Greene Park&apos;s mature trees and naturalistic design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/action">
                  Sign the Petition
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
      
      <TableOfContents items={tocItems} />
      <Footer />
    </div>
  )
}