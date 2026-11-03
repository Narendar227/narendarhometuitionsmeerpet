import { Quote, Star } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const TESTIMONIALS = [
  { name: 'Parent testimonial', role: 'Add verified parent feedback', quote: 'Share a verified parent experience here after receiving permission to publish it.', initials: 'PT' },
  { name: 'Student testimonial', role: 'Add verified student feedback', quote: 'Share a verified student learning story here after receiving permission to publish it.', initials: 'ST' },
  { name: 'Tutor testimonial', role: 'Add verified tutor feedback', quote: 'Share a verified tutor experience here after receiving permission to publish it.', initials: 'TT' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from the Narendar community"
          description="Verified feedback from parents, students and tutors can be added here as it becomes available."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={(i % 3) * 100}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <Quote className="size-8 text-gold" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
