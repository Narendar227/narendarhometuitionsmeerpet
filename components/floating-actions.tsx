import { PHONE_TEL, WHATSAPP } from '@/lib/site'
import { MessageCircle, Phone } from 'lucide-react'

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="Call us now"
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
