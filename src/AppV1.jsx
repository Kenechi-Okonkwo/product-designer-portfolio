// AppV1.jsx — Version 1 snapshot: Purple dark, card-based grid layout
// This file preserves the original design iteration

import React from 'react'

// Import all V1 components from the original components folder
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Stats      from './components/Stats'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Interests  from './components/Interests'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

function AppV1() {
  return (
    // Dark near-black background — the V1 design system base color
    <div className="bg-[#080808] text-white overflow-x-hidden">
      {/* Fixed top navigation */}
      <Navbar />

      <main>
        {/* Full-viewport hero — typewriter animation, CTAs, scroll indicator */}
        <Hero />
        {/* Personal bio — split layout with info card on right */}
        <About />
        {/* Animated count-up stats row */}
        <Stats />
        {/* Filter tabs + hover-overlay project cards */}
        <Projects />
        {/* Animated skill bars + toolbox pills */}
        <Skills />
        {/* Vertical timeline */}
        <Experience />
        {/* Emoji hobby cards */}
        <Interests />
        {/* Contact form + social links */}
        <Contact />
      </main>

      {/* Copyright + back-to-top */}
      <Footer />
    </div>
  )
}

export default AppV1
