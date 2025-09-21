import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Quote, Users, Heart, ArrowRight } from "lucide-react"
import testimonials from "@/data/testimonials.json"
import { CommunityVoicesVideoGalleryPreview } from "@/components/community-voices-video-gallery-preview"
import { FeaturedVideoCard } from "@/components/featured-video-card"
import { PetitionCounter } from "@/components/petition-counter"

export default function StoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Community 
              <span className="text-primary block">Stories & Voices</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from residents, experts, and community members about why preserving 
              Fort Greene Park&apos;s mature trees matters to them.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Video - Large */}
          <CommunityVoicesVideoGalleryPreview />
          <div className="text-center mt-12">
            <Link href="https://www.youtube.com/playlist?list=PLO9BkTDlJ_bBtUFaJIKb0RC-FcnRugt5v" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/img/community-voices-videos-preview.jpg" 
                alt="Community voices videos preview" 
                width={791}
                height={603}
                className="mx-auto mb-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
              />
            </Link>
            <Button asChild size="xl">
              <Link href="https://www.youtube.com/playlist?list=PLO9BkTDlJ_bBtUFaJIKb0RC-FcnRugt5v" target="_blank" rel="noopener noreferrer">
                Listen To More Neighbors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedVideoCard
              title="2019 Rally with Speeches"
              url="https://www.youtube.com/watch?v=gFX6d95ZXXo"
              thumbnail="https://img.youtube.com/vi/gFX6d95ZXXo/maxresdefault.jpg"
            />
        </div>
      </section>

      {/* Testimonials Grid */}
      {/* <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      {testimonial.type === 'video' && (
                        <span className="text-sm text-muted-foreground">Video Testimony</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Community Impact Stats */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Grassroots Movement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The fight to save Fort Greene Park brings together diverse voices from across Brooklyn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">8 Years</h3>
                <p className="text-muted-foreground">Of community organizing and legal advocacy</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <PetitionCounter showViewSignaturesButton={false} size="default" />
                <p className="text-muted-foreground mt-4">Have signed our petition to preserve the trees</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Quote className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">Unity</h3>
                <p className="text-muted-foreground">Across all backgrounds to protect our urban forest</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Community Themes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Common Concerns
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Residents consistently raise these key issues about the Parks Without Borders plan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Environmental Justice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;This project is absurd given climate change and ignores known strategies for adaptation. 
                  Brooklyn neighborhoods already have higher air-pollution and asthma rates.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Community Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;The northwest corner is a functioning, vibrant and quiet gathering place where healthy 
                  trees should be designed around, not replaced with concrete.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cultural Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;The plan is formal, directed, gentrified to a specific culture and economic level. 
                  We need repairs, not redesign that removes reasons to enter the park.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Voices */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Expert Analysis
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Preservationists, landscape architects, and environmental advocates support the community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Preservation Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic mb-4">
                  &quot;Creating a grand vista reminiscent of Mussolini&apos;s Rome is not in the Olmsted tradition. 
                  This destroys the naturalistic landscape that makes Fort Greene Park special.&quot;
                </blockquote>
                <p className="text-sm font-medium">— Christabel Gough, Preservationist</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Urban Planning View</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic mb-4">
                  &quot;We must preserve the mixture of monumental and bucolic features that make this park unique. 
                  The low stone wall and tree grove create the perfect approach to the monument.&quot;
                </blockquote>
                <p className="text-sm font-medium">— Michael Gruen, City Club of New York</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <Quote className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Share Your Story
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have you been impacted by Fort Greene Park&apos;s trees? Your voice matters in this fight 
                to preserve our urban forest for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/action">
                    Join the Campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/news">View Timeline</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}