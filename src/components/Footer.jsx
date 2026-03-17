import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-extrabold text-gray-900">Phillip Coaching</div>
            <p className="mt-2 text-sm text-gray-600">
              Phillip — Personal Trainer & Online Coach
            </p>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Links</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Social</div>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} Phillip Coaching. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
