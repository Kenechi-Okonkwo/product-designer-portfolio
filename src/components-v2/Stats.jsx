import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, suffix: '+', label: 'Years of Experience',  description: 'Designing and building digital products' },
  { value: 5, suffix: '+', label: 'Projects Shipped',     description: 'End-to-end products across industries' },
  { value: 4, suffix: '+', label: 'Industries Covered',   description: 'Fintech, edtech, health, and more' },
  { value: 2, suffix: '',  label: 'Core Disciplines',     description: 'Design AND development' },
]

function AnimatedCounter({ target, suffix, active }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!active) return
    const step = 1000 / target
    let count = 0
    const interval = setInterval(() => {
      count += 1; setCurrent(count)
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
    <section ref={ref} className="py-16 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA] border-b border-b-[#DDD6CA]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-center">
            <div className="font-display font-bold text-4xl md:text-5xl text-[#1A1410] mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
            </div>
            <div className="text-[#1A1410] font-semibold text-sm mb-1">{stat.label}</div>
            <div className="text-[#8C7B6B] text-xs leading-relaxed">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
