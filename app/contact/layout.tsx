import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MummyMustHave. Have questions about our products, resources, or community? We\'d love to hear from you!',
  keywords: ['contact MummyMustHave', 'parenting support contact', 'parenting questions'],
  openGraph: {
    title: 'Contact MummyMustHave',
    description: 'Get in touch with MummyMustHave. We\'d love to hear from you!',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

