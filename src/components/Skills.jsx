// Import React and useRef for intersection observer
import React, { useRef } from 'react'

// Framer Motion for scroll-triggered animations
import { motion, useInView } from 'framer-motion'

// Import skill data from the central data file
import { skillCategories, tools } from '../data/skills'

// SkillBar — renders a single skill with an animated progress bar
function SkillBar({ name, level, inView, delay }) {
  return (
    // Wrapper — adds spacing between skills and hover highlight effect
    <div className="group mb-4">
      {/* Top row: skill name on left, percentage on right */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs text-accent font-semibold">{level}%</span>
      </div>

      {/* Track — the grey background bar */}
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        {/* Fill — the accent-colored bar that animates in from 0 to `level`% */}
        <motion.div
          initial={{ width: 0 }}                                // Starts at zero width
          animate={inView ? { width: `${level}%` } : {}}       // Grows to level% when visible
          transition={{ duration: 0.9, delay, ease: 'easeOut' }} // Delayed stagger per skill
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </div>
  )
}

function Skills() {
  // ref — observe when this section enters the viewport
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding bg-surface/20">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Expertise
          </span>
          <span className="accent-line" />
          <h2 className="section-heading">
            Skills &amp; <span className="gradient-text">Tools.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl">
            Design and code — both sides of the same coin. Here's what I work with.
          </p>
        </motion.div>

        {/* ── SKILL CATEGORIES GRID ───────────────────────────────────────── */}
        {/* 3 columns on large screens, 1 on mobile */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }} // Stagger each column
              className="card p-6"
            >
              {/* Category header: emoji + title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display font-semibold text-lg text-white">{category.title}</h3>
              </div>

              {/* Skill bars — each one delays slightly based on its position */}
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  // Each bar animates 0.05s after the previous, so bars "fill" in sequence
                  delay={catIndex * 0.15 + skillIndex * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* ── TOOLBOX ROW ─────────────────────────────────────────────────── */}
        {/* Pill tags for specific tools — inspired by Joseph Emmanuel's toolbox section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Heading for the toolbox */}
          <p className="text-muted text-sm uppercase tracking-widest mb-4 font-medium">My Toolbox</p>

          {/* Flex-wrap row of tool pills */}
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              // Each pill has a hover effect — border + text color transition (micro-interaction)
              <span
                key={tool}
                className="
                  px-4 py-2 bg-surface border border-border rounded-full
                  text-sm text-muted font-medium cursor-default
                  hover:border-accent/50 hover:text-accent
                  transition-all duration-200
                  hover:-translate-y-0.5
                "
              >
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
