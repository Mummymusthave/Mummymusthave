'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import ProductModal from '@/components/ProductModal'

export default function Products() {
  // Placeholder product data - replace with real data later
  const allProducts = [
    {
      id: 1,
      name: 'Product Name 1',
      description: 'Product description will go here. This is a placeholder for your actual product information.',
      category: 'Category 1',
      comingSoon: false,
    },
    {
      id: 2,
      name: 'Product Name 2',
      description: 'Product description will go here. This is a placeholder for your actual product information.',
      category: 'Category 2',
      comingSoon: false,
    },
    {
      id: 3,
      name: 'Upcoming Product',
      description: 'This product is coming soon! Stay tuned for updates.',
      category: 'Category 1',
      comingSoon: true,
    },
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category)))
    return ['all', ...cats]
  }, [])

  // Filter products based on search and category
  const products = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="warm-gradient py-12 border-b-4 border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Every product here has been tested by us or trusted parents in our community. 
            No gimmicks—just things that actually work.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const gradients = [
                { bg: 'from-blue-400 to-cyan-500', card: 'from-blue-50 to-cyan-50', border: 'border-blue-200', text: 'text-blue-600' },
                { bg: 'from-violet-400 to-purple-500', card: 'from-violet-50 to-purple-50', border: 'border-violet-200', text: 'text-violet-600' },
                { bg: 'from-emerald-400 to-teal-500', card: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', text: 'text-emerald-600' },
                { bg: 'from-amber-400 to-orange-500', card: 'from-amber-50 to-orange-50', border: 'border-amber-200', text: 'text-amber-600' },
                { bg: 'from-rose-400 to-pink-500', card: 'from-rose-50 to-pink-50', border: 'border-rose-200', text: 'text-rose-600' },
                { bg: 'from-indigo-400 to-violet-500', card: 'from-indigo-50 to-violet-50', border: 'border-indigo-200', text: 'text-indigo-600' },
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <div
                  key={product.id}
                  className={`bg-gradient-to-br ${gradient.card} rounded-2xl shadow-lg overflow-hidden border-2 ${gradient.border} hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative`}
                >
                  <div className={`h-64 bg-gradient-to-br ${gradient.bg} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full"></div>
                    {product.comingSoon && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-6 relative z-10">
                    <span className={`text-xs font-semibold ${gradient.text} mb-2 block uppercase tracking-wide`}>{product.category}</span>
                    <h3 className="text-xl font-display font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                    {!product.comingSoon && (
                      <button 
                        onClick={() => {
                          setSelectedProduct(product)
                          setIsModalOpen(true)
                        }}
                        className={`w-full bg-gradient-to-r ${gradient.bg} text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                      >
                        Learn More
                      </button>
                    )}
                    {product.comingSoon && (
                      <button 
                        onClick={() => {
                          setSelectedProduct(product)
                          setIsModalOpen(true)
                        }}
                        className={`w-full bg-gray-300 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-400 transition-all`}
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              )
            })}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">Coming Soon</h2>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500 p-8 rounded-r-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're always testing new products and listening to what parents in our community need. 
                Check back soon for exciting updates—we're working on some great things!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
      />
    </div>
  )
}

