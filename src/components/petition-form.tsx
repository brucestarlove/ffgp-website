"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText, CheckCircle } from "lucide-react"

interface PetitionFormData {
  name: string
  email?: string
  zipCode: string
  phone: string
  message: string
  keepInformed: boolean
}

export function PetitionForm() {
  const [formData, setFormData] = useState<PetitionFormData>({
    name: "",
    email: "",
    zipCode: "",
    phone: "",
    message: "",
    keepInformed: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Client-side validation: if keepInformed is checked, email must be provided
    if (formData.keepInformed && (!formData.email || formData.email.trim() === '')) {
      setError('Please provide an email address to stay informed')
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch('/api/petition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit petition')
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        zipCode: "",
        phone: "",
        message: "",
        keepInformed: false
      })

      // Trigger the +1 animation
      window.dispatchEvent(new CustomEvent('petition-signed'))
    } catch (err) {
      setError('Failed to submit petition. Please try again.')
      console.error('Error submitting petition:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof PetitionFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <FileText className="h-6 w-6 text-primary" />
          Sign the Petition
        </CardTitle>
        <p className="text-muted-foreground">
          Add your voice among thousands of Brooklyn residents demanding NYC Parks preserve our trees.
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your signature has been added. Share this campaign with friends and family.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}
            
            <div>
              <Label htmlFor="name" className="pb-2">Name *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Your last name will appear as an initial"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="pb-2">Email Address (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="Enter your email and consent to stay informed"
              />
            </div>

            <div className="pb-2">
              <div className="flex items-start space-x-3">
                <input
                  id="keepInformed"
                  type="checkbox"
                  checked={formData.keepInformed}
                  onChange={(e) => updateField('keepInformed', e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-2 border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:border-primary checked:bg-primary checked:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Label htmlFor="keepInformed" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Keep me informed by email
                </Label>
              </div>
            </div>
            
            <div>
              <Label htmlFor="zipCode" className="pb-2">ZIP Code (Optional)</Label>
              <Input
                id="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={(e) => updateField('zipCode', e.target.value)}
                placeholder="Your ZIP code"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="pb-2">Personal Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Share your thoughts and tell NYC Parks what we want for our park"
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Petition"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}