import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Play, Scale, Users, AlertTriangle } from "lucide-react"
import newsData from "@/data/news.json"
import { decodeHtmlEntities, parseDate, renderTextWithBold } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Timeline - Fort Greene Park Campaign | FFGP",
  description: "Follow the 8-year campaign to save Fort Greene Park's trees through court decisions, media coverage, and community organizing. Stay informed on the latest updates.",
  keywords: ["news", "timeline", "Fort Greene Park", "media coverage", "court decisions", "campaign updates", "tree preservation"],
  openGraph: {
    title: "News & Timeline - Fort Greene Park Campaign",
    description: "Follow the 8-year campaign to save Fort Greene Park's trees through court decisions, media coverage, and community organizing.",
    images: ["/og-image.svg"],
  },
  twitter: {
    title: "News & Timeline - Fort Greene Park Campaign",
    description: "Follow the campaign to save Fort Greene Park's trees through media coverage and community organizing.",
  },
}


export default function NewsPage() {
  const sortedNews = [...newsData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  const featuredStory = sortedNews[0]
  const recentStories = sortedNews.slice(1, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
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

      {/* Featured Story */}
      <section className="py-16 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Latest News
            </h2>
          </div>

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
                <div className="text-sm text-muted-foreground">
                  <time>
                    {parseDate(featuredStory.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>

                <div className="flex items-start gap-3">
                  <h3 className="text-2xl font-bold text-foreground leading-tight flex-1">
                    {featuredStory.title}
                  </h3>
                  {featuredStory.containsVideo && (
                    <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium mt-1">
                      <Play className="h-3 w-3 fill-current" />
                      <span>Video</span>
                    </div>
                  )}
                </div>
                
                <div className="text-muted-foreground leading-relaxed">
                  {decodeHtmlEntities(featuredStory.excerpt).split('\n').map((line, index) => (
                    <p key={index} className={index > 0 ? 'mt-2' : ''}>
                      {renderTextWithBold(line)}
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
                      {featuredStory.containsVideo ? 'Watch the Video' : 'Read Full Article'}
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
                return (
                  <Card key={story.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <time>
                          {parseDate(story.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground line-clamp-2 flex-1">
                          {story.title}
                        </h4>
                        {story.containsVideo && (
                          <div className="flex items-center gap-1 bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0">
                            <Play className="h-2.5 w-2.5 fill-current" />
                            <span>Video</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-4">
                        {decodeHtmlEntities(story.excerpt).split('\n').map((line, index) => (
                          <p key={index} className={`${index > 0 ? 'mt-2' : ''} line-clamp-3`}>
                            {renderTextWithBold(line)}
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
                          {story.containsVideo ? 'Watch video' : 'Read more'}
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
            <Button asChild variant="outline" size="xl">
              <Link href="/news/all" className="inline-flex items-center">
                View 8 Years of News
                <ArrowRight />
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
    </div>
  )
}