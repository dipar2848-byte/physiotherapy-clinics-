import { CLINIC, waLink, telLink } from '../config.js'
import { Phone, WhatsApp, Mail, MapPin } from './Icons.jsx'

const SOCIALS = [
  { label: 'Instagram', href: '#', d: 'M12 2c2.7 0 3 0 4.1.06 1 .05 1.6.22 2 .36.5.2.85.43 1.23.8.37.38.6.73.8 1.23.14.4.31 1 .36 2C20.7 7.7 20.7 8 20.7 12s0 4.3-.06 5.4c-.05 1-.22 1.6-.36 2-.2.5-.43.85-.8 1.23-.38.37-.73.6-1.23.8-.4.14-1 .31-2 .36-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.22-2-.36-.5-.2-.85-.43-1.23-.8-.37-.38-.6-.73-.8-1.23-.14-.4-.31-1-.36-2C3.3 16.3 3.3 16 3.3 12s0-4.3.06-5.4c.05-1 .22-1.6.36-2 .2-.5.43-.85.8-1.23.38-.37.73-.6 1.23-.8.4-.14 1-.31 2-.36C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z' },
  { label: 'Facebook', href: '#', d: 'M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.7 0 14.6 0 12.1 0 10.5 1.5 10.5 4.2V6H8v3h2.5v9H14V9z' },
  { label: 'YouTube', href: '#', d: 'M23 7.5a3 3 0 00-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 001 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5a3 3 0 002.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 002.1-2.1c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM9.7 15.3V8.7l5.7 3.3-5.7 3.3z' },
]

export default function Footer() {
  return (
    <footer className="mt-8 pb-28 lg:pb-10">
      <div className="max-w-site container-px">
        {/* CTA banner */}
        <div className="reveal relative overflow-hidden rounded-clay-lg bg-gradient-to-br from-primary to-primary-dark text-white p-8 sm:p-12 shadow-clay-lg">
          <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Ready to move pain-free?
              </h3>
              <p className="mt-2 text-white/80">
                Book your first assessment today — your recovery starts with one message.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href={telLink()} className="btn bg-white text-primary hover:-translate-y-0.5 shadow-clay">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-accent">
                <WhatsApp className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Footer body */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 13h4l2-6 3 11 3-14 2 9h4" />
                </svg>
              </span>
              <span className="font-bold text-lg">{CLINIC.name}</span>
            </div>
            <p className="mt-4 text-sm text-ink/55 max-w-xs">
              Premium physiotherapy & rehabilitation. Helping you move better and live pain-free.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid place-items-center w-9 h-9 rounded-full bg-white shadow-clay-sm text-ink/60 hover:text-primary hover:-translate-y-0.5 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Services"
            links={['Sports Injury Rehab', 'Posture Correction', 'Pain Management', 'Neuro Rehab', 'Post Surgery Recovery']}
          />
          <FooterCol
            title="Clinic"
            links={['About Us', 'Our Therapists', 'Process', 'Patient Stories', 'FAQs']}
          />

          <div>
            <h4 className="font-bold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-ink/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={telLink()} className="hover:text-primary">{CLINIC.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">{CLINIC.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-ink/45">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm text-ink/60">
        {links.map((l) => (
          <li key={l}>
            <a href="#services" className="hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
