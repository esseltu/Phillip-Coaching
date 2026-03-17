import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MDiv = motion.div
const MH2 = motion.h2
const MP = motion.p

export default function NotFound() {
  return (
    <main>
      <section className="relative isolate bg-gradient-to-b from-white to-gray-50 section">
        <div className="container">
          <div className="text-center">
            <MH2 className="h2">Page Not Found</MH2>
            <MP className="mt-3 max-w-2xl mx-auto subtext">
              The page you’re looking for doesn’t exist or has moved.
            </MP>
            <MDiv
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex items-center justify-center"
            >
              <Link to="/" className="cta cta-lg cta-accent">
                Back to Home
              </Link>
            </MDiv>
          </div>
        </div>
      </section>
    </main>
  )
}
