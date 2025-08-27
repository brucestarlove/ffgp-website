import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://friendsoffortgreenepark.org'),
  title: "Friends of Fort Greene Park - Save 78 Mature Trees from Removal",
  description: "Protecting and preserving the urban forest in Fort Greene Park. Join thousands of Brooklyn residents fighting to save 78 mature trees from NYC Parks' concrete plaza plan.",
  keywords: [
    "Fort Greene Park", 
    "NYC Parks", 
    "tree preservation", 
    "environmental advocacy", 
    "Brooklyn", 
    "Parks Without Borders",
    "mature trees",
    "urban forest",
    "environmental justice",
    "community organizing"
  ],
  authors: [{ name: "Friends of Fort Greene Park" }],
  creator: "Friends of Fort Greene Park",
  publisher: "Friends of Fort Greene Park",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Save Fort Greene Park's 78 Mature Trees - Friends of Fort Greene Park",
    description: "Join thousands of Brooklyn residents fighting to preserve Fort Greene Park's mature trees. NYC Parks wants to cut down 78 trees for a concrete plaza.",
    siteName: "Friends of Fort Greene Park",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fort Greene Park mature trees campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save Fort Greene Park's 78 Mature Trees",
    description: "Join the fight to preserve Brooklyn's urban forest. Stop NYC Parks from removing mature trees for concrete.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "Environmental Advocacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
