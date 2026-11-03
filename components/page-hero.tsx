import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/40 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-32 size-72 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 pb-14 text-center md:px-6 md:pb-20">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
