"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Eye } from "lucide-react"

interface PetitionCounterProps {
  initialCount?: number
  showViewSignaturesButton?: boolean
  size?: "default" | "large"
}

export function PetitionCounter({ 
  initialCount = 1732, 
  showViewSignaturesButton = true,
  size = "default" 
}: PetitionCounterProps) {
  const [count, setCount] = useState(initialCount)
  const [animatedCount, setAnimatedCount] = useState(initialCount)
  const [showPlusOne, setShowPlusOne] = useState(false)

  // Animate count changes
  useEffect(() => {
    if (count !== animatedCount) {
      const duration = 1000
      const startTime = Date.now()
      const startCount = animatedCount
      const countDiff = count - startCount

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.round(startCount + (countDiff * easeOut))
        
        setAnimatedCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [count, animatedCount])

  // Fetch current count from API
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/petition/count')
        if (response.ok) {
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error('Failed to fetch petition count:', error)
      }
    }

    fetchCount()
  }, [])

  const triggerPlusOne = () => {
    setCount(prev => prev + 1)
    setShowPlusOne(true)
    setTimeout(() => setShowPlusOne(false), 2000)
  }

  // Expose triggerPlusOne for parent components
  useEffect(() => {
    const handlePetitionSigned = () => triggerPlusOne()
    window.addEventListener('petition-signed', handlePetitionSigned)
    return () => window.removeEventListener('petition-signed', handlePetitionSigned)
  }, [])

  const containerClasses = size === "large" 
    ? "text-center space-y-4" 
    : "text-center space-y-3"
  
  const numberClasses = size === "large"
    ? "text-5xl md:text-6xl font-bold text-primary"
    : "text-3xl md:text-4xl font-bold text-primary"
  
  const textClasses = size === "large"
    ? "text-xl text-muted-foreground"
    : "text-lg text-muted-foreground"

  return (
    <div className={containerClasses}>
      <div className="relative">
        <div className={numberClasses}>
          {animatedCount.toLocaleString()}
        </div>
        {showPlusOne && (
          <div className="absolute -top-2 -right-8 text-2xl font-bold text-green-600 animate-bounce">
            +1
          </div>
        )}
      </div>
      
      <div className={textClasses}>
        <div className="flex items-center justify-center gap-2">
          <Users className="h-5 w-5" />
          neighbors and counting
        </div>
      </div>

      {showViewSignaturesButton && (
        <div className="pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/petition-signatures">
              <Eye className="mr-2 h-4 w-4" />
              View Signatures
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}