import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ParentPal - MummyMustHave',
  description: 'ParentPal - Coming soon! The all-in-one app for parents to track milestones, get tips, and connect with community.',
}

export default function ParentPal() {
  const features = [
    {
      title: 'Track Milestones',
      description: 'Keep track of your child\'s development milestones and important moments.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-300',
    },
    {
      title: 'Parent Tips & Advice',
      description: 'Access parenting tips and advice from experienced parents who\'ve been through it. Real stories, real experiences, real support.',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-300',
    },
    {
      title: 'Community Support',
      description: 'Connect with other parents, share experiences, and get support when you need it.',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-300',
    },
    {
      title: 'Resource Library',
      description: 'Browse articles, guides, and resources tailored to your parenting journey.',
      gradient: 'from-orange-400 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-300',
    },
    {
      title: 'Personalized Content',
      description: 'Get content and recommendations based on your child\'s age and your needs.',
      gradient: 'from-indigo-400 to-violet-500',
      bgGradient: 'from-indigo-50 to-violet-50',
      borderColor: 'border-indigo-300',
    },
    {
      title: 'Easy to Use',
      description: 'Simple, intuitive interface designed for busy parents on the go.',
      gradient: 'from-rose-400 to-red-500',
      bgGradient: 'from-rose-50 to-red-50',
      borderColor: 'border-rose-300',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-lg font-bold shadow-lg hand-drawn">
                  🚀 Coming Soon
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                ParentPal
              </h1>
              <p className="text-xl mb-4 text-white/90">
                Your all-in-one parenting companion app. Everything you need to support your parenting journey, 
                right at your fingertips.
              </p>
              <p className="text-lg mb-8 text-white/80 italic">
                We're working hard to bring ParentPal to you! The app is currently in development and will be available soon.
              </p>
              <WaitlistForm variant="button" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl text-center" />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              {/* Placeholder for app screenshot */}
              <div className="bg-white/20 h-96 rounded-lg flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-yellow-50 border-y-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-2">
            ParentPal is Coming Soon! 🎉
          </p>
          <p className="text-lg text-gray-700">
            We're putting the finishing touches on ParentPal to make sure it's everything you need. 
            Join our waitlist to be the first to know when it launches!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600">
              ParentPal is being designed to make parenting easier, more informed, and more connected. 
              Here's what we're building for you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl border-2 ${feature.borderColor} hover:shadow-2xl transition-all transform hover:-translate-y-2 relative overflow-hidden group`}
              >
                {/* Decorative gradient circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Icon circle */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform`}>
                  <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                </div>
                
                <h3 className={`text-2xl font-display font-bold mb-3 text-gray-900 relative z-10`}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ParentPal Helps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">New Parents</h3>
              <p className="text-gray-600">
                Get guidance and support during those first crucial months and years of parenthood.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Parents</h3>
              <p className="text-gray-600">
                Access resources and tools to navigate new challenges as your child grows.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Single Parents</h3>
              <p className="text-gray-600">
                Find community, resources, and support tailored to your unique parenting journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">When will ParentPal be available?</h3>
              <p className="text-gray-600">
                We're working hard to bring ParentPal to you as soon as possible! Join our waitlist to be notified 
                the moment it launches. We'll be available on both iOS and Android.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">What devices will ParentPal be available on?</h3>
              <p className="text-gray-600">
                ParentPal will be available for both iOS and Android devices. Once launched, you'll be able to 
                download it from the App Store or Google Play Store.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Will ParentPal be free to use?</h3>
              <p className="text-gray-600">
                We're planning to offer both free and premium features. Basic functionality will be available at no cost, 
                with optional premium features for enhanced support. We'll share more details closer to launch!
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">How can I stay updated on ParentPal's progress?</h3>
              <p className="text-gray-600">
                Join our waitlist using the button above, and we'll keep you in the loop! We'll send you updates 
                on our progress and notify you as soon as ParentPal is ready.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-xl font-semibold mb-2">Will my data be secure?</h3>
              <p className="text-gray-600">
                Absolutely. We take your privacy seriously. All data will be encrypted and stored securely. 
                We will never share your personal information with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Be the First to Know
          </h2>
          <p className="text-xl mb-2 text-white/90">
            Join our waitlist and we'll notify you the moment ParentPal launches!
          </p>
          <p className="text-lg mb-8 text-white/80">
            Plus, early members might get some special perks... 😉
          </p>
          <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
            <WaitlistForm variant="form" />
          </div>
          <p className="text-sm text-white/70 mt-6">
            No spam, we promise. Just updates on ParentPal's progress and launch news.
          </p>
        </div>
      </section>
    </div>
  )
}

