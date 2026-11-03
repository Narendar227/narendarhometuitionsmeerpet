import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  display: 'swap',
})

const siteUrl = 'https://narendarhometuitions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Narendar Home Tuitions Meerpet | Home Tutors in Meerpet Hyderabad',
    template: '%s | Narendar Home Tuitions Meerpet',
  },
  description:
    'Narendar Home Tuitions Meerpet helps families enquire about one-to-one home tuition in Meerpet, Hyderabad for school classes, core subjects and CBSE, ICSE or State Board learning needs.',
  keywords: [
    'home tuition Hyderabad',
    'home tutors Meerpet',
    'home tuition Meerpet',
    'private tutors Hyderabad',
    'CBSE tuition Hyderabad',
    'ICSE home tuition Hyderabad',
    'home tuition near Jillelaguda',
    'one on one tutoring Meerpet',
    'Narendar Home Tuitions Meerpet',
    'home tutoring Almasguda',
    'tutors near Badangpet',
  ],
  authors: [{ name: 'Narendar Home Tuitions' }],
  creator: 'Narendar Home Tuitions',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Narendar Home Tuitions',
    title: 'Narendar Home Tuitions Meerpet | Home Tutors in Meerpet Hyderabad',
    description:
      'Expert, certified home tutors for all classes, subjects and boards in Meerpet, Hyderabad areas. Personalized learning with experienced tutors. Learn Today, Lead Tomorrow.',
    images: [
      {
        url: '/images/narendar-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Narendar Home Tuitions logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narendar Home Tuitions Meerpet | Home Tutors in Meerpet Hyderabad',
    description:
      'Expert home tutors for all classes, subjects and boards in Meerpet, Hyderabad areas.',
    images: ['/images/narendar-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102A43',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#business`,
  name: 'Narendar Home Tuitions',
  image: `${siteUrl}/images/narendar-logo.png`,
  url: siteUrl,
  telephone: '+91-6304079622',
  slogan: 'Learn Today, Lead Tomorrow',
  description:
    'Home tuition enquiries for families in Meerpet, Hyderabad, including nearby west Hyderabad localities.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Meerpet, Hyderabad',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '',
    addressCountry: 'IN',
  },
  areaServed: [
    'Meerpet',
    'Jillelaguda',
    'Badangpet',
    'Almasguda',
    'Nadergul',
    'Balapur',
    'Karmanghat',
    'LB Nagar',
    'Vanasthalipuram',
    'Hastinapuram',
    'BN Reddy Nagar',
    'Gurram Guda',
    'Turkayamjal',
    'Saroornagar',
    'Kothapet',
    'Champapet',
    'IS Sadan',
    'Santoshnagar',
    'RCI Road',
    'Mansoorabad',
  ],
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '21:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
