import Image from 'next/image'
import { GraduationCap, HeartHandshake, MapPin, Users } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const STATS = [
  { icon: MapPin, value: 'Meerpet', label: 'Primary area' },
  { icon: Users, value: '1:1', label: 'Learning format' },
  { icon: GraduationCap, value: 'All', label: 'Core school boards' },
  { icon: HeartHandshake, value: 'Enquiry', label: 'Tutor matching' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-brand/5">
            <Image
              src="/images/meerpet-learning.png"
              alt="Personalized one-to-one home tutoring at a student's home"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-brand px-5 py-4 text-brand-foreground shadow-xl sm:block">
            <p className="font-serif text-2xl font-semibold">Learn Today,</p>
            <p className="font-serif text-2xl font-semibold text-gold">Lead Tomorrow</p>
          </div>
        </ScrollReveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Transforming Education through Dedicated Home Tutoring"
          />
          <ScrollReveal delay={80} className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Narendar Home Tuitions supports families looking for one-to-one home tuition in Meerpet, Hyderabad. We focus on thoughtful matching and quality learning through
              one-to-one personalized learning with highly qualified and experienced tutors who understand
              each student's unique learning style and academic needs.
            </p>
            <p>
              Our comprehensive approach combines structured curriculum, interactive teaching methods,
              and regular performance assessments. Whether your child needs foundation building, board exam preparation, or help with a core subject, tutor recommendations are shaped around the learner&apos;s needs and the family&apos;s preferred schedule.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <stat.icon className="mx-auto mb-2 size-6 text-gold" />
                <p className="font-serif text-2xl font-semibold text-brand">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
