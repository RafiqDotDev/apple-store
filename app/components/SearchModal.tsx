import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.headline.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const quickLinks = [
    { label: 'iPhone 17 Pro', cat: 'iphone' },
    { label: 'MacBook Pro M4', cat: 'mac' },
    { label: 'iPad Pro Ultra', cat: 'ipad' },
    { label: 'Apple Watch Ultra 3', cat: 'watch' },
    { label: 'AirPods Max', cat: 'airpods' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex flex-col p-4 sm:p-8 animate-fade-in-up">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Aura Search
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input box */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Apple products..."
            autoFocus
            className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white text-lg sm:text-xl placeholder-gray-500 focus:outline-none focus:border-white transition-all"
          />
        </div>

        {/* Results or Quick Links */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {query.trim() ? (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Found Results ({filteredProducts.length})
              </h4>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-gray-500 font-light">
                  No Apple devices matched "{query}". Try searching for iPhone, Mac, or Watch.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="glass-card p-4 rounded-2xl border border-white/10 hover:border-white/25 flex items-center justify-between cursor-pointer transition-all hover:bg-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={product.mainImage}
                          alt={product.name}
                          className="w-14 h-14 object-cover rounded-xl bg-white/5"
                        />
                        <div>
                          <h5 className="font-bold text-white text-base">{product.name}</h5>
                          <span className="text-xs text-gray-400 font-light">{product.headline}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-white block">{product.formattedPrice}</span>
                        <span className="text-[11px] text-gray-400 uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {quickLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(link.label)}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/15 text-xs font-medium transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Popular Hardware
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCTS.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="glass-card p-3 rounded-xl flex items-center gap-3 cursor-pointer border border-white/10 hover:border-white/20 transition-all"
                  >
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg bg-white/5"
                    />
                    <div>
                      <h5 className="font-semibold text-xs text-white">{product.name}</h5>
                      <span className="text-[11px] text-gray-400">{product.formattedPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
