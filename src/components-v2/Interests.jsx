import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  { emoji: '🌍', label: 'African Culture', description: 'Languages, history, and celebrating heritage through design' },
  { emoji: '📚', label: 'Reading',         description: 'Psychology, design theory, and African literature' },
  { emoji: '🎨', label: 'Visual Art',      description: 'Exploring color, form, and composition beyond the screen' },
  { emoji: '🔭', label: 'Tech & AI',       description: "Following AI, design tools, and what's next in product" },
]

function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="interests" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Beyond Work
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410]">
            Interests &amp; Hobbies.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((item, i) => (
            <motion.div key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="p-5 border border-[#DDD6CA] rounded-xl cursor-default
                                   hover:border-[#1A1410] transition-colors duration-200 group">
              <span className="text-2xl mb-3 block">{item.emoji}</span>
              <h3 className="font-display font-semibold text-sm text-[#1A1410] mb-1
                             group-hover:opacity-70 transition-opacity duration-200">
                {item.label}
              </h3>
              <p className="text-[#8C7B6B] text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Interests
