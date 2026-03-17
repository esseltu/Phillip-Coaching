import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Dumbbell, Apple, ClipboardCheck, CalendarDays } from 'lucide-react'

const MDiv = motion.div
const MH2 = motion.h2
const MP = motion.p

const features = [
  {
    icon: Dumbbell,
    title: 'Personalized Training',
    points: [
      'Custom workouts for your goals',
      'Progressive overload & form cues',
      'Gym or home-friendly options',
    ],
  },
  {
    icon: Apple,
    title: 'Nutrition Guidance',
    points: [
      'Balanced, sustainable nutrition',
      'No extreme dieting or obsession',
      'Habits you can keep long-term',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Accountability',
    points: [
      'Weekly check-ins & adjustments',
      'Messaging support',
      'Real-time encouragement',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Smart Programming',
    points: [
      'Train smarter not harder',
      'Deloads & recovery built-in',
      'Confidence inside & outside the gym',
    ],
  },
]

export default function Programs() {
  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <MH2 className="h2">
              Online Coaching Programs
            </MH2>
            <MP className="mt-3 max-w-2xl mx-auto subtext">
              Sustainable fat loss, strength building, and body confidence — with structure and support.
            </MP>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <MDiv
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
                className="card p-5"
              >
                <div className="flex items-center gap-3">
                  <f.icon className="text-brand-primary" size={20} />
                  <div className="text-sm font-extrabold text-gray-900">{f.title}</div>
                </div>
                <ul className="mt-4 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="text-sm text-gray-700">{p}</li>
                  ))}
                </ul>
              </MDiv>
            ))}
          </div>

          <div className="mt-14 sm:mt-20">
            <MDiv
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-soft"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                    Train smarter, not harder
                  </div>
                  <MP className="mt-3 max-w-xl text-gray-600">
                    Ditch the extremes. Build strength, lose fat, and feel confident with a plan that fits your life.
                  </MP>
                  <div className="mt-6 flex items-center gap-4">
                    <Link to="/contact" className="cta cta-lg cta-accent">
                      Start Now
                    </Link>
                    <Link to="/about" className="cta cta-lg cta-outline">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-brand-primary/10 to-gold/10 p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Personalized workouts',
                      'Habit-based nutrition',
                      'Weekly accountability',
                      'Form feedback',
                      'Recovery planning',
                      'Confidence & mindset',
                    ].map((b) => (
                      <div key={b} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800">
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MDiv>
          </div>
        </div>
      </section>
    </main>
  )
}
