import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { petitionSignatures } from '@/lib/schema'
import { z } from 'zod'

const petitionSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  zipCode: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  keepInformed: z.boolean().default(false),
  addToFriendsList: z.boolean().default(false),
  contactToHelp: z.boolean().default(false),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = petitionSchema.parse(body)
    
    // Insert into database
    const result = await db.insert(petitionSignatures).values(validatedData).returning({ id: petitionSignatures.id })
    
    return NextResponse.json({ 
      success: true, 
      id: result[0].id,
      message: 'Petition signed successfully' 
    })
    
  } catch (error) {
    console.error('Error submitting petition:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data', 
          details: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit petition' 
      },
      { status: 500 }
    )
  }
}