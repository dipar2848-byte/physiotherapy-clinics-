# Pulse Physio — Premium Physiotherapy Clinic Landing Page

A high-conversion, frontend-only landing page template for physiotherapy / rehabilitation clinics.
Built with **Vite + React + Tailwind CSS**. No backend, no auth, no real API calls — all mock data.

## ✨ Features

- **Hero** — outcome-driven headline, dual CTAs (Book + WhatsApp), soft animated background, mock trust badges & recovery dashboard.
- **Animated Stats** — count-up counters (Recovered Patients, Years Experience, Success Rate, Therapists).
- **Services** — 6 service cards with fake "Add to Plan" toggle UI.
- **Treatment Plan Builder** — simulated dashboard: pick therapies → "Generate Plan" → animated mock result. Pure UI, no logic/backend.
- **Process** — 4-step recovery journey.
- **Testimonials** — patient recovery story cards.
- **Contact** — click-to-call, real WhatsApp deep link, and a UI-only contact form.
- **Footer** — CTA banner, address, contact, social links, branding.
- **Conversion** — sticky always-visible WhatsApp button + sticky mobile "Book Appointment" bar + repeated CTAs.

## 🎨 Design

- Minimalistic premium healthcare aesthetic with **claymorphism** (soft elevation shadows).
- Mobile-first, generous spacing, smooth fade-in-on-scroll, subtle hover lift.
- Palette: Primary `#0E7C86`, Secondary `#14B8A6`, Accent `#22C55E`, BG `#F8FAFC`, Text `#0F172A`.
- Respects `prefers-reduced-motion`.

## ⚙️ Customise per client

Edit **`src/config.js`** — clinic name, phone, **WhatsApp number** (international format, no `+`), email, address, hours.
WhatsApp links use the real `https://wa.me/<number>?text=...` format throughout.

Content lives in **`src/data.js`** (services, therapies, process, testimonials, stats).

## 🚀 Scripts

```bash
npm install      # install deps
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build → dist/
npm run preview  # preview the build
```
