// AppV2.jsx — Version 2: Neo-Tech Blue glassmorphism
// Deep navy background (#020817), blue-400 accent, frosted glass cards, bento project grid

import React from 'react'

// Import all V2 components — each is a redesign of the V1 equivalent
import Navbar     from './components-v2/Navbar'
import Hero       from './components-v2/Hero'
import Stats      from './components-v2/Stats'
import Projects   from './components-v2/Projects'
import Skills     from './components-v2/Skills'
import Experience from './components-v2/Experience'
import Interests  from './components-v2/Interests'
import Contact    from './components-v2/Contact'
import Footer     from './components-v2/Footer'

function AppV2() {
  return (
    // Deep navy base — the V2 design system background (#020817)
    <div className="bg-[#F5F0E8] text-[#1A1410] overflow-x-hidden">
      {/* Blue-accent frosted navigation */}
      <Navbar />

      <main>
        {/* Full-viewport blue hero — typewriter, CTAs, glow blobs */}
        <Hero />
        <Stats />
        {/* Bento grid — mixed-size glass project cards */}
        <Projects />
        {/* Tag cloud skills with blue glow on hover */}
        <Skills />
        {/* Timeline — blue accent dot */}
        <Experience />
        {/* Horizontal interest strip */}
        <Interests />
        {/* Contact form — glass style */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default AppV2
