import React from 'react';
import { Cpu, Camera, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';

interface FeaturedProductProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  product,
  onSelectProduct,
}) => {
  return (
    <section id="featured" className="py-20 sm:py-32 px-4 bg-[#0B0B0C] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Tag */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
            FLAGSHIP INNOVATION
          </span>
        </div>

        {/* Headlines */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white mb-3">
            {product.name}
          </h2>
          <p className="text-xl sm:text-3xl font-light text-gray-400">
            {product.headline}
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Spec Highlights */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 text-white mb-2">
                <Cpu className="w-5 h-5 text-gray-300" />
                <h4 className="font-medium text-base">A19 Pro Bionic</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                Unmatched Neural Engine capability for advanced ray-tracing graphics and instant tasks.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 text-white mb-2">
                <Camera className="w-5 h-5 text-gray-300" />
                <h4 className="font-medium text-base">48MP Triple Fusion</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                6x optical telephoto lens engineered with studio lens coatings for cinematic depth.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 text-white mb-2">
                <ShieldCheck className="w-5 h-5 text-gray-300" />
                <h4 className="font-medium text-base">Grade 5 Titanium</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                Aerospace-grade metallic enclosure offering industry-leading strength-to-weight ratio.
              </p>
            </div>
          </div>

          {/* Center Product Canvas */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-lg cursor-pointer" onClick={() => onSelectProduct(product)}>
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-black/80 hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-light text-gray-400 block">Starting from</span>
                <span className="text-2xl sm:text-3xl font-bold text-white">{product.formattedPrice}</span>
                <span className="text-xs text-gray-500 ml-2">or {product.monthlyPrice}</span>
              </div>

              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => onSelectProduct(product)}
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/10"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
