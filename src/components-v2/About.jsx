// V2 About — "Glass Hero Panel" layout
// A wide glassmorphism card leads the section with name + quick stats side by side.
// Below: bio text on the left, details grid in a glass panel on the right.
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowDownTray } from 'react-icons/hi2'

function About() {
  // Observe section entry so animations only fire once
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    // Generous top padding accounts for the fixed navbar height
    <section id="about" ref={ref} className="pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* ── GLASS HERO PANEL ──────────────────────────────────────────────
            A full-width frosted glass card that acts as the page's "above the fold"
            statement — name, role, CTAs, and quick stats in one scannable block. */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}              // Starts invisible 50px below
          animate={inView ? { opacity: 1, y: 0 } : {}} // Slides up into position
          transition={{ duration: 0.8, ease: 'easeOut' }}
          // Glassmorphism: semi-transparent white fill + blur + white-tinted border
          className="mb-12 p-8 md:p-14 rounded-3xl bg-white/5 backdrop-blur-md
                     border border-white/10 shadow-2xl shadow-blue-500/5"
        >
          {/* Two-column layout: identity left, stats right */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            {/* ── LEFT: Identity + CTAs ─────────────────────────────────── */}
            <div>
              {/* Availability badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400 text-sm">Available for new projects</span>
              </div>

              {/* Name — large, bold, display font */}
              <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl
                             text-white leading-none mb-3">
                Kene{' '}
                {/* Last name in blue accent — the V2 signature color */}
                <span className="text-blue-400">Okonkwo</span>
              </h1>

              {/* Role subtitle */}
              <p className="text-slate-300 text-xl md:text-2xl font-medium mb-8">
                UI/UX Designer &amp; Developer
              </p>

              {/* CTA buttons side by side */}
              <div className="flex flex-wrap gap-3">
                {/* Primary — scroll to projects */}
                <a href="#projects"
                   onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                   className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl
                              hover:bg-blue-400 transition-all duration-200
                              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">
                  View My Work
                </a>
                {/* Secondary — download CV */}
                <a href="/Kene_Okonkwo_CV.pdf" download
                   className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl
                              hover:border-blue-400/50 hover:text-blue-300
                              transition-all duration-200 hover:-translate-y-0.5">
                  Download CV
                  <HiArrowDownTray className="inline ml-2" size={16} />
                </a>
              </div>
            </div>

            {/* ── RIGHT: Quick stats ────────────────────────────────────── */}
            {/* Three numbers in a row — glanceable at a second look */}
            <div className="flex gap-10 lg:gap-16 shrink-0">
              {[
                { value: '3+',   label: 'Years of Experience' },
                { value: '5+',   label: 'Projects Shipped' },
                { value: '4+',   label: 'Industries Covered' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  {/* Large accent number — the V2 equivalent of the V1 animated counter */}
                  <div className="font-display font-extrabold text-4xl md:text-5xl text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  {/* Small muted label below the number */}
                  <div className="text-slate-500 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BIO + DETAILS GRID ──────────────────────────────────────────── */}
        <div className="grid md:grid-cols-5 gap-8">

          {/* Bio — takes up 3 of 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            {/* Section label */}
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
              About Me
            </span>

            <p className="text-slate-200 leading-relaxed text-lg mb-4">
              I design and build digital products with a focus on clarity, usability, and craft.
              With 3+ years of experience and a background in International Relations,
              I bring an analytical, research-driven approach to every problem I solve.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I work at the intersection of design and code — fluent in Figma for system-level
              thinking and React for bringing ideas to life in the browser. Whether it's a
              fintech dashboard or a language-learning app, I care deeply about the experience
              of the people using what I build.
            </p>
          </motion.div>

          {/* Details glass panel — takes up 2 of 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {/* Info rows — label + value pairs */}
            {[
              { label: 'Location',    value: 'Nigeria' },
              { label: 'Education',   value: 'B.Sc International Relations' },
              { label: 'Focus',       value: 'UI/UX + Frontend' },
              { label: 'Email',       value: 'okonkwokenee@gmail.com' },
              { label: 'Status',      value: 'Open to work', highlight: true },
            ].map(item => (
              // Each row separated by a very subtle white line
              <div key={item.label} className="flex justify-between items-center py-3.5
                                               border-b border-white/5 last:border-0">
                <span className="text-slate-500 text-sm">{item.label}</span>
                {/* "Open to work" gets a green pill, others are plain text */}
                {item.highlight
                  ? <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.value}
                    </span>
                  : <span className="text-white text-sm font-medium">{item.value}</span>
                }
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
