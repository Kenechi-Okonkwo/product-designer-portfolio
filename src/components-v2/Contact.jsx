// V2 Contact — same structure as V1 but blue accent + glassmorphism form inputs
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiEnvelope, HiArrowRight } from 'react-icons/hi2'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const socials = [
  { label: 'GitHub',    icon: FiGithub,   href: 'https://github.com/kenechi-dev',       color: 'hover:text-white' },
  { label: 'LinkedIn',  icon: FiLinkedin,  href: 'https://linkedin.com/in/kene-okonkwo', color: 'hover:text-blue-400' },
  { label: 'Twitter/X', icon: FiTwitter,   href: 'https://twitter.com/kenechi_dev',      color: 'hover:text-sky-400' },
  { label: 'Behance',   icon: SiBehance,   href: 'https://behance.net/keneokonkwo',      color: 'hover:text-blue-500' },
]

// Shared glass input class string — avoids repeating the same long className
const inputClass = `w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3
                    text-white placeholder-slate-500 text-sm
                    focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30
                    transition-all duration-300`

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))   // Placeholder — replace with real API
    setStatus('sent'); setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <span className="block w-10 h-0.5 bg-blue-400 rounded-full mt-2 mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Let's build something <span className="text-blue-400">remarkable.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info + socials */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6 }}>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Have a project in mind or a role to fill? I'm always open to interesting conversations.
            </p>
            <a href="mailto:okonkwokenee@gmail.com"
               className="flex items-center gap-3 text-white font-medium text-lg hover:text-blue-400
                          transition-colors duration-300 group mb-10">
              <HiEnvelope size={24} className="text-blue-400" />
              okonkwokenee@gmail.com
              <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center
                               justify-center text-slate-400 ${color} hover:border-blue-400/30
                               transition-all duration-300 hover:-translate-y-1`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: glass form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name2" className="block text-sm text-slate-500 mb-2">Your Name</label>
                <input id="name2" name="name" type="text" required value={form.name}
                       onChange={handleChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email2" className="block text-sm text-slate-500 mb-2">Email</label>
                <input id="email2" name="email" type="email" required value={form.email}
                       onChange={handleChange} placeholder="john@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="msg2" className="block text-sm text-slate-500 mb-2">Message</label>
                <textarea id="msg2" name="message" required rows={5} value={form.message}
                          onChange={handleChange} placeholder="Tell me about your project..."
                          className={`${inputClass} resize-none`} />
              </div>
              <motion.button type="submit" whileTap={{ scale: 0.97 }}
                disabled={status === 'sending' || status === 'sent'}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white
                            transition-all duration-200
                            ${status === 'sent' ? 'bg-emerald-600'
                              : 'bg-blue-500 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30'}
                            disabled:pointer-events-none disabled:opacity-70`}>
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && '✓ Sent!'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
