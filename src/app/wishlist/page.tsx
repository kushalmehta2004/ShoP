'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { Heart, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <Heart className="w-24 h-24 mx-auto text-[#EBEBEB] mb-6" />
          <h1 className="text-h2 mb-4">Your wishlist is empty</h1>
          <p className="text-body text-[#2A2A2A] mb-8">
            Save your favorite items to your wishlist for later.
          </p>
          <Link href="/shop">
            <button className="btn-primary">
              Explore Collection
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-display mb-8">My Wishlist</h1>
        <p className="text-body text-[#2A2A2A] mb-12">
          You have {items.length} {items.length === 1 ? 'item' : 'items'} saved
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeItem(product.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
                aria-label="Remove from wishlist"
              >
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/shop">
            <button className="btn-secondary">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
