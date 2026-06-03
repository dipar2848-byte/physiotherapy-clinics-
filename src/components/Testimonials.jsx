import { TESTIMONIALS } from '../data.js'
import SectionHeader from './SectionHeader.jsx'
import { Star } from './Icons.jsx'

const COLORS = ['from-primary to-secondary', 'from-secondary to-accent', 'from-accent to-primary', 'from-primary to-accent']

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="max-w-site container-px">
        <SectionHeader
          eyebrow="Patient stories"
          title="Real recoveries, real lives"
          subtitle="Thousands of patients have rebuilt their strength and confidence with us. Here are a few of their stories."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal clay-card p-7 hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            >
              <div className="flex items-center gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4" />
                ))}
              </div>
              <blockquote className="text-ink/75 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br ${
                    COLORS[i % COLORS.length]
                  } text-white font-bold shadow-glow`}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="block text-sm text-ink/50">{t.role}</span>
                </span>
                <span className="ml-auto text-xs font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-full">
                  {t.recovery}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
