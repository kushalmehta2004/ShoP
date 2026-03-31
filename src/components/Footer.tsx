'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollFadeIn from './animations/ScrollFadeIn';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <ScrollFadeIn direction="up" threshold={0.2}>
          <div className="relative overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-b from-[#111] to-[#0A0A0A] py-20 px-6 mb-20 rounded-3xl group">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-colors duration-700"></div>
            
            <div className="relative text-center max-w-2xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-[#D4AF37]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Join the Inner Circle
              </motion.h2>
              <p className="text-gray-400 mb-10 text-lg font-montserrat">
                Subscribe for early access to new arrivals, private sales, and exclusive editorial content.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 w-full sm:w-96 bg-black/50 border border-[#D4AF37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all duration-300 rounded-lg"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#B8962D] transition-colors duration-300 rounded-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {[
            {
              title: "Collections",
              links: [
                { name: "Designer Bags", href: "/shop?category=bags" },
                { name: "Accessories", href: "/shop?category=accessories" },
                { name: "Jewelry", href: "/shop?category=jewelry" },
                { name: "Watches", href: "/shop?category=watches" },
              ]
            },
            {
              title: "About",
              links: [
                { name: "Our Story", href: "/about" },
                { name: "Authentication Process", href: "/authentication" },
                { name: "Sustainability", href: "/sustainability" },
                { name: "Careers", href: "/careers" },
              ]
            },
            {
              title: "Support",
              links: [
                { name: "FAQ", href: "/faq" },
                { name: "Shipping & Returns", href: "/shipping" },
                { name: "Contact Us", href: "/contact" },
                { name: "Size Guide", href: "/size-guide" },
              ]
            },
            {
              title: "Legal",
              links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Authenticity Guarantee", href: "/authenticity-guarantee" },
              ]
            }
          ].map((column, idx) => (
            <ScrollFadeIn key={column.title} direction="up" delay={idx * 0.1}>
              <h3 className="text-sm font-montserrat font-bold uppercase tracking-widest text-white mb-8 border-l-2 border-[#D4AF37] pl-4">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 hover:pl-2 inline-block font-montserrat"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <ScrollFadeIn direction="up" delay={0.4}>
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-8">
                {[
                  { icon: 'Instagram', href: 'https://instagram.com' },
                  { icon: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: 'Email', href: 'mailto:info@shopendswithp.com' },
                ].map((social) => (
                  <motion.a 
                    key={social.icon}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.icon}
                    whileHover={{ y: -5, color: '#D4AF37' }}
                    className="text-white transition-colors p-1"
                  >
                    {social.icon === 'Instagram' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.527c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                    )}
                    {social.icon === 'LinkedIn' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    )}
                    {social.icon === 'Email' && <Mail className="w-6 h-6" />}
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-gray-500 text-sm font-montserrat">
                © {new Date().getFullYear()} ShopendswithP. All rights reserved.
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </footer>
  );
}
