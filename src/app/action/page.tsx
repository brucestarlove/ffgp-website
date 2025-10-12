import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  FileText,
  Phone, 
  Users, 
  Mail, 
  AlertTriangle,
  Download,
  QrCode
} from "lucide-react"
import Image from "next/image"
import { PetitionForm } from "@/components/petition-form"
import { PetitionCounter } from "@/components/petition-counter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Take Action - Save Fort Greene Park&apos;s Trees | FFGP",
  description: "Sign our petition, contact officials, and join thousands fighting to save 78 mature trees in Fort Greene Park. Every signature counts in stopping NYC Parks&apos; destructive plan.",
  keywords: ["petition", "Fort Greene Park", "take action", "sign petition", "contact officials", "save trees", "NYC Parks"],
  openGraph: {
    title: "Take Action - Save Fort Greene Park&apos;s Trees",
    description: "Sign our petition and contact officials to save 78 mature trees in Fort Greene Park. Join thousands fighting NYC Parks&apos; destructive plan.",
    images: ["/og-image.svg"],
  },
  twitter: {
    title: "Take Action - Save Fort Greene Park&apos;s Trees",
    description: "Sign our petition and contact officials to save 78 mature trees in Fort Greene Park.",
  },
}

export default function ActionPage() {

  const officials = [
    {
      name: "Crystal Hudson",
      title: "Council Member, District 35",
      phone: "(718) 260-9191",
      office: "Brooklyn City Hall"
    },
    {
      name: "Shekar Krishnan", 
      title: "Chair of the City Council Parks Committee; Council Member, District 25",
      phone: "(718) 383-9566",
      office: "Queens City Hall"
    },
    {
      name: "Phara Souffrant-Forrest",
      title: "Assembly Member, District 57",
      phone: "(718) 596-0100",
      office: "Brooklyn Assembly Office"
    },
    {
      name: "Antonio Reynoso",
      title: "Brooklyn Borough President", 
      phone: "(718) 802-3700",
      office: "Brooklyn Borough Hall"
    },
    {
      name: "Jabari Brisport",
      title: "State Senator, District 25",
      phone: "(718) 284-4700",
      office: "Brooklyn Senate Office"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Take Action
              <span className="text-primary block">Save Our Trees</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of Brooklyn residents fighting to preserve Fort Greene Park&apos;s 
              mature trees. Your voice matters in this crucial environmental fight.
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Alert */}
      <section className="bg-destructive/10 border-y border-destructive/20 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-destructive">Urgent: Trees at Risk</h3>
              <p className="text-sm text-muted-foreground">
                Despite legal setbacks, we continue fighting. Every signature and call matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Actions */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Petition Counter */}
          <div className="pb-12">
            <PetitionCounter size="large" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">  
            {/* Petition Signup */}
            <PetitionForm />

            {/* Contact Officials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Phone className="h-6 w-6 text-primary" />
                  Contact Elected Officials
                </CardTitle>
                <p className="text-muted-foreground">
                  Call your representatives and demand they protect Fort Greene Park&apos;s trees.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {officials.map((official, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold">{official.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{official.title}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a 
                          href={`tel:${official.phone}`}
                          className="text-primary hover:underline"
                        >
                          {official.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Sample Script:</h4>
                  <p className="text-sm text-muted-foreground">
                    &quot;I&apos;m calling as your constituent to ask you to protect Fort Greene Park&apos;s 
                    78 mature trees from removal. These trees provide critical environmental benefits 
                    that take decades to replace. Please advocate for the community counter-proposal 
                    that preserves trees while improving park accessibility.&quot;
                  </p>
                  <div className="mt-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/pdfs/Phone Script - Fort Greene Park Redesign.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Full Example Script
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      { /* QR Code */ }
      <section id="support" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Share the Campaign
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Download the PDFs (color or black and white) and share with your neighbors!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* PDF Flyer Downloads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Color Flyer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Print and share with your neighbors
                  </p>
                  <Button asChild className="w-full" variant="default">
                    <Link href="/flyer-color.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Color PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Black & White Flyer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Economic option
                  </p>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/flyer-bw.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download B&W PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* QR Code Section */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <QrCode className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-xl">Share via QR Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Scan to sign the petition and join the movement
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                      <Image 
                        src="/qr-petition-page.png" 
                        alt="QR Code to Petition Page" 
                        width={280} 
                        height={280}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Point your camera at the QR code to open the petition page
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support & Donations */}
      {/* <section id="support" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Support the Campaign
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Help fund legal fees, community organizing, and advocacy efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">DonorBox</h3>
                <p className="text-sm text-muted-foreground mb-4">Secure online donations</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://donorbox.org/friends-of-fort-greene-park" target="_blank">
                    Donate <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">GoFundMe</h3>
                <p className="text-sm text-muted-foreground mb-4">Community fundraising</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.gofundme.com/f/urgent-protect-78-trees-in-fort-greene-park" target="_blank">
                    Support <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-3xl mb-3 block">💳</span>
                <h3 className="font-semibold mb-2">Venmo</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick mobile payments</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://account.venmo.com/u/FriendsOfFortGreenePark" target="_blank">
                    Send <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-3xl mb-3 block">🏦</span>
                <h3 className="font-semibold mb-2">Zelle</h3>
                <p className="text-sm text-muted-foreground mb-4">Bank transfer</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="#support">
                    Transfer to FortGreeneTalk@gmail.com
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Get Involved */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get More Involved
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community organizing efforts and stay informed about the campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Volunteer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Help with outreach, event planning, social media, and community organizing.
                </p>
                <Button asChild className="w-full">
                  <Link href="mailto:volunteers@friendsoffortgreenepark.org">
                    Email Us
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Stay Informed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sign the petition to join our mailing list for campaign updates, rally announcements, and action alerts.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#newsletter">
                    Subscribe
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Spread the Word
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share this campaign with friends, family, and neighbors on social media.
                </p>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" className="w-1/2">
                    <Link 
                      href="https://www.instagram.com/friendsoffortgreenepark/" 
                      target="_blank"
                    >
                      Share on Instagram
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-1/2">
                    <Link 
                      href="https://www.facebook.com/FriendsofFortGreenePark" 
                      target="_blank"
                    >
                      Share on Facebook
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
