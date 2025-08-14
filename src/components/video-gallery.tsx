"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import FsLightbox from "fslightbox-react"
import Image from "next/image"

interface Video {
  id: number
  title: string
  url: string
  thumbnail: string
  description: string
}

const videos: Video[] = [
  {
    id: 1,
    title: "Community Voices: Why We Need Our Trees",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Local families share why Fort Greene Park's trees matter to their daily lives"
  },
  {
    id: 2,
    title: "Environmental Impact of Tree Removal", 
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Climate scientists explain the environmental consequences of replacing trees with concrete"
  },
  {
    id: 3,
    title: "Expert Analysis: Design Legacy vs Modern Plans",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
    description: "Landscape architects discuss Olmsted's vision and the importance of naturalistic design"
  }
]

export function VideoGallery() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  })

  const openLightbox = (slideNumber: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideNumber
    })
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <Card 
            key={video.id} 
            className="group cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(index + 1)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors rounded-t-lg flex items-center justify-center">
                  <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={videos.map(video => video.url)}
        slide={lightboxController.slide}
        type="youtube"
      />
    </>
  )
}