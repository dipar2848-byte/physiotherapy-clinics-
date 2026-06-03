export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`reveal max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-ink/60">{subtitle}</p>}
    </div>
  )
}
