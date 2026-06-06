// V3 Contact — flat editorial form, amber focus states
// Send button is proportionate (auto width) rather than full-width
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiEnvelope, HiArrowRight } from 'react-icons/hi2'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const socials = [
  { label: 'GitHub',    icon: FiGithub,  href: 'https://github.com/kenechi-dev',       color: 'hover:text-white' },
  { label: 'LinkedIn',  icon: FiLinkedin, href: 'https://linkedin.com/in/kene-okonkwo', color: 'hover:text-blue-400' },
  { label: 'Twitter/X', icon: FiTwitter,  href: 'https://twitter.com/kenechi_dev',      color: 'hover:text-sky-400' },
  { label: 'Behance',   icon: SiBehance,  href: 'https://behance.net/keneokonkwo',      color: 'hover:text-blue-400' },
]

// Underline-only input — flat editorial style (no box, just a bottom border)
const inputClass = `w-full bg-transparent border-0 border-b border-stone-700 py-3 px-0
                    text-white placeholder-stone-600 text-sm
                    focus:outline-none focus:border-amber-400
                    transition-colors duration-300`

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending')
    await new Promise(r => setTimeout(r, 1500)) // Replace with real API call
    setStatus('sent'); setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em]">Get In Touch</span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Let's build something <span className="text-amber-400">remarkable.</span>
          </h2>
          {/* Subheading — adds hierarchy between H2 and body */}
          <p className="text-stone-500 text-base">
            A project, a role, or just a good conversation — I'm open to all three.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left: info + socials */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6 }}>
            <p className="text-stone-400 leading-relaxed mb-10 text-lg">
              Have a project in mind or want to talk design? I'm always open to new conversations.
            </p>
            <a href="mailto:okonkwokenee@gmail.com"
               className="flex items-center gap-3 text-white font-medium hover:text-amber-400
                          transition-colors duration-300 group mb-12">
              <HiEnvelope size={22} className="text-amber-400" />
              okonkwokenee@gmail.com
              <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
            <p className="text-stone-600 text-xs uppercase tracking-widest mb-5">Find me on</p>
            <div className="flex gap-5">
              {socials.map(({ label, icon: Icon, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className={`text-stone-600 ${color} transition-all duration-300 hover:-translate-y-1`}>
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: underline-style form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name3" className="block text-xs text-stone-600 uppercase tracking-widest mb-3">Name</label>
                <input id="name3" name="name" type="text" required value={form.name}
                       onChange={handleChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email3" className="block text-xs text-stone-600 uppercase tracking-widest mb-3">Email</label>
                <input id="email3" name="email" type="email" required value={form.email}
                       onChange={handleChange} placeholder="john@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="msg3" className="block text-xs text-stone-600 uppercase tracking-widest mb-3">Message</label>
                <textarea id="msg3" name="message" required rows={4} value={form.message}
                          onChange={handleChange} placeholder="Your message..."
                          className={`${inputClass} resize-none`} />
              </div>

              {/* Button — auto-width, left-aligned, NOT full width */}
              <div className="flex justify-start">
                <motion.button type="submit" whileTap={{ scale: 0.97 }}
                  disabled={status === 'sending' || status === 'sent'}
                  className={`inline-flex items-center gap-2 px-8 py-3 border font-semibold text-sm
                              rounded-lg transition-all duration-200
                              ${status === 'sent'
                                ? 'border-emerald-600 text-emerald-400 pointer-events-none'
                                : 'border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black'}
                              disabled:opacity-60 disabled:pointer-events-none`}>
                  {status === 'idle' && 'Send Message'}
                  {status === 'sending' && 'Sending…'}
                  {status === 'sent' && '✓ Message Sent'}
                  {/* Arrow slides right on hover */}
                  {status === 'idle' && <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
