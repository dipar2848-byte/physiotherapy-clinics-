import { useState } from 'react'
import { THERAPIES } from '../data.js'
import SectionHeader from './SectionHeader.jsx'
import { Check, Sparkle, WhatsApp, ArrowRight } from './Icons.jsx'
import { waLink } from '../config.js'

export default function PlanBuilder() {
  const [selected, setSelected] = useState(['t1', 't4'])
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const toggle = (id) => {
    setGenerated(false)
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  const chosen = THERAPIES.filter((t) => selected.includes(t.id))
  const totalSessions = chosen.reduce((sum, t) => sum + t.sessions, 0)
  const weeks = Math.max(2, Math.ceil(totalSessions / 3))

  const generate = () => {
    if (!chosen.length) return
    setGenerating(true)
    setGenerated(false)
    setTimeout(() => {
      setGenerating(false)
      setGenerated(true)
    }, 1400)
  }

  return (
    <section id="planner" className="py-16 sm:py-24">
      <div className="max-w-site container-px">
        <SectionHeader
          eyebrow="Interactive demo"
          title="Build your recovery plan"
          subtitle="Select the therapies that fit your needs and preview a personalised plan in seconds. (Demo preview — our therapists finalise your real plan during assessment.)"
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Left: therapy picker */}
          <div className="reveal lg:col-span-3 clay-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold">Choose your therapies</h3>
              <span className="text-sm text-ink/50">{selected.length} selected</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {THERAPIES.map((t) => {
                const active = selected.includes(t.id)
                return (
                  <button
                    key={t.id}
                    onClick={() => toggle(t.id)}
                    className={`flex items-center gap-3 text-left p-4 rounded-2xl transition-all duration-200 ${
                      active
                        ? 'bg-primary/8 shadow-clay-inset'
                        : 'bg-canvas shadow-clay-sm hover:-translate-y-0.5 hover:shadow-clay'
                    }`}
                  >
                    <span
                      className={`grid place-items-center w-6 h-6 rounded-lg shrink-0 transition-colors ${
                        active ? 'bg-primary text-white' : 'bg-white shadow-clay-sm text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-sm">{t.name}</span>
                      <span className="block text-xs text-ink/50">
                        {t.sessions} sessions · {t.tag}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: recovery plan output */}
          <div className="reveal lg:col-span-2" style={{ transitionDelay: '120ms' }}>
            <div className="clay-card p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-2">
                <Sparkle className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">Your Recovery Plan</h3>
              </div>

              {/* Summary chips */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-canvas shadow-clay-inset p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{chosen.length}</p>
                  <p className="text-xs text-ink/55">Therapies</p>
                </div>
                <div className="rounded-2xl bg-canvas shadow-clay-inset p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{totalSessions}</p>
                  <p className="text-xs text-ink/55">Sessions</p>
                </div>
              </div>

              {/* Result area */}
              <div className="mt-5 flex-1 min-h-[180px] rounded-2xl bg-canvas/60 shadow-clay-inset p-4">
                {generating ? (
                  <div className="h-full grid place-items-center text-center">
                    <div>
                      <div className="mx-auto w-10 h-10 rounded-full border-[3px] border-primary/25 border-t-primary animate-spin" />
                      <p className="mt-3 text-sm text-ink/55">Building your plan…</p>
                    </div>
                  </div>
                ) : generated ? (
                  <div className="space-y-2.5 animate-fade-up">
                    <div className="flex items-center justify-between text-sm pb-2 border-b border-ink/5">
                      <span className="font-semibold text-accent">Plan ready ✓</span>
                      <span className="text-ink/50">~{weeks} weeks</span>
                    </div>
                    {chosen.map((t, i) => (
                      <div
                        key={t.id}
                        className="flex items-center justify-between text-sm animate-fade-up"
                        style={{ animationDelay: `${i * 70}ms` }}
                      >
                        <span className="flex items-center gap-2 text-ink/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {t.name}
                        </span>
                        <span className="text-ink/45">{t.sessions}×</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full grid place-items-center text-center text-sm text-ink/45 px-2">
                    {chosen.length
                      ? 'Hit “Generate Plan” to preview your personalised roadmap.'
                      : 'Select at least one therapy to begin.'}
                  </div>
                )}
              </div>

              <button
                onClick={generate}
                disabled={!chosen.length || generating}
                className="btn-primary w-full mt-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                <Sparkle className="w-4 h-4" />
                {generating ? 'Generating…' : 'Generate Plan'}
              </button>

              {generated && (
                <a
                  href={waLink(
                    `Hi! I built a recovery plan with ${chosen.length} therapies (${chosen
                      .map((t) => t.name)
                      .join(', ')}). I'd like to book an assessment.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full mt-3 animate-fade-up"
                >
                  <WhatsApp className="w-4 h-4" /> Send plan & book
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
