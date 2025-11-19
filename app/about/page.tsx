export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="warm-gradient py-16 border-b-4 border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Two parents. One mission. Help other parents struggle less.
          </p>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-primary-100 px-6 py-3 rounded-full text-lg font-semibold text-primary-800 border-2 border-primary-300 hand-drawn">
                💕 How It All Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              We Struggled Too
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p className="text-xl md:text-2xl text-center font-medium text-gray-800 mb-8">
              Let's be honest: parenting is hard. Really hard.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-2xl my-8">
              <p className="text-lg md:text-xl mb-4">
                When we first became parents, we were overwhelmed. Sleepless nights, endless questions, 
                and that constant feeling of "am I doing this right?" We searched everywhere for help—products 
                that actually worked, advice that felt real, a community that understood.
              </p>
              <p className="text-lg md:text-xl">
                But everything felt... corporate. Too perfect. Too polished. Too disconnected from the messy, 
                beautiful reality of raising kids.
              </p>
            </div>

            <p className="text-lg">
              So we decided to do something about it. We started MummyMustHave because we wanted to create 
              what we wished we had: a place where parents could find real products, real advice, and real 
              support—without the judgment, without the perfection, without the corporate speak.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl border-2 border-secondary-200">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Promise to You</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-3 text-xl">✓</span>
                    <span>We'll never sell you something we wouldn't use ourselves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-3 text-xl">✓</span>
                    <span>We'll always be honest about what works and what doesn't</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-3 text-xl">✓</span>
                    <span>We'll create a space where you can be real, not perfect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-3 text-xl">✓</span>
                    <span>We'll remember that every parent's journey is different</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl border-2 border-accent-200">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">What We Believe</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">❤️</span>
                    <span>Parenting is hard, and that's okay to say out loud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">❤️</span>
                    <span>There's no such thing as a perfect parent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">❤️</span>
                    <span>We're all just doing our best, and that's enough</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">❤️</span>
                    <span>Parents supporting parents makes everything easier</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center my-12 p-8 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl">
              <p className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                We're Still Learning Too
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We don't have all the answers. We're still figuring it out, just like you. 
                But we're in this together, and that makes all the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Simple, but important
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-primary-200">
              <p className="text-2xl md:text-3xl font-display font-bold text-center text-gray-900 mb-6">
                To help parents struggle less.
              </p>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                That's it. That's the mission. We want to make your parenting journey a little easier, 
                a little less overwhelming, and a lot more supported. Because when parents are supported, 
                families thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-orange-200 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2 relative z-10">Realness</h3>
              <p className="text-gray-700 relative z-10">No fake perfection. Just real talk about real parenting.</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2 relative z-10">Support</h3>
              <p className="text-gray-700 relative z-10">We're here for you, no matter what stage you're at.</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border-2 border-emerald-200 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-emerald-400 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2 relative z-10">Quality</h3>
              <p className="text-gray-700 relative z-10">Only products and resources we'd actually use ourselves.</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2 relative z-10">Community</h3>
              <p className="text-gray-700 relative z-10">Parents supporting parents, always.</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Want to Connect?</h2>
          <p className="text-xl mb-8 text-white/90">
            Have questions? Want to share your story? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
