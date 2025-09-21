import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare } from "lucide-react"
import { PetitionCounter } from "@/components/petition-counter"

// TODO: Replace with actual database query
const getSignatures = async () => {
  // This will be replaced with actual database call
  return [
    { id: 1, name: "J.D.", message: "These trees provide essential shade for our community!", createdAt: "2024-01-15" },
    { id: 2, name: "M.S.", message: "Fort Greene Park is a treasure that must be preserved.", createdAt: "2024-01-14" },
    { id: 3, name: "A.R.", message: "", createdAt: "2024-01-14" },
    { id: 4, name: "L.P.", message: "My kids play under these trees every day.", createdAt: "2024-01-13" },
    { id: 5, name: "K.W.", message: "", createdAt: "2024-01-13" },
    // Add more mock data...
  ]
}

export default async function PetitionSignaturesPage() {
  const signatures = await getSignatures()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Petition Signatures
              <span className="text-primary block">Community Voices</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              These are the Brooklyn neighbors who have joined our fight to save Fort Greene Park&apos;s mature trees.
            </p>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PetitionCounter showViewSignaturesButton={false} size="large" />
        </div>
      </section>

      {/* Signatures List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Recent Signatures</h2>
              <p className="text-muted-foreground">
                Names are displayed as initials to protect privacy. Messages are shown as provided by signers.
              </p>
            </div>

            <div className="space-y-4">
              {signatures.map((signature) => (
                <Card key={signature.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{signature.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {new Date(signature.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        
                        {signature.message && (
                          <div className="flex items-start gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground italic">&quot;{signature.message}&quot;</p>
                          </div>
                        )}
                        
                        {!signature.message && (
                          <p className="text-muted-foreground text-sm">Signed without comment</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                This is just a preview. The full list will show all {" "}
                <span className="font-semibold text-primary">1,732+</span> signatures once implemented.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}