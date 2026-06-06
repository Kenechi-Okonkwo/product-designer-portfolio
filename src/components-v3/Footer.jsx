// V3 Footer — flat, minimal, amber logo + social links + back-to-top
// Social icons moved here so they're persistently accessible at page end
import React from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

// Social links — duplicated from Contact so they're always reachable in the footer
const socials = [
  { label: 'GitHub',    icon: FiGithub,  href: 'https://github.com/kenechi-dev' },
  { label: 'LinkedIn',  icon: FiLinkedin, href: 'https://linkedin.com/in/kene-okonkwo' },
  { label: 'Twitter/X', icon: FiTwitter,  href: 'https://twitter.com/kenechi_dev' },
  { label: 'Behance',   icon: SiBehance,  href: 'https://behance.net/keneokonkwo' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-800">

      {/* Main footer row: logo + socials + back-to-top */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Left: logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-lg">
            <span className="text-amber-400">K</span>
            <span className="text-white">O.</span>
          </span>
          <span className="text-stone-800">·</span>
          <p className="text-stone-600 text-sm">© {year} Kene Okonkwo.</p>
        </div>

        {/* Centre: social icon links — persistent, accessible from any page position */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className="text-stone-700 hover:text-amber-400 transition-all duration-300 hover:-translate-y-0.5">
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Right: back to top */}
        <button onClick={scrollToTop} aria-label="Back to top"
                className="flex items-center gap-2 px-4 py-2 border border-stone-800 text-stone-500
                           text-sm font-medium hover:text-amber-400 hover:border-amber-900/50
                           hover:-translate-y-0.5 transition-all duration-300 rounded-lg">
          Back to top <HiArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
