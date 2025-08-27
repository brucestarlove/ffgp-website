"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import FsLightbox from "fslightbox-react"
import Image from "next/image"

interface FeaturedVideoCardProps {
  title: string
  url: string
  thumbnail: string
}

export function FeaturedVideoCard({ title, url, thumbnail }: FeaturedVideoCardProps) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  })

  const openLightbox = () => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: 1
    })
  }

  return (
    <>
      <Card 
        className="group cursor-pointer hover:shadow-lg transition-shadow"
        onClick={openLightbox}
      >
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={thumbnail}
              alt={title}
              width={1280}
              height={720}
              className="w-full h-64 md:h-96 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors rounded-t-lg flex items-center justify-center">
              <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-6 group-hover:scale-110 transition-transform">
                <Play className="h-12 w-12 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl md:text-2xl mb-2">{title}</h3>
          </div>
        </CardContent>
      </Card>
      
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[url]}
        slide={lightboxController.slide}
        type="youtube"
      />
    </>
  )
}