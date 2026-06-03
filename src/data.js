import {
  Running, Posture, Pain, Brain, Surgery, Mobility,
} from './components/Icons.jsx'

export const SERVICES = [
  {
    id: 'sports',
    icon: Running,
    title: 'Sports Injury Rehab',
    desc: 'Targeted recovery programs to get athletes back to peak performance — safely and fast.',
  },
  {
    id: 'posture',
    icon: Posture,
    title: 'Posture Correction',
    desc: 'Fix desk-related strain, rounded shoulders and back pain with guided corrective therapy.',
  },
  {
    id: 'pain',
    icon: Pain,
    title: 'Pain Management',
    desc: 'Evidence-based, drug-free relief for chronic neck, back, knee and joint pain.',
  },
  {
    id: 'neuro',
    icon: Brain,
    title: 'Neuro Rehabilitation',
    desc: 'Restore movement and independence after stroke, injury or neurological conditions.',
  },
  {
    id: 'postsurgery',
    icon: Surgery,
    title: 'Post Surgery Recovery',
    desc: 'Structured rehabilitation after orthopaedic surgery to rebuild strength and mobility.',
  },
  {
    id: 'mobility',
    icon: Mobility,
    title: 'Mobility Training',
    desc: 'Improve flexibility, balance and functional movement for everyday confidence.',
  },
]

// Therapies for the Treatment Plan Builder (fake dashboard)
export const THERAPIES = [
  { id: 't1', name: 'Manual Therapy', sessions: 6, tag: 'Hands-on' },
  { id: 't2', name: 'Dry Needling', sessions: 4, tag: 'Pain relief' },
  { id: 't3', name: 'Electrotherapy (TENS)', sessions: 5, tag: 'Recovery' },
  { id: 't4', name: 'Strength & Conditioning', sessions: 8, tag: 'Rebuild' },
  { id: 't5', name: 'Postural Re-education', sessions: 6, tag: 'Alignment' },
  { id: 't6', name: 'Gait Training', sessions: 5, tag: 'Mobility' },
  { id: 't7', name: 'Hydrotherapy', sessions: 4, tag: 'Low impact' },
  { id: 't8', name: 'Sports Taping', sessions: 3, tag: 'Support' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Assessment',
    desc: 'A thorough physical evaluation to pinpoint the root cause — not just the symptoms.',
  },
  {
    step: '02',
    title: 'Treatment Plan',
    desc: 'A personalised, milestone-based recovery roadmap built around your goals.',
  },
  {
    step: '03',
    title: 'Therapy Sessions',
    desc: 'Expert-led hands-on sessions with continuous adjustment to your progress.',
  },
  {
    step: '04',
    title: 'Recovery Tracking',
    desc: 'Measurable progress reviews so you always know how far you have come.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Ananya Rao',
    role: 'Marathon Runner',
    quote:
      'After a stubborn knee injury I could barely jog. Pulse Physio rebuilt my strength step by step — I finished my half-marathon 12 weeks later.',
    recovery: 'Knee Injury · 12 weeks',
  },
  {
    name: 'Rohit Mehta',
    role: 'Software Engineer',
    quote:
      'Years of desk work left me with chronic neck and back pain. The posture programme genuinely changed my daily life. Zero painkillers now.',
    recovery: 'Chronic Back Pain · 8 weeks',
  },
  {
    name: 'Sunita Iyer',
    role: 'Retired Teacher',
    quote:
      'Recovering after my knee replacement felt overwhelming. The team made every session reassuring and I am walking confidently again.',
    recovery: 'Post Surgery · 10 weeks',
  },
  {
    name: 'Kabir Singh',
    role: 'Cricket Player',
    quote:
      'Their sports rehab is on another level. Clear plan, real tracking, and the WhatsApp follow-ups kept me accountable throughout.',
    recovery: 'Shoulder Rehab · 6 weeks',
  },
]

export const STATS = [
  { label: 'Recovered Patients', value: 12500, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
  { label: 'Expert Therapists', value: 24, suffix: '' },
]
