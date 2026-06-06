// V3 Hero — full-viewport editorial hero section
// Punchy headline, amber accents, two CTAs, scroll indicator
// Designed to match V3's warm dark / editorial feel
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'

// Framer Motion stagger container — children animate one after another
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

// Each child fades up from below
const item = {
  hidden:  { opacity: 0, y: 32 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Hero() {
  // Smooth-scroll to the about/work section when the CTA is clicked
  const scrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // Full-viewport height section — amber warm dark background
    <section id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* ── SUBTLE GRAIN TEXTURE ───────────────────────────────────────────
          A very faint radial gradient creates depth without distracting from type */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,191,36,0.04) 0%, transparent 70%)' }}
           aria-hidden="true" />

      {/* ── HERO CONTENT ──────────────────────────────────────────────────── */}
      <motion.div
        variants={container}     // Apply stagger container
        initial="hidden"         // Start all children hidden
        animate="show"           // Animate to visible
        className="max-w-7xl mx-auto w-full pt-24"
      >

        {/* ── AVAILABILITY BADGE ──────────────────────────────────────── */}
        <motion.div variants={item} className="mb-10">
          {/* Small editorial label — amber dot + text */}
          <span className="inline-flex items-center gap-2 text-xs text-stone-500 uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* ── MAIN HEADLINE ───────────────────────────────────────────── */}
        {/* Very large editorial type — the centrepiece of the page */}
        <motion.h1
          variants={item}
          className="font-display font-extrabold leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }} // Fluid type scale
        >
          {/* Line 1 — plain white */}
          <span className="block text-white">I design products</span>
          {/* Line 2 — amber accent on the key emotional word */}
          <span className="block text-white">
            people <span className="text-amber-400">actually</span> love.
          </span>
        </motion.h1>

        {/* ── HORIZONTAL RULE ─────────────────────────────────────────── */}
        {/* Thin amber line — the V3 editorial signature element */}
        <motion.div variants={item}>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-px bg-amber-400" />         {/* Short amber line */}
            <div className="flex-1 h-px bg-stone-800" />        {/* Long neutral line */}
          </div>
        </motion.div>

        {/* ── TAGLINE ─────────────────────────────────────────────────── */}
        <motion.p
          variants={item}
          className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
        >
          UI/UX Designer &amp; Developer — turning complex problems into clean,
          functional interfaces backed by solid code.
        </motion.p>

        {/* ── CTA BUTTONS ─────────────────────────────────────────────── */}
        <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
          {/* Primary — amber filled, scrolls to projects */}
          <a href="#projects"
             onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-black
                        font-bold text-sm rounded-lg hover:bg-amber-300
                        transition-all duration-200 hover:-translate-y-0.5
                        hover:shadow-lg hover:shadow-amber-400/20 group">
            View My Work
            {/* Arrow moves right on hover */}
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary — outlined amber, downloads CV */}
          <a href="/Kene_Okonkwo_CV.pdf" download
             className="inline-flex items-center gap-2 px-7 py-3.5 border border-amber-400/40
                        text-amber-400 font-bold text-sm rounded-lg
                        hover:border-amber-400 hover:bg-amber-400/5
                        transition-all duration-200 hover:-translate-y-0.5">
            Download CV
          </a>
        </motion.div>

        {/* ── NAME + ROLE FOOTER LINE ──────────────────────────────────── */}
        {/* Editorial detail: name + role displayed small at the bottom of the hero */}
        <motion.div variants={item}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4
                     pt-8 border-t border-stone-800">
          <div>
            <span className="font-display font-bold text-white text-lg">Kene Okonkwo</span>
            <span className="text-stone-600 mx-3">·</span>
            <span className="text-stone-500 text-sm">UI/UX Designer & Developer</span>
          </div>
          {/* Quick stat row — scannable at a glance */}
          <div className="flex gap-8">
            {[
              { value: '3+', label: 'Years' },
              { value: '5+', label: 'Projects' },
              { value: 'NGR', label: 'Based' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-amber-400 text-lg">{s.value}</div>
                <div className="text-stone-600 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      {/* Bouncing arrow at the bottom centre of the hero */}
      <motion.button
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}       // Looping bounce
        transition={{ delay: 1.8, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-600
                   hover:text-amber-400 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <HiArrowDown size={20} />
      </motion.button>
    </section>
  )
}

export default Hero
