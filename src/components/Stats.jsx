// Import React and hooks for the animated counter
import React, { useState, useEffect, useRef } from 'react'

// Framer Motion for scroll-triggered reveal
import { motion, useInView } from 'framer-motion'

// The four stats shown in this section (inspired by Joseph Emmanuel's portfolio)
const stats = [
  {
    value: 4,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Designing impactful digital products',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Engagement Boost',
    description: 'User engagement increase at Pluritongues',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Projects Shipped',
    description: 'End-to-end products across industries',
  },
  {
    value: 20,
    suffix: '%+',
    label: 'Retention Improved',
    description: 'User retention gains through optimised flows',
  },
]

// AnimatedCounter — counts from 0 up to `target` when `active` becomes true
function AnimatedCounter({ target, suffix, active }) {
  // current — the number currently displayed (starts at 0, counts to target)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return // Don't animate until the section is in view

    // Calculate how long each step should take for a ~1 second total animation
    const stepDuration = 1000 / target // ms per increment
    let count = 0 // Local counter variable

    // setInterval increments the counter on each tick
    const interval = setInterval(() => {
      count += 1
      setCurrent(count)         // Update the displayed number
      if (count >= target) {    // Stop when we reach the target
        clearInterval(interval)
      }
    }, stepDuration)

    // Cleanup: clear interval if component unmounts before reaching target
    return () => clearInterval(interval)
  }, [active, target]) // Re-run if active or target changes

  // Display the counter value with its suffix
  return (
    <span>
      {current}{suffix}
    </span>
  )
}

function Stats() {
  // ref — used to detect when the stats section enters the viewport
  const ref = useRef(null)

  // once: true — animate only on first intersection (not every scroll)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    // Visually separated with a top/bottom border and a subtle background tint
    <section ref={ref} className="border-y border-border bg-surface/20 py-16 px-6 md:px-12 lg:px-24">

      <div className="max-w-7xl mx-auto">

        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            // Each stat card animates in with a slight delay based on its index
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}                              // Hidden, slightly below
              animate={inView ? { opacity: 1, y: 0 } : {}}                // Slide up when in view
              transition={{ duration: 0.5, delay: i * 0.1 }}              // Stagger by index
              className="text-center group"
            >
              {/* ── LARGE NUMBER ─────────────────────────────────────── */}
              <div className="font-display font-extrabold text-4xl md:text-5xl gradient-text mb-2
                              transition-transform duration-300 group-hover:scale-110">
                {/* AnimatedCounter drives the number from 0 → value */}
                <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
              </div>

              {/* ── LABEL ────────────────────────────────────────────── */}
              <div className="text-white font-semibold text-sm md:text-base mb-1">
                {stat.label}
              </div>

              {/* ── DESCRIPTION ──────────────────────────────────────── */}
              <div className="text-muted text-xs leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats
