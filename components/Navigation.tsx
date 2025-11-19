'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b-2 border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-16 w-16 flex items-center justify-center transition">
              <Image 
                src="/logo.png" 
                alt="MummyMustHave Logo - Baby Elephant" 
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="text-xl font-fun font-bold text-gray-800 group-hover:text-primary-600 transition">MummyMustHave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Products
            </Link>
            <Link href="/parentpal" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              ParentPal
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Resources
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Community
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Home
            </Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Products
            </Link>
            <Link href="/parentpal" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              ParentPal
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Resources
            </Link>
            <Link href="/community" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Community
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

