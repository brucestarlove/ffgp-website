"use client"

import { useState } from "react"
import { SignatureCardProps } from "@/types/petition"
import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export function SignatureCard({ signature, index, onCommentClick }: SignatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Generate slight rotation variation for organic feel
  const rotation = (index % 7 - 3) * 2 // -6 to +6 degrees
  
  // Different shades of green for variety
  const leafColors = [
    "bg-green-100 hover:bg-green-200",
    "bg-emerald-100 hover:bg-emerald-200", 
    "bg-lime-100 hover:bg-lime-200",
    "bg-teal-100 hover:bg-teal-200",
    "bg-green-50 hover:bg-green-100"
  ]
  const colorClass = leafColors[index % leafColors.length]
  
  const hasComment = signature.message && signature.message.trim().length > 0
  
  return (
    <div
      className={cn(
        "relative group cursor-pointer transition-all duration-300 ease-out",
        "hover:scale-105 hover:z-10",
        hasComment && "ring-1 ring-green-300/50"
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${index * 50}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => hasComment && onCommentClick?.(signature)}
    >
      {/* Leaf-shaped card */}
      <div
        className={cn(
          "px-3 py-2 rounded-2xl shadow-sm border border-green-200/50",
          "min-h-[2.5rem] flex items-center justify-center text-center",
          "animate-fade-in-up",
          colorClass,
          hasComment && "cursor-pointer"
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-green-800 whitespace-nowrap">
            {signature.displayName}
          </span>
          <span className="text-green-600 text-base" role="img" aria-label="tree">
            🌳
          </span>
          {hasComment && (
            <MessageSquare className="h-3 w-3 text-green-600 opacity-70" />
          )}
        </div>
      </div>
      
      {/* Comment tooltip on hover/focus */}
      {hasComment && isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20">
          <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 max-w-xs shadow-lg">
            <div className="whitespace-normal break-words">
              &quot;{signature.message}&quot;
            </div>
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}