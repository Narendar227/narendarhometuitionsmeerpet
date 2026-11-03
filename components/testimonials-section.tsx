import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Lakshmi Prasad',
    role: 'Parent, Class 9 · CBSE',
    initials: 'LP',
    text: 'My son’s maths scores jumped from 60% to 90% in just one term. The tutor is patient and truly cares about his progress.',
  },
  {
    name: 'Sridevi Reddy',
    role: 'Parent, Class 6 · ICSE',
    initials: 'SR',
    text: 'Very professional service. They matched us with a wonderful tutor within two days and the parent enquiry helped us decide instantly.',
  },
  {
    name: 'Mohammed Arif',
    role: 'Parent, Intermediate · State Board',
    initials: 'MA',
    text: 'The doorstep classes saved us so much travel time. My daughter feels much more confident before her board exams now.',
  },
  {
    name: 'Anita Sharma',
    role: 'Parent, Class 3 · CBSE',
    initials: 'AS',
    text: 'Fun and engaging classes for my little one. She now looks forward to her tuition sessions every day!',
  },
  {
    name: 'Ravi Teja',
    role: 'Parent, Class 10 · CBSE',
    initials: 'RT',
    text: 'Regular progress updates and structured study plans made a huge difference. Highly recommend Narendar Home Tuitions Meerpet.',
  },
  {
    name: 'Priya Menon',
    role: 'Parent, Degree · B.Com',
    initials: 'PM',
    text: 'Found a great accountancy tutor for my son’s graduation subjects. Affordable and dependable service.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by parents across Manikonda"
          description="Don't just take our word for it — hear what families have to say about their experience."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <Quote className="size-8 text-accent" />
                <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
