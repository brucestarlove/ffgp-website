"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, Play } from "lucide-react"
import newsData from "@/data/news.json"
import { Footer } from "@/components/footer"
import { decodeHtmlEntities, parseDate } from "@/lib/utils"

// News agency logos mapping
const newsLogos: Record<string, string> = {
  "News 12": "/img/logo-news12.jpg",
  "Brooklyn Paper": "/img/logo-brooklyn_paper.png",
  "Kings County Politics": "/img/logo-kingscountypolitics.jpg",
  "WBAI Radio": "/img/logo-wbai.png",
  "FOX5 New York": "/img/logo-fox5.png",
  "CBS News": "/img/logo-cbs.png",
  "BK Reader": "/img/logo-bkr.jpg",
  "New York Post": "/img/logo-nyp.png",
   "Brooklyn Daily Eagle": "/img/logo-brooklyn_daily_eagle.jpg",
}

export default function AllNewsPage() {
  const [displayedItems, setDisplayedItems] = useState(20)
  const [isLoading, setIsLoading] = useState(false)
  
  const sortedNews = [...newsData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  const visibleNews = sortedNews.slice(0, displayedItems)
  const hasMore = displayedItems < sortedNews.length

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedItems(prev => Math.min(prev + 20, sortedNews.length))
      setIsLoading(false)
    }, 500)
  }

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

      {/* News Archive */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {visibleNews.map((article, index) => (
                <article 
                  key={article.id} 
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 border-b border-border last:border-b-0"
                >
                  {/* Left Column: Logo, Date, Author */}
                  <div className="md:col-span-1 space-y-4">
                    {/* News Agency Logo */}
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-24 flex items-center justify-center overflow-hidden">
                        {newsLogos[article.source] ? (
                          <Image
                            src={newsLogos[article.source]}
                            alt={`${article.source} logo`}
                            width={190}
                            height={96}
                            className="object-contain rounded"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.nextElementSibling!.style.display = 'block'
                            }}
                          />
                        ) : null}
                        <span 
                          className={`text-sm font-medium text-muted-foreground text-center px-2 ${newsLogos[article.source] ? 'hidden' : 'block'}`}
                          style={{ display: newsLogos[article.source] ? 'none' : 'block' }}
                        >
                          {article.source}
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-center md:text-center">
                      {article.sourceUrl && article.sourceUrl !== '#' ? (
                        <Link 
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          {parseDate(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </Link>
                      ) : (
                        <time className="text-sm font-medium text-muted-foreground">
                          {parseDate(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      )}
                    </div>

                    {/* Author */}
                    <div className="text-center md:text-center">
                      <p className="text-xs text-muted-foreground">
                        {article.author || 'Staff Reporter'}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Title and Excerpt */}
                  <div className="md:col-span-3 space-y-3">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-semibold text-foreground leading-tight flex-1">
                        {article.sourceUrl && article.sourceUrl !== '#' ? (
                          <Link 
                            href={article.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {article.title}
                          </Link>
                        ) : (
                          article.title
                        )}
                      </h2>
                      {article.containsVideo && (
                        <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          <Play className="h-3 w-3 fill-current" />
                          <span>Video</span>
                        </div>
                      )}
                    </div>

                    {/* Excerpt */}
                    <div className="text-muted-foreground leading-relaxed">
                      {decodeHtmlEntities(article.excerpt).split('\n').map((line, index) => (
                        <p key={index} className={index > 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* External Link */}
                    {article.sourceUrl && article.sourceUrl !== '#' && (
                      <div className="pt-2">
                        <Link 
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          {article.containsVideo ? 'Watch the video' : 'Read full article'}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button 
                  onClick={loadMore}
                  disabled={isLoading}
                  variant="outline"
                  size="lg"
                >
                  {isLoading ? "Loading..." : "Load More Articles"}
                </Button>
              </div>
            )}

            {/* End Message */}
            {!hasMore && sortedNews.length > 20 && (
              <div className="text-center mt-12 py-8 border-t border-border">
                <p className="text-muted-foreground">
                  You&apos;ve reached the end of our news archive.
                </p>
                <Button asChild variant="default" className="mt-4">
                  <Link href="/action">Join Our Campaign</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}