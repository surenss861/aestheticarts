import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyBookingCTA from '@/components/StickyBookingCTA'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aesthetic Arts Skin Boutique | Cosmetic Treatments in Toronto',
  description: 'Professional aesthetic treatments including micro-needling, anti-wrinkle injections, dermal fillers, and hair restoration. Certified cosmetic nurse in Toronto.',
  keywords: 'aesthetic treatments, micro-needling, botox, dermal fillers, hair restoration, Toronto, cosmetic nurse',
  authors: [{ name: 'Aesthetic Arts' }],
  openGraph: {
    title: 'Aesthetic Arts Skin Boutique',
    description: 'Professional aesthetic treatments in Toronto',
    url: 'https://www.aestheticarts.ca',
    siteName: 'Aesthetic Arts',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://www.aestheticarts.ca/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Aesthetic Arts Skin Boutique Logo',
      },
    ],
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '', // Add Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Aesthetic Arts Skin Boutique',
              image: 'https://www.aestheticarts.ca/logo.webp',
              logo: 'https://www.aestheticarts.ca/logo.webp',
              '@id': 'https://www.aestheticarts.ca',
              url: 'https://www.aestheticarts.ca',
              telephone: '416-991-SKIN',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2444 Danforth Avenue',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                postalCode: 'M4C 1K9',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.6884,
                longitude: -79.3047,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                ],
                opens: '10:00',
                closes: '17:00',
              },
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyBookingCTA />
      </body>
    </html>
  )
}

