import { useState } from 'react'
import { CLINIC, waLink, telLink } from '../config.js'
import SectionHeader from './SectionHeader.jsx'
import { Phone, WhatsApp, Mail, MapPin, Clock, Check, ArrowRight } from './Icons.jsx'

const SERVICES = [
  'Sports Injury Rehab', 'Posture Correction', 'Pain Management',
  'Neuro Rehabilitation', 'Post Surgery Recovery', 'Mobility Training',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = document.getElementById('name')?.value || ''
    const phone = document.getElementById('phone')?.value || ''
    const email = document.getElementById('email')?.value || ''
    const service = document.getElementById('service')?.value || ''
    const message = document.getElementById('msg')?.value || ''

    const whatsappMessage = `
🏥 New Appointment Request

👤 Full Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🩺 Service: ${service || 'Not specified'}

📝 Patient Message:
${message || 'No additional details provided'}
    `.trim()

    window.open(waLink(whatsappMessage), '_blank')

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-site container-px">
        <SectionHeader
          eyebrow="Get started"
          title="Book your appointment"
          subtitle="Reach out the way you prefer — call, WhatsApp, or drop us a message. We usually reply within minutes."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Quick contact channels */}
          <div className="reveal lg:col-span-2 space-y-4">
            <a
              href={telLink()}
              className="flex items-center gap-4 clay-card p-5 hover:-translate-y-0.5 transition-transform"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary text-white shadow-glow shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink/50 uppercase tracking-wide">Call us</span>
                <span className="block font-bold">{CLINIC.phone}</span>
              </span>
              <ArrowRight className="w-5 h-5 text-ink/25 ml-auto" />
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 clay-card p-5 hover:-translate-y-0.5 transition-transform"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-accent text-white shadow-glow-accent shrink-0">
                <WhatsApp className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink/50 uppercase tracking-wide">WhatsApp</span>
                <span className="block font-bold">Chat instantly</span>
              </span>
              <ArrowRight className="w-5 h-5 text-ink/25 ml-auto" />
            </a>

            <div className="clay-card p-5 space-y-3.5">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                  {CLINIC.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-ink/70">{CLINIC.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-ink/70">{CLINIC.hours}</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="reveal lg:col-span-3 clay-card p-6 sm:p-8"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" id="name" placeholder="Your name" required />
              <Field label="Phone" id="phone" type="tel" placeholder="+91 90000 00000" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Field label="Email" id="email" type="email" placeholder="you@email.com" />

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-ink/70">
                  Service
                </label>
                <select
                  id="service"
                  className="w-full rounded-2xl bg-canvas shadow-clay-inset px-4 py-3 text-ink/80 outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="msg" className="block text-sm font-medium mb-1.5 text-ink/70">
                How can we help?
              </label>
              <textarea
                id="msg"
                rows={4}
                placeholder="Tell us briefly about your condition…"
                className="w-full rounded-2xl bg-canvas shadow-clay-inset px-4 py-3 text-ink/80 outline-none resize-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-5">
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Request received! We'll call you shortly
                </>
              ) : (
                'Request Appointment'
              )}
            </button>

            <p className="mt-3 text-center text-xs text-ink/45">
              Prefer to talk now?{' '}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold"
              >
                Message us on WhatsApp →
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5 text-ink/70">
        {label} {required && <span className="text-accent">*</span>}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl bg-canvas shadow-clay-inset px-4 py-3 text-ink/80 placeholder:text-ink/35 outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}