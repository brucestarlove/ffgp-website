export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Friends of Fort Greene Park",
    "description": "501(c)(3) non-profit supporting protection and preservation of the urban forest in Fort Greene Park",
    "url": "https://friendsoffortgreenepark.org",
    "logo": "https://friendsoffortgreenepark.org/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/friendsoffortgreenepark",
      "https://www.instagram.com/friendsoffortgreenepark",
      "https://www.youtube.com/friendsoffortgreenepark",
      "https://twitter.com/ffgp_trees"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "foundingDate": "2017",
    "nonprofitStatus": "501(c)(3)"
  }

  const campaignSchema = {
    "@context": "https://schema.org",
    "@type": "CivicAction",
    "name": "Save Fort Greene Park's 78 Mature Trees",
    "description": "Community campaign to prevent NYC Parks from removing 78 mature trees and paving 13,000 sq ft of Fort Greene Park",
    "url": "https://friendsoffortgreenepark.org",
    "organizer": {
      "@type": "Organization",
      "name": "Friends of Fort Greene Park"
    },
    "location": {
      "@type": "Park",
      "name": "Fort Greene Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fort Greene Park",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "startDate": "2017",
    "actionStatus": "ActiveActionStatus",
    "target": {
      "@type": "Organization",
      "name": "NYC Parks Department"
    }
  }

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Park",
    "name": "Fort Greene Park",
    "description": "30-acre historic park in Brooklyn designed by Frederick Law Olmsted and Calvert Vaux",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fort Greene Park",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "postalCode": "11217",
      "addressCountry": "US"
    },
    "openingHours": "24/7",
    "isAccessibleForFree": true,
    "hasMap": "https://maps.google.com/?q=Fort+Greene+Park+Brooklyn"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(campaignSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placeSchema),
        }}
      />
    </>
  )
}