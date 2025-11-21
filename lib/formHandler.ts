// Form handling utilities
// Replace FORMSPREE_ENDPOINT with your actual Formspree endpoint
// Get it from https://formspree.io/ after signing up (free)

export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xyzvzaoq'

export interface FormSubmissionResult {
  success: boolean
  message: string
}

export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<FormSubmissionResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `Contact Form: ${data.subject}`,
        _to: 'Sales@mummymusthave.com',
        _replyto: data.email,
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! We\'ll get back to you soon.',
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong. Please try again or email us directly.',
      }
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      message: 'Unable to send message. Please try again later.',
    }
  }
}

export async function submitNewsletter(email: string): Promise<FormSubmissionResult> {
  // You can use the same Formspree endpoint or a different one for newsletter
  const newsletterEndpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || FORMSPREE_ENDPOINT
  
  try {
    const response = await fetch(newsletterEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        _subject: 'Newsletter Signup - MummyMustHave',
        _to: 'Sales@mummymusthave.com',
        _replyto: email,
        type: 'newsletter',
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: 'Thanks for subscribing! Check your email to confirm.',
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return {
      success: false,
      message: 'Unable to subscribe. Please try again later.',
    }
  }
}

export async function submitWaitlist(data: {
  name: string
  email: string
}): Promise<FormSubmissionResult> {
  const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || FORMSPREE_ENDPOINT
  
  try {
    const response = await fetch(waitlistEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _subject: 'ParentPal Waitlist Signup - MummyMustHave',
        _replyto: data.email,
        type: 'waitlist',
      }),
    })

    const responseData = await response.json().catch(() => ({}))
    
    if (response.ok) {
      return {
        success: true,
        message: 'You\'re on the list! We\'ll notify you when ParentPal launches.',
      }
    } else {
      console.error('Waitlist submission failed:', response.status, responseData)
      return {
        success: false,
        message: responseData.error || 'Something went wrong. Please try again.',
      }
    }
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return {
      success: false,
      message: 'Unable to join waitlist. Please try again later.',
    }
  }
}

