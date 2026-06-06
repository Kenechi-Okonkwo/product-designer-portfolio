// V3 Experience — flat editorial timeline, amber accent, no cards
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  {
    id: 1, role: 'UI/UX Designer', company: 'Freelance', period: '2022 — Present', type: 'current',
    bullets: [
      'Designed end-to-end experiences for 5+ clients across fintech, ed-tech, and e-commerce',
      'Led user research, competitive analysis, and usability testing to inform decisions',
      'Delivered Figma prototypes and collaborated directly with developers during handoff',
      'Built design systems and component libraries for consistency at scale',
    ],
  },
  {
    id: 2, role: 'Product Designer', company: 'Personal Projects', period: '2021 — 2022', type: 'past',
    bullets: [
      'Shipped Pluritongues, Evently, TripMatch, Vanta Business, and UI Showcase',
      'Owned the full design process: research → wireframe → prototype → test → iterate',
      'Built frontend implementations in HTML, CSS, and React',
    ],
  },
  {
    id: 3, role: 'Design Learner & Explorer', company: 'Self-Directed', period: '2020 — 2021', type: 'past',
    bullets: [
      'Studied UI/UX fundamentals, design principles, and human-centred design',
      'Completed courses in Figma, product thinking, and interaction design',
    ],
  },
]

function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">Journey</span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Experience &amp; <span className="text-amber-400">Timeline.</span>
          </h2>
        </motion.div>

        {/* Flat timeline rows — no connecting line, just bottom borders */}
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <motion.div key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="grid md:grid-cols-4 gap-6 py-10 border-b border-stone-800
                                   hover:border-amber-900/40 transition-colors duration-300 group">

              {/* Left column — role + period */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* Amber dot for current role, stone dot for past */}
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.type === 'current'
                    ? 'bg-amber-400 animate-pulse' : 'bg-stone-700'}`} />
                  <span className="text-stone-500 text-xs">{item.period}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-50
                               transition-colors duration-300">
                  {item.role}
                </h3>
                <p className="text-amber-400/70 text-sm mt-0.5">{item.company}</p>
              </div>

              {/* Right columns — bullet points */}
              <ul className="md:col-span-3 space-y-2">
                {item.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-stone-400
                                         group-hover:text-stone-300 transition-colors duration-300">
                    {/* Amber dash prefix */}
                    <span className="text-amber-400/60 mt-1 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
