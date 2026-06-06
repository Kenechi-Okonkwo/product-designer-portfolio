// V3 Navbar — amber accent with active section tracking via IntersectionObserver
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

function Navbar() {
  // scrolled — triggers the frosted glass background after 50px of scroll
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // activeSection — the id of the section currently in the viewport
  // Used to highlight the matching nav link with the amber accent
  const [activeSection, setActiveSection] = useState('')

  // Scroll listener — switches navbar background style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver — watches all sections and updates activeSection
  // when a section crosses the top third of the viewport
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''))

    // Observe each section element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Only update when the section is entering the viewport (intersecting)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      // rootMargin: top -20%, bottom -60% — fires when section is in the upper portion
      { rootMargin: '-20% 0px -60% 0px' }
    )

    // Find and observe each section by its id
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect()
  }, [])

  // Smooth scroll to target section and close mobile menu
  const handleClick = (e, href) => {
    e.preventDefault(); setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-[#0c0800]/90 backdrop-blur-md border-b border-amber-900/30 shadow-lg'
                 : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="font-display font-bold text-xl group">
          <span className="text-amber-400">K</span>
          <span className="text-white group-hover:text-amber-300 transition-colors duration-300">O.</span>
        </a>

        {/* Desktop links — active link gets amber color + underline */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            // isActive — true when this link's section is currently in view
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                   className={`relative text-sm font-medium transition-colors duration-300 group
                               ${isActive ? 'text-amber-400' : 'text-stone-400 hover:text-white'}`}>
                  {link.label}
                  {/* Underline — always visible for active, reveals on hover for others */}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-amber-400 transition-all duration-300
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA button */}
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')}
           className="hidden md:inline-flex items-center px-5 py-2 border border-amber-400/50 text-amber-400
                      text-sm font-semibold rounded-lg hover:bg-amber-400 hover:text-black
                      transition-all duration-200">
          Let's Talk
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle navigation">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
                      className="md:hidden bg-[#0c0800]/95 backdrop-blur-md border-b border-amber-900/20">
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                     className={`block text-base font-medium transition-colors
                                 ${activeSection === link.href.replace('#', '')
                                   ? 'text-amber-400' : 'text-stone-400 hover:text-white'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')}
                   className="block w-full text-center py-2.5 border border-amber-400/50 text-amber-400
                              font-semibold rounded-lg hover:bg-amber-400 hover:text-black
                              transition-all text-sm mt-2">
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
