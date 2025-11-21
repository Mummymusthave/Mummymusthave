import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - MummyMustHave',
  description: 'Browse our collection of parenting products including kids books and clothing.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

