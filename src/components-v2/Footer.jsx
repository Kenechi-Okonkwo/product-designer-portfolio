import React from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const socials = [
  { label: 'GitHub',    icon: FiGithub,   href: 'https://github.com/kenechi-dev' },
  { label: 'LinkedIn',  icon: FiLinkedin,  href: 'https://linkedin.com/in/kene-okonkwo' },
  { label: 'Twitter/X', icon: FiTwitter,   href: 'https://twitter.com/kenechi_dev' },
  { label: 'Behance',   icon: SiBehance,   href: 'https://behance.net/keneokonkwo' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-lg text-[#1A1410]">KO.</span>
          <span className="text-[#DDD6CA]">·</span>
          <p className="text-[#8C7B6B] text-sm">© {year} Kene Okonkwo. Crafted with care.</p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className="text-[#8C7B6B] hover:text-[#1A1410] transition-colors duration-200
                          hover:-translate-y-0.5 inline-flex">
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button onClick={scrollToTop} aria-label="Back to top"
                className="flex items-center gap-2 text-[#8C7B6B] text-sm font-medium
                           hover:text-[#1A1410] transition-colors duration-200">
          Back to top <HiArrowUp size={14} />
        </button>

      </div>
    </footer>
  )
}

export default Footer
