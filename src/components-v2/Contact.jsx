import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const year = new Date().getFullYear()

const links = [
  {
    label: 'Get in touch',
    sub:   'okonkwokenee@gmail.com',
    href:  'mailto:okonkwokenee@gmail.com',
    external: false,
  },
  {
    label: 'Connect on LinkedIn',
    sub:   'kene-okonkwo',
    href:  'https://linkedin.com/in/kene-okonkwo',
    external: true,
  },
  {
    label: 'Connect on Behance',
    sub:   'keneokonkwo',
    href:  'https://behance.net/keneokonkwo',
    external: true,
  },
  {
    label: 'View on GitHub',
    sub:   'Kenechi-Dev',
    href:  'https://github.com/Kenechi-Okonkwo',
    external: true,
  },
]

function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref}
             className="bg-[#1A1410] py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-[#F5F0E8]
                     leading-[1.05] tracking-tight max-w-3xl mb-24 md:mb-36">
          Think of all the cool stuff we could accomplish together
        </motion.h2>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-10
                     pt-8 border-t border-[#F5F0E8]/10">

          {/* Link columns */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 text-left">
            {links.map(({ label, sub, href, external }) => (
              <div key={label}>
                <a href={href}
                   {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                   className="inline-flex items-center gap-1 text-sm font-semibold text-[#F5F0E8]
                              mb-1.5 hover:opacity-50 transition-opacity duration-200">
                  {label} <span className="text-base">↗</span>
                </a>
                <p className="text-[#F5F0E8]/40 text-sm">{sub}</p>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#F5F0E8]/40 text-sm shrink-0">©{year}</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
