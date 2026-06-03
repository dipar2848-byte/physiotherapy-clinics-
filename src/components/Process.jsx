import { PROCESS } from '../data.js'
import SectionHeader from './SectionHeader.jsx'

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="max-w-site container-px">
        <SectionHeader
          eyebrow="How it works"
          title="Your journey to recovery"
          subtitle="A clear, structured path — so you always know exactly where you are and what comes next."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {/* connecting line on desktop */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20" />

          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="reveal relative text-center"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative inline-grid place-items-center mb-5">
                <span className="grid place-items-center w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-3xl bg-white shadow-clay text-2xl font-bold text-primary">
                  {p.step}
                </span>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold grid place-items-center shadow-glow-accent">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed max-w-xs mx-auto">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
