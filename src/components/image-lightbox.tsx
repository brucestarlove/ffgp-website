"use client"

import * as React from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  children?: React.ReactNode
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
  children
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {children ? (
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        >
          {children}
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn("transition-opacity hover:opacity-90", className)}
          />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative max-w-7xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            
            <div 
              className="cursor-pointer" 
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}