// V3 About — Pure editorial layout with profile photo placeholder
// No cards. Large typography, amber accents, profile avatar, thin dividers.
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowDownTray } from 'react-icons/hi2'

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION LABEL ─────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">About Me</span>
          <div className="flex-1 h-px bg-stone-800" />
        </motion.div>

        {/* ── PROFILE + NAME BLOCK ──────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mb-16">

          {/* ── PROFILE PHOTO PLACEHOLDER ───────────────────────────────
              Replace the div below with an <img> tag when a real photo is available.
              e.g. <img src="/kene-photo.jpg" alt="Kene Okonkwo" className="w-28 h-28 rounded-2xl object-cover" /> */}
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-900/60 to-amber-600/30
                          border border-amber-400/30 flex items-center justify-center shrink-0">
            {/* Initials shown until a real photo is dropped in */}
            <span className="font-display font-extrabold text-3xl text-amber-400">KO</span>
          </div>

          {/* Name block sits next to the photo */}
          <div>
            {/* Large name heading */}
            <h1 className="font-display font-extrabold leading-none tracking-tight text-white mb-2"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              Kene Okonkwo
            </h1>
            {/* Amber underline — the V3 editorial signature */}
            <div className="h-1 bg-amber-400 w-full mb-4" />
            {/* Role subtitle */}
            <p className="text-stone-400 text-lg font-medium">UI/UX Designer &amp; Developer</p>
          </div>
        </motion.div>

        {/* ── TWO-COLUMN BODY ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left — bio paragraphs */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.2 }}>
            {/* Subheading — the mid-size bridge between label and body text */}
            <h2 className="font-display font-semibold text-xl text-stone-200 mb-5">
              Designing with intent, building with purpose.
            </h2>
            <p className="text-stone-300 text-base leading-loose mb-5">
              I'm a tenacious UI/UX designer and developer with a strong background in research,
              design processes, and product thinking. I solve complex problems through clear,
              intentional design that people actually enjoy using.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              With a B.Sc in International Relations and 3+ years of hands-on experience,
              I bring an analytical mindset to every product — spanning fintech, ed-tech,
              and e-commerce across Africa and beyond.
            </p>
            {/* CV download */}
            <a href="/Kene_Okonkwo_CV.pdf" download
               className="inline-flex items-center gap-2 px-6 py-3 border border-amber-400/60
                          text-amber-400 font-semibold text-sm rounded-lg
                          hover:bg-amber-400 hover:text-black transition-all duration-200
                          hover:-translate-y-0.5">
              <HiArrowDownTray size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Right — details table */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.3 }}>
            {/* Subheading for the details column */}
            <h2 className="font-display font-semibold text-xl text-stone-200 mb-5">Quick facts.</h2>
            {[
              { label: 'Location',     value: 'Nigeria' },
              { label: 'Experience',   value: '3+ Years' },
              { label: 'Education',    value: 'B.Sc International Relations' },
              { label: 'Disciplines',  value: 'Design + Frontend Development' },
              { label: 'Industries',   value: 'Fintech · Ed-Tech · E-Commerce · Events' },
              { label: 'Availability', value: 'Open to work', amber: true },
              { label: 'Email',        value: 'okonkwokenee@gmail.com' },
            ].map((item, i) => (
              <motion.div key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                          className="flex justify-between items-baseline py-3.5 border-b border-stone-800
                                     hover:border-amber-900/50 transition-colors duration-200 group">
                <span className="text-stone-500 text-sm group-hover:text-stone-400 transition-colors">
                  {item.label}
                </span>
                <span className={`text-sm font-medium text-right max-w-[60%] ${item.amber ? 'text-amber-400' : 'text-stone-200'}`}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
