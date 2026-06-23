import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import { projects, filterTabs } from '../data/projects'

// Case study modal — warm cream version
function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div key="backdrop"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-[#1A1410]/60 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-screen bg-[#F5F0E8] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDD6CA] flex-shrink-0">
          <div>
            <span className="text-xl mr-2">{project.emoji}</span>
            <span className="font-display font-bold text-[#1A1410] text-lg">{project.name}</span>
            <p className="text-[#8C7B6B] text-sm mt-0.5">{project.tagline}</p>
          </div>
          <button onClick={onClose}
                  className="p-2 rounded-full border border-[#DDD6CA] hover:border-[#1A1410]
                             text-[#8C7B6B] hover:text-[#1A1410] transition-all duration-200"
                  aria-label="Close">
            <HiXMark size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-4">
          {project.headline && (
            <div className="text-center py-12 md:py-20 mx-auto w-full">
              <h1 className="font-display font-bold text-3xl md:text-5xl text-[#1A1410]
                             leading-tight whitespace-pre-line mb-8 mx-auto"
                  style={{ maxWidth: '1000px' }}>
                {project.headline}
              </h1>
              {project.subtext && (
                <p className="text-[#8C7B6B] text-base md:text-lg leading-relaxed mx-auto"
                   style={{ maxWidth: '800px' }}>
                  {project.subtext}
                </p>
              )}
              {project.headlineImages && (
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  {project.headlineImages.map((src, i) => (
                    <img key={i} src={import.meta.env.BASE_URL + src}
                         alt={`${project.name} headline image ${i + 1}`}
                         className="w-[225px] h-[225px] md:w-[300px] md:h-[300px] object-cover" loading="lazy" />
                  ))}
                </div>
              )}
              {project.overviewTitle && (
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1410]
                               mt-16 mb-6">
                  {project.overviewTitle}
                </h2>
              )}
              {project.overviewText && (
                <p className="text-[#8C7B6B] text-base md:text-lg leading-relaxed whitespace-pre-line mx-auto"
                   style={{ maxWidth: '800px' }}>
                  {project.overviewText}
                </p>
              )}
              {project.goalsTitle && (
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1410]
                               mt-16 mb-6">
                  {project.goalsTitle}
                </h2>
              )}
              {project.goalsText && (
                <p className="text-[#8C7B6B] text-base md:text-lg leading-relaxed whitespace-pre-line mx-auto"
                   style={{ maxWidth: '800px' }}>
                  {project.goalsText}
                </p>
              )}
              {project.appOverviewTitle && (
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1410]
                               mt-16 mb-6">
                  {project.appOverviewTitle}
                </h2>
              )}
              {project.appOverviewText && (
                <p className="text-[#8C7B6B] text-base md:text-lg leading-relaxed whitespace-pre-line mx-auto"
                   style={{ maxWidth: '800px' }}>
                  {project.appOverviewText}
                </p>
              )}
              {project.appOverviewText && (
                <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center
                                gap-8 md:gap-6 p-6 md:p-10 h-auto md:h-[1080px]"
                     style={{ backgroundColor: '#127FBE' }}>
                  {['Home Screen One.png', 'Home Screen Two.png', 'Home Screen Three.png'].map((name, i) => (
                    <img key={i} src={import.meta.env.BASE_URL + `assets/img/PT/${name}`}
                         alt={`Pluritongues ${name.replace('.png', '')}`}
                         className="object-contain w-4/5 max-h-[360px] md:w-auto md:max-h-none md:h-[85%]"
                         loading="lazy" />
                  ))}
                </div>
              )}
              {project.competitorsTitle && (
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1410]
                               mt-16 mb-6">
                  {project.competitorsTitle}
                </h2>
              )}
              {project.competitorsText && (
                <p className="text-[#8C7B6B] text-base md:text-lg leading-relaxed whitespace-pre-line mx-auto"
                   style={{ maxWidth: '800px' }}>
                  {project.competitorsText}
                </p>
              )}
              {project.competitorsText && (
                <div className="w-full mt-10 h-[400px] md:h-[1080px]"
                     style={{ backgroundColor: '#127FBE' }} />
              )}
            </div>
          )}
          {project.images && project.images.length > 0
            ? project.images.map((src, i) => (
                <img key={i} src={import.meta.env.BASE_URL + src}
                     alt={`${project.name} — image ${i + 1}`}
                     className="max-h-screen w-auto mx-auto rounded-xl object-contain" loading="lazy" />
              ))
            : null
          }
        </div>
      </motion.div>
    </motion.div>
  )
}

// Single project row — horizontal layout
function ProjectRow({ project, index, inView, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onOpen(project)}
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-6 border-b border-[#DDD6CA]
                 cursor-pointer group hover:bg-[#EDE8DF] -mx-4 px-4 transition-colors duration-200">

      {/* Thumbnail — full width on mobile, fixed on desktop */}
      <div className="w-full h-48 md:w-[170px] md:h-[121px] overflow-hidden shrink-0 bg-[#EDE8DF]">
        {project.image
          ? <img src={import.meta.env.BASE_URL + project.image} alt={project.name}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          : <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-70
                             flex items-center justify-center text-2xl`}>
              {project.emoji}
            </div>
        }
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-display font-bold text-base md:text-lg text-[#1A1410]
                         group-hover:opacity-70 transition-opacity duration-200">
            {project.name}
          </h3>
          <span className="text-[#8C7B6B] text-xs hidden md:block">{project.category}</span>
        </div>
        <p className="text-[#8C7B6B] text-xs font-medium uppercase tracking-wider mb-1">
          {project.tagline}
        </p>
        <p className="text-[#8C7B6B] text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tag => (
            <span key={tag}
                  className="px-2 py-0.5 border border-[#DDD6CA] text-xs text-[#8C7B6B]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <span className="text-[#8C7B6B] group-hover:text-[#1A1410] group-hover:translate-x-1
                       transition-all duration-200 shrink-0 text-lg">→</span>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter]   = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const visible = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Selected Work
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410]">
              Projects that speak<br />for themselves.
            </h2>

            {/* Filter tabs */}
            <div className="flex gap-2">
              {filterTabs.map(tab => (
                <button key={tab.value} onClick={() => setActiveFilter(tab.value)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                          ${activeFilter === tab.value
                            ? 'bg-[#1A1410] text-[#F5F0E8]'
                            : 'border border-[#DDD6CA] text-[#8C7B6B] hover:border-[#1A1410] hover:text-[#1A1410]'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project list */}
        <div className="border-t border-[#DDD6CA]">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i}
                          inView={inView} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <p className="text-center py-16 text-[#8C7B6B]">No projects in this category yet.</p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
