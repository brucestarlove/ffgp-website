import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, DollarSign, Users } from "lucide-react"
import { CommunityHeader } from "@/components/community-header";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CommunityHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.jpg" 
                alt="Friends of Fort Greene Park" 
                width={32} 
                height={32} 
                className="rounded-full"
              />
              <span className="text-xl font-bold text-foreground">Friends of Fort Greene Park</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Friends of Fort Greene Park is a 501(c)(3) non-profit supporting protection 
              and preservation of the urban forest.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Fort Greene Park, Brooklyn NY
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Take Action</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/action" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Sign the Petition
                </Link>
              </li>
              <li>
                <Link 
                  href="/action" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Officials
                </Link>
              </li>
              <li>
                <Link 
                  href="/better-plan" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Counter-Proposal
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Latest Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/stories" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Community Voices
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/better-plan#trees-matter" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Why Trees Matter
                </Link>
              </li>
              <li>
                <Link 
                  href="/better-plan#historic-legacy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Park History
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Contact */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:fortgreenedesign@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-semibold text-foreground">Follow The Campaign</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/FriendsofFortGreenePark" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/friendsoffortgreenepark/" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-semibold text-foreground">Support Us</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="/action#support" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <DollarSign className="h-8 w-8 mx-auto text-primary mb-3" />
                  DonorBox
                </a>
                <a 
                  href="/action#support" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Users className="h-8 w-8 mx-auto text-primary mb-3" />
                  GoFundMe
                </a>
                <a 
                  href="/action#support" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-3xl mb-3 block">💳</span>
                  Venmo or Zelle
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Friends of Fort Greene Park. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}