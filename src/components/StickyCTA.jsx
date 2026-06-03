import { waLink } from '../config.js'
import { WhatsApp, Calendar } from './Icons.jsx'

export default function StickyCTA() {
  return (
    <>
      {/* Sticky WhatsApp button — always visible, bottom right */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed z-50 bottom-20 right-4 lg:bottom-6 lg:right-6 group"
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
        <span className="relative grid place-items-center w-14 h-14 rounded-full bg-accent text-white shadow-glow-accent hover:scale-105 transition-transform">
          <WhatsApp className="w-7 h-7" />
        </span>
        <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-ink text-sm font-semibold px-3 py-1.5 rounded-full shadow-clay-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Sticky Book Appointment bar — mobile only */}
      <div className="lg:hidden fixed z-40 bottom-0 inset-x-0 p-3 bg-white/80 backdrop-blur-md border-t border-white/60 shadow-[0_-8px_24px_rgba(14,124,134,0.08)]">
        <a href="#contact" className="btn-primary w-full">
          <Calendar className="w-5 h-5" /> Book Appointment
        </a>
      </div>
    </>
  )
}
