import type { ReactNode } from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { FloatingButtons } from './floating-buttons'
import { Contact } from './contact'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
