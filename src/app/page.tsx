'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';
import ScrollStaggerIn from '@/components/animations/ScrollStaggerIn';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Classic Leather Tote Bag",
    brand: "Gucci",
    price: 2450,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
    authenticated: true,
  },
  {
    id: 2,
    name: "Quilted Chain Shoulder Bag",
    brand: "Chanel",
    price: 5200,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop",
    authenticated: true,
  },
  {
    id: 3,
    name: "Monogram Canvas Wallet",
    brand: "Louis Vuitton",
    price: 890,
    image: "https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop",
    authenticated: true,
  },
  {
    id: 4,
    name: "Silk Printed Scarf",
    brand: "Hermès",
    price: 425,
    image: "https://images.unsplash.com/photo-1601333692796-f2e00f68e2d3?w=800&h=800&fit=crop",
    authenticated: true,
  },
];

// Category data
const categories = [
  {
    id: 1,
    name: "Designer Bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
  },
  {
    id: 2,
    name: "Fine Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
  },
  {
    id: 3,
    name: "Luxury Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop",
  },
];

function CountUp({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate: (latest) => setCount(Math.floor(latest)),
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 1.1]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')",
            y: heroY,
            scale: heroScale,
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-display text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Authenticated Luxury, <br />Curated for You
            </motion.h1>
            <motion.p 
              className="text-body text-white/90 text-xl mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Handpicked products. Verified authenticity. No compromises.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/shop">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary glow-on-hover px-12 py-5 text-lg"
                >
                  Explore Collection
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn threshold={0.3}>
            <h2 className="text-h2 text-center mb-20">Featured Categories</h2>
          </ScrollFadeIn>
          
          <ScrollStaggerIn className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] rounded-lg card-shadow">
                  <motion.img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">{category.name}</h3>
                    <motion.span 
                      className="inline-block text-[#D4AF37] font-semibold tracking-widest text-sm uppercase border-b-2 border-transparent hover:border-[#D4AF37] transition-all"
                    >
                      Explore Collection →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollStaggerIn>
        </div>
      </section>

      {/* Curated Picks Section */}
      <section className="py-32 px-6 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-h2 text-center mb-20 text-balance">Curated Picks</h2>
          </ScrollFadeIn>
          
          <ScrollStaggerIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollStaggerIn>
        </div>
      </section>

      {/* Trust/Authentication Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {/* Verified Authenticity */}
            <ScrollFadeIn direction="up">
              <div className="text-6xl mb-8 text-[#D4AF37]">✓</div>
              <h3 className="text-h3 mb-6">Verified Authenticity</h3>
              <p className="text-body text-[#4A4A4A] leading-relaxed">
                Every item is authenticated by our team of experts before reaching you.
              </p>
            </ScrollFadeIn>

            {/* Premium Selection */}
            <ScrollFadeIn direction="up" delay={0.2}>
              <div className="text-6xl mb-8 text-[#D4AF37]">★</div>
              <h3 className="text-h3 mb-6">Premium Selection</h3>
              <p className="text-body text-[#4A4A4A] leading-relaxed">
                Handpicked luxury pieces from the most sought-after designers.
              </p>
            </ScrollFadeIn>

            {/* Expert Curation */}
            <ScrollFadeIn direction="up" delay={0.4}>
              <div className="text-6xl mb-8 text-[#D4AF37]">◆</div>
              <h3 className="text-h3 mb-6">Expert Curation</h3>
              <p className="text-body text-[#4A4A4A] leading-relaxed">
                Each piece is selected for its quality, craftsmanship, and timeless appeal.
              </p>
            </ScrollFadeIn>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32 text-center">
            <ScrollFadeIn direction="up">
              <p className="text-7xl font-playfair font-bold text-[#D4AF37] mb-4">
                <CountUp value={500} suffix="+" />
              </p>
              <p className="text-label text-[#2A2A2A] tracking-widest uppercase">Products Verified</p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.2}>
              <p className="text-7xl font-playfair font-bold text-[#D4AF37] mb-4">
                <CountUp value={10} suffix="K+" />
              </p>
              <p className="text-label text-[#2A2A2A] tracking-widest uppercase">Happy Collectors</p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
