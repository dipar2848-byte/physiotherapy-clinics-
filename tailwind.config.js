/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E7C86',
          dark: '#0a5d65',
          light: '#13a0ad',
        },
        secondary: {
          DEFAULT: '#14B8A6',
          light: '#5eead4',
        },
        accent: {
          DEFAULT: '#22C55E',
          light: '#86efac',
        },
        ink: '#0F172A',
        canvas: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        // Claymorphism: soft outer + inner highlight
        clay: '10px 10px 30px rgba(14,124,134,0.10), -8px -8px 24px rgba(255,255,255,0.9), inset 1px 1px 1px rgba(255,255,255,0.6)',
        'clay-sm': '6px 6px 16px rgba(14,124,134,0.08), -4px -4px 12px rgba(255,255,255,0.85), inset 1px 1px 1px rgba(255,255,255,0.5)',
        'clay-lg': '16px 16px 44px rgba(14,124,134,0.14), -12px -12px 34px rgba(255,255,255,0.95), inset 2px 2px 2px rgba(255,255,255,0.7)',
        'clay-inset': 'inset 6px 6px 14px rgba(14,124,134,0.10), inset -6px -6px 14px rgba(255,255,255,0.9)',
        'glow': '0 12px 40px -8px rgba(14,124,134,0.45)',
        'glow-accent': '0 12px 40px -8px rgba(34,197,94,0.45)',
      },
      borderRadius: {
        clay: '28px',
        'clay-lg': '36px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'blob': 'blob 18s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
