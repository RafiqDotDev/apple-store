import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PremiumCtaProps {
  onExploreAll: () => void;
}

export const PremiumCta: React.FC<PremiumCtaProps> = ({ onExploreAll }) => {
  return (
    <section className="py-24 sm:py-36 px-4 bg-black border-t border-white/10 relative overflow-hidden text-center">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        <h2 className="text-4xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Your next experience <br />
          <span className="titanium-text">starts here.</span>
        </h2>

        <p className="text-base sm:text-xl font-light text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Explore technology designed to move with you. Authentic Apple devices, refined storytelling, and instant delivery.
        </p>

        <button
          onClick={onExploreAll}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-gray-200 transition-all duration-300 shadow-2xl shadow-white/20 transform hover:scale-105"
        >
          <span>Shop All Products</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};
