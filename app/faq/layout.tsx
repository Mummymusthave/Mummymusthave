import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MummyMustHave products, services, community, and parenting support. Find answers to common questions.',
  keywords: ['MummyMustHave FAQ', 'parenting FAQ', 'parenting questions', 'parenting help'],
  openGraph: {
    title: 'Frequently Asked Questions - MummyMustHave',
    description: 'Frequently asked questions about MummyMustHave products, services, and community.',
    type: 'website',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

