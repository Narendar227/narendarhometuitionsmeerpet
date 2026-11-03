import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '@/lib/site'
import { MessageCircle, Phone } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="bg-background py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-accent/30 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-6 size-48 rounded-full bg-primary-foreground/10 blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Give your child the head start they deserve
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/85">
                Book a parent enquiry today and see the difference a dedicated home tutor can make.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  render={<a href={PHONE_TEL} />}
                  size="lg"
                  className="h-12 gap-2 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  <Phone className="size-5" />
                  Call {PHONE_DISPLAY}
                </Button>
                <Button
                  render={<a href={WHATSAPP} target="_blank" rel="noopener noreferrer" />}
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 rounded-full border-2 border-primary-foreground/30 bg-transparent px-7 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
