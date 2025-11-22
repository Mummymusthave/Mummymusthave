'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  description: string
  category: string
  comingSoon: boolean
  link?: string
  image?: string
  externalLink?: boolean
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {product.comingSoon && (
              <div className="mb-4 inline-block">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                  Coming Soon
                </span>
              </div>
            )}
            
            {/* Product Image */}
            {product.image && (
              <div className="mb-6 relative w-full h-96 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 672px"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
            
            <span className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2 block">
              {product.category}
            </span>
            
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              {product.name}
            </h2>
            
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {product.comingSoon ? (
                <Link
                  href="/contact"
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition text-center"
                >
                  Notify Me When Available
                </Link>
              ) : product.link && product.link !== '#' ? (
                <>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition text-center"
                  >
                    {product.externalLink ? (product.category === 'Books' ? 'Buy on Amazon' : 'Shop on TeeSpring') : 'Shop Now'}
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/contact"
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition text-center"
                  >
                    Contact Us About This Product
                  </Link>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

