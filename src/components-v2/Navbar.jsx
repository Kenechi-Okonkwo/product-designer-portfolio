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
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-20% 0px -60% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault(); setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#DDD6CA]' : 'bg-transparent'}`}>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        <a href="#hero" onClick={e => handleClick(e, '#hero')}
           className="font-display font-bold text-xl text-[#1A1410]">
          KO.
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a href={link.href} onClick={e => handleClick(e, link.href)}
                   className={`relative text-sm font-medium transition-colors duration-200 group
                     ${isActive ? 'text-[#1A1410]' : 'text-[#8C7B6B] hover:text-[#1A1410]'}`}>
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-[#1A1410] transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
            )
          })}
        </ul>

        <a href="#contact" onClick={e => handleClick(e, '#contact')}
           className="hidden md:inline-flex px-5 py-2 border border-[#1A1410] text-[#1A1410] text-sm
                      font-semibold rounded-lg hover:bg-[#1A1410] hover:text-[#F5F0E8]
                      transition-all duration-200">
          Let's Talk
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle navigation">
          <span className={`block w-6 h-0.5 bg-[#1A1410] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1410] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1410] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                      className="md:hidden bg-[#F5F0E8] border-b border-[#DDD6CA]">
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => handleClick(e, link.href)}
                     className={`text-base font-medium transition-colors
                       ${activeSection === link.href.replace('#', '') ? 'text-[#1A1410]' : 'text-[#8C7B6B]'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={e => handleClick(e, '#contact')}
                   className="inline-flex px-5 py-2.5 bg-[#1A1410] text-[#F5F0E8] font-semibold rounded-lg text-sm mt-2">
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
