// Import React
import React, { useRef } from 'react'

// Framer Motion for scroll-triggered timeline animations
import { motion, useInView } from 'framer-motion'

// Timeline data — real career history from CV
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
      'Established and led usability testing protocols — synthesising qualitative feedback into iterative prototype improvements, enhancing accessibility and learner satisfaction.',
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
      'Built and maintained modular, reusable front-end components (HTML, CSS, JavaScript), ensuring cross-browser compatibility and performance.',
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

function Experience() {
  // Observe the section for scroll-triggered animations
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Journey
          </span>
          <span className="accent-line" />
          <h2 className="section-heading">
            Experience &amp; <span className="gradient-text">Timeline.</span>
          </h2>
        </motion.div>

        {/* ── TIMELINE ────────────────────────────────────────────────────── */}
        {/* Relative container so the vertical line can be absolutely positioned */}
        <div className="relative">

          {/* Vertical connecting line — runs the full height of the timeline */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          {/* Timeline entries */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}               // Slides in from the left
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger per item
                className="relative flex gap-8 md:gap-12"
              >
                {/* ── TIMELINE DOT ────────────────────────────────────── */}
                {/* Positioned on the vertical line */}
                <div className="relative flex-shrink-0 mt-1">
                  {item.type === 'current' ? (
                    // Current role: pulsing accent dot (signals "active now")
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent/10 border-2 border-accent
                                    flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    </div>
                  ) : (
                    // Past roles: solid grey dot
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-surface border-2 border-border
                                    flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-muted" />
                    </div>
                  )}
                </div>

                {/* ── ENTRY CONTENT ────────────────────────────────────── */}
                <div className="card p-6 flex-1 hover:border-accent/30 transition-colors duration-300">

                  {/* Header row: role + date range */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      {/* Role title */}
                      <h3 className="font-display font-bold text-lg text-white">{item.role}</h3>
                      {/* Company and location */}
                      <p className="text-accent text-sm font-medium">{item.company}</p>
                      {item.location && (
                        <p className="text-muted text-xs mt-0.5">{item.location}</p>
                      )}
                    </div>

                    {/* Date range badge */}
                    <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-muted">
                      {item.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted">
                        {/* Small accent dash before each bullet */}
                        <span className="text-accent mt-1 shrink-0">—</span>
                        {bullet}
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
