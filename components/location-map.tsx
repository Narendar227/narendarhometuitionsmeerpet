import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { LOCATION } from '@/lib/site'
import { MapPin } from 'lucide-react'

export function LocationMap() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="Serving Manikonda &amp; West Hyderabad"
          description="We are based in Manikonda and provide doorstep home tuitions across the surrounding localities."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md">
            <div className="flex items-center gap-2.5 border-b border-border px-5 py-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <span className="font-semibold text-foreground">{LOCATION}, Hyderabad, Telangana</span>
            </div>
            <iframe
              title={`Map of ${LOCATION}, Hyderabad`}
              src="https://maps.google.com/maps?q=17.395748,78.3748586&z=16&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
