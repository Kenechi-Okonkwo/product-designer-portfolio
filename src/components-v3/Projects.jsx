// V3 Projects — Numbered editorial list with color thumbnail previews
// Each row has a gradient colour swatch on the left — adds visual craft
// without breaking the editorial flat design. Click to expand full description.
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { projects, filterTabs } from '../data/projects'

function ProjectRow({ project, index, number }) {
  // expanded — clicking the row reveals the full description panel
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group border-b border-stone-800 hover:border-b-transparent relative
                 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Amber left border — the hover micro-interaction */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400 scale-y-0
                      group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Main row */}
      <div className="flex items-center gap-5 md:gap-8 py-7 pl-4 group-hover:pl-6 transition-all duration-300">

        {/* ── COLOUR THUMBNAIL ───────────────────────────────────────────
            A small gradient swatch — the project's visual identity at a glance.
            This adds visual craft to the otherwise text-only list. */}
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${project.gradient}
                         shrink-0 flex items-center justify-center text-xl md:text-2xl
                         transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2`}>
          {project.emoji}
        </div>

        {/* Large faded index number */}
        <span className="font-display font-extrabold text-3xl md:text-5xl text-stone-800
                         group-hover:text-amber-400/60 transition-colors duration-300 select-none shrink-0"
              style={{ fontVariantNumeric: 'tabular-nums' }}>
          {String(number).padStart(2, '0')}
        </span>

        {/* Project info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-lg md:text-xl text-white
                         group-hover:text-amber-50 transition-colors duration-300 truncate">
            {project.name}
          </h3>
          <p className="text-stone-500 text-sm mt-0.5">{project.tagline}</p>
        </div>

        {/* Tech tags — desktop only */}
        <div className="hidden md:flex flex-wrap gap-x-3 gap-y-1 max-w-xs">
          {project.tech.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs text-stone-600 group-hover:text-stone-400 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow — rotates on expand */}
        <HiArrowUpRight size={18}
          className={`text-stone-700 group-hover:text-amber-400 shrink-0
                      transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1
                      ${expanded ? 'rotate-90' : ''}`} />
      </div>

      {/* Expandable description panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            {/* Indented to align with the project name column */}
            <div className="pb-8 pl-[7.5rem] md:pl-44 pr-4 max-w-3xl">
              {/* Amber accent bar above description */}
              <div className="w-8 h-px bg-amber-400 mb-4" />
              <p className="text-stone-400 leading-relaxed text-sm mb-5">
                {project.description}
              </p>
              {/* All tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag}
                        className="px-3 py-1 border border-stone-700 rounded text-xs text-stone-500
                                   hover:border-amber-900/50 hover:text-stone-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
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

  const visible = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">Selected Work</span>
            <div className="flex-1 h-px bg-stone-800" />
            {/* Filter tabs */}
            <div className="flex gap-2">
              {filterTabs.map(tab => (
                <button key={tab.value} onClick={() => setActiveFilter(tab.value)}
                        className={`px-3 py-1 text-xs font-medium rounded transition-colors duration-200
                          ${activeFilter === tab.value
                            ? 'text-amber-400 border border-amber-400/50'
                            : 'text-stone-500 hover:text-stone-300'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Projects that <span className="text-amber-400">define me.</span>
          </h2>
          {/* Subheading — sharpens the hierarchy between H2 and body text */}
          <p className="text-stone-500 text-base">
            Click any project to read the full story.
          </p>
        </motion.div>

        {/* Numbered project list */}
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} number={i + 1} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
