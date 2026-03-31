'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const navVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    } as any,
  }),
};

export default function Header() {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-[#EBEBEB] z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="text-2xl font-playfair font-bold text-[#0A0A0A]">
              ShopendswithP
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Shop', 'Authentication', 'About'].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-sm font-montserrat font-medium text-[#0A0A0A] hover:text-[#D4AF37] relative group transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Search, label: 'Search', href: '#' },
              { icon: Heart, label: 'Wishlist', href: '/wishlist' },
              { icon: ShoppingCart, label: 'Cart', href: '/cart', count: totalItems },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <Link 
                  href={item.href}
                  aria-label={item.label}
                  className="relative p-2 hover:bg-gray-50 rounded-full transition-colors block"
                >
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <item.icon className="w-5 h-5 text-[#0A0A0A]" />
                  </motion.div>
                  {item.count !== undefined && item.count > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
                    >
                      {item.count}
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0A0A0A]" />
              ) : (
                <Menu className="w-5 h-5 text-[#0A0A0A]" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-out Menu */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
            >
              <div className="p-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mb-12 p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-[#0A0A0A]" />
                </button>

                <nav className="flex flex-col gap-8">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Shop', href: '/shop' },
                    { name: 'Authentication', href: '/authentication' },
                    { name: 'About', href: '/about' },
                    { name: 'Wishlist', href: '/wishlist' },
                    { name: 'Cart', href: '/cart' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-xl font-montserrat font-semibold text-[#0A0A0A] hover:text-[#D4AF37] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
