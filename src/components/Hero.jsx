// V1 Hero — full-viewport hero with typewriter role animation, purple accent
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'

// Roles cycled through by the typewriter effect
const roles = ['UI/UX Designer', 'Product Designer', 'Frontend Developer', 'Problem Solver']

// Stagger container — children animate one after another
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden:  { opacity: 0, y: 32 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Hero() {
  // roleIndex — which word in the roles array is being typed
  const [roleIndex, setRoleIndex] = useState(0)
  // displayed — current substring (grows char by char while typing, shrinks while erasing)
  const [displayed, setDisplayed] = useState('')
  // typing — true while adding chars, false while removing
  const [typing, setTyping] = useState(true)

  // Typewriter engine — runs on every change to displayed/typing/roleIndex
  useEffect(() => {
    const word = roles[roleIndex]
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), 1800) // Pause before erasing
      return () => clearTimeout(t)
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      }
      setRoleIndex(p => (p + 1) % roles.length) // Move to next role
      setTyping(true)
    }
  }, [displayed, typing, roleIndex])

  return (
    // Full-viewport dark hero with subtle grid and blob decorations
    <section id="hero" className="relative min-h-screen flex flex-col justify-center
                                   px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Ambient purple glow blob — top left */}
      <div className="absolute top-[-20%] left-[-15%] w-[600px] h-[600px]
                      bg-accent/10 rounded-full blur-[120px] animate-blob pointer-events-none" aria-hidden="true" />
      {/* Ambient glow — bottom right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px]
                      bg-accent-dark/10 rounded-full blur-[100px] animate-blob pointer-events-none"
           style={{ animationDelay: '3s' }} aria-hidden="true" />
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)', backgroundSize: '40px 40px' }}
           aria-hidden="true" />

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="show"
                  className="relative z-10 max-w-7xl mx-auto w-full pt-20">

        {/* Availability badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border
                           rounded-full text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item}
                   className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl
                              leading-none tracking-tight mb-6">
          <span className="block text-white">Kene</span>
          <span className="block gradient-text">Okonkwo</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div variants={item} className="flex items-center gap-2 mb-6 h-10">
          <span className="text-muted text-lg md:text-xl font-medium">I'm a</span>
          <span className="text-accent font-semibold text-lg md:text-xl font-display">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          UI/UX Designer &amp; Developer — turning complex problems into clean,
          functional interfaces backed by solid code.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
          <a href="#projects" className="btn-primary group"
             onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="mailto:okonkwokenee@gmail.com" className="btn-secondary">Get In Touch</a>
        </motion.div>

        {/* Footer stat row */}
        <motion.div variants={item}
                    className="flex items-center gap-8 pt-8 border-t border-border">
          {[
            { value: '3+',  label: 'Years Experience' },
            { value: '5+',  label: 'Projects Shipped' },
            { value: '4+',  label: 'Industries' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-2xl text-accent">{s.value}</div>
              <div className="text-muted text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll down">
        <HiArrowDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
