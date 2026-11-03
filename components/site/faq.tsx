'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const FAQS = [
  { q: 'How can I find a home tutor in Meerpet?', a: 'Share the student’s class, board, subjects and preferred locality through our parent enquiry form or by phone. We will review the requirement and discuss suitable tutor options for your home.' },
  { q: 'Which classes and subjects are covered?', a: 'We accept enquiries for school classes and commonly requested subjects including mathematics, science, English, social studies and languages. Availability depends on the specific requirement.' },
  { q: 'Do you support CBSE, ICSE and Telangana State Board?', a: 'Yes, we can discuss home tuition requirements for CBSE, ICSE and State Board students and match the request with relevant subject and curriculum experience.' },
  { q: 'Do you provide home tuition near Jillelaguda?', a: 'Jillelaguda is one of the Meerpet-area localities covered in our service-zone enquiries. Contact us to confirm a suitable tutor for your schedule.' },
  { q: 'Can I enquire about tutors near Badangpet or Almasguda?', a: 'Yes. Tell us the exact locality, class and subject when you enquire so we can check the most relevant tutor options around Badangpet or Almasguda.' },
  { q: 'How does the tutor-matching process work?', a: 'We first understand the student’s learning goals, subjects, board, schedule and locality. We then use that information to discuss an appropriate tutor profile before classes begin.' },
  { q: 'Is tuition available in nearby Meerpet localities?', a: 'We receive enquiries from Nadergul, Balapur, Karmanghat, LB Nagar, Hastinapuram, Vanasthalipuram and other nearby areas. Please contact us to confirm current coverage.' },
  { q: 'How do I contact Narendar Home Tuitions Meerpet?', a: 'Call or WhatsApp the number shown on this website, or use the parent enquiry form. Include a preferred callback time and the student’s tuition requirement so we can respond clearly.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-base font-semibold text-brand">{q}</span>
        <span
          className={cn(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
            open ? 'bg-brand text-brand-foreground' : 'bg-secondary text-brand',
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about our home tuition services."
          className="mx-auto"
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={(i % 4) * 60}>
              <FaqItem q={faq.q} a={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
