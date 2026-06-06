// V1 Navbar — purple accent with active section tracking via IntersectionObserver
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
  // scrolled — triggers frosted glass effect after 50px scroll
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // activeSection — id of the section currently visible in the upper viewport
  const [activeSection, setActiveSection] = useState('')

  // Listen for scroll to toggle the glass background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver — highlights the nav link matching the current section
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-20% 0px -60% 0px' } // Fires when section enters upper third of screen
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault(); setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
                 : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="font-display font-bold text-xl group">
          <span className="text-accent">K</span>
          <span className="text-white group-hover:text-accent-light transition-colors duration-300">O.</span>
        </a>

        {/* Desktop links — active link gets accent color + persistent underline */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                   className={`relative text-sm font-medium transition-colors duration-300 group
                               ${isActive ? 'text-accent' : 'text-muted hover:text-white'}`}>
                  {link.label}
                  {/* Underline — always visible for active link, grows on hover for others */}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')}
           className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
                      className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border">
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                     className={`block text-base font-medium transition-colors
                                 ${activeSection === link.href.replace('#', '')
                                   ? 'text-accent' : 'text-muted hover:text-white'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')}
                   className="btn-primary w-full justify-center mt-2">Let's Talk</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
