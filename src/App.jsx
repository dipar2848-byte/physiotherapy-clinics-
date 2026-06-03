import { useReveal } from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import PlanBuilder from './components/PlanBuilder.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'

export default function App() {
  useReveal()

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <PlanBuilder />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
