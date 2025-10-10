import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { petitionSignatures } from '@/lib/schema'
import { z } from 'zod'

const petitionSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.union([z.string().email(), z.literal('')]).optional(),
  zipCode: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  keepInformed: z.boolean().default(false),
}).refine(
  (data) => {
    // If keepInformed is true, email must be provided and valid
    if (data.keepInformed) {
      return data.email && data.email.length > 0 && z.string().email().safeParse(data.email).success
    }
    return true
  },
  {
    message: 'Please enter a valid email address',
    path: ['email'],
  }
)

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