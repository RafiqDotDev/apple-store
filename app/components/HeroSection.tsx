import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';

interface HeroSectionProps {
  featuredProduct: Product;
  onSelectProduct: (product: Product) => void;
  onExploreCollection: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredProduct,
  onSelectProduct,
  onExploreCollection,
}) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-8 pb-16 px-4 overflow-hidden bg-black text-white">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-gray-800/20 via-zinc-600/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Top Headline & Storytelling */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-8 sm:pt-16">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-light text-gray-300 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Exclusive Boutique Collection 2026</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]">
          The future, <br className="hidden sm:block" />
          <span className="titanium-text">beautifully refined.</span>
        </h1>

        <p className="text-base sm:text-xl font-light text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
          Discover the latest Apple technology, curated for an effortless, high-performance experience.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={() => onSelectProduct(featuredProduct)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            <span>Shop iPhone 17 Pro</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Cinematic Product Lighting Showcase */}
      <div className="relative z-10 max-w-3xl mx-auto w-full flex justify-center items-center mt-4">
        <div className="relative group cursor-pointer" onClick={() => onSelectProduct(featuredProduct)}>
          
          {/* Subtle rim light aura */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/10 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <img
            src={featuredProduct.mainImage}
            alt={featuredProduct.name}
            className="w-full max-w-sm sm:max-w-md h-auto object-cover rounded-2xl sm:rounded-3xl shadow-2xl shadow-black transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full text-xs font-light text-gray-300 flex items-center gap-2 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Grade 5 Titanium • Starting {featuredProduct.formattedPrice}</span>
          </div>

        </div>
      </div>

    </section>
  );
};
