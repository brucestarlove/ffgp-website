"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronUp, Menu, X } from "lucide-react"

export interface TocItem {
  id: string
  label: string
  icon?: React.ReactNode
}

interface TableOfContentsProps {
  items: TocItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")
  const [isVisible, setIsVisible] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    )

    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 200
      setIsVisible(scrolled > threshold)
    }

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleItemClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Mobile TOC Button */}
      <div className="fixed bottom-4 left-4 z-40 md:hidden">
        <Button
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="h-12 w-12 rounded-full shadow-lg"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile TOC Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute bottom-20 left-4 right-4">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={cn(
                        "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md transition-colors text-left",
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Desktop TOC */}
      <div className={cn("fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:block", className)}>
        <Card className="w-64 shadow-lg">
          <CardContent className="p-4">
            <nav className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full px-3 py-2 text-sm rounded-md transition-colors text-left",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
                Back to Top
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scroll to Top FAB (always visible on mobile when TOC is closed) */}
      {!isMobileOpen && (
        <div className="fixed bottom-4 right-4 z-40 md:hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full shadow-lg bg-background"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  )
}