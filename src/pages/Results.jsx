import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'

const MDiv = motion.div
const MH2 = motion.h2
const MP = motion.p


const items = [
  {
    name: 'Sarah',
    before: 'https://images.unsplash.com/photo-1594737625785-c6683f9dcee9?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1558544703-a5c8f663f677?q=80&w=1600&auto=format&fit=crop',
    stat: '-15kg fat loss',
    quote: 'I feel strong and confident. No more yo-yo dieting.',
  },
  {
    name: 'Emily',
    before: 'https://images.unsplash.com/photo-1516826957135-0b5f76b9b46e?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
    stat: '+120kg deadlift',
    quote: 'Training smarter changed everything for me.',
  },
  {
    name: 'Grace',
    before: 'https://images.unsplash.com/photo-1520975922200-964bd8a2b2a8?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
    stat: '-10cm waist',
    quote: 'I finally enjoy the gym and my routine.',
  },
  {
    name: 'Naomi',
    before: 'https://images.unsplash.com/photo-1534367610401-9f51dcb9c2d9?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1526506118085-60c1b0e64d47?q=80&w=1600&auto=format&fit=crop',
    stat: '+8kg lean mass',
    quote: 'Confidence inside and outside the gym.',
  },
  {
    name: 'Ava',
    before: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1546484958-d3032101b77a?q=80&w=1600&auto=format&fit=crop',
    stat: 'Energy restored',
    quote: 'Accountability and structure made the difference.',
  },
  {
    name: 'Mia',
    before: 'https://images.unsplash.com/photo-1518314910164-3efc2207d8b2?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1540206276207-3af25d137cbb?q=80&w=1600&auto=format&fit=crop',
    stat: 'Stronger every week',
    quote: 'No more extreme diets. Sustainable results.',
  },
]

const testimonials = [
  {
    name: 'Laura',
    text:
      'I lost 12kg and built strength without obsessing over calories. Toni’s approach is sustainable and empowering.',
  },
  {
    name: 'Jade',
    text:
      'The accountability and smart training plan helped me finally be consistent. I feel amazing.',
  },
  {
    name: 'Hannah',
    text:
      'I gained confidence and learned how to train properly. My body and mindset transformed.',
  },
]

export default function Results() {
  const [idx, setIdx] = useState(0)

  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <MH2 className="h2">
              Client Transformations
            </MH2>
            <MP className="mt-3 max-w-2xl mx-auto subtext">
              Real results from women training smarter, not harder.
            </MP>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <MDiv
                key={it.name + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
                className="card overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-px bg-gray-100">
                  <div className="relative">
                    <img
                      src={it.before}
                      alt={it.name + ' before'}
                      className="h-40 sm:h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-gray-900/80 text-white text-xs font-bold px-2 py-1">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={it.after}
                      alt={it.name + ' after'}
                      className="h-40 sm:h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-accent text-white text-xs font-bold px-2 py-1">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold text-gray-900">{it.name}</div>
                    <div className="rounded-full bg-gold/10 text-gold text-xs font-semibold px-3 py-1">
                      {it.stat}
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-sm text-gray-700">
                    <Quote size={16} className="text-gray-400 shrink-0" />
                    <span>{it.quote}</span>
                  </div>
                </div>
              </MDiv>
            ))}
          </div>

          <div className="mt-14 sm:mt-20">
            <div className="flex items-center justify-between">
              <MH2 className="h2">
                Testimonials
              </MH2>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIdx((idx + 1) % testimonials.length)}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="mt-6 relative">
              <MDiv
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="card p-6"
              >
                <div className="flex items-start gap-3">
                  <Quote size={20} className="text-gray-400 shrink-0" />
                  <MP className="subtext">{testimonials[idx].text}</MP>
                </div>
                <div className="mt-4 text-sm font-extrabold text-gray-900">
                  {testimonials[idx].name}
                </div>
              </MDiv>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
