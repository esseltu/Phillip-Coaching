import { motion } from 'framer-motion'
const MDiv = motion.div
const MH1 = motion.h1
const MP = motion.p
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <MDiv
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571907480495-64e7b59d8147?q=80&w=1640&auto=format&fit=crop"
                alt="Coach Phillip"
                className="w-full rounded-2xl border border-gray-200 shadow-soft object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </MDiv>
            <MDiv
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="lg:pl-6"
            >
              <MH1 variants={fadeUp} className="h1">Hi! I’m Coach Phillip</MH1>
              <MP variants={fadeUp} className="mt-4 subtext max-w-xl">
                I help women achieve sustainable fat loss, build strength, and feel confident in their bodies.
                With over 12+ years of training experience and 5+ years coaching online, I design personalized programs
                that fit your lifestyle—without calorie obsession or extreme dieting.
              </MP>
              <MDiv variants={fadeUp} className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  '12+ years training experience',
                  '5+ years coaching online',
                  'Women-focused programming',
                  'Science-based, sustainable approach',
                  'Train smarter, not harder',
                  'Confidence inside & outside the gym',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="text-brand-primary" size={18} />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </MDiv>
              <MDiv variants={fadeUp} className="mt-8 flex items-center gap-4">
                <Link to="/contact" className="cta cta-lg cta-accent">
                  Start Now
                </Link>
                <Link to="/results" className="cta cta-lg cta-outline">
                  Client Results
                </Link>
              </MDiv>
            </MDiv>
          </div>
        </div>
      </section>
    </main>
  )
}
