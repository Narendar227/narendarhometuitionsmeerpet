import { Reveal } from '@/components/reveal'
import { Award, BookOpen, HeartHandshake, Users } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  {
    icon: Users,
    title: 'One-on-One Focus',
    text: 'Dedicated attention tailored to every student’s pace and learning style.',
  },
  {
    icon: BookOpen,
    title: 'Concept Clarity',
    text: 'We build strong fundamentals instead of encouraging rote learning.',
  },
  {
    icon: Award,
    title: 'Qualified Tutors',
    text: 'Handpicked, experienced and background-verified home tutors.',
  },
  {
    icon: HeartHandshake,
    title: 'Parent Partnership',
    text: 'Regular progress updates so parents always stay in the loop.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <Reveal className="relative order-last lg:order-first">
          <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-accent/20" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
            <Image
              src="/about-teaching.png"
              alt="Tutor and student celebrating progress during a home tuition session"
              width={680}
              height={560}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              About Narendar Home Tuitions Meerpet
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Narendar Home Tuitions Meerpet is Manikonda&apos;s trusted name for personalised home tutoring.
              For years we have connected families with dedicated, experienced tutors who make
              learning simple, engaging and effective — right at your doorstep.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether your child needs help catching up, wants to top the class, or is preparing for
              board exams, we match them with the perfect tutor for their needs and goals.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
