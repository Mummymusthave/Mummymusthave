import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'MummyMustHave - Supporting Parents Every Step of the Way',
    template: '%s | MummyMustHave',
  },
  description: 'Your trusted partner for parenting products, resources, and support. Helping parents, new parents, and single parents navigate the journey of parenthood. Real products, real advice, real community.',
  keywords: ['parenting', 'new parents', 'single parents', 'parenting tips', 'parenting products', 'parenting resources', 'parenting guides', 'parenting community', 'children books', 'parenting support'],
  authors: [{ name: 'MummyMustHave' }],
  creator: 'MummyMustHave',
  publisher: 'MummyMustHave',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com'),
  // Note: Set NEXT_PUBLIC_SITE_URL in your environment variables for production
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'MummyMustHave',
    title: 'MummyMustHave - Supporting Parents Every Step of the Way',
    description: 'Your trusted partner for parenting products, resources, and support. Helping parents, new parents, and single parents navigate the journey of parenthood.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com'}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'MummyMustHave - Supporting Parents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MummyMustHave - Supporting Parents Every Step of the Way',
    description: 'Your trusted partner for parenting products, resources, and support.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://mummymusthave.com'}/logo.png`],
    creator: '@mummymusthave',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

