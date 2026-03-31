'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import { motion } from 'framer-motion';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';
import ScrollStaggerIn from '@/components/animations/ScrollStaggerIn';

// Sample product data
const allProducts: Product[] = [
  { id: 1, name: "Classic Leather Tote Bag", brand: "Gucci", price: 2450, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop", authenticated: true },
  { id: 2, name: "Quilted Chain Shoulder Bag", brand: "Chanel", price: 5200, image: "https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=800&h=800&fit=crop", authenticated: true },
  { id: 3, name: "Monogram Canvas Wallet", brand: "Louis Vuitton", price: 890, image: "https://images.unsplash.com/photo-1627123424574-18bd08331a7c?w=800&h=800&fit=crop", authenticated: true },
  { id: 4, name: "Silk Printed Scarf", brand: "Hermès", price: 425, image: "https://images.unsplash.com/photo-1601333692796-f2e00f68e2d3?w=800&h=800&fit=crop", authenticated: true },
  { id: 5, name: "Diamond Tennis Bracelet", brand: "Cartier", price: 15000, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop", authenticated: true },
  { id: 6, name: "Luxury Chronograph Watch", brand: "Rolex", price: 25000, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop", authenticated: true },
  { id: 7, name: "Leather Belt Bag", brand: "Prada", price: 1350, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", authenticated: true },
  { id: 8, name: "Cashmere Wrap Shawl", brand: "Burberry", price: 790, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop", authenticated: true },
  { id: 9, name: "Vintage Shoulder Bag", brand: "Prada", price: 1850, image: "", authenticated: true }, // TEST PRODUCT: Empty Image
];

const categories = ["All", "Bags", "Jewelry", "Watches", "Accessories"];
const brands = ["All", "Gucci", "Chanel", "Louis Vuitton", "Hermès", "Cartier", "Rolex", "Prada", "Burberry"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [authenticatedOnly, setAuthenticatedOnly] = useState(false);

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== "All" && !product.name.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }
    if (selectedBrand !== "All" && product.brand !== selectedBrand) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (authenticatedOnly && !product.authenticated) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-display text-white mb-4">Shop Collection</h1>
          <p className="text-body text-white text-lg">Discover authenticated luxury pieces</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/5 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-h3 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="w-4 h-4 accent-[#D4AF37]"
                    />
                    <span className="text-body text-[#2A2A2A] group-hover:text-[#D4AF37] transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-h3 mb-4">Brands</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="w-4 h-4 accent-[#D4AF37]"
                    />
                    <span className="text-body text-[#2A2A2A] group-hover:text-[#D4AF37] transition-colors">
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-h3 mb-4">Price Range</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="30000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[#D4AF37]"
                />
                <div className="flex items-center justify-between text-body text-[#2A2A2A]">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Authentication Filter */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={authenticatedOnly}
                  onChange={() => setAuthenticatedOnly(!authenticatedOnly)}
                  className="w-4 h-4 accent-[#D4AF37]"
                />
                <span className="text-body text-[#2A2A2A]">Verified Authentic Only</span>
              </label>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
                setPriceRange([0, 30000]);
                setAuthenticatedOnly(false);
              }}
              className="btn-secondary w-full"
            >
              Reset Filters
            </button>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-4/5">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-body text-[#2A2A2A]">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
              <select className="px-4 py-2 border border-[#EBEBEB] focus:outline-none focus:border-[#D4AF37]">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-h3 text-[#2A2A2A] mb-4">No products found</p>
                <p className="text-body text-[#2A2A2A]">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
