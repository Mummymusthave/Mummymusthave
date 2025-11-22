import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - MummyMustHave',
  description: 'Join our parent community on Discord or Facebook. Connect with other parents, share experiences, and get support.',
}

const discordLink = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/xYew6NFh'
const facebookLink = process.env.NEXT_PUBLIC_FACEBOOK_GROUP_URL || '#'

const joinOptions = [
  {
    title: 'Discord Family Hub',
    description: 'Live chats, topic channels (new parents, single parents, product tips), voice rooms, and weekly check-ins.',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    benefits: ['Real-time chat', 'Topic-specific rooms', 'Voice hangouts', 'Parent-led AMAs'],
    link: discordLink,
    placeholder: discordLink === '#',
  },
  {
    title: 'Facebook Community',
    description: 'If you prefer Facebook, join our private group for supportive threads, Q&As, and weekly share prompts.',
    gradient: 'from-rose-400 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    benefits: ['Threaded discussions', 'Weekly prompts', 'Easy to use on mobile', 'Share wins + struggles'],
    link: facebookLink,
    placeholder: facebookLink === '#',
  },
]

const guidelines = [
  'Be kind. We\'re all figuring it out.',
  'No medical or legal advice. Share experiences, not prescriptions.',
  'Respect privacy. No screenshots or sharing without permission.',
  'No sales pitches. Recommendations are OK if you\'ve tried it.',
  'Flag anything concerning so we can keep everyone safe.',
]

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="warm-gradient py-20 border-b-4 border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/80 px-6 py-2 rounded-full font-semibold text-primary-700 border-2 border-primary-200 hand-drawn mb-4">
            Built by parents, for parents
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            MummyMustHave Community
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A safe, judgment-free space where parents can swap stories, share what works, and remind each other we are not alone. 
            We are not experts—just parents doing our best and helping others do the same.
          </p>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Conversations in the community are peer-to-peer support. Always consult licensed professionals for medical, legal, or financial advice.
          </p>
        </div>
      </section>

      {/* Join Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Choose how you want to connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pick whichever platform feels most natural. Same love, different vibes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${option.bgGradient} rounded-2xl border-2 shadow-lg overflow-hidden`}
                style={{ borderColor: 'transparent' }}
              >
                <div className={`bg-gradient-to-br ${option.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-display font-bold mb-2">{option.title}</h3>
                  <p className="text-white/90">{option.description}</p>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-3 mb-8 text-gray-700">
                    {option.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`block text-center w-full px-6 py-3 rounded-xl font-semibold transition ${
                      option.placeholder
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                    }`}
                    aria-disabled={option.placeholder}
                  >
                    {option.placeholder ? 'Link coming soon' : `Join ${option.title}`}
                  </a>
                  {option.placeholder && (
                    <p className="text-sm text-center text-gray-500 mt-3">
                      Add your invite link in <code>.env.local</code> to activate this button.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Super simple. Join, say hi, and jump into the conversations that matter most to you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '1. Join', body: 'Pick Discord or Facebook. Fill in a couple quick questions so we know you\'re real.' },
              { title: '2. Introduce yourself', body: 'Share where you\'re at in your parenting journey (or lurk a bit—no pressure).' },
              { title: '3. Jump into topics', body: 'Ask questions, share what\'s working, vent about the hard stuff. We got you.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-primary-100 p-6 text-center shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold mb-4">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">
              Community Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We keep things safe, supportive, and judgment-free with a few simple rules.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl border-2 border-primary-200 p-8 md:p-12">
            <ul className="space-y-4 text-gray-800">
              {guidelines.map((rule) => (
                <li key={rule} className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-6">
              If you ever feel uncomfortable or see something concerning, ping the moderators. We\'ll handle it quickly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">Community FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is this free?',
                a: 'Yes! The community is completely free. We just ask that you follow the guidelines and help keep it supportive.',
              },
              {
                q: 'Do I need to be a parent to join?',
                a: 'If you\'re a parent, soon-to-be parent, or primary caregiver, you\'re welcome. Allies who support parents are welcome too.',
              },
              {
                q: 'Do you offer professional advice?',
                a: 'Nope. This is peer-to-peer support only. For medical, legal, or financial questions, always consult licensed professionals.',
              },
              {
                q: 'How do you keep it safe?',
                a: 'We have moderators, clear guidelines, and report tools. We remove spam, hate, or anything that makes parents feel unsafe.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Join the Family?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Pick your platform, read the guidelines, and hop in. We\'re saving you a seat.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={discordLink}
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3 rounded-full font-semibold ${discordLink === '#' ? 'bg-white/30 text-white cursor-not-allowed' : 'bg-white text-primary-600 hover:bg-gray-100'}`}
              aria-disabled={discordLink === '#'}
            >
              {discordLink === '#' ? 'Discord link coming soon' : 'Join Discord'}
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3 rounded-full font-semibold border-2 ${facebookLink === '#' ? 'border-white/40 text-white/70 cursor-not-allowed' : 'border-white text-white hover:bg-white hover:text-primary-600'}`}
              aria-disabled={facebookLink === '#'}
            >
              {facebookLink === '#' ? 'Facebook link coming soon' : 'Join Facebook Group'}
            </a>
          </div>
          {(discordLink === '#' || facebookLink === '#') && (
            <p className="text-sm text-white/70 mt-4">
              Add your invite links via <code>NEXT_PUBLIC_DISCORD_URL</code> and <code>NEXT_PUBLIC_FACEBOOK_GROUP_URL</code>.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

