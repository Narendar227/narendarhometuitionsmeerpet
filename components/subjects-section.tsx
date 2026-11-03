import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  Atom,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Leaf,
  Landmark,
  Laptop2,
  LineChart,
  PenTool,
} from 'lucide-react'

const subjects = [
  { icon: Calculator, label: 'Mathematics' },
  { icon: Atom, label: 'Physics' },
  { icon: FlaskConical, label: 'Chemistry' },
  { icon: Leaf, label: 'Biology' },
  { icon: Languages, label: 'English' },
  { icon: PenTool, label: 'Hindi & Telugu' },
  { icon: Globe2, label: 'Social Studies' },
  { icon: Landmark, label: 'Accountancy' },
  { icon: LineChart, label: 'Economics' },
  { icon: Laptop2, label: 'Computer Science' },
]

export function SubjectsSection() {
  return (
    <section id="subjects" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Subjects We Teach
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            All subjects, expertly covered
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Our tutors specialise across the full curriculum — pick any subject your child needs
            support with.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {subjects.map((subject, i) => (
            <Reveal key={subject.label} delay={(i % 5) * 70}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/20">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                  <subject.icon className="size-6" />
                </span>
                <span className="font-medium">{subject.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-primary-foreground/80">
          <p>...and many more. Just ask — we&apos;ll find the right specialist for you.</p>
        </Reveal>
      </div>
    </section>
  )
}
