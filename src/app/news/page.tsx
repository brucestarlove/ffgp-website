import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Scale, Users, FileText, AlertTriangle, ArrowRight } from "lucide-react"
import newsData from "@/data/news.json"
import { Footer } from "@/components/footer"
import { decodeHtmlEntities } from "@/lib/utils"

type NewsCategory = "legal" | "media" | "community" | "update"

const categoryConfig: Record<NewsCategory, { icon: any; label: string; color: string }> = {
  legal: { icon: Scale, label: "Legal", color: "text-blue-600" },
  media: { icon: FileText, label: "Media", color: "text-green-600" },
  community: { icon: Users, label: "Community", color: "text-purple-600" },
  update: { icon: AlertTriangle, label: "Update", color: "text-orange-600" }
}

export default function NewsPage() {
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredStory = sortedNews[0]
  const recentStories = sortedNews.slice(1, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              News & 
              <span className="text-primary block">Timeline</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow the 8-year long campaign to save Fort Greene Park&apos;s trees through court decisions, 
              media coverage, and community organizing.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Update Banner */}
      {/* <section className="bg-destructive/10 border-y border-destructive/20 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-destructive">Latest Update - July 2025</h3>
              <p className="text-sm text-muted-foreground">
                Judge dismissed our lawsuit, allowing NYC Parks to proceed with tree removal. 
                FFGP vows to continue fighting through other means.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Story */}
      <section className="py-16 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Latest News
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest developments in our campaign.
            </p>
          </div> */}

          {/* Featured Article */}
          <Card className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Left: Screenshot/Image */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-600 rounded-lg flex items-center justify-center">
              <Image 
                src="/img/July2025-News12-Thumbnail.png" 
                alt="News 12 screencap of Friends of Fort Greene Park Fighting Against Construction" 
                width={990} 
                height={470}
              />
              </div>
              
              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className={`flex items-center gap-2 ${categoryConfig[featuredStory.category as NewsCategory].color}`}>
                    {React.createElement(categoryConfig[featuredStory.category as NewsCategory].icon, { className: "h-4 w-4" })}
                    <span>{categoryConfig[featuredStory.category as NewsCategory].label}</span>
                  </div>
                  <span>•</span>
                  <time>
                    {new Date(featuredStory.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {featuredStory.title}
                </h3>
                
                <div className="text-muted-foreground leading-relaxed">
                  {decodeHtmlEntities(featuredStory.excerpt).split('\n').map((line, index) => (
                    <p key={index} className={index > 0 ? 'mt-2' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
                
                {featuredStory.sourceUrl && featuredStory.sourceUrl !== '#' && (
                  <Button asChild variant="default" className="w-fit">
                    <Link 
                      href={featuredStory.sourceUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Read Full Article
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>

          {/* Recent Stories Preview */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-foreground">Recent Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentStories.map((story) => {
                const config = categoryConfig[story.category as NewsCategory]
                return (
                  <Card key={story.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        {React.createElement(config.icon, { className: `h-4 w-4 ${config.color}` })}
                        <span className={config.color}>{config.label}</span>
                        <span>•</span>
                        <time>
                          {new Date(story.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {story.title}
                      </h4>
                      
                      <div className="text-sm text-muted-foreground mb-4">
                        {decodeHtmlEntities(story.excerpt).split('\n').map((line, index) => (
                          <p key={index} className={`${index > 0 ? 'mt-2' : ''} line-clamp-3`}>
                            {line}
                          </p>
                        ))}
                      </div>
                      
                      {story.sourceUrl && story.sourceUrl !== '#' && (
                        <Link 
                          href={story.sourceUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Read more
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* View All News Link */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/news/all" className="inline-flex items-center gap-2">
                View 8 Years of News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campaign Stats */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">8 Years</h3>
                <p className="text-sm text-muted-foreground">Protesting for Better</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto text-purple-600 mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">Thousands</h3>
                <p className="text-sm text-muted-foreground">Community Supporters</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto text-green-600 mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">Extensive</h3>
                <p className="text-sm text-muted-foreground">Media Coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Scale className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">Multiple</h3>
                <p className="text-sm text-muted-foreground">Legal Challenges</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Campaign Timeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Key events in the fight to preserve Fort Greene Park&apos;s mature trees.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {sortedNews.map((item, index) => {
                const config = categoryConfig[item.category as NewsCategory]
                const IconComponent = config.icon
                const isEven = index % 2 === 0

                return (
                  <div key={item.id} className={`relative flex items-start gap-6 md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-4 h-4 bg-background border-2 border-primary rounded-full md:left-1/2 md:-translate-x-2"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <Card>
                        <CardHeader>
                          <div className={`flex items-center gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                            <IconComponent className={`h-5 w-5 ${config.color}`} />
                            <span className={`text-sm font-medium ${config.color}`}>
                              {config.label}
                            </span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <time className="text-sm text-muted-foreground">
                              {new Date(item.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </time>
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-muted-foreground mb-4">
                            {decodeHtmlEntities(item.excerpt).split('\n').map((line, index) => (
                              <p key={index} className={index > 0 ? 'mt-2' : ''}>
                                {line}
                              </p>
                            ))}
                          </div>
                          {item.source && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Source: {item.source}</span>
                              {item.sourceUrl && item.sourceUrl !== '#' && (
                                <Link 
                                  href={item.sourceUrl} 
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key Milestones
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Major moments that shaped the campaign to save Fort Greene Park.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-blue-600" />
                  2017: Legal Challenge Begins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  FFGP, City Club of New York, and attorney Richard Lippes file lawsuit demanding 
                  environmental review under SEQRA. Landmarks Preservation Commission criticizes design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  2020: Community Prevails
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Residents come together and prevail in court, resulting in a temporary stay of execution 
                  for the trees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  2025: Current Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Despite the lawsuit dismissal, FFGP continues the fight with new volunteer assistance 
                  to spread awareness as quickly as possible to all neighbors and plea for the last time 
                  for counter-proposal acceptance.
                </p>
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
              Stay Informed & Take Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We need your help NOW. Join our mailing list for updates, join us in the park, and take action to save our trees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/action">Join the Campaign</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/stories">Read Community Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}