import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { petitionSignatures } from '@/lib/schema'
import { count } from 'drizzle-orm'

export async function GET() {
  try {
    const result = await db
      .select({ count: count() })
      .from(petitionSignatures)

    const signatureCount = result[0]?.count || 1732 // Fallback to default

    return NextResponse.json({ count: signatureCount })
  } catch (error) {
    console.error('Error fetching petition count:', error)
    // Return fallback count if database fails
    return NextResponse.json({ count: 1732 })
  }
}