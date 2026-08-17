import React from 'react';
import { Home, Grid, Search, ShoppingBag } from 'lucide-react';

interface MobileNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onScrollToProducts: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onScrollToProducts,
}) => {
  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md">
      <div className="glass-card bg-black/80 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-6 flex items-center justify-around shadow-2xl shadow-black/80">
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs font-light"
        >
          <Home className="w-5 h-5 mb-0.5 stroke-[1.5]" />
          <span>Home</span>
        </button>

        <button
          onClick={onScrollToProducts}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs font-light"
        >
          <Grid className="w-5 h-5 mb-0.5 stroke-[1.5]" />
          <span>Catalog</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs font-light"
        >
          <Search className="w-5 h-5 mb-0.5 stroke-[1.5]" />
          <span>Search</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs font-light"
        >
          <ShoppingBag className="w-5 h-5 mb-0.5 stroke-[1.5]" />
          <span>Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-1 bg-white text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
