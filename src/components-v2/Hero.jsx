import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'

const roles = ['UI/UX Designer', 'Product Designer', 'Frontend Developer', 'Problem Solver']

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center
                                   px-6 md:px-12 lg:px-24">
      <motion.div variants={container} initial="hidden" animate="show"
                  className="max-w-6xl mx-auto w-full pt-20 flex flex-col items-center text-center">

        {/* Availability */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-[#8C7B6B]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item}
                   className="font-display font-bold text-6xl sm:text-7xl md:text-8xl
                              leading-[1.0] tracking-tight text-[#1A1410] mb-6">
          Kene<br />Okonkwo
        </motion.h1>

        {/* Typewriter role */}
        <motion.div variants={item} className="flex items-center gap-3 mb-6 h-9">
          <span className="text-[#1A1410] font-medium text-lg font-display">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-[#1A1410] ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item}
                  className="text-[#8C7B6B] text-base md:text-lg leading-relaxed max-w-md mb-10">
          Turning complex problems into clean, functional interfaces that people actually enjoy using.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="#projects"
             onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="inline-flex items-center justify-center gap-2 w-44 py-3.5 bg-[#1A1410] text-[#F5F0E8]
                        font-semibold text-sm rounded-lg hover:opacity-80 transition-all duration-200 group">
            View My Work
            <HiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="mailto:okonkwokenee@gmail.com"
             className="inline-flex items-center justify-center gap-2 w-44 py-3.5 border border-[#DDD6CA]
                        text-[#1A1410] font-semibold text-sm rounded-lg
                        hover:border-[#1A1410] transition-all duration-200">
            Get In Touch
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#1A1410]
                   hover:opacity-50 transition-opacity"
        aria-label="Scroll down">
        <HiArrowDown size={20} />
      </motion.button>
    </section>
  )
}

export default Hero
