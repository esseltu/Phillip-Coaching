import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, User, Target } from 'lucide-react'

const MDiv = motion.div
const MH2 = motion.h2
const MP = motion.p

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <MH2 className="h2">Join My Team</MH2>
            <MP className="mt-3 max-w-2xl mx-auto subtext">
              Apply for coaching. Share your goals and I’ll reach out with next steps.
            </MP>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <MDiv
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                    Name
                  </label>
                  <div className="mt-2 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={16} />
                    </span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-9 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                      Email
                    </label>
                    <div className="mt-2 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={16} />
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-9 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Phone size={16} />
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-xl border border-gray-200 bg-white px-9 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="goal" className="block text-sm font-semibold text-gray-900">
                    Your primary goal
                  </label>
                  <div className="mt-2 relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <Target size={16} />
                    </span>
                    <textarea
                      id="goal"
                      name="goal"
                      rows={4}
                      className="w-full rounded-xl border border-gray-200 bg-white px-9 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                      placeholder="Tell me about your goals, timeline, and current routine."
                    />
                  </div>
                </div>
                <button type="submit" className="cta cta-lg cta-accent">
                  Apply Now
                </button>
                {submitted && (
                  <div className="badge badge-gold">
                    Thanks! I’ll be in touch shortly.
                  </div>
                )}
              </form>
            </MDiv>
            <MDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-gradient-to-br from-brand-primary/10 to-gold/10 p-6 sm:p-8"
            >
              <div className="text-xl font-extrabold text-gray-900">What you’ll get</div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>Personalized training and nutrition guidance</li>
                <li>Weekly check-ins and accountability</li>
                <li>Form feedback and smart programming</li>
                <li>Confidence inside and outside the gym</li>
              </ul>
              <div className="mt-6 text-sm text-gray-500">
                By submitting this form you agree to be contacted about coaching.
              </div>
            </MDiv>
          </div>
        </div>
      </section>
    </main>
  )
}
