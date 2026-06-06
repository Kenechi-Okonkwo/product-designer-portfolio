import React from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const socials = [
  { label: 'GitHub',    icon: FiGithub,   href: 'https://github.com/kenechi-dev',       hov: 'hover:text-white' },
  { label: 'LinkedIn',  icon: FiLinkedin,  href: 'https://linkedin.com/in/kene-okonkwo', hov: 'hover:text-blue-400' },
  { label: 'Twitter/X', icon: FiTwitter,   href: 'https://twitter.com/kenechi_dev',      hov: 'hover:text-sky-400' },
  { label: 'Behance',   icon: SiBehance,   href: 'https://behance.net/keneokonkwo',      hov: 'hover:text-blue-500' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-lg">
            <span className="text-accent">K</span>
            <span className="text-white">O.</span>
          </span>
          <span className="text-border">·</span>
          <p className="text-muted text-sm">© {year} Kene Okonkwo. Crafted with care.</p>
        </div>

        {/* Social icons — centered on mobile, middle column on desktop */}
        <div className="flex items-center gap-3">
          {socials.map(({ label, icon: Icon, href, hov }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className={`text-muted ${hov} transition-colors duration-200 hover:-translate-y-0.5
                           inline-flex transition-transform`}>
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button onClick={scrollToTop} aria-label="Back to top"
                className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg
                           text-muted text-sm font-medium hover:text-white hover:border-accent/40
                           hover:-translate-y-0.5 transition-all duration-300">
          Back to top
          <HiArrowUp size={16} />
        </button>

      </div>
    </footer>
  )
}

export default Footer
