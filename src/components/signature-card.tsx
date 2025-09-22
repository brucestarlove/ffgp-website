"use client"

import { SignatureCardProps } from "@/types/petition"
import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export function SignatureCard({ signature, index, onCommentClick }: SignatureCardProps) {
  
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
        "relative group transition-all duration-300 ease-out",
        "hover:scale-105 hover:z-10",
        hasComment && "ring-1 ring-green-300/50 cursor-pointer"
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${index * 50}ms`
      }}
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
            <MessageSquare className="h-3 w-3 text-green-600 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>
    </div>
  )
}