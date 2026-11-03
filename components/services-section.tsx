import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Baby, BookMarked, FlaskConical, GraduationCap, Languages, Laptop, PencilRuler, Trophy } from 'lucide-react'

const services = [
  {
    icon: Baby,
    title: 'Primary Tuition',
    text: 'Building strong foundations for LKG to Class 5 with playful, engaging methods.',
  },
  {
    icon: BookMarked,
    title: 'Middle & High School',
    text: 'Subject-wise coaching for Classes 6 to 10 across every board.',
  },
  {
    icon: FlaskConical,
    title: 'Intermediate / +1 & +2',
    text: 'MPC, BiPC and commerce coaching from experienced subject specialists.',
  },
  {
    icon: GraduationCap,
    title: 'Degree Tuition',
    text: 'Support for graduation-level subjects and university coursework.',
  },
  {
    icon: Trophy,
    title: 'Exam & Board Prep',
    text: 'Focused revision, mock tests and time-management strategies.',
  },
  {
    icon: Languages,
    title: 'Language Coaching',
    text: 'English, Hindi, Telugu and spoken-language improvement classes.',
  },
  {
    icon: Laptop,
    title: 'Online Tuition',
    text: 'Live one-on-one online classes for students who prefer remote learning.',
  },
  {
    icon: PencilRuler,
    title: 'Doubt-Clearing Sessions',
    text: 'On-demand help sessions before tests and assignments.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Tutoring for every stage of learning"
          description="From tiny tots to degree students, we offer a complete range of home tuition services tailored to each level."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/25 text-primary transition-transform group-hover:scale-110">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
