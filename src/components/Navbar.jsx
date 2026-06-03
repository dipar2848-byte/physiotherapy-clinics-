import { useEffect, useState } from 'react'
import { CLINIC, waLink } from '../config.js'
import { Calendar } from './Icons.jsx'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#planner', label: 'Plan Builder' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <nav className="max-w-site container-px">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-md shadow-clay-sm border border-white/60'
              : 'bg-transparent'
          }`}
        >
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 13h4l2-6 3 11 3-14 2 9h4" />
              </svg>
            </span>
            <span className="font-bold text-lg tracking-tight">{CLINIC.name}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3.5 py-2 rounded-full text-sm font-medium text-ink/70 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 text-sm">
              <Calendar className="w-4 h-4" /> Book Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-white/80 shadow-clay-sm border border-white/60"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 clay-card p-4 animate-fade-up">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-ink/80 font-medium hover:bg-primary/5 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full mt-2"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
