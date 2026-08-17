import React from 'react';
import type { Product } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onSelectProduct }) => {
  return (
    <section id="products-catalog" className="py-16 px-4 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Curated Collection
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Explore Apple devices crafted for performance, creativity, and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/90"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  {product.isNew ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-medium text-[11px] uppercase tracking-wider border border-white/15">
                      New Generation
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 font-normal text-[11px] uppercase tracking-wider">
                      Flagship
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative aspect-4/3 w-full mb-6 overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-4">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 font-light mb-4 line-clamp-2">
                  {product.headline}
                </p>

                {/* Color Indicators Swatches */}
                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-center gap-1.5 mb-6">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    <span className="text-[11px] text-gray-500 ml-1 font-light">
                      {product.colors.length} finishes
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer Price & Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-light">From</span>
                  <span className="text-lg sm:text-xl font-bold text-white">{product.formattedPrice}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
