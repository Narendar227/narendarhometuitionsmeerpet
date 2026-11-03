import {
  BookOpenCheck,
  GraduationCap,
  Home,
  PencilRuler,
  TrendingUp,
  UserRound,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const SERVICES = [
  {
    icon: Home,
    title: 'Premium Home Tuition',
    desc: 'Certified tutors teaching at your home with personalized curriculum, eliminating travel and maximizing learning time.',
  },
  {
    icon: UserRound,
    title: 'Expert Private Tutors',
    desc: 'Highly qualified private tutors carefully matched to your child&apos;s specific learning requirements and academic goals.',
  },
  {
    icon: GraduationCap,
    title: 'Personalized One-to-One Sessions',
    desc: 'Complete undivided attention with customized lesson plans designed specifically for your child&apos;s learning style.',
  },
  {
    icon: BookOpenCheck,
    title: 'Board Exam Coaching',
    desc: 'Comprehensive exam preparation with strategic planning, intensive practice tests and time management coaching.',
  },
  {
    icon: PencilRuler,
    title: 'Concept Clarity & Practice',
    desc: 'Strong foundation building with concept clarity, regular assignments and performance tracking for consistent progress.',
  },
  {
    icon: TrendingUp,
    title: 'Academic Excellence Programs',
    desc: 'Targeted intervention to improve weak subjects, boost grades and develop strong subject expertise.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Tutoring Solutions for Academic Excellence"
          description="Narendar Home Tuitions offers specialized services designed to deliver measurable academic improvement with expert guidance and personalized attention."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={(i % 3) * 100}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <span
                className="absolute right-5 top-5 font-serif text-5xl font-semibold text-secondary transition-colors group-hover:text-gold/20"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/80 text-brand-foreground shadow-lg shadow-brand/20">
                <service.icon className="size-7" />
              </span>
              <h3 className="mb-2 text-xl font-semibold text-brand">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
