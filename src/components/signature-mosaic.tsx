"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { SignatureMosaicProps, PetitionSignature, SignaturesResponse } from "@/types/petition"
import { SignatureCard } from "./signature-card"
import { Loader2, TreePine, X, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export function SignatureMosaic({ initialSignatures = [], className }: SignatureMosaicProps) {
  const [signatures, setSignatures] = useState<PetitionSignature[]>(initialSignatures)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [selectedSignature, setSelectedSignature] = useState<PetitionSignature | null>(null)
  const [mounted, setMounted] = useState(false)
  
  const observerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef(false)

  // For portal rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  const loadMoreSignatures = useCallback(async () => {
    if (loadingRef.current || !hasMore) return
    
    loadingRef.current = true
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/petition/signatures?page=${page + 1}&limit=100`)
      if (!response.ok) throw new Error('Failed to fetch signatures')
      
      const data: SignaturesResponse = await response.json()
      
      if (data.signatures.length > 0) {
        setSignatures(prev => [...prev, ...data.signatures])
        setPage(prev => prev + 1)
        setHasMore(data.pagination.hasNextPage)
      } else {
        setHasMore(false)
      }
    } catch (err) {
      setError('Failed to load more signatures')
      console.error('Error loading signatures:', err)
    } finally {
      setIsLoading(false)
      loadingRef.current = false
    }
  }, [page, hasMore])

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMoreSignatures()
        }
      },
      { threshold: 0.1 }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [loadMoreSignatures, isLoading, hasMore])

  // Load initial signatures if none provided
  useEffect(() => {
    if (initialSignatures.length === 0) {
      loadMoreSignatures()
    }
  }, [initialSignatures.length, loadMoreSignatures])

  const handleCommentClick = (signature: PetitionSignature) => {
    setSelectedSignature(signature)
  }

  const closeModal = () => {
    setSelectedSignature(null)
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (selectedSignature) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [selectedSignature])

  // Generate skeleton placeholders
  const skeletonCards = Array.from({ length: 20 }, (_, i) => (
    <div
      key={`skeleton-${i}`}
      className="px-3 py-2 rounded-2xl bg-gray-100 animate-pulse min-h-[2.5rem] flex items-center justify-center"
      style={{ 
        transform: `rotate(${(i % 7 - 3) * 2}deg)`,
        animationDelay: `${i * 50}ms`
      }}
    >
      <div className="h-4 bg-gray-200 rounded w-16"></div>
    </div>
  ))

  return (
    <div className={cn("w-full", className)}>
      {/* Forest Grid */}
      <div 
        className={cn(
          "grid gap-3 md:gap-4",
          "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
          "auto-rows-min"
        )}
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))"
        }}
      >
        {signatures.map((signature, index) => (
          <SignatureCard
            key={signature.id}
            signature={signature}
            index={index}
            onCommentClick={handleCommentClick}
          />
        ))}
        
        {/* Show skeleton cards while loading */}
        {isLoading && skeletonCards}
      </div>

      {/* Loading trigger element */}
      <div ref={observerRef} className="mt-8 flex justify-center">
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Growing the forest...</span>
          </div>
        )}
        
        {!hasMore && signatures.length > 0 && (
          <div className="flex flex-col items-center gap-3 text-center max-w-md mx-auto">
            <div className="flex items-center gap-2 text-green-700">
              <TreePine className="h-6 w-6" />
              <span className="text-lg font-medium">Add your leaf to our canopy of voices</span>
              <TreePine className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm">
              Join your Brooklyn neighbors in protecting Fort Greene Park&apos;s trees
            </p>
            <a 
              href="/action" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Sign the Petition
            </a>
          </div>
        )}
        
        {error && (
          <div className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Comment Modal - Rendered via Portal */}
      {mounted && selectedSignature && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            {/* Content */}
            <div className="pr-8">
              <div className="flex items-center gap-2 mb-2">
                <Quote className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold leading-none tracking-tight">
                  {selectedSignature.displayName}&apos;s comment
                </h3>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                &quot;{selectedSignature.message}&quot;
              </blockquote>
              <div className="mt-3 text-sm text-muted-foreground text-right">
                {new Date(selectedSignature.createdAt).toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit', 
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}