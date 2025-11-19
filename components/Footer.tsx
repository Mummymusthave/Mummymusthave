import Link from 'next/link'
import Disclaimer from './Disclaimer'

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-display font-bold mb-4">MummyMustHave</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Started by two parents who struggled at first. We're here to help you struggle less. 
              Real products. Real support. Real community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/parentpal" className="text-gray-300 hover:text-white transition">
                  ParentPal App
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MummyMustHave. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

