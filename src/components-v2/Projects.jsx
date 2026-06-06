// V2 Projects — Bento Grid layout
// Cards are laid out in an asymmetric bento grid: the first project is featured (tall),
// the remaining cards fill a standard grid. All cards use glassmorphism styling.
import React, { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { HiEye } from 'react-icons/hi'
import { projects, filterTabs } from '../data/projects'

// BentoCard — renders a single glassmorphism project card
function BentoCard({ project, featured, index }) {
  // hovered — controls the description overlay visibility
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout                                            // Smooth position animation on filter change
      initial={{ opacity: 0, scale: 0.95 }}            // Starts slightly scaled down and invisible
      animate={{ opacity: 1, scale: 1 }}               // Grows to full size
      exit={{ opacity: 0, scale: 0.9 }}                // Shrinks on filter removal
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}             // Show overlay on mouse enter
      onMouseLeave={() => setHovered(false)}            // Hide overlay on mouse leave
      // featured card is taller — spans 2 rows in the CSS grid
      className={`relative overflow-hidden rounded-3xl cursor-pointer group
                  bg-white/5 backdrop-blur-md border border-white/10
                  hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10
                  transition-all duration-300
                  ${featured ? 'row-span-2' : ''}`}
      style={{ minHeight: featured ? '420px' : '240px' }} // Taller for featured card
    >
      {/* Gradient background — unique per project */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30
                       transition-opacity duration-500 group-hover:opacity-50`} />

      {/* Dot-grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
           aria-hidden="true" />

      {/* Card content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Top: emoji + category */}
        <div className="flex items-start justify-between">
          <span className={`transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                            ${featured ? 'text-5xl' : 'text-3xl'}`}>
            {project.emoji}
          </span>
          {/* Category badge — blue-tinted glassmorphism pill */}
          <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs
                           text-blue-300 font-medium uppercase tracking-wider border border-blue-400/20">
            {project.category}
          </span>
        </div>

        {/* Bottom: project name, tagline, and tags */}
        <div className="mt-6">
          <h3 className={`font-display font-bold text-white mb-1 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {project.name}
          </h3>
          <p className="text-slate-400 text-sm mb-4">{project.tagline}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-white/10 rounded text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover overlay — slides up from the bottom to reveal full description */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ y: '100%' }}                     // Starts below the card
            animate={{ y: 0 }}                          // Slides up to fill the card
            exit={{ y: '100%' }}                        // Slides back down on mouse leave
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 z-20 bg-[#020817]/95 backdrop-blur-sm p-6
                       flex flex-col justify-between border border-blue-400/20"
          >
            <div>
              <span className={`block mb-3 ${featured ? 'text-4xl' : 'text-3xl'}`}>{project.emoji}</span>
              <h3 className="font-display font-bold text-lg text-white mb-3">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>
            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm
                                 font-semibold rounded-lg hover:bg-blue-400 transition-colors">
                <HiEye size={15} /> Case Study
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10
                                 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors">
                <HiArrowTopRightOnSquare size={15} /> View Live
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Filter projects by active tab
  const visible = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Selected Work</span>
          {/* Accent line — blue for V2 */}
          <span className="block w-10 h-0.5 bg-blue-400 rounded-full mt-2 mb-6" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Work that <span className="text-blue-400">speaks.</span>
            </h2>

            {/* Filter tabs — blue active state */}
            <div className="flex gap-2">
              {filterTabs.map(tab => (
                <button key={tab.value} onClick={() => setActiveFilter(tab.value)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-250
                          ${activeFilter === tab.value
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-400/30'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BENTO GRID ──────────────────────────────────────────────────────
            CSS Grid with auto rows — the first card gets row-span-2 via the BentoCard component.
            On mobile it falls back to a standard single-column layout. */}
        <motion.div layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: '200px' }}         // Each row is 200px; featured spans 2 = 420px
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <BentoCard
                key={project.id}
                project={project}
                featured={i === 0}                  // Only the first card in the list is featured
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
