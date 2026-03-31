'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGES: Record<string, string> = {
  bag: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop',
  shoulder: 'https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop',
  tote: 'https://images.unsplash.com/photo-1591348115748-55cc586fc31b?w=800&h=800&fit=crop',
  watch: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop',
  jewelry: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
  wallet: 'https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop',
  default: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop',
};

const getFallbackImage = (name: string) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes('shoulder')) return FALLBACK_IMAGES.shoulder;
  if (lowercaseName.includes('tote')) return FALLBACK_IMAGES.tote;
  if (lowercaseName.includes('bag')) return FALLBACK_IMAGES.bag;
  if (lowercaseName.includes('watch')) return FALLBACK_IMAGES.watch;
  if (lowercaseName.includes('jewelry') || lowercaseName.includes('bracelet')) return FALLBACK_IMAGES.jewelry;
  if (lowercaseName.includes('wallet')) return FALLBACK_IMAGES.wallet;
  return FALLBACK_IMAGES.default;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { addItem: addWishlistItem, removeItem: removeWishlistItem, isInWishlist } = useWishlist();

  const productImage = product.image && product.image.trim() !== '' ? product.image : getFallbackImage(product.name);
  const [imgSrc, setImgSrc] = React.useState(productImage);

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_IMAGES.default) {
      setImgSrc(FALLBACK_IMAGES.default);
    }
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      addWishlistItem(product);
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden group"
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden rounded-xl card-shadow">
        <motion.img 
          src={imgSrc} 
          alt={product.name} 
          onError={handleImageError}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {product.authenticated && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-[#D4AF37] px-3 py-1 text-xs font-semibold rounded-sm border border-[#D4AF37]/30">
            Verified ✓
          </div>
        )}
        <motion.button 
          onClick={handleToggleWishlist}
          aria-label="Add to wishlist"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-4 left-4 p-2 rounded-full transition-colors ${
            isInWishlist(product.id) 
              ? 'bg-white text-red-500' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-red-500' : ''}`} />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="pt-4">
        <h3 className="text-label text-[#2A2A2A] mb-1">{product.brand}</h3>
        <h4 className="text-h3 text-[#0A0A0A] mb-2 line-clamp-2 hover-underline inline-block cursor-pointer">{product.name}</h4>
        <p className="text-body text-[#D4AF37] font-semibold mb-4">${product.price.toFixed(2)}</p>
        
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex-1 mr-2 glow-on-hover"
          >
            Add to Cart
          </motion.button>
          <motion.button 
            onClick={handleToggleWishlist}
            aria-label="Add to wishlist"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 border border-[#EBEBEB] hover:border-[#D4AF37] transition-colors"
          >
            <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-[#0A0A0A]'}`} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
