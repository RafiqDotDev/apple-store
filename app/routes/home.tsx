import React, { useState } from 'react';
import type { Route } from "./+types/home";
import { Header } from '../components/Header';
import { MobileNav } from '../components/MobileNav';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProduct } from '../components/FeaturedProduct';
import { CategorySelector } from '../components/CategorySelector';
import { ProductGrid } from '../components/ProductGrid';
import { MacEditorial } from '../components/MacEditorial';
import { IpadEditorial } from '../components/IpadEditorial';
import { WatchEditorial } from '../components/WatchEditorial';
import { AirpodsEditorial } from '../components/AirpodsEditorial';
import { WhyShopWithUs } from '../components/WhyShopWithUs';
import { PremiumCta } from '../components/PremiumCta';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { SearchModal } from '../components/SearchModal';
import { CartDrawer } from '../components/CartDrawer';
import type { CartItem } from '../components/CartDrawer';
import { Toast } from '../components/Toast';
import { PRODUCTS } from '../data/products';
import type { Product, ColorOption, StorageOption } from '../data/products';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AURA  Luxe Boutique — Premium Apple Products" },
    { name: "description", content: "Minimalist luxury boutique for flagship Apple devices. iPhone 17 Pro, MacBook Pro M4, iPad Pro Ultra, Apple Watch Ultra 3, and AirPods Max." },
  ];
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filter products by active category
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  // Products for editorial highlights
  const iphone17Pro = PRODUCTS.find((p) => p.id === 'iphone-17-pro') || PRODUCTS[0];
  const macbookPro = PRODUCTS.find((p) => p.id === 'macbook-pro-m4') || PRODUCTS[2];
  const ipadPro = PRODUCTS.find((p) => p.id === 'ipad-pro-m4') || PRODUCTS[4];
  const watchUltra = PRODUCTS.find((p) => p.id === 'apple-watch-ultra-3') || PRODUCTS[5];
  const airpodsMax = PRODUCTS.find((p) => p.id === 'airpods-max-2') || PRODUCTS[6];

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    selectedColor: ColorOption,
    selectedStorage?: StorageOption,
    calculatedPrice?: number
  ) => {
    const finalPrice = calculatedPrice || product.price;
    const itemUniqueId = `${product.id}-${selectedColor.name}-${selectedStorage?.size || 'default'}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemUniqueId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemUniqueId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemUniqueId,
          product,
          selectedColor,
          selectedStorage,
          price: finalPrice,
          quantity: 1,
        },
      ];
    });

    setSelectedProduct(null);
    setIsCartOpen(true);
    triggerToast(`Added ${product.name} (${selectedColor.name}) to your Shopping Bag.`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    triggerToast('Item removed from bag.');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white selection:bg-white selection:text-black">
      
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Glass Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Floating Bottom Mobile Nav */}
      <MobileNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onScrollToProducts={scrollToProducts}
      />

      {/* 01. Cinematic Hero */}
      <HeroSection
        featuredProduct={iphone17Pro}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onExploreCollection={scrollToProducts}
      />

      {/* 02. Featured Product (iPhone 17 Pro) */}
      <FeaturedProduct
        product={iphone17Pro}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 03. Product Categories Selector */}
      <CategorySelector
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          scrollToProducts();
        }}
      />

      {/* 04. Product Collection Grid */}
      <ProductGrid
        products={filteredProducts}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 05. Mac Editorial Section */}
      <MacEditorial
        macProduct={macbookPro}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 06. iPad Section */}
      <IpadEditorial
        ipadProduct={ipadPro}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 07. Apple Watch Section */}
      <WatchEditorial
        watchProduct={watchUltra}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 08. AirPods Section */}
      <AirpodsEditorial
        airpodsProduct={airpodsMax}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 09. Why Shop With Us */}
      <WhyShopWithUs />

      {/* 10. Premium CTA */}
      <PremiumCta onExploreAll={scrollToProducts} />

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-white/10 text-center text-xs text-gray-500 font-light pb-24 md:pb-12">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="text-white font-semibold text-sm"> AURA LUXE BOUTIQUE</div>
          <p>Designed with minimalism, high performance, and luxury tech storytelling.</p>
          <p className="text-[11px] text-gray-600">
            © 2026 AURA Inc. All rights reserved. Apple, iPhone, Mac, iPad, Apple Watch, and AirPods are trademarks of Apple Inc.
          </p>
        </div>
      </footer>

      {/* PDP Modal Overlay */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onTriggerToast={triggerToast}
      />

    </div>
  );
}
