import { STATS } from '../data.js'
import { useCountUp } from '../hooks/useCountUp.js'

function StatCard({ value, suffix, label, delay }) {
  const { value: v, ref } = useCountUp(value)
  return (
    <div
      ref={ref}
      className="reveal clay-card p-6 sm:p-8 text-center hover:-translate-y-1 transition-transform duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {v.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm sm:text-base text-ink/60 font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-site container-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
