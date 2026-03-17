import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
const MDiv = motion.div
const MH1 = motion.h1
const MP = motion.p

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const navigate = useNavigate()
  const steps = [
    {
      id: 'goal',
      question: 'What is your primary fitness goal?',
      options: ['Weight Loss', 'Weight Gain', 'Health & Longevity', 'Muscle Strengthening'],
    },
    {
      id: 'experience',
      question: 'What is your training experience?',
      options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
      id: 'location',
      question: 'Where do you prefer to train?',
      options: ['Gym', 'Home', 'Both'],
    },
    {
      id: 'frequency',
      question: 'How many days per week do you want to train?',
      options: ['2–3 days', '3–4 days', '5+ days'],
    },
    {
      id: 'timeframe',
      question: 'What’s your target timeframe?',
      options: ['4 weeks', '8 weeks', '12+ weeks'],
    },
    {
      id: 'support',
      question: 'What coaching support do you prefer?',
      options: ['Weekly check-ins', 'Bi-weekly', 'On-demand messages'],
    },
    {
      id: 'nutrition',
      question: 'How do you feel about nutrition tracking?',
      options: ['No tracking', 'Habit-based', 'Macro-aware'],
    },
    {
      id: 'equipment',
      question: 'What equipment do you have access to?',
      options: ['Bodyweight', 'Dumbbells', 'Barbell', 'Machines'],
    },
  ]
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ goal: 'Weight Gain' })
  const answeredCount = steps.filter(s => answers[s.id]).length
  const progress = Math.round((answeredCount / steps.length) * 100)
  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <MDiv
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="text-center lg:text-left"
            >
              <MH1 variants={fadeUp} className="h1">
                Build your confidence, brick by brick
              </MH1>
              <MP variants={fadeUp} className="mt-4 max-w-xl subtext">
                Together we will train smarter not harder, so you can feel confident inside and outside of the gym.
              </MP>
              <MDiv variants={fadeUp} className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                <a href="/contact" className="cta cta-lg cta-accent">
                  JOIN MY TEAM
                </a>
                <a href="/programs" className="cta cta-lg cta-outline">
                  Learn More
                </a>
              </MDiv>
              <MDiv variants={fadeUp} className="mt-6 badge badge-gold">
                New Year Special: Get 1 Month FREE When You Buy 2 Months of Coaching!
              </MDiv>
            </MDiv>
            <MDiv
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1640&auto=format&fit=crop"
                alt="Fitness coaching"
                className="w-full rounded-2xl border border-gray-200 shadow-soft object-cover aspect-[4/3]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </MDiv>
          </div>
        </div>
      </section>
      <section className="relative isolate bg-[#2f3a35] section">
        <div className="container">
          <div className="text-center">
            <MH1 className="h2 text-white">Sign up for my coaching here</MH1>
            <div className="mt-4 mx-auto max-w-md h-1 rounded-full bg-white/30 overflow-hidden">
              <div
                className="h-1 rounded-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <MP className="mt-6 text-white/90">{steps[step].question}</MP>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 mx-auto max-w-xl">
              {steps[step].options.map((opt) => {
                const active = answers[steps[step].id] === opt
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers(prev => ({ ...prev, [steps[step].id]: opt }))}
                    className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                      active
                        ? 'bg-green-400 text-white shadow-soft'
                        : 'bg-white text-gray-900 shadow-soft'
                    }`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                className="cta cta-md cta-outline"
                onClick={() => {
                  if (step > 0) setStep(step - 1)
                  else window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              <button
                className="cta cta-md cta-accent"
                onClick={() => {
                  if (step < steps.length - 1) {
                    setStep(step + 1)
                  } else {
                    const qs = new URLSearchParams(answers).toString()
                    navigate(`/contact?${qs}`)
                  }
                }}
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
