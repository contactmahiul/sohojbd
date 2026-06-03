'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/components/Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/tools" className="text-gray-600 hover:text-green-700 font-medium transition-colors">টুলস</Link>
            <Link href="/bank" className="text-gray-600 hover:text-green-700 font-medium transition-colors">ব্যাংক</Link>
            <Link href="/govt" className="text-gray-600 hover:text-green-700 font-medium transition-colors">সরকারি সেবা</Link>
            <Link href="/blog" className="text-gray-600 hover:text-green-700 font-medium transition-colors">ব্লগ</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            <Link href="/tools" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 font-medium px-2">টুলস</Link>
            <Link href="/bank" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 font-medium px-2">ব্যাংক</Link>
            <Link href="/govt" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 font-medium px-2">সরকারি সেবা</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 font-medium px-2">ব্লগ</Link>
          </div>
        )}
      </div>
    </nav>
  )
}