/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const LINKS = [
  {
    id: 'website',
    title: 'Official Website',
    subtitle: 'Explore our venue and services',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
    href: 'https://tpp-cov.com/',
  },
  {
    id: 'gallery',
    title: 'Venue Gallery',
    subtitle: 'Historic charm meets modern elegance',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop',
    href: 'https://tpp-cov.com/gallery/',
  },
  {
    id: 'inquire',
    title: 'Inquire About Dates',
    subtitle: 'Schedule your private tour',
    image: 'https://images.unsplash.com/photo-1522413452208-9969062f274a?q=80&w=2070&auto=format&fit=crop',
    href: 'https://my.96fx.com/widget/booking/O9qrGqu69CtJOgG8Dzb5',
  },
];

const SOCIALS = [
  { icon: Instagram, href: 'https://www.instagram.com/thepaintedporchcovington/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/tppcov/', label: 'Facebook' },
  { icon: Mail, href: 'mailto:hello@tpp-cov.com', label: 'Email' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)] selection:bg-[var(--color-gold)] selection:text-[var(--color-ink)] relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(197,160,89,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(234,227,210,0.05)_0%,_transparent_50%)]" />
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
        
        {/* Profile Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 w-full"
        >
          <div className="relative mb-8 group">
            <div className="absolute inset-0 rounded-full border border-[var(--color-gold)]/30 scale-110 transition-transform duration-700 group-hover:scale-105" />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative z-10 bg-[var(--color-paper)]/5 backdrop-blur-sm flex items-center justify-center p-2">
              <img 
                src="https://assets.cdn.filesafe.space/rkOgAjSXchNFaCwXpxjJ/media/69c9e32cf62c499e0f2ebbd5.png" 
                alt="The Painted Porch Logo"
                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="font-custom text-5xl md:text-7xl font-normal tracking-wide mb-3 text-[var(--color-paper)] drop-shadow-md">
              The Painted Porch
            </h1>
            <div className="flex items-center justify-center gap-3 text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--color-paper)]/60 mb-6">
              <span>Event Venue</span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
              <span>Covington</span>
            </div>
            <p className="font-serif italic text-lg md:text-xl text-[var(--color-paper)]/70 max-w-md mx-auto text-balance">
              Redefining event venues with a blend of historic charm and modern sophistication.
            </p>
          </motion.div>
        </motion.header>

        {/* Links Section */}
        <div className="w-full space-y-4 mb-16">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group block relative overflow-hidden rounded-sm"
            >
              {/* Background Image that reveals on hover */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={link.image} 
                  alt="" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/90 via-[var(--color-ink)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Link Content */}
              <div className="relative z-10 flex items-center justify-between p-6 md:p-8 border border-[var(--color-paper)]/10 bg-[var(--color-paper)]/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--color-gold)]/50 group-hover:bg-transparent">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl md:text-3xl font-light group-hover:text-[var(--color-gold)] transition-colors duration-500">
                    {link.title}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-paper)]/50 mt-2 group-hover:text-[var(--color-paper)]/80 transition-colors duration-500">
                    {link.subtitle}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--color-paper)]/20 flex items-center justify-center group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)] transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-paper)]/70 group-hover:text-[var(--color-ink)] transition-colors duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer / Socials */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex gap-6 mb-12">
            {SOCIALS.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-[var(--color-paper)]/10 flex items-center justify-center text-[var(--color-paper)]/60 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper)]/40">
            <MapPin className="w-3 h-3" />
            <span>Covington, Georgia</span>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
