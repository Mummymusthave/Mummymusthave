import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - MummyMustHave',
  description: 'Frequently asked questions about MummyMustHave products, services, and community.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

