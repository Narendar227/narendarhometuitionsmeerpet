import { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Areas } from '@/components/site/areas'

export const metadata: Metadata = {
  title: 'Service Zones | Narendar Home Tuitions',
  description:
    'Explore all Meerpet service zones of Narendar Home Tuitions across Meerpet, Hyderabad. Find home tutoring services in your neighborhood.',
  keywords: [
    'service zones',
    'coverage areas',
    'Hyderabad neighborhoods',
    'home tuition areas',
    'Narendar Home Tuitions',
  ],
}

export default function ServiceZonesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Zones"
        title="Our Coverage Areas"
        description="We are proud to serve nearby Meerpet localities across Meerpet, Hyderabad. Our certified tutors are available in your area to provide premium home tuition services."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Service Zones' },
        ]}
      />
      <Areas isHomepage={false} />
    </PageShell>
  )
}
