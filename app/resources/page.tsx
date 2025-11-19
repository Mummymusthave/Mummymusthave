import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'
import { guides, getGuidesByCategory } from '@/lib/guides'

export default function Resources() {
  const resourceCategories = [
    {
      title: 'New Parent Guide',
      description: 'Essential resources for first-time parents navigating the early months and years.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-300',
    },
    {
      title: 'Single Parent Support',
      description: 'Resources, tips, and community support specifically for single parents.',
      gradient: 'from-rose-400 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-300',
    },
    {
      title: 'Child Development',
      description: 'Understanding your child\'s growth, milestones, and developmental needs.',
      gradient: 'from-emerald-400 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-300',
    },
    {
      title: 'Parenting Tips',
      description: 'Practical advice and strategies for everyday parenting challenges.',
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-300',
    },
  ]

  // Get guides for each category
  const getCategoryGuides = (categoryTitle: string) => {
    return getGuidesByCategory(categoryTitle)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="warm-gradient py-12 border-b-4 border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Resources & Articles</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Helpful tips, practical advice, and valuable resources from parents who've been there. 
            We're sharing what worked for us—not as experts, but as fellow parents on this journey.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl shadow-lg overflow-hidden border-2 ${category.borderColor} hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative`}>
                <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}>
                    <div className="w-10 h-10 bg-white/40 rounded-lg"></div>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-2 relative z-10">{category.title}</h2>
                  <p className="text-white/90 relative z-10">{category.description}</p>
                </div>
                <div className="p-6 bg-white/50 backdrop-blur-sm">
                  <ul className="space-y-4">
                    {getCategoryGuides(category.title).map((guide) => {
                      const color = category.gradient.includes('blue') ? '#2563eb' : 
                                   category.gradient.includes('rose') ? '#e11d48' : 
                                   category.gradient.includes('emerald') ? '#10b981' : '#f59e0b'
                      return (
                        <li key={guide.slug} className="border-b border-gray-200/50 pb-4 last:border-0 last:pb-0">
                          <h3 className="font-display font-semibold text-gray-900 mb-1">{guide.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{guide.excerpt}</p>
                          <Link 
                            href={`/guides/${guide.slug}`}
                            className={`inline-flex items-center text-sm font-medium hover:gap-2 gap-1 transition-all`} 
                            style={{color}}
                          >
                            Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-300 to-violet-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-indigo-400 to-violet-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-gray-900 relative z-10">Parenting Guides</h3>
              <p className="text-gray-700 mb-4 relative z-10">
                Comprehensive guides covering various aspects of parenting, from infancy to adolescence.
              </p>
              <Link href="/resources" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 group-hover:gap-2 gap-1 transition-all relative z-10">
                Browse Guides <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2 border-cyan-200 hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-gray-900 relative z-10">Video Tutorials</h3>
              <p className="text-gray-700 mb-4 relative z-10">
                Step-by-step video tutorials on common parenting tasks and challenges.
              </p>
              <Link href="/contact" className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 group-hover:gap-2 gap-1 transition-all relative z-10">
                Contact Us <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border-2 border-teal-200 hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-300 to-green-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-teal-400 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-gray-900 relative z-10">Community Forum</h3>
              <p className="text-gray-700 mb-4 relative z-10">
                Connect with other parents, ask questions, and share your experiences.
              </p>
              <Link href="/community" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 group-hover:gap-2 gap-1 transition-all relative z-10">
                Join Community <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get new articles, tips, and resources delivered directly to your inbox.
          </p>
          <NewsletterSignup />
          <p className="text-sm text-white/70 mt-4">
            No spam, we promise. Just helpful articles and tips. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

