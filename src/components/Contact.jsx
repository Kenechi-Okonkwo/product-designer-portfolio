// Import React and useState to manage form state
import React, { useState, useRef } from 'react'

// Framer Motion
import { motion, useInView } from 'framer-motion'

// React Icons for social links and form button
import { HiEnvelope, HiArrowRight } from 'react-icons/hi2'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

// Social link data — add/remove handles here without touching JSX
const socials = [
  {
    label: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/kenechi-dev', // Update with real handle
    color: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/kene-okonkwo', // Update with real profile
    color: 'hover:text-blue-400',
  },
  {
    label: 'Twitter / X',
    icon: FiTwitter,
    href: 'https://twitter.com/kenechi_dev', // Update with real handle
    color: 'hover:text-sky-400',
  },
  {
    label: 'Behance',
    icon: SiBehance,
    href: 'https://behance.net/keneokonkwo', // Update with real profile
    color: 'hover:text-blue-500',
  },
]

function Contact() {
  // Form field state — controlled inputs
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // status — tracks submission state: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  // Observe section for scroll animation
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Update a single field in the form state when the user types
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Handle form submission — currently logs to console (connect to a backend or EmailJS)
  const handleSubmit = async (e) => {
    e.preventDefault()         // Prevent default browser form submission (page reload)
    setStatus('sending')       // Show the loading state on the button

    // Simulate a network request with a 1.5s timeout
    // Replace this with a real API call (EmailJS, Formspree, your own backend, etc.)
    await new Promise((res) => setTimeout(res, 1500))

    // Mark as sent and reset the form fields
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })

    // Reset button back to idle state after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <span className="accent-line" />
          <h2 className="section-heading">
            Let's build something <span className="gradient-text">remarkable.</span>
          </h2>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* ── LEFT COLUMN — info + social links ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted leading-relaxed mb-8 text-lg">
              Have a project in mind, a role to fill, or just want to talk design?
              I'm always open to interesting conversations and new opportunities.
            </p>

            {/* Direct email link — large and easy to copy */}
            <a
              href="mailto:okonkwokenee@gmail.com"
              className="flex items-center gap-3 text-white font-medium text-lg hover:text-accent
                         transition-colors duration-300 group mb-10"
            >
              <HiEnvelope size={24} className="text-accent" />
              okonkwokenee@gmail.com
              {/* Arrow slides right on hover — micro-interaction */}
              <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            {/* ── SOCIAL LINKS ─────────────────────────────────────── */}
            <div>
              <p className="text-muted text-sm uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-4">
                {socials.map(({ label, icon: Icon, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"               // Open in a new tab
                    rel="noopener noreferrer"      // Security: prevents the new tab from accessing window.opener
                    aria-label={label}             // Screen reader label
                    className={`
                      w-11 h-11 rounded-lg bg-surface border border-border
                      flex items-center justify-center text-muted
                      ${color} hover:border-accent/40
                      transition-all duration-300 hover:-translate-y-1
                    `}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — contact form ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* ── NAME INPUT ─────────────────────────────────────────── */}
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required                                   // Browser-level required validation
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full bg-surface border border-border rounded-lg px-4 py-3
                    text-white placeholder-muted text-sm
                    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                    transition-all duration-300
                  "
                />
              </div>

              {/* ── EMAIL INPUT ────────────────────────────────────────── */}
              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="
                    w-full bg-surface border border-border rounded-lg px-4 py-3
                    text-white placeholder-muted text-sm
                    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                    transition-all duration-300
                  "
                />
              </div>

              {/* ── MESSAGE TEXTAREA ───────────────────────────────────── */}
              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}                                   // Default visible rows
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="
                    w-full bg-surface border border-border rounded-lg px-4 py-3
                    text-white placeholder-muted text-sm resize-none
                    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                    transition-all duration-300
                  "
                />
              </div>

              {/* ── SUBMIT BUTTON ──────────────────────────────────────── */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'} // Disable while processing
                // Scale-down micro-interaction when pressed
                whileTap={{ scale: 0.97 }}
                className={`
                  btn-primary
                  ${status === 'sent' ? 'bg-emerald-600 hover:bg-emerald-600' : ''}
                  ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}
                  disabled:pointer-events-none
                `}
              >
                {/* Button label changes based on form status */}
                {status === 'idle'    && 'Send Message'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent'    && '✓ Message Sent!'}
                {status === 'error'   && 'Try Again'}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
