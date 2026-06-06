// V2 Footer — glass border top, blue logo, social icons centered
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
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-lg">
            <span className="text-blue-400">K</span>
            <span className="text-white">O.</span>
          </span>
          <span className="text-white/10">·</span>
          <p className="text-slate-500 text-sm">© {year} Kene Okonkwo. Built with care.</p>
        </div>

        {/* Social icons centered */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, icon: Icon, href, hov }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className={`text-slate-500 ${hov} transition-colors duration-200
                           hover:-translate-y-0.5 inline-flex transition-transform`}>
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Back to top — glass button */}
        <button onClick={scrollToTop} aria-label="Back to top"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl
                           text-slate-400 text-sm font-medium hover:text-blue-300 hover:border-blue-400/30
                           hover:-translate-y-0.5 transition-all duration-300">
          Back to top <HiArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
