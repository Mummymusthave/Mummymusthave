import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our collection of parenting products including children\'s activity books, coloring books, and family clothing. All products tested by real parents.',
  keywords: ['parenting products', 'children books', 'activity books', 'coloring books', 'family clothing', 'parenting essentials', 'kids books'],
  openGraph: {
    title: 'Parenting Products - MummyMustHave',
    description: 'Browse our collection of parenting products including children\'s books and family clothing.',
    type: 'website',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

