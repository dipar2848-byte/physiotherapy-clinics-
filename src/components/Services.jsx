import { SERVICES } from '../data.js'
import SectionHeader from './SectionHeader.jsx'
import { ArrowRight } from './Icons.jsx'
import { waLink } from '../config.js'

function ServiceCard({ service, delay }) {
  const Icon = service.icon

  const message = `Hi! I want to book a physiotherapy session for ${service.title}`

  return (
    <div
      className="reveal group clay-card p-7 hover:-translate-y-1.5 hover:shadow-clay-lg transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow group-hover:scale-105 transition-transform">
          <Icon className="w-7 h-7" />
        </span>

        <ArrowRight className="w-5 h-5 text-ink/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>

      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-2 text-ink/60 leading-relaxed">{service.desc}</p>

      {/* NEW CTA BUTTON */}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full btn-primary text-sm inline-flex items-center justify-center gap-2"
      >
        Book on WhatsApp
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-site container-px">
        <SectionHeader
          eyebrow="What we treat"
          title="Specialised care for every recovery"
          subtitle="Comprehensive physiotherapy services delivered by certified specialists, tailored to your body and your goals."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i % 3) * 80} />
          ))}
        </div>

        {/* CTA repetition */}
        <div className="reveal mt-12 text-center">
          <a
            href={waLink('Hi! I would like to know which physiotherapy service is right for me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Not sure what you need? Ask us
          </a>
        </div>
      </div>
    </section>
  )
}