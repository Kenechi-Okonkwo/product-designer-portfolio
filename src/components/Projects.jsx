// Import React and useState for the active filter tab
import React, { useState, useEffect } from 'react'

// Framer Motion for card entrance animations and layout transitions
import { motion, AnimatePresence, useInView } from 'framer-motion'

// useRef to observe the section entering the viewport
import { useRef } from 'react'

// Icons
import { HiArrowTopRightOnSquare, HiXMark } from 'react-icons/hi2'
import { HiEye } from 'react-icons/hi'

// Import project data and filter tab definitions from the data file
import { projects, filterTabs } from '../data/projects'

// ── CASE STUDY MODAL ─────────────────────────────────────────────────────────
// Slide-up panel that shows all project images when "Case Study" is clicked
function CaseStudyModal({ project, onClose }) {

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    // Backdrop — clicking outside the panel closes the modal
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Panel — stops click propagation so clicking inside doesn't close */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-screen bg-surface overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── MODAL HEADER ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
          <div>
            <span className="text-xl mr-2">{project.emoji}</span>
            <span className="font-display font-bold text-white text-lg">{project.name}</span>
            <p className="text-muted text-sm mt-0.5">{project.tagline}</p>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close"
          >
            <HiXMark size={20} />
          </button>
        </div>

        {/* ── SCROLLABLE IMAGE GALLERY ───────────────────────────────────── */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-4">
          {project.images && project.images.length > 0 ? (
            project.images.map((src, i) => (
              <img
                key={i}
                src={import.meta.env.BASE_URL + src}
                alt={`${project.name} — image ${i + 1}`}
                className="max-h-screen w-auto mx-auto rounded-xl object-contain"
                loading="lazy"
              />
            ))
          ) : (
            <p className="text-muted text-center py-12">No case study images yet.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── PROJECT CARD ──────────────────────────────────────────────────────────────
// Renders a single project as an interactive card
function ProjectCard({ project, index, onOpenCaseStudy }) {
  // hovered — tracks whether the mouse is over this card
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card group cursor-pointer flex flex-col overflow-hidden"
    >
      {/* ── IMAGE AREA ──────────────────────────────────────────────────── */}
      {/* Fixed aspect ratio container — hover overlay lives here only */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16 / 9' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {project.image ? (
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
              aria-hidden="true"
            />
          </>
        )}

        {/* ── HOVER OVERLAY — scoped to the image ─────────────────────── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 z-20 bg-bg/95 backdrop-blur-sm p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">{project.emoji}</span>
                <h3 className="font-display font-bold text-lg text-white mb-3">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenCaseStudy(project) }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
                >
                  <HiEye size={16} />
                  Case Study
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-white text-sm font-semibold rounded-lg hover:border-accent/50 transition-colors duration-200">
                  <HiArrowTopRightOnSquare size={16} />
                  View Live
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── INFO BELOW IMAGE ────────────────────────────────────────────── */}
      <div className="p-4">
        {/* Emoji + category badge on the same row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">{project.emoji}</span>
          <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-muted font-medium uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Project name and tagline */}
        <h3 className="font-display font-bold text-base text-white mb-1">{project.name}</h3>
        <p className="text-muted text-sm">{project.tagline}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-surface border border-border rounded text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── PROJECTS SECTION ──────────────────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  // selectedProject — the project whose case study modal is open (null = closed)
  const [selectedProject, setSelectedProject] = useState(null)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Selected Work
          </span>
          <span className="accent-line" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">
              Projects that<br />
              <span className="gradient-text">speak for themselves.</span>
            </h2>

            {/* ── FILTER TABS ─────────────────────────────────────────── */}
            <div className="flex gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250
                    ${activeFilter === tab.value
                      ? 'bg-accent text-white shadow-lg shadow-accent/25'
                      : 'bg-surface border border-border text-muted hover:text-white hover:border-accent/40'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── PROJECTS GRID ───────────────────────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenCaseStudy={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <div className="text-center py-20 text-muted">
            <p className="text-lg">No projects in this category yet — check back soon!</p>
          </div>
        )}
      </div>

      {/* ── CASE STUDY MODAL (rendered at section level so it overlays everything) */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
