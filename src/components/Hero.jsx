import { CLINIC, waLink } from '../config.js'
import { WhatsApp, Calendar, Star, Shield, Check } from './Icons.jsx'

const BADGES = [
  { icon: Shield, text: 'Certified Therapists' },
  { icon: Star, text: '4.9 / 5 Patient Rating' },
  { icon: Check, text: 'Evidence-Based Care' },
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Soft animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-16 w-[26rem] h-[26rem] rounded-full bg-primary/15 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="max-w-site container-px grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {CLINIC.tagline}
          </span>
          <h1 className="font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Recover faster.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Move without limits.
            </span>
          </h1>
          <p className="mt-6 text-lg text-ink/65 max-w-xl">
            Premium, personalised physiotherapy that treats the root cause — not just the
            symptoms. From sports injuries to post-surgery rehab, we build measurable recovery
            plans around <span className="text-ink font-semibold">you</span>.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary text-base">
              <Calendar className="w-5 h-5" /> Book Appointment
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base"
            >
              <WhatsApp className="w-5 h-5" /> WhatsApp Chat
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white shadow-clay-sm text-primary">
                  <b.icon className="w-4 h-4" />
                </span>
                {b.text}
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <div className="relative">
            <div className="clay-card p-6 sm:p-8 animate-float">
              {/* Mock progress dashboard */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-ink/50">Your Recovery</p>
                  <p className="text-2xl font-bold">On track 🎯</p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold">
                  +18% this week
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: 'Mobility', pct: 86 },
                  { label: 'Strength', pct: 72 },
                  { label: 'Pain reduction', pct: 94 },
                ].map((m, i) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-ink/70 font-medium">{m.label}</span>
                      <span className="text-primary font-semibold">{m.pct}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-canvas shadow-clay-inset overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${m.pct}%`, transitionDelay: `${i * 150}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-canvas/70 shadow-clay-inset">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white shadow-glow shrink-0">
                  <Check className="w-5 h-5" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold">Next session confirmed</p>
                  <p className="text-ink/55">Tomorrow · 10:30 AM with Dr. Mehta</p>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 clay-card px-5 py-3.5 animate-float" style={{ animationDelay: '2s' }}>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-xs text-ink/55">recovery success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
