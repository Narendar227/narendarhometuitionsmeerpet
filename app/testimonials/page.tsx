import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Testimonials } from '@/components/site/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read real feedback from families whose children learn with Narendar Home Tuitions Meerpet.',
}

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="What parents say about us"
        description="Real feedback from families whose children learn with Narendar Home Tuitions Meerpet."
        breadcrumbItems={[{ label: 'Testimonials' }]}
      />
      <Testimonials />
    </PageShell>
  )
}
