import React from 'react';
import type { Product } from '../data/products';
import { ArrowRight, Volume2, Sparkles, Sliders } from 'lucide-react';

interface AirpodsEditorialProps {
  airpodsProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export const AirpodsEditorial: React.FC<AirpodsEditorialProps> = ({ airpodsProduct, onSelectProduct }) => {
  return (
    <section id="airpods" className="py-24 px-4 bg-[#0B0B0C] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 block">
              ACOUSTIC LUXURY
            </span>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Sound without compromise.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Computational audio combining custom acoustic engineering, H2 processing, and Personalized Spatial Audio for a concert-hall experience on demand.
            </p>

            <div className="space-y-4 pt-2">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/10">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Pro Active Noise Cancellation</h4>
                  <p className="text-xs text-gray-400 font-light">Blocks 2x more ambient background noise.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/10">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  <Sliders className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Lossless Audio & USB-C</h4>
                  <p className="text-xs text-gray-400 font-light">Ultra-low latency studio playback fidelity.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectProduct(airpodsProduct)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shadow-lg"
              >
                <span>Explore AirPods Max</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Floating Audio Render */}
          <div className="lg:col-span-6 order-1 lg:order-2 cursor-pointer" onClick={() => onSelectProduct(airpodsProduct)}>
            <div className="relative flex justify-center items-center py-6">
              <img
                src={airpodsProduct.mainImage}
                alt="AirPods Max"
                className="w-full max-w-md h-auto object-cover rounded-3xl shadow-2xl shadow-black hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
