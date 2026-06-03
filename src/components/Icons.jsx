// Lightweight inline SVG icons (no icon library dependency).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const WhatsApp = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.107zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

export const Phone = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
)

export const Calendar = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}>
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)

export const Check = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}><path d="M20 6L9 17l-5-5" /></svg>
)

export const Mail = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}>
    <rect x="2" y="4" width="20" height="16" rx="3" /><path d="m2 7 10 6 10-6" />
  </svg>
)

export const MapPin = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export const Clock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)

export const Star = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export const Sparkle = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
  </svg>
)

export const Shield = ({ className = 'w-6 h-6' }) => (
  <svg className={className} {...base}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
  </svg>
)

export const ArrowRight = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

// Service icons
export const Running = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <circle cx="17" cy="4" r="2" /><path d="M14 7l-3 2 2 4 3-1M11 9l-3 5 3 4M13 13l4 1 1 4" />
  </svg>
)
export const Posture = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="4" r="2" /><path d="M12 6v7M12 13l-4 7M12 13l4 7M7 9h10" />
  </svg>
)
export const Pain = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5 5.5 5 8 5 9 7 12 7s4-2 6.5-2C22 5 23.5 9 21.5 12.5 19 16.65 12 21 12 21z" />
  </svg>
)
export const Brain = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 003 4 3 3 0 002 4 3 3 0 003-2V4a3 3 0 00-3 0zM15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-3 4 3 3 0 01-2 4" />
  </svg>
)
export const Surgery = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" />
  </svg>
)
export const Mobility = ({ className = 'w-7 h-7' }) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="4" r="2" /><path d="M12 6v6m0 0l4 6m-4-6l-4 6M5 9l7 2 7-2" />
  </svg>
)
