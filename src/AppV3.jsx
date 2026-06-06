// AppV3.jsx — Version 3: Editorial Amber
// Warm near-black background (#0c0800), amber-400 accent, zero cards — flat lines only,
// numbered project list, and pure typography-driven layout

import React from 'react'

// Import all V3 components — editorial, minimal, text-first design
import Navbar     from './components-v3/Navbar'
import Hero       from './components-v3/Hero'
import About      from './components-v3/About'
import Stats      from './components-v3/Stats'
import Projects   from './components-v3/Projects'
import Skills     from './components-v3/Skills'
import Experience from './components-v3/Experience'
import Interests  from './components-v3/Interests'
import Contact    from './components-v3/Contact'
import Footer     from './components-v3/Footer'

function AppV3() {
  return (
    // Warm dark background — unique to V3, gives an editorial/print feel
    <div className="bg-[#0c0800] text-white overflow-x-hidden">
      {/* Amber-accent minimal navigation */}
      <Navbar />

      <main>
        {/* Full-viewport editorial hero — headline, tagline, CTAs */}
        <Hero />
        {/* Pure text about — no cards, two-column editorial layout */}
        <About />
        {/* Inline stats — large amber numbers, no cards */}
        <Stats />
        {/* Numbered project list — 01, 02, 03 with hover reveal */}
        <Projects />
        {/* Flat comma-separated skills — no bars, no pills */}
        <Skills />
        {/* Minimal timeline — amber accent */}
        <Experience />
        {/* Simple interest grid */}
        <Interests />
        {/* Flat contact — form with amber focus states */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default AppV3
