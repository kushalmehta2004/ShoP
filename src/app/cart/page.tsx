'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <ShoppingBag className="w-24 h-24 mx-auto text-[#EBEBEB] mb-6" />
          <h1 className="text-h2 mb-4">Your cart is empty</h1>
          <p className="text-body text-[#2A2A2A] mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link href="/shop">
            <button className="btn-primary">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-display mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 border border-[#EBEBEB] card-shadow">
                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0 bg-[#F5F5F5]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-label text-[#2A2A2A] mb-1">{item.brand}</p>
                      <h3 className="text-h3 mb-2">{item.name}</h3>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>

                  <p className="text-body text-[#D4AF37] font-semibold mb-4">
                    ${item.price.toLocaleString()}
                  </p>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4">
                    <span className="text-label">Quantity:</span>
                    <div className="flex items-center border border-[#EBEBEB]">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-[#F5F5F5] transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="px-6 py-1 text-body">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-[#F5F5F5] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 border border-[#EBEBEB] card-shadow bg-white">
              <h2 className="text-h2 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-body">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-[#EBEBEB] pt-4">
                  <div className="flex justify-between text-h3">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full mb-4">
                Checkout
              </button>
              
              <Link href="/shop" className="flex items-center justify-center gap-2 text-body text-[#2A2A2A] hover:text-[#D4AF37] transition-colors">
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
