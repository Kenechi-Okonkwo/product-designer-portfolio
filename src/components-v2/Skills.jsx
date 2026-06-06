// V2 Skills — Tag Cloud with glow
// No skill bars. All skills rendered as glowing pill tags grouped by category.
// Hover gives each tag a blue radial glow — a pure micro-interaction.
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories, tools } from '../data/skills'

function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <span className="block w-10 h-0.5 bg-blue-400 rounded-full mt-2 mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Skills &amp; <span className="text-blue-400">Tools.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Design and code — both sides of the same coin. Here's what I work with.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 }}>

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-semibold text-lg text-slate-300">{cat.title}</h3>
                {/* Thin horizontal rule to the right of the heading */}
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Skill pills — flex wrap */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.04 }}
                    // Hover: blue glow + border lights up — the V2 signature micro-interaction
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
                               text-sm text-slate-300 font-medium cursor-default
                               hover:border-blue-400/50 hover:text-blue-300
                               hover:shadow-lg hover:shadow-blue-500/20
                               transition-all duration-250 hover:-translate-y-0.5"
                  >
                    {skill.name}
                    {/* Proficiency indicator dot — colour changes with level */}
                    <span className={`ml-2 inline-block w-1.5 h-1.5 rounded-full align-middle
                                      ${skill.level >= 85 ? 'bg-blue-400'
                                        : skill.level >= 75 ? 'bg-blue-400/60'
                                        : 'bg-slate-600'}`} />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toolbox row — same concept as V1 but blue glow pills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }} className="mt-14 pt-10 border-t border-white/5">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-5">Toolbox</p>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <span key={tool}
                    className="px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full
                               text-sm text-blue-300 font-medium cursor-default
                               hover:bg-blue-500/20 hover:border-blue-400/50
                               transition-all duration-200 hover:-translate-y-0.5">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
