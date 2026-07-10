import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Heart
} from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Section 1: Brand */}
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block text-3xl font-bold text-white transition-colors hover:text-amber-400"
              >
                Voyage<span className="text-amber-400">X</span>
              </Link>
              <p className="max-w-xs text-sm text-zinc-400 leading-relaxed">
                Luxury travel experiences crafted for modern explorers.
              </p>
              {/* Decorative Line */}
              <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'Destinations', 'Services', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-400 transition-all duration-300 hover:text-amber-400 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm text-zinc-400">
                    New York, USA
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                  <a 
                    href="mailto:hello@voyagex.com" 
                    className="text-sm text-zinc-400 transition-colors duration-300 hover:text-amber-400"
                  >
                    hello@voyagex.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                  <a 
                    href="tel:+18005551234" 
                    className="text-sm text-zinc-400 transition-colors duration-300 hover:text-amber-400"
                  >
                    +1 (800) 555-1234
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4: Socials */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
  { icon: Globe, label: 'Website', color: 'hover:text-blue-600' },
  { icon: Globe, label: 'Travel', color: 'hover:text-green-500' },
  { icon: Globe, label: 'Explore', color: 'hover:text-purple-500' },
  { icon: Globe, label: 'Discover', color: 'hover:text-amber-400' },
].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/10 hover:shadow-lg hover:shadow-amber-400/10 ${social.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              {/* Glassmorphism Card */}
              <div className="mt-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-4 backdrop-blur-sm">
                <p className="text-xs text-zinc-400">
                  ✦ Join our community of luxury travelers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-6 md:flex md:items-center md:justify-between">
          <p className="text-center text-xs text-zinc-500 md:text-left">
            © {currentYear} VoyageX. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1 text-center text-xs text-zinc-500 md:mt-0">
            Designed with{' '}
            <Heart className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            {' '}using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}