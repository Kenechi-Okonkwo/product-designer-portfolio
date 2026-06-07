import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiEnvelope, HiArrowRight } from 'react-icons/hi2'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const socials = [
  { label: 'GitHub',    icon: FiGithub,   href: 'https://github.com/kenechi-dev' },
  { label: 'LinkedIn',  icon: FiLinkedin,  href: 'https://linkedin.com/in/kene-okonkwo' },
  { label: 'Twitter/X', icon: FiTwitter,   href: 'https://twitter.com/kenechi_dev' },
  { label: 'Behance',   icon: SiBehance,   href: 'https://behance.net/keneokonkwo' },
]

// Shared underline input style
const inputClass = `w-full bg-transparent border-0 border-b border-[#DDD6CA] px-0 py-3
                    text-[#1A1410] placeholder-[#C4B9AC] text-sm
                    focus:outline-none focus:border-[#1A1410]
                    transition-colors duration-200`

function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent'); setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-[#DDD6CA]">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-[#8C7B6B] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1410]">
            Let's build something<br />remarkable.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: info + socials */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6 }}>
            <p className="text-[#8C7B6B] leading-relaxed mb-8">
              Have a project in mind or a role to fill? I'm always open to interesting
              conversations and new opportunities.
            </p>

            <a href="mailto:okonkwokenee@gmail.com"
               className="flex items-center gap-3 text-[#1A1410] font-medium hover:opacity-60
                          transition-opacity duration-200 group mb-10">
              <HiEnvelope size={20} className="text-[#8C7B6B]" />
              okonkwokenee@gmail.com
              <HiArrowRight size={14} className="opacity-0 group-hover:opacity-100
                             group-hover:translate-x-1 transition-all duration-200" />
            </a>

            <p className="text-[#8C7B6B] text-xs uppercase tracking-widest mb-4">Find me on</p>
            <div className="flex gap-4">
              {socials.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="text-[#8C7B6B] hover:text-[#1A1410] transition-colors duration-200
                              hover:-translate-y-0.5 inline-flex transition-transform">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="cname" className="block text-xs text-[#8C7B6B] uppercase tracking-widest mb-2">
                  Your Name
                </label>
                <input id="cname" name="name" type="text" required value={form.name}
                       onChange={handleChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cemail" className="block text-xs text-[#8C7B6B] uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input id="cemail" name="email" type="email" required value={form.email}
                       onChange={handleChange} placeholder="john@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cmsg" className="block text-xs text-[#8C7B6B] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea id="cmsg" name="message" required rows={4} value={form.message}
                          onChange={handleChange} placeholder="Tell me about your project..."
                          className={`${inputClass} resize-none`} />
              </div>

              <motion.button type="submit" whileTap={{ scale: 0.97 }}
                disabled={status === 'sending' || status === 'sent'}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm
                            transition-all duration-200 disabled:pointer-events-none
                            ${status === 'sent'
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#1A1410] text-[#F5F0E8] hover:opacity-80'}
                            ${status === 'sending' ? 'opacity-60' : ''}`}>
                {status === 'idle'    && 'Send Message'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent'    && '✓ Message Sent!'}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
