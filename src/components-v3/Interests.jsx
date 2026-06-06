// V3 Interests — condensed to 4 highlights, integrated more tightly into the page
// Reduced from 8 cards to 4 to maintain professional focus and cut vertical bulk
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Condensed to the 4 most character-defining interests
const interests = [
  { emoji: '🌍', label: 'African Culture', description: 'Languages, heritage, and history shape how I think about inclusive design.' },
  { emoji: '📚', label: 'Reading',         description: 'Psychology, design theory, and African literature fuel my research mindset.' },
  { emoji: '🎨', label: 'Visual Art',      description: 'Exploring color and composition beyond the screen keeps my eye sharp.' },
  { emoji: '🔭', label: 'Tech & AI',       description: 'Following what\'s next in design tools and AI keeps me ahead of the curve.' },
]

function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="interests" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">

        {/* Editorial header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">Beyond Work</span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            What drives <span className="text-amber-400">my thinking.</span>
          </h2>
          {/* Subheading — bridges the gap between the large H2 and the cards */}
          <p className="text-stone-500 text-base">
            The things that shape how I design, think, and show up.
          </p>
        </motion.div>

        {/* 4-column grid — one row on desktop, two rows on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0
                        border-l border-t border-stone-800">
          {interests.map((item, i) => (
            <motion.div key={item.label}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="p-7 border-r border-b border-stone-800 group cursor-default
                                   hover:bg-amber-400/5 transition-colors duration-300">
              {/* Emoji — scales and tilts on hover */}
              <span className="text-2xl mb-4 block transition-transform duration-300
                               group-hover:scale-110 group-hover:rotate-3">
                {item.emoji}
              </span>
              {/* Interest label */}
              <h3 className="font-display font-semibold text-sm text-stone-200
                             group-hover:text-amber-400 transition-colors duration-300 mb-2">
                {item.label}
              </h3>
              {/* Description — more meaningful than before */}
              <p className="text-stone-600 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
