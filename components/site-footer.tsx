import { BUSINESS_NAME, LOCATION, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '@/lib/site'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const areas = [
  'Manikonda',
  'Puppalaguda',
  'Narsingi',
  'Khajaguda',
  'Gachibowli',
  'Financial District',
  'IS Sadan',
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-primary-foreground">
                <Image
                  src="/images/narendar-logo.png"
                  alt={`${BUSINESS_NAME} logo`}
                  width={96}
                  height={96}
                  className="size-full object-contain p-1"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold">{BUSINESS_NAME}</span>
                <span className="block text-xs text-primary-foreground/70">{LOCATION}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Trusted home tuition services in Manikonda — experienced tutors for all classes, all
              subjects and all boards.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
              Areas We Serve
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="size-4 text-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
              Get In Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-3 text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <Phone className="size-4" />
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  className="flex items-center gap-3 text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <MessageCircle className="size-4" />
                  </span>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-sm text-primary-foreground/70">
          <p>
            Copyright © 2026 {BUSINESS_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
