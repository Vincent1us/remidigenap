'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Biodata', path: '/biodata' },
  { name: 'Experience', path: '/experience' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? 'px-4 py-2' : 'px-6 py-4'
        }`}
      >
        <div
          className={`flex w-full items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'max-w-2xl rounded-2xl bg-emerald-600/90 px-6 py-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] backdrop-blur-sm'
              : 'max-w-7xl bg-transparent px-6'
          }`}
        >
          <div className="hidden w-full items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? scrolled
                      ? 'text-white'
                      : 'text-emerald-400'
                    : scrolled
                      ? 'text-emerald-100 hover:text-white'
                      : 'text-gray-400 hover:text-white'
                }`}
              >
                {pathname === link.path && (
                  <span
                    className={`absolute inset-0 rounded-xl ${
                      scrolled ? 'bg-white/20' : 'bg-emerald-500/10'
                    }`}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-white md:hidden"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-emerald-600/95 backdrop-blur-lg md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? 'text-white'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}