'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Which classes and boards do you cover?',
    a: 'We provide home tutors for all classes from LKG to Degree level, and for all major boards including CBSE, ICSE, State Board, IB and IGCSE.',
  },
  {
    q: 'Is the demo class really free?',
    a: 'Yes! We offer a completely free, no-obligation demo class so you can experience the tutor’s teaching style before committing to regular sessions.',
  },
  {
    q: 'Are your tutors verified?',
    a: 'Absolutely. Every tutor is personally interviewed, background-verified and rated by parents to ensure safety and quality.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Manikonda, Puppalaguda, Narsingi, Khajaguda, Gachibowli, Financial District and IS Sadan. Contact us to check availability in your locality.',
  },
  {
    q: 'How are the fees decided?',
    a: 'Fees depend on the class, subject and number of sessions per week. We keep our pricing transparent and affordable with no hidden charges — just call us for a quick quote.',
  },
  {
    q: 'Do you offer online tuition as well?',
    a: 'Yes, we offer live one-on-one online classes for students who prefer remote learning, with the same quality tutors.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before booking your first class."
        />

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.q} delay={(i % 3) * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
