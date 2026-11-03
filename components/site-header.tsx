'use client'

import { Button } from '@/components/ui/button'
import { BUSINESS_NAME, LOCATION, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { GraduationCap, Menu, UserPlus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-background/70 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:h-20 md:px-6 lg:gap-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex size-11 items-center justify-center overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border md:size-12">
            <Image
              src="/images/narendar-logo.png"
              alt={`${BUSINESS_NAME} logo`}
              width={96}
              height={96}
              priority
              className="size-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-foreground md:text-lg">
              {BUSINESS_NAME}
            </span>
            <span className="block text-xs font-medium text-muted-foreground">{LOCATION}</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
          <Button
            render={<Link href="/join-tutor" />}
            variant="outline"
            size="lg"
            className="h-10 gap-2 rounded-full border-2 px-4 font-semibold"
          >
            <GraduationCap className="size-4" />
            Join as Tutor
          </Button>
          <Button
            render={<Link href="/join-parent" />}
            size="lg"
            className="h-10 gap-2 rounded-full px-4 font-semibold"
          >
            <UserPlus className="size-4" />
            Join as Parent
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={<Link href="/join-tutor" />}
              variant="outline"
              size="lg"
              className="mt-2 h-11 gap-2 rounded-full border-2 font-semibold"
              onClick={() => setOpen(false)}
            >
              <GraduationCap className="size-4" />
              Join as Tutor
            </Button>
            <Button
              render={<Link href="/join-parent" />}
              size="lg"
              className="h-11 gap-2 rounded-full font-semibold"
              onClick={() => setOpen(false)}
            >
              <UserPlus className="size-4" />
              Join as Parent
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
