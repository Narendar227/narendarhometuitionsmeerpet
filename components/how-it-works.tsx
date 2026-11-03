import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CalendarCheck, PhoneCall, Sparkles, UserCheck } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    text: 'Call or WhatsApp us with your child’s class, subjects and preferred timings.',
  },
  {
    icon: UserCheck,
    title: 'Get Matched',
    text: 'We handpick a verified tutor best suited to your requirements.',
  },
  {
    icon: CalendarCheck,
    title: 'Free Demo Class',
    text: 'Experience a no-obligation demo session before you decide.',
  },
  {
    icon: Sparkles,
    title: 'Start Learning',
    text: 'Begin regular classes and watch your child grow with confidence.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="Get started in 4 simple steps"
          description="Finding the right home tutor has never been easier. Here's how we make it happen."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative h-full rounded-3xl border border-border bg-card p-6 pt-8">
                <span className="absolute -top-4 left-6 flex size-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground shadow-sm">
                  {i + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
