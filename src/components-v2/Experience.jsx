import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'

const timeline = [
  {
    id: 1,
    role: 'Product Designer',
    company: 'Pluritongues',
    location: 'Maryland, NJ',
    period: 'Aug 2023 — Present',
    type: 'current',
    bullets: [
      'Spearheaded end-to-end UX/UI design of a cross-platform mobile application, owning the product experience across all core features from concept to launch.',
      'Designed and shipped Interactive Learning Activities, Language Partner Matching, and Tutor Engagement Systems, driving a 25–40% increase in user engagement.',
      'Reduced user churn by 20%+ through systematic optimisation of onboarding flows, content interaction patterns, and learning journey UX.',
      'Partnered cross-functionally with product managers and engineers to deliver user-centred solutions, resolving friction points and measurably improving task completion rates.',
      'Architected a scalable design system supporting multi-language expansion across African dialects, accelerating feature delivery velocity.',
    ],
  },
  {
    id: 2,
    role: 'Freelance UI/UX Developer',
    company: 'Safeboxx Nigeria',
    location: 'Lagos, Nigeria',
    period: 'Mar 2022 — May 2024',
    type: 'past',
    bullets: [
      'Delivered end-to-end UI/UX design and frontend development, translating business requirements into functional, user-centred interfaces.',
      'Engineered reusable, responsive component libraries in HTML, CSS, and JavaScript, improving development efficiency and design consistency.',
    ],
  },
  {
    id: 3,
    role: 'Product Designer',
    company: 'Emernplus Marketing Agency',
    location: 'Lagos, Nigeria',
    period: 'Jul 2018 — May 2023',
    type: 'past',
    bullets: [
      'Conducted qualitative and quantitative user research to map digital behaviours, informing data-driven UX strategy.',
      'Defined and executed UI/UX strategies aligned with business KPIs and target audience goals.',
      'Produced high-fidelity wireframes, interactive prototypes, and interface design files using Figma, streamlining design-to-development handoff.',
      'Built and maintained modular, reusable front-end components ensuring cross-browser compatibility and performance.',
    ],
  },
  {
    id: 4,
    role: 'Manager',
    company: 'The Boardroom Bar And Lounge',
    location: 'Lagos, Nigeria',
    period: 'Jul 2020 — Aug 2022',
    type: 'past',
    bullets: [
      'Directed daily operations, staff coordination, and customer experience at a high-volume hospitality venue.',
    ],
  },
  {
    id: 5,
    role: 'Teacher (NYSC)',
    company: 'Modern Ideal College',
    location: 'Emene, Enugu',
    period: 'Nov 2018 — Sep 2019',
    type: 'past',
    bullets: [
      'Designed and enforced structured classroom procedures, maintaining an effective and orderly learning environment.',
      'Applied diverse pedagogical techniques to foster critical thinking, student engagement, and open discussion.',
    ],
  },
]

function ExperienceRow({ item, index, inView }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-[#DDD6CA]">

      <button onClick={() => setOpen(!open)}
              className="w-full flex items-center gap-6 py-6 text-left group">
        <span className={`w-2 h-2 rounded-full shrink-0
          ${item.type === 'current' ? 'bg-emerald-500 animate-pulse' : 'bg-[#DDD6CA]'}`} />

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base md:text-lg text-[#1A1410]
                         group-hover:opacity-70 transition-opacity duration-200">
            {item.role}
          </h3>
          <p className="text-[#8C7B6B] text-sm mt-0.5">
            {item.company}
            <span className="text-[#C4B9AC]"> · {item.location}</span>
          </p>
        </div>

        <span className="text-[#8C7B6B] text-sm shrink-0 hidden md:block">{item.period}</span>

        <span className="w-8 h-8 rounded-full border border-[#DDD6CA] flex items-center justify-center
                         text-[#8C7B6B] group-hover:border-[#1A1410] group-hover:text-[#1A1410]
                         transition-all duration-200 shrink-0">
          {open ? <HiMinus size={14} /> : <HiPlus size={14} />}
        </span>
      </button>

      <p className="text-[#8C7B6B] text-xs md:hidden -mt-3 mb-3 pl-8">{item.period}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden">
            <ul className="pb-8 pl-8 space-y-3">
              {item.bullets.map(bullet => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-[#8C7B6B]">
                  <span className="text-[#C4B9AC] mt-1 shrink-0">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Journey
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410]">
            Work Experience.
          </h2>
        </motion.div>

        <div className="border-t border-[#DDD6CA]">
          {timeline.map((item, i) => (
            <ExperienceRow key={item.id} item={item} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
