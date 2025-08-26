import Link from "next/link"
import Image from "next/image"

export function CommunityHeader() {
  return (
    <div className="w-full">
      <Link href="/stories" className="block">
        <div className="relative w-full h-48 md:mb-12 overflow-hidden">
          <Image
            src="/img/WeAreFortGreene.webp"
            alt="We Are Fort Greene - Community Voices"
            fill
            className="object-contain scale-95 hover:scale-100 transition-transform duration-300"
            priority
          />
        </div>
      </Link>
    </div>
  )
}