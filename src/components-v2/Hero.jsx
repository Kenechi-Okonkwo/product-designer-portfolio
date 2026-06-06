// V2 Hero — full-viewport navy blue hero with glassmorphism card and typewriter
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'

const roles = ['UI/UX Designer', 'Product Designer', 'Frontend Developer', 'Problem Solver']
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect — same logic as V1 and V3
  useEffect(() => {
    const word = roles[roleIndex]
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), 1800)
      return () => clearTimeout(t)
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      }
      setRoleIndex(p => (p + 1) % roles.length)
      setTyping(true)
    }
  }, [displayed, typing, roleIndex])

  return (
    // Full-viewport navy background hero
    <section id="hero" className="relative min-h-screen flex flex-col justify-center
                                   px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Blue ambient glow blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                      bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px]
                      bg-blue-400/6 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff06 1px, transparent 1px)', backgroundSize: '40px 40px' }}
           aria-hidden="true" />

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="show"
                  className="relative z-10 max-w-7xl mx-auto w-full pt-20">

        {/* Availability badge — glassmorphism style */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm
                           border border-white/10 rounded-full text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item}
                   className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl
                              leading-none tracking-tight mb-6">
          <span className="block text-white">Kene</span>
          <span className="block text-blue-400">Okonkwo</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div variants={item} className="flex items-center gap-2 mb-6 h-10">
          <span className="text-slate-500 text-lg md:text-xl">I'm a</span>
          <span className="text-blue-400 font-semibold text-lg md:text-xl font-display">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item}
                  className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          UI/UX Designer &amp; Developer — turning complex problems into clean,
          functional interfaces backed by solid code.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
          <a href="#projects"
             onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 text-white font-bold
                        text-sm rounded-xl hover:bg-blue-400 transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 group">
            View My Work
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="mailto:okonkwokenee@gmail.com"
             className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white
                        font-bold text-sm rounded-xl hover:border-blue-400/50 hover:text-blue-300
                        transition-all duration-200 hover:-translate-y-0.5">
            Get In Touch
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div variants={item}
                    className="flex items-center gap-8 pt-8 border-t border-white/5">
          {[
            { value: '3+',  label: 'Years Experience' },
            { value: '5+',  label: 'Projects Shipped' },
            { value: '4+',  label: 'Industries' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-2xl text-blue-400">{s.value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-400 transition-colors"
        aria-label="Scroll down">
        <HiArrowDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
