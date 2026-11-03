import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link href="/" className="font-medium transition-colors hover:text-brand">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <ChevronRight className="size-4" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="font-medium transition-colors hover:text-brand">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-brand">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
