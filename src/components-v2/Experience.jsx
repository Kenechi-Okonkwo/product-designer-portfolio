// V2 Experience — same timeline structure as V1, blue accent + glass cards
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  {
    id: 1, role: 'UI/UX Designer', company: 'Freelance', period: '2022 — Present', type: 'current',
    bullets: [
      'Designed end-to-end experiences for 5+ clients across fintech, ed-tech, and e-commerce',
      'Conducted user research, competitive analysis, and usability testing',
      'Delivered high-fidelity Figma prototypes with developer-ready handoffs',
      'Built design systems and component libraries for consistency at scale',
    ],
  },
  {
    id: 2, role: 'Product Designer', company: 'Personal Projects', period: '2021 — 2022', type: 'past',
    bullets: [
      'Shipped Pluritongues, Evently, TripMatch, Vanta Business, and UI Showcase',
      'Owned the full design process from research to prototype to iteration',
      'Built frontend implementations in HTML, CSS, and React',
    ],
  },
  {
    id: 3, role: 'Design Learner & Explorer', company: 'Self-Directed', period: '2020 — 2021', type: 'past',
    bullets: [
      'Studied UI/UX fundamentals, design principles, and human-centred design',
      'Completed courses in Figma, product thinking, and interaction design',
      'Built first concepts and received feedback from the design community',
    ],
  },
]

function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Journey</span>
          <span className="block w-10 h-0.5 bg-blue-400 rounded-full mt-2 mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Experience &amp; <span className="text-blue-400">Timeline.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line — blue-tinted */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div key={item.id}
                          initial={{ opacity: 0, x: -30 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          className="relative flex gap-8 md:gap-12">

                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-1">
                  {item.type === 'current'
                    ? <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500/10 border-2 border-blue-400
                                      flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                      </div>
                    : <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border-2 border-white/10
                                      flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-slate-600" />
                      </div>
                  }
                </div>

                {/* Glass card */}
                <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                                hover:border-blue-400/20 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{item.role}</h3>
                      <p className="text-blue-400 text-sm font-medium">{item.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-blue-400 mt-1 shrink-0">—</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
