'use client';

import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Documentation', href: '/documentation' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guides', href: '/guides' },
      { name: 'Support', href: '/support' },
      { name: 'API Status', href: '/api-status' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-2xl block">RiverWatts</span>
                <span className="text-blue-200 text-sm font-medium">Energy Systems</span>
              </div>
            </div>
            <p className="text-blue-100 mb-8 max-w-md text-lg leading-relaxed">
              Leading the renewable energy revolution through innovative hydrokinetic technology, powering sustainable communities worldwide.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="group relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#"
                className="group relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#"
                className="group relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#"
                className="group relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110">
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-2">
                    <ChevronRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-2">
                    <ChevronRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-2">
                    <ChevronRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Contact Info */}
        <div className="border-t border-white/20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-xl bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-lg">Global Headquarters</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Airfield Sinkor<br />
                    Monrovia, Liberia<br />
                    West Africa
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-xl bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-lg">Contact Center</h4>
                  <p className="text-blue-100 leading-relaxed">
                    +231 778065593<br />
                    +231 555553831<br />
                    24/7 Emergency Line
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-xl bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-lg">Email Support</h4>
                  <p className="text-blue-100 leading-relaxed">
                    service@riverwatts.com<br />
                    info@riverwatts.com<br />
                    support@riverwatts.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-white font-semibold text-lg mb-1">
                &copy; {currentYear} RiverWatts Energy Systems
              </p>
              <p className="text-blue-200 text-sm">
                Pioneering sustainable energy solutions worldwide. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}