// ── Clinic configuration (single source of truth — reusable per client) ──

// IMPORTANT: WhatsApp number in international format WITHOUT '+' or spaces.
// Example for India: 91 followed by the 10-digit number.
export const CLINIC = {
  name: 'Pulse Physio',
  tagline: 'Move better. Live pain-free.',
  phone: '+91 98765 43210',
  phoneRaw: '919876543210', // tel: + wa.me
  whatsappNumber: '919876543210',
  email: 'care@pulsephysio.in',
  address: '2nd Floor, Wellness Tower, MG Road, Bengaluru, KA 560001',
  hours: 'Mon–Sat · 8:00 AM – 8:00 PM',
}

// Build a real, working WhatsApp deep link.
export const waLink = (message = 'Hello! I want to book a physiotherapy appointment.') =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = () => `tel:+${CLINIC.phoneRaw}`
