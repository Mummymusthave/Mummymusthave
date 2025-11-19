'use client'

import { useState } from 'react'
import { submitWaitlist } from '@/lib/formHandler'

interface WaitlistFormProps {
  variant?: 'button' | 'form'
  className?: string
}

export default function WaitlistForm({ variant = 'form', className = '' }: WaitlistFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [showForm, setShowForm] = useState(variant === 'form')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !email.includes('@')) {
      setMessage('Please fill in all fields with a valid email')
      setIsError(true)
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    setIsError(false)
    
    const result = await submitWaitlist({ name, email })
    
    setSubmitting(false)
    setMessage(result.message)
    setIsError(!result.success)
    setSubmitted(true)
    
    if (result.success) {
      setName('')
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
        if (variant === 'button') {
          setShowForm(false)
        }
      }, 5000)
    }
  }

  if (variant === 'button' && !showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className={className}
      >
        📧 Notify Me When Available
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {variant === 'form' && (
        <div className="space-y-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submitting}
            required
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            required
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
        </div>
      )}
      
      {variant === 'button' && showForm && (
        <div className="space-y-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submitting}
            required
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            required
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
          />
        </div>
      )}
      
      <button
        type="submit"
        disabled={submitting}
        className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl disabled:opacity-50 disabled:cursor-not-allowed w-full"
      >
        {submitting ? 'Joining...' : variant === 'button' ? 'Join Waitlist' : '📧 Join the Waitlist'}
      </button>
      
      {submitted && (
        <div className={`mt-4 text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </div>
      )}
    </form>
  )
}

