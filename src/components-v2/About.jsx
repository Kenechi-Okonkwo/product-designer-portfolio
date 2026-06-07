import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowDownTray } from 'react-icons/hi2'
import { HiCheckCircle } from 'react-icons/hi'

const highlights = [
  '3+ years designing user-centered digital products',
  'Strong foundation in UX research and product strategy',
  'Bridge between design and frontend development',
  'B.Sc International Relations — research-driven mindset',
]

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6 }}>
            <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410] leading-tight mb-6">
              Designing with intent,<br />building with purpose.
            </h2>
            <p className="text-[#8C7B6B] leading-relaxed mb-4">
              I'm <span className="text-[#1A1410] font-medium">Kene Okonkwo</span>, a UI/UX Designer &amp; Developer
              based in Nigeria. I specialise in transforming complex, ambiguous problems into clean,
              intuitive digital experiences that real people actually enjoy using.
            </p>
            <p className="text-[#8C7B6B] leading-relaxed mb-8">
              With a background in International Relations and 3+ years of hands-on design experience,
              I bring a research-driven, empathetic approach to every product I touch — whether I'm
              shaping the UX strategy or writing the frontend code that brings it to life.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map(point => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#8C7B6B]">
                  <HiCheckCircle className="text-[#1A1410] mt-0.5 shrink-0" size={16} />
                  {point}
                </li>
              ))}
            </ul>

            <a href="/Kene_Okonkwo_CV.pdf" download
               className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1A1410]
                          text-[#1A1410] text-sm font-semibold rounded-lg
                          hover:bg-[#1A1410] hover:text-[#F5F0E8] transition-all duration-200">
              <HiArrowDownTray size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Right: photo + info */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 }}>
            {/* Profile photo placeholder — replace span with <img> when photo is ready */}
            <div className="w-full aspect-square max-w-xs rounded-2xl bg-[#EDE8DF]
                            flex items-center justify-center mb-8 overflow-hidden">
              <span className="font-display font-bold text-5xl text-[#8C7B6B]">KO</span>
            </div>

            {/* Info rows */}
            {[
              { label: 'Location',     value: 'Nigeria' },
              { label: 'Experience',   value: '3+ Years' },
              { label: 'Availability', value: 'Open to work', highlight: true },
              { label: 'Email',        value: 'okonkwokenee@gmail.com' },
            ].map(item => (
              <div key={item.label}
                   className="flex justify-between items-center py-3.5 border-b border-[#DDD6CA]">
                <span className="text-[#8C7B6B] text-sm">{item.label}</span>
                {item.highlight
                  ? <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.value}
                    </span>
                  : <span className="text-[#1A1410] text-sm font-medium">{item.value}</span>
                }
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
