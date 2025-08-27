import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to decode HTML entities
export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

// Helper function to parse date consistently (avoids timezone issues)
export function parseDate(dateString: string): Date {
  // Parse as UTC date to avoid timezone offset issues
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

// Helper function to render bold/strong text in excerpts
export function renderTextWithBold(text: string): React.ReactNode {
  // Split text by **bold** patterns
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  
  return parts.map((part, index) => {
    // Check for **bold** markdown syntax
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2)
      return React.createElement('strong', { key: index }, boldText)
    }
    
    // Return regular text
    return part
  })
}