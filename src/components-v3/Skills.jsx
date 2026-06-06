// V3 Skills — improved visual treatment: pill tags with proficiency dots + tool logo row
// More scannable than plain comma-separated text, while staying consistent with editorial feel
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories, tools } from '../data/skills'

// Proficiency dot colour based on skill level
// Gives an at-a-glance signal without a bar chart cluttering the editorial layout
function ProficiencyDot({ level }) {
  const color = level >= 85 ? 'bg-amber-400'         // Expert
              : level >= 75 ? 'bg-amber-400/50'      // Proficient
              :               'bg-stone-700'          // Learning
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${color} align-middle ml-1.5`} />
}

function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">

        {/* Editorial header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">Expertise</span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Skills &amp; <span className="text-amber-400">Tools.</span>
          </h2>
          {/* Subheading — the missing mid-hierarchy level */}
          <p className="text-stone-500 text-base">
            The craft I bring to every project — dot colour indicates proficiency level.
          </p>
        </motion.div>

        {/* Skill categories — grid layout: label left, pill tags right */}
        <div className="space-y-0">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="grid md:grid-cols-4 gap-6 md:gap-10 py-10 border-b border-stone-800
                                   hover:border-amber-900/30 transition-colors duration-300">

              {/* Category label */}
              <div className="flex items-center gap-3">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="font-display font-semibold text-sm text-amber-400 uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              {/* Pill tags — much more scannable than plain text, still editorial */}
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <motion.span key={skill.name}
                               initial={{ opacity: 0, scale: 0.9 }}
                               animate={inView ? { opacity: 1, scale: 1 } : {}}
                               transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.04 }}
                               className="inline-flex items-center px-3 py-1.5 border border-stone-800
                                          rounded-lg text-sm text-stone-300 cursor-default
                                          hover:border-amber-400/40 hover:text-amber-300
                                          hover:bg-amber-400/5 transition-all duration-200">
                    {skill.name}
                    {/* Proficiency dot — at-a-glance level indicator */}
                    <ProficiencyDot level={skill.level} />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tools row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="grid md:grid-cols-4 gap-6 md:gap-10 pt-10">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔧</span>
              <h3 className="font-display font-semibold text-sm text-amber-400 uppercase tracking-wider">
                Toolbox
              </h3>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool}
                      className="px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-lg
                                 text-sm text-amber-300/80 cursor-default
                                 hover:bg-amber-400/15 hover:text-amber-300 hover:border-amber-400/40
                                 transition-all duration-200">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Legend — explains the proficiency dots */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-6 mt-10 pt-8 border-t border-stone-900">
          <span className="text-stone-600 text-xs uppercase tracking-widest">Proficiency:</span>
          {[
            { color: 'bg-amber-400',      label: 'Expert' },
            { color: 'bg-amber-400/50',   label: 'Proficient' },
            { color: 'bg-stone-700',       label: 'Learning' },
          ].map(item => (
            <span key={item.label} className="flex items-center gap-2 text-xs text-stone-500">
              <span className={`w-2 h-2 rounded-full ${item.color}`} />
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
