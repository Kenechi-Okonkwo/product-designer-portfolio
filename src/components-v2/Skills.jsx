import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories, tools } from '../data/skills'

function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410] mb-3">
            Skills &amp; Tools.
          </h2>
          <p className="text-[#8C7B6B] max-w-lg">
            Design and code — both sides of the same coin. Here's what I work with.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 }}>
              <div className="flex items-center gap-2 mb-5">
                <span>{cat.icon}</span>
                <h3 className="font-display font-semibold text-[#1A1410]">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill.name}
                        className="px-3 py-1.5 border border-[#DDD6CA] rounded-lg text-sm
                                   text-[#8C7B6B] hover:border-[#1A1410] hover:text-[#1A1410]
                                   transition-all duration-200 cursor-default">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toolbox */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-10 border-t border-[#DDD6CA]">
          <p className="text-[#8C7B6B] text-xs uppercase tracking-widest mb-5 font-medium">My Toolbox</p>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <span key={tool}
                    className="px-4 py-1.5 bg-[#EDE8DF] rounded-full text-sm text-[#8C7B6B]
                               font-medium hover:bg-[#1A1410] hover:text-[#F5F0E8]
                               transition-all duration-200 cursor-default">
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
