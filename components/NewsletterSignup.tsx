'use client'

import { useState } from 'react'
import { submitNewsletter } from '@/lib/formHandler'

interface NewsletterSignupProps {
  className?: string
}

export default function NewsletterSignup({ className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      setIsError(true)
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    setIsError(false)
    
    const result = await submitNewsletter(email)
    
    setSubmitting(false)
    setMessage(result.message)
    setIsError(!result.success)
    setSubmitted(true)
    
    if (result.success) {
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          required
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {submitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {submitted && (
        <div className={`mt-4 text-center ${isError ? 'text-red-200' : 'text-green-200'}`}>
          {message}
        </div>
      )}
    </form>
  )
}

