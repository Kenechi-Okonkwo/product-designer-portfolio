// Import React
import React, { useRef } from 'react'

// Framer Motion for scroll-triggered animations
import { motion, useInView } from 'framer-motion'

// Interest card data — each item has an emoji, label, and short description
const interests = [
  {
    emoji: '🌍',
    label: 'African Culture',
    description: 'Languages, history, and celebrating heritage through design',
  },
  {
    emoji: '📚',
    label: 'Reading',
    description: 'Psychology, design theory, and African literature',
  },
  {
    emoji: '🎨',
    label: 'Visual Art',
    description: 'Exploring color, form, and composition beyond the screen',
  },
  {
    emoji: '🔭',
    label: 'Tech & AI',
    description: "Following AI, design tools, and what's next in product",
  },
]

function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    // Light background tint to visually separate this section from Experience
    <section id="interests" ref={ref} className="section-padding bg-surface/20">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Beyond Work
          </span>
          <span className="accent-line" />
          <h2 className="section-heading">
            Interests &amp; <span className="gradient-text">Hobbies.</span>
          </h2>
          {/* Subheading — adds personality and human dimension to the portfolio */}
          <p className="text-muted mt-4 max-w-xl">
            The things that inspire, challenge, and shape how I think about design and life.
          </p>
        </motion.div>

        {/* ── INTEREST CARDS GRID ─────────────────────────────────────────── */}
        {/* 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}                      // Hidden and below
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.07 }}  // Stagger across the grid
              // Hover: card lifts and border turns accent — micro-interaction
              className="card p-5 group hover:-translate-y-2 hover:border-accent/40
                         hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 cursor-default"
            >
              {/* Emoji — scales up on hover (micro-interaction) */}
              <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-125">
                {item.emoji}
              </span>

              {/* Interest label — turns accent-colored on hover */}
              <h3 className="font-display font-semibold text-sm text-white mb-1
                             group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h3>

              {/* Short description */}
              <p className="text-muted text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Interests
