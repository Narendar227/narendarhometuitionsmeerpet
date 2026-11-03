import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { About } from '@/components/site/about'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Narendar Home Tuitions Meerpet — a trusted home tuition service in Hyderabad connecting families with experienced, verified tutors.',
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About Narendar Home Tuitions Meerpet"
        description="Dedicated to helping every student reach their full academic potential with experienced, verified home tutors."
        breadcrumbItems={[{ label: 'About Us' }]}
      />
      <About />
    </PageShell>
  )
}
