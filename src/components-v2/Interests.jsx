// V2 Interests — glass pill cards in a horizontal scroll strip on mobile, grid on desktop
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  { emoji: '🌍', label: 'African Culture', description: 'Languages, history, and heritage through design' },
  { emoji: '📚', label: 'Reading',         description: 'Psychology, design theory, and African literature' },
  { emoji: '🎨', label: 'Visual Art',      description: 'Color, form, and composition beyond the screen' },
  { emoji: '🔭', label: 'Tech & AI',       description: "Following AI, design tools, and what's next" },
]

function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    // Glass-tinted background to separate from Experience
    <section id="interests" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Beyond Work</span>
          <span className="block w-10 h-0.5 bg-blue-400 rounded-full mt-2 mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Interests &amp; <span className="text-blue-400">Hobbies.</span>
          </h2>
        </motion.div>

        {/* 2-column mobile, 4-column desktop grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <motion.div key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        // Glass card with blue glow on hover
                        className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                                   group hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10
                                   hover:-translate-y-2 transition-all duration-300 cursor-default">
              {/* Emoji scales and rotates on hover */}
              <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {item.emoji}
              </span>
              <h3 className="font-display font-semibold text-sm text-white mb-1
                             group-hover:text-blue-300 transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
