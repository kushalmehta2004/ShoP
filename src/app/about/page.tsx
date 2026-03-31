'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';
import ScrollStaggerIn from '@/components/animations/ScrollStaggerIn';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')",
          }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-display text-white mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Heritage of Trust
          </motion.h1>
          <motion.p 
            className="text-body text-white/90 text-2xl font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Curating authenticated luxury for discerning collectors since 2020. Our journey is defined by a relentless pursuit of authenticity and excellence.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollFadeIn direction="right">
              <div>
                <h2 className="text-h2 mb-10">Our Purpose</h2>
                <p className="text-body text-[#4A4A4A] text-lg mb-8 leading-relaxed">
                  At ShopendswithP, we believe that luxury should be accessible, authentic, and anxiety-free. 
                  Our mission is to provide a curated selection of pre-owned luxury goods that have been 
                  thoroughly authenticated by our team of certified specialists.
                </p>
                <p className="text-body text-[#4A4A4A] text-lg mb-8 leading-relaxed">
                  We understand that buying luxury items requires absolute trust. That's why every piece in our 
                  collection undergoes a rigorous multi-stage verification process.
                </p>
                <p className="text-body text-[#4A4A4A] text-lg leading-relaxed font-semibold italic border-l-4 border-[#D4AF37] pl-6">
                  "Our commitment to transparency has made us the premier global destination for high-end luxury sourcing."
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 border-2 border-[#D4AF37] translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop"
                  alt="Luxury authentication"
                  className="w-full h-full object-cover relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-h2 text-white text-center mb-24">The Pillars of ShopendswithP</h2>
          </ScrollFadeIn>
          
          <ScrollStaggerIn className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: '✓', title: 'Absolute Authenticity', desc: 'Every item is verified by master experts using molecular analysis and heritage markers. We provide a lifetime guarantee on every verification.' },
              { icon: '★', title: 'Curated Excellence', desc: 'We source only the most exquisite pieces from legendary houses, ensuring each item meets our strict standards for rarity and condition.' },
              { icon: '◆', title: 'Unrivaled Transparency', desc: 'Complete history, clear condition reports, and traceable provenance. We empower collectors through knowledge and radical honesty.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center group p-8 hover:bg-white/5 rounded-2xl transition-colors duration-500">
                <div className="text-7xl mb-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-2xl font-playfair font-bold mb-6 group-hover:text-[#D4AF37] transition-colors">{value.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </ScrollStaggerIn>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-h2 text-center mb-24 uppercase tracking-widest text-[#0A0A0A]">Our Impact</h2>
          </ScrollFadeIn>
          
          <ScrollStaggerIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { stat: '10K+', label: 'Global Collectors' },
              { stat: '500+', label: 'Pieces Verified' },
              { stat: '99.9%', label: 'Trust Accuracy' },
              { stat: '24/7', label: 'VIP Concierge' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-12 bg-[#F9F9F9] rounded-2xl hover:bg-[#F0F0F0] transition-colors">
                <p className="text-5xl font-playfair font-bold text-[#D4AF37] mb-4">{stat.stat}</p>
                <p className="text-sm font-montserrat font-bold tracking-widest uppercase text-[#4A4A4A]">{stat.label}</p>
              </div>
            ))}
          </ScrollStaggerIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollFadeIn>
            <h2 className="text-h2 text-white mb-8">Ready to Start Your Collection?</h2>
            <p className="text-body text-gray-400 text-xl mb-12 leading-relaxed">
              Explore our curated selection of verified luxury masterpieces and join our elite community of collectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/shop">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-12 py-5 text-lg glow-on-hover w-full sm:w-auto"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/authentication">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-12 py-5 text-lg w-full sm:w-auto"
                >
                  Authentication Process
                </motion.button>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
