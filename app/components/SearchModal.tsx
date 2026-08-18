import React, { useEffect } from "react";
import { Search, X, Star, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { MOCK_PRODUCTS } from "../data/products";
import { SmartImage } from "./SmartImage";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery, setActiveDetailProduct } = useCartStore();

  // Keyboard '/' shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearchOpen) {
        e.preventDefault();
        toggleSearch(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, toggleSearch]);

  if (!isSearchOpen) return null;

  const results = MOCK_PRODUCTS.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.ptaStatus.toLowerCase().includes(q) ||
      p.storageOptions.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border-4 border-slate-900 rounded-3xl pixel-box-shadow-lg overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-[#1e293b] border-b-4 border-slate-900 flex items-center gap-3">
          <Search className="w-5 h-5 text-sky-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search phones (e.g. iPhone 17, Samsung, PTA Approved)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white font-pixel text-xs sm:text-sm focus:outline-none placeholder:text-slate-500"
          />
          <button
            onClick={() => toggleSearch(false)}
            className="p-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 bg-sky-50 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="font-silkscreen text-[11px] text-slate-500 font-bold uppercase mb-2">
            FOUND {results.length} SMARTPHONES & ACCESSORIES
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8 font-silkscreen text-xs text-slate-600">
              No matching phones found. Try searching for "Apple", "17 Pro", or "PTA".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  toggleSearch(false);
                  setActiveDetailProduct(product);
                }}
                className="pixel-card bg-white p-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-100 transition"
              >
                <div className="flex items-center gap-3">
                  <SmartImage
                    src={product.images[0]}
                    alt={product.name}
                    category={product.category}
                    className="w-12 h-12 object-cover rounded-lg border border-slate-900"
                  />
                  <div>
                    <h4 className="font-pixel text-xs text-slate-900">{product.name}</h4>
                    <span className="font-silkscreen text-[10px] text-sky-700 font-bold">
                      {product.brand} • {product.ptaStatus}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-pixel text-xs text-slate-900 font-bold">
                    Rs. {product.price.toLocaleString()}
                  </div>
                  <span className="font-silkscreen text-[10px] text-emerald-600 flex items-center gap-0.5 justify-end">
                    VIEW <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
