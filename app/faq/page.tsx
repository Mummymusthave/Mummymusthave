'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const faqs: FAQItem[] = [
    {
      category: 'products',
      question: 'What types of products do you offer?',
      answer: 'We offer a wide range of products designed to support parents, including baby essentials, parenting tools, educational resources, and support services. Our product selection is carefully curated to meet the needs of parents at every stage.',
    },
    {
      category: 'products',
      question: 'How do I purchase products?',
      answer: 'You can browse our products on the Products page. Click on any product to learn more and see purchasing options. We accept various payment methods and offer secure checkout.',
    },
    {
      category: 'products',
      question: 'Do you offer shipping?',
      answer: 'Yes, we offer shipping to most locations. Shipping costs and delivery times vary depending on your location and the products you order. Details will be provided at checkout.',
    },
    {
      category: 'products',
      question: 'What is your return policy?',
      answer: 'We want you to be completely satisfied with your purchase. If you\'re not happy with a product, please contact us within 30 days of purchase to discuss returns or exchanges.',
    },
    {
      category: 'parentpal',
      question: 'What is ParentPal?',
      answer: 'ParentPal is our partner app designed to be your all-in-one parenting companion. It helps you track milestones, access tips and advice from other parents, connect with our community, and find resources tailored to your parenting journey.',
    },
    {
      category: 'parentpal',
      question: 'Is ParentPal free?',
      answer: 'ParentPal offers both free and premium features. Basic functionality is available at no cost, with optional premium features for enhanced support and additional resources.',
    },
    {
      category: 'parentpal',
      question: 'Where can I download ParentPal?',
      answer: 'ParentPal is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. Visit our ParentPal page for direct download links.',
    },
    {
      category: 'general',
      question: 'Who is MummyMustHave for?',
      answer: 'MummyMustHave is for all parents - new parents, experienced parents, single parents, and anyone navigating the journey of parenthood. We provide support, resources, and products for parents at every stage.',
    },
    {
      category: 'general',
      question: 'How can I stay updated on new products and services?',
      answer: 'You can subscribe to our newsletter on the homepage to receive updates on new products, parenting tips, and exclusive offers. You can also follow us on social media for the latest news.',
    },
    {
      category: 'general',
      question: 'Do you offer support for single parents?',
      answer: 'Absolutely! Supporting single parents is one of our core missions. We offer resources, products, and community support specifically designed to help single parents navigate their unique challenges.',
    },
    {
      category: 'general',
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team through the Contact page on our website. We typically respond within 24-48 hours. For urgent matters, please email support@mummymusthave.com.',
    },
  ]

  const categories = ['all', 'products', 'parentpal', 'general']
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find answers to common questions about our products, services, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-700 mb-4">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

