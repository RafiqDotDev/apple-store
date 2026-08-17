import React from 'react';
import { Search, ShoppingBag, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenSearch }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-white group">
          <span className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-gray-300 transition-colors">
             <span className="font-extralight tracking-widest text-xs uppercase text-gray-400 ml-1">LUXE BOUTIQUE</span>
          </span>
        </a>

        {/* Center: Quick Link */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#featured" className="hover:text-white transition-colors">iPhone 17 Pro</a>
          <a href="#mac" className="hover:text-white transition-colors">Mac</a>
          <a href="#ipad" className="hover:text-white transition-colors">iPad</a>
          <a href="#watch" className="hover:text-white transition-colors">Watch</a>
          <a href="#airpods" className="hover:text-white transition-colors">AirPods</a>
        </nav>

        {/* Right Actions: Search & Shopping Bag */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Search Products"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-white text-black font-semibold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
