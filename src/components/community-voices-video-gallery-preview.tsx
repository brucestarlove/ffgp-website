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
}

const videos: Video[] = [
  {
    id: 1,
    title: `"So many things that need to be done. Why are you building a plaza here?" —Maria`,
    url: "https://www.youtube.com/watch?v=09QD-Rt4g_Q",
    thumbnail: "https://img.youtube.com/vi/09QD-Rt4g_Q/maxresdefault.jpg"
  },
  {
    id: 2,
    title: `"This is what keeps the community together... by doing that... you segregate the community" —Joe`, 
    url: "https://www.youtube.com/watch?v=lg2WRg5SDUc",
    thumbnail: "https://img.youtube.com/vi/lg2WRg5SDUc/maxresdefault.jpg"
  },
  {
    id: 3,
    title: `"Let nature be. Let mother nature grow for us." —Angeline and Alfonso`,
    url: "https://www.youtube.com/watch?v=tGd1bejpG9I",
    thumbnail: "https://img.youtube.com/vi/tGd1bejpG9I/maxresdefault.jpg"
  }
]

export function CommunityVoicesVideoGalleryPreview() {
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