import { Reveal } from '@/components/reveal'
import { CheckCircle2, GraduationCap, Layers } from 'lucide-react'

const classes = [
  'LKG & UKG',
  'Class 1 – 5',
  'Class 6 – 8',
  'Class 9 – 10',
  'Intermediate (+1 / +2)',
  'Degree / Graduation',
]

const boards = [
  { name: 'CBSE', desc: 'Central Board' },
  { name: 'ICSE', desc: 'Council Board' },
  { name: 'State Board', desc: 'Telangana / AP' },
  { name: 'IB', desc: 'International Baccalaureate' },
  { name: 'IGCSE', desc: 'Cambridge' },
]

export function ClassesBoards() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Layers className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
              Classes We Cover
            </h2>
            <p className="mt-2 text-muted-foreground">From LKG all the way to Degree level.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {classes.map((cls) => (
                <li
                  key={cls}
                  className="flex items-center gap-2.5 rounded-xl bg-secondary/70 px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  {cls}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/25 text-primary">
              <GraduationCap className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
              Boards We Support
            </h2>
            <p className="mt-2 text-muted-foreground">
              Expert tutors familiar with every major curriculum.
            </p>
            <ul className="mt-6 grid gap-3">
              {boards.map((board) => (
                <li
                  key={board.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 transition-colors hover:border-primary/30"
                >
                  <span className="font-display text-lg font-bold text-primary">{board.name}</span>
                  <span className="text-sm text-muted-foreground">{board.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
