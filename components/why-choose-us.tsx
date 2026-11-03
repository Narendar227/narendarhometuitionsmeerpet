import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CalendarClock, MapPin, ShieldCheck, Sparkles, TrendingUp, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified & Trusted Tutors',
    text: 'Every tutor is background-checked, interviewed and rated by parents like you.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Timings',
    text: 'Choose class schedules that fit your child’s routine — mornings, evenings or weekends.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    text: 'Consistent improvement in grades, confidence and exam performance.',
  },
  {
    icon: Wallet,
    title: 'Affordable Fees',
    text: 'Transparent, pocket-friendly pricing with no hidden charges.',
  },
  {
    icon: MapPin,
    title: 'Doorstep Learning',
    text: 'Tutors come to your home so your child learns in a safe, familiar space.',
  },
  {
    icon: Sparkles,
    title: 'Personalised Plans',
    text: 'Custom study plans built around each student’s strengths and weak areas.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why parents in Manikonda trust us"
          description="We go beyond tutoring — we build confident, independent learners with a support system parents can rely on."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
