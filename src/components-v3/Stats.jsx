// V3 Stats — flat editorial row, amber numbers, meaningful metrics only
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// "100% Commitment" replaced with "4+ Industries" — a measurable, credible stat
const stats = [
  { value: 3,  suffix: '+', label: 'Years of Experience',  desc: 'Designing and building' },
  { value: 5,  suffix: '+', label: 'Projects Shipped',     desc: 'End-to-end products' },
  { value: 4,  suffix: '+', label: 'Industries Covered',   desc: 'Fintech, Ed-Tech, Events & more' },
  { value: 2,  suffix: '',  label: 'Core Disciplines',     desc: 'Design + Development' },
]

// Counts from 0 up to target when active
function AnimatedCounter({ target, suffix, active }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!active) return
    const step = 1000 / target; let count = 0
    const interval = setInterval(() => {
      count++; setCurrent(count)
      if (count >= target) clearInterval(interval)
    }, step)
    return () => clearInterval(interval)
  }, [active, target])
  return <span>{current}{suffix}</span>
}

function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 lg:px-24 border-y border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-stone-800">
          {stats.map((stat, i) => (
            <motion.div key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-center md:px-8 group">
              {/* Large amber animated number */}
              <div className="font-display font-extrabold text-5xl md:text-6xl text-amber-400 mb-2
                              transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              {/* Label */}
              <div className="text-stone-300 text-sm font-medium mb-1">{stat.label}</div>
              {/* Description subline — adds the missing mid-size hierarchy */}
              <div className="text-stone-600 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
