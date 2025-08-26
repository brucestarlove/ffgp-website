"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/image-lightbox"
import { cn } from "@/lib/utils"

interface CarouselImage {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
  autoPlay?: boolean
  interval?: number
}

export function ImageCarousel({ 
  images, 
  className, 
  autoPlay = false, 
  interval = 5000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, isPaused, images.length, interval])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  // If only one image, just render the lightbox
  if (images.length === 1) {
    return (
      <div className={cn("h-full w-full", className)}>
        <ImageLightbox
          src={images[0].src}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            className="object-cover"
          />
        </ImageLightbox>
      </div>
    )
  }

  return (
    <div 
      className={cn("relative group pb-8", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-lg h-full w-full">
        <div className="absolute inset-0">
          <ImageLightbox
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={images[currentIndex].width}
            height={images[currentIndex].height}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="object-cover transition-all duration-300"
            />
          </ImageLightbox>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous image</span>
            </Button>
            
            <Button
              variant="ghost" 
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dot Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                currentIndex === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      {autoPlay && images.length > 1 && (
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <div className={cn("w-1 h-1 bg-white rounded-full", isPaused ? "" : "animate-pulse")} />
            {isPaused ? "Paused" : "Auto"}
          </div>
        </div>
      )}
    </div>
  )
}