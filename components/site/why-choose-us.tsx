import {
  Award,
  BadgeCheck,
  BrainCircuit,
  CalendarClock,
  ClipboardCheck,
  IndianRupee,
  UserRound,
  Users,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const FEATURES = [
  {
    icon: Award,
    title: 'Certified Expert Tutors',
    desc: 'Highly qualified educators with years of experience delivering proven academic results.',
  },
  {
    icon: BadgeCheck,
    title: 'Thoroughly Verified',
    desc: 'Complete background verification and credibility checks on all tutors for your child&apos;s safety.',
  },
  {
    icon: UserRound,
    title: 'Exclusive One-to-One',
    desc: 'Complete undivided attention with teaching methods customized to your child&apos;s learning style.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule Flexibility',
    desc: 'Classes at convenient times matching your family schedule and child&apos;s comfort.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Pricing',
    desc: 'Transparent fees with exceptional value for premium quality tutoring services.',
  },
  {
    icon: BrainCircuit,
    title: 'Deep Concept Mastery',
    desc: 'Building strong foundations and genuine understanding instead of superficial memorization.',
  },
  {
    icon: ClipboardCheck,
    title: 'Performance Tracking',
    desc: 'Regular detailed assessments, progress reports and continuous performance monitoring.',
  },
  {
    icon: Users,
    title: 'Customized Learning Plans',
    desc: 'Individualized curriculum designed around each student&apos;s strengths, weaknesses and goals.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Families Choose Narendar Home Tuitions"
          description="Expert tutors combined with proven teaching methodologies and comprehensive support for consistent academic excellence."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={(i % 4) * 80}
              className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mb-1.5 text-lg font-semibold text-brand">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
