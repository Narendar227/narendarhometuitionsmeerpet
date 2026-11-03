import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { MapSection } from '@/components/site/map-section'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Narendar Home Tuitions Meerpet. Call, WhatsApp or send a message to book a parent enquiry.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        description="Reach out and we'll match your child with the perfect tutor. Call, WhatsApp or send us a message."
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      <MapSection />
    </PageShell>
  )
}
