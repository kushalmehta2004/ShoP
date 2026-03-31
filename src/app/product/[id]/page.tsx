'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Heart, Share2, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import Link from 'next/link';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';
import ScrollStaggerIn from '@/components/animations/ScrollStaggerIn';

// Sample product data
const products: Record<string, Product & { description: string; specs: Record<string, string>; images: string[] }> = {
  "1": {
    id: 1,
    name: "Classic Leather Tote Bag",
    brand: "Gucci",
    price: 2450,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
    authenticated: true,
    description: "This exquisite Gucci Classic Leather Tote Bag represents the pinnacle of Italian craftsmanship. Made from premium leather with the iconic GG logo, this timeless piece features a spacious interior perfect for daily essentials. The bag showcases impeccable stitching, gold-tone hardware, and the signature Gucci attention to detail that has made the brand a luxury icon for decades.",
    specs: {
      "Material": "Premium Italian Leather",
      "Dimensions": "14\" W x 11\" H x 6\" D",
      "Hardware": "Gold-tone",
      "Interior": "Fabric lining with zip pocket",
      "Closure": "Magnetic snap",
      "Handles": "Double handles with 9\" drop",
      "Condition": "Excellent",
      "Includes": "Dust bag, authenticity cards"
    },
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601333692796-f2e00f68e2d3?w=800&h=800&fit=crop"
    ]
  },
  "2": {
    id: 2,
    name: "Quilted Chain Shoulder Bag",
    brand: "Chanel",
    price: 5200,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop",
    authenticated: true,
    description: "An iconic Chanel quilted shoulder bag featuring the classic diamond quilting pattern and signature chain strap. This elegant piece embodies Coco Chanel's revolutionary design philosophy, combining sophistication with functionality. The timeless silhouette makes it a perfect investment piece for any luxury collection.",
    specs: {
      "Material": "Lambskin Leather",
      "Dimensions": "10\" W x 6\" H x 3\" D",
      "Hardware": "Gold-tone chain",
      "Interior": "Burgundy leather lining",
      "Closure": "CC turn-lock",
      "Strap": "Chain strap with 22\" drop",
      "Condition": "Pristine",
      "Includes": "Original box, dust bag, certificate"
    },
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601333692796-f2e00f68e2d3?w=800&h=800&fit=crop"
    ]
  }
};

// Related products
const relatedProducts: Product[] = [
  { id: 3, name: "Monogram Canvas Wallet", brand: "Louis Vuitton", price: 890, image: "https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop", authenticated: true },
  { id: 4, name: "Silk Printed Scarf", brand: "Hermès", price: 425, image: "https://images.unsplash.com/photo-1601333692796-f2e00f68e2d3?w=800&h=800&fit=crop", authenticated: true },
  { id: 5, name: "Diamond Tennis Bracelet", brand: "Cartier", price: 15000, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop", authenticated: true },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();
  const productId = params.id as string;
  const product = products[productId] || products["1"];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm mb-12"
        >
          <Link href="/" className="text-[#4A4A4A] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-[#EBEBEB]">/</span>
          <Link href="/shop" className="text-[#4A4A4A] hover:text-[#D4AF37] transition-colors">
            Shop
          </Link>
          <span className="text-[#EBEBEB]">/</span>
          <span className="text-[#0A0A0A] font-medium">{product.name}</span>
        </motion.nav>

        {/* Product Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Images */}
          <ScrollFadeIn direction="right">
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-[#F5F5F5] mb-6 overflow-hidden rounded-lg card-shadow">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square bg-[#F5F5F5] rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#D4AF37]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* Right: Product Details */}
          <ScrollFadeIn direction="left">
            <div>
              <p className="text-label text-[#D4AF37] mb-2 tracking-widest uppercase">{product.brand}</p>
              <h1 className="text-display text-4xl mb-6">{product.name}</h1>
              
              {/* Price */}
              <p className="text-display text-3xl text-[#0A0A0A] mb-8">${product.price.toLocaleString()}</p>

              {/* Authentication Badge */}
              {product.authenticated && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-6 mb-10"
                >
                  <div className="flex items-center gap-3 text-[#D4AF37] mb-2">
                    <span className="text-xl">✓</span>
                    <span className="font-bold tracking-widest uppercase text-sm">Verified Authentic</span>
                  </div>
                  <p className="text-sm text-[#4A4A4A]">This piece has been thoroughly inspected and authenticated by our certified master experts.</p>
                </motion.div>
              )}

              {/* Description */}
              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-4">Description</h3>
                <p className="text-body text-[#4A4A4A] leading-relaxed text-lg">{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <motion.div 
                      key={key} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between border-b border-[#EBEBEB] pb-3"
                    >
                      <span className="text-sm font-medium text-[#4A4A4A]">{key}</span>
                      <span className="text-sm font-semibold text-[#0A0A0A]">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-10">
                <div className="flex items-center border border-[#EBEBEB] rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-3 hover:bg-[#F5F5F5] transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-medium text-lg min-w-[60px] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-3 hover:bg-[#F5F5F5] transition-colors"
                  >
                    +
                  </button>
                </div>
                <motion.button 
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex-1 py-4 text-lg glow-on-hover"
                >
                  Add to Cart
                </motion.button>
              </div>

              {/* Wishlist & Share */}
              <div className="flex gap-8 mb-12 pt-6 border-t border-[#EBEBEB]">
                <motion.button 
                  whileHover={{ x: 5, color: '#D4AF37' }}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#0A0A0A] transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </motion.button>
                <motion.button 
                  whileHover={{ x: 5, color: '#D4AF37' }}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#0A0A0A] transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share Piece
                </motion.button>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <ScrollFadeIn>
            <h2 className="text-h2 text-center mb-20 text-balance">Related Collections</h2>
          </ScrollFadeIn>
          <ScrollStaggerIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </ScrollStaggerIn>
        </section>
      </div>
    </div>
  );
}
