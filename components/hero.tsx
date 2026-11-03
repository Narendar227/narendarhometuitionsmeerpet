import { Button } from '@/components/ui/button'
import { CheckCircle2, GraduationCap, Star, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const trustPoints = ['All Boards', 'LKG to Degree', 'Verified Tutors']

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary/40 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 size-72 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 md:px-6 md:pb-24 lg:grid-cols-2">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Manikonda, Hyderabad
          </span>

          <h1 className="mt-5 text-pretty font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Narendar Home Tuitions Meerpet Services in{' '}
            <span className="relative whitespace-nowrap text-primary">
              Manikonda
              <span
                className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-accent/50"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Experienced home tutors for all classes, all subjects &amp; all boards. Personalised
            one-on-one learning at the comfort of your home.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/join-tutor" />}
              size="lg"
              className="h-12 gap-2 rounded-full px-7 text-base font-semibold shadow-md shadow-primary/20"
            >
              <GraduationCap className="size-5" />
              Join as Tutor
            </Button>
            <Button
              render={<Link href="/join-parent" />}
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-full border-2 px-7 text-base font-semibold"
            >
              <UserPlus className="size-5" />
              Join as Parent
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-primary/10" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
            <Image
              src="/hero-tutor.png"
              alt="A home tutor teaching a student at a study desk"
              width={720}
              height={640}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg md:left-8 animate-float-slow">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Star className="size-6 fill-current" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none text-foreground">1000+</p>
              <p className="text-xs text-muted-foreground">Happy Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
