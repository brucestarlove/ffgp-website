import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { petitionSignatures } from '@/lib/schema'
import { desc, sql } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = (page - 1) * limit

    // Get signatures with pagination
    const signatures = await db
      .select({
        id: petitionSignatures.id,
        name: petitionSignatures.name,
        message: petitionSignatures.message,
        createdAt: petitionSignatures.createdAt,
      })
      .from(petitionSignatures)
      .orderBy(desc(petitionSignatures.id))
      .limit(limit)
      .offset(offset)

    // Get total count for pagination info
    const totalCountResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(petitionSignatures)
    
    const totalCount = totalCountResult[0]?.count || 0

    // Transform names to show first name + last initial
    const transformedSignatures = signatures.map(signature => ({
      id: signature.id,
      displayName: transformNameToInitial(signature.name),
      message: signature.message,
      createdAt: signature.createdAt,
    }))

    return NextResponse.json({
      signatures: transformedSignatures,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasNextPage: page < Math.ceil(totalCount / limit),
        hasPreviousPage: page > 1,
      }
    })
  } catch (error) {
    console.error('Error fetching petition signatures:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch signatures' 
      },
      { status: 500 }
    )
  }
}

function transformNameToInitial(fullName: string): string {
  const parts = fullName.trim().split(' ')
  if (parts.length === 0) return 'Anonymous'
  if (parts.length === 1) return parts[0]
  
  const firstName = parts[0]
  const lastInitial = parts[parts.length - 1][0]?.toUpperCase() || ''
  
  return `${firstName} ${lastInitial}.`
}