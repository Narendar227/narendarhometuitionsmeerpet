'use client'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '@/lib/site'
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message us anytime', href: WHATSAPP },
  { icon: MapPin, label: 'Location', value: `${LOCATION}, Hyderabad`, href: '#map' },
  { icon: Clock, label: 'Hours', value: 'Mon – Sun, 6 AM – 11 PM' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Book your parent enquiry today
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Fill in the form and our team will call you back within a few hours to arrange the
              perfect tutor for your child.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => {
                const content = (
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </div>
                )
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg md:p-8">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your request has been received. Our team will call you shortly to schedule your
                    parent enquiry.
                  </p>
                  <Button
                    className="mt-6 rounded-full"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Parent / Student Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </Field>
                    <Field label="Phone Number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Class / Grade" htmlFor="grade">
                      <input
                        id="grade"
                        name="grade"
                        placeholder="e.g. Class 8"
                        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </Field>
                    <Field label="Board" htmlFor="board">
                      <select
                        id="board"
                        name="board"
                        defaultValue=""
                        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="" disabled>
                          Select board
                        </option>
                        <option>CBSE</option>
                        <option>ICSE</option>
                        <option>State Board</option>
                        <option>IB</option>
                        <option>IGCSE</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Subjects / Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us which subjects need support and preferred timings"
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </Field>

                  <Button type="submit" size="lg" className="mt-2 h-12 gap-2 rounded-full text-base font-semibold">
                    <Send className="size-5" />
                    Request Free Demo
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Prefer to talk? Call us at{' '}
                    <a href={PHONE_TEL} className="font-semibold text-primary hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div id="map" className="scroll-mt-24 overflow-hidden rounded-3xl border border-border shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-card px-5 py-3">
              <MapPin className="size-5 text-primary" />
              <span className="font-semibold text-foreground">Serving Manikonda &amp; nearby areas</span>
            </div>
            <iframe
              title="Narendar Home Tuitions Meerpet Manikonda location"
              src="https://maps.google.com/maps?q=17.395748,78.3748586&z=16&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}
