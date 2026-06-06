// Import React
import React from 'react'

// Import Framer Motion for scroll-triggered entrance animations
import { motion } from 'framer-motion'

// useInView detects when the element enters the viewport
import { useInView } from 'framer-motion'

// useRef creates a reference to the DOM element we want to observe
import { useRef } from 'react'

// Icons for the highlights list
import { HiCheckCircle } from 'react-icons/hi'
import { HiArrowDownTray } from 'react-icons/hi2'

// Bullet points that highlight key professional qualities
const highlights = [
  '4+ years designing user-centred mobile and web products',
  'Drove 25–40% engagement growth and 20%+ retention improvement at Pluritongues',
  'Bridges design and frontend development — Figma to production',
  'B.Sc International Relations — research-driven, empathetic mindset',
]

function About() {
  // ref — attached to the section so useInView can watch it
  const ref = useRef(null)

  // inView — becomes true when the section scrolls into the viewport
  // once: true means it only triggers the animation once (not every time you scroll past)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    // id="about" — the anchor target for the nav link
    <section id="about" ref={ref} className="section-padding">

      {/* Centered max-width container */}
      <div className="max-w-7xl mx-auto">

        {/* ── GRID LAYOUT: text left, visual right ──────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN — text content ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}         // Starts off-screen to the left
            animate={inView ? { opacity: 1, x: 0 } : {}} // Slides in when visible
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Section label — small caps above the heading */}
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>

            {/* Accent underline bar */}
            <span className="accent-line" />

            {/* Main heading */}
            <h2 className="section-heading mb-6">
              Designing with intent,<br />
              <span className="gradient-text">building with purpose.</span>
            </h2>

            {/* Bio paragraphs */}
            <p className="text-muted leading-relaxed mb-4">
              I'm <span className="text-white font-medium">Kenechi Okonkwo</span>, an innovative Product Designer
              with 4 years of experience creating impactful mobile and web applications. I specialise in
              transforming complex problems into clean, intuitive digital experiences that real people enjoy using.
            </p>

            <p className="text-muted leading-relaxed mb-8">
              At Pluritongues, I led the end-to-end design of a mobile app that boosted user engagement by
              25–40% and improved retention by over 20%. With a background in International Relations, I bring
              a research-driven, empathetic approach to every product — whether shaping UX strategy or
              writing the frontend code that brings it to life.
            </p>

            {/* ── HIGHLIGHTS LIST ─────────────────────────────────────── */}
            <ul className="space-y-3 mb-8">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                  {/* Accent-colored check icon */}
                  <HiCheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Download CV button — opens/downloads the resume file */}
            <a
              href="/Kene_Okonkwo_CV.pdf"   // Replace with actual CV path when available
              download                        // Triggers browser download instead of navigation
              className="btn-secondary group inline-flex"
            >
              <HiArrowDownTray size={18} />
              Download CV
            </a>
          </motion.div>

          {/* ── RIGHT COLUMN — visual card ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}          // Starts off-screen to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            {/* Decorative background square — accent coloured, offset behind the card */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl" />

            {/* Main card */}
            <div className="relative card p-8 bg-surface-raised">

              {/* Profile initials avatar — placeholder until a photo is added */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent-dark
                              flex items-center justify-center text-white font-display font-bold text-3xl mb-6">
                KO
              </div>

              {/* Name and role inside the card */}
              <h3 className="font-display font-bold text-xl text-white mb-1">Kene Okonkwo</h3>
              <p className="text-accent text-sm font-medium mb-6">UI/UX Designer & Developer</p>

              {/* ── MINI INFO ROWS ──────────────────────────────────────── */}
              {[
                { label: 'Location',    value: 'Lagos, Nigeria' },
                { label: 'Experience',  value: '4+ Years' },
                { label: 'Availability', value: 'Open to work' },
                { label: 'Email',       value: 'okonkwokenee@gmail.com' },
              ].map((item) => (
                // Each row: label on left, value on right, separated by a line
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span className="text-muted text-sm">{item.label}</span>
                  {/* Availability shown as a green pill — all others as plain text */}
                  {item.label === 'Availability' ? (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
