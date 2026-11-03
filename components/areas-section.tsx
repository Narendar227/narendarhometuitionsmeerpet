import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MapPin } from 'lucide-react'

const areas = [
  'Narsingi',
  'Khajaguda',
  'Manikonda',
  'Neknampur',
  'Nanakramguda',
  'Makthakousarali',
  'IS Sadan',
  'Gachibowli',
  'Puppalguda',
  'Kokapet',
  'Financial District, Nanakramguda',
  'KPR Colony, Manikonda',
  'Tapovan Park, Manikonda',
  'Indira Nagar, Gachibowli',
  'Telecom Nagar, Gachibowli',
  'Shirdi Sai Nagar, Manikonda',
  'Sri Laxmi Nagar Colony, Manikonda',
  'Nemali Nagar, Financial District',
  'P Janardhan Reddy Nagar, Gachibowli',
  'Greenland Colony, Madhava Reddy Colony, Gachibowli',
]

export function AreasSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Home tutors across West Hyderabad"
          description="We provide doorstep tuition services throughout Manikonda and its neighbouring localities."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <Reveal key={area} delay={(i % 4) * 70}>
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-5 py-3.5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span className="font-medium text-foreground">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-muted-foreground">
            Not sure if we cover your area?{' '}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Get in touch
            </a>{' '}
            — we&apos;re expanding fast.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
