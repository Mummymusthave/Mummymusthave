import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from '@/components/NewsletterSignup'
import StructuredData from '@/components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'MummyMustHave supports parents with real products, practical resources, and a supportive community. From new parents to single parents, find the help you need on your parenting journey.',
  keywords: ['parenting support', 'new parents', 'single parents', 'parenting products', 'parenting resources', 'parenting community'],
  openGraph: {
    title: 'MummyMustHave - Supporting Parents Every Step of the Way',
    description: 'MummyMustHave supports parents with real products, practical resources, and a supportive community.',
    type: 'website',
  },
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MummyMustHave',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com'}/logo.png`,
    description: 'Supporting parents every step of the way with products, resources, and community support.',
    sameAs: [
      'https://www.instagram.com/mummymusthave/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'Sales@mummymusthave.com',
      contactType: 'Customer Service',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MummyMustHave',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com',
    description: 'Supporting parents every step of the way with products, resources, and community support.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com'}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <div className="min-h-screen">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {/* Hero Section */}
      <section className="warm-gradient relative overflow-hidden py-24 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-700 border-2 border-primary-200 hand-drawn">
                ✨ Born from Real Struggles, Built with Real Love
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
              We Know How
              <span className="block text-primary-600 mt-2">Hard It Can Be</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              MummyMustHave was started by two parents who struggled at first. 
              <span className="block mt-2 text-gray-600 text-lg">
                We wanted to find a way to help other parents struggle less.
              </span>
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              No judgment. No perfection. Just real support, real products, and a real community 
              that gets it—because we've been there too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-primary-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-primary-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
              >
                Explore Our Products
              </Link>
              <Link
                href="/about"
                className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition shadow-xl border-2 border-primary-300 text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not a big corporation. We're two parents who remember those sleepless nights, 
              the overwhelming moments, and the feeling of "am I doing this right?"
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Every product, every resource, every piece of advice comes from our own experience 
              and the wisdom of parents who've walked this path before you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-orange-200 relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 relative z-10">Products We Actually Use</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Every product in our collection has been tested by us or trusted parents in our community. 
                No gimmicks, just things that actually work.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-200 relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 relative z-10">Real Talk, Real Help</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Our resources aren't from some corporate handbook. They're from real parents who've 
                been through it—the good, the hard, and everything in between.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-green-200 relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 relative z-10">A Community That Gets It</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                No judgment zone. Just parents supporting parents, sharing wins, asking questions, 
                and reminding each other that we're all doing our best.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Things That Made Our Lives Easier
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              These are the products and services that helped us when we needed it most. 
              Maybe they'll help you too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* My Activity Book */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative overflow-hidden flex items-center justify-center">
                <Image 
                  src="/products/book2.png" 
                  alt="My Activity Book"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-gray-900">My Activity Book</h3>
                <p className="text-gray-600 mb-4">An engaging activity book featuring colouring pages, dot-to-dot puzzles, and mazes. Perfect for keeping kids entertained while developing problem-solving skills and creativity.</p>
                <Link href="/products" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-2 gap-1 transition-all">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 group">
              <div className="h-48 bg-gradient-to-br from-violet-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">📚</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-gray-900">Parenting Resources</h3>
                <p className="text-gray-600 mb-4">Practical guides and tips from real parents. From preparing for your newborn to supporting your child's development, find the help you need.</p>
                <Link href="/resources" className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 group-hover:gap-2 gap-1 transition-all">
                  Explore Resources <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 group relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                Coming Soon
              </div>
              <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-gray-900">ParentPal App</h3>
                <p className="text-gray-600 mb-4">Your all-in-one parenting companion app. Launching soon!</p>
                <Link href="/parentpal" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 gap-1 transition-all">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl mb-2 text-white/90">
            Get real parenting tips, product updates, and stories from parents like you.
          </p>
          <p className="text-lg mb-8 text-white/80">
            No spam, just support. Promise.
          </p>
          <NewsletterSignup />
          <p className="text-sm text-white/70 mt-4">
            No spam, we promise. Just updates on products, tips, and community stories. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

