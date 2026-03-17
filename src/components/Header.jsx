import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
const MotionDiv = motion.div

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-gray-900">
            Phillip Coaching
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              About Me
            </NavLink>
            <NavLink to="/results" className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              Client Results
            </NavLink>
            <NavLink to="/programs" className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              Programs
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex cta cta-sm cta-accent"
            >
              Join My Team
              <ArrowRight size={16} />
            </Link>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/30"
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <MotionDiv
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="fixed top-4 left-4 right-4 z-[70] rounded-2xl border border-gray-200 bg-white p-4 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-extrabold text-gray-900">Phillip Coaching</div>
              <button
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <nav className="mt-3 grid gap-2">
              <NavLink to="/" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                About Me
              </NavLink>
              <NavLink to="/results" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                Client Results
              </NavLink>
              <NavLink to="/programs" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                Programs
              </NavLink>
              <NavLink to="/contact" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 cta cta-md cta-accent w-full justify-center"
            >
              Join My Team
              <ArrowRight size={16} />
            </Link>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  )
}
