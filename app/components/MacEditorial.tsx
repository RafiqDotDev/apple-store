import React from 'react';
import type { Product } from '../data/products';
import { ArrowRight, Cpu, Zap, BatteryCharging } from 'lucide-react';

interface MacEditorialProps {
  macProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export const MacEditorial: React.FC<MacEditorialProps> = ({ macProduct, onSelectProduct }) => {
  return (
    <section id="mac" className="py-24 px-4 bg-gradient-to-b from-[#0B0B0C] via-[#111114] to-[#0B0B0C] border-t border-white/5 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2 block">
            SUPERCHARGED BY M4 SILICON
          </span>
          
          <h2 className="text-4xl sm:text-7xl font-bold tracking-tight text-white mb-4">
            Mac. Built to go further.
          </h2>

          <p className="text-lg sm:text-2xl font-light text-gray-300">
            Performance that disappears into the experience.
          </p>
        </div>

        {/* Mac Studio Render Frame */}
        <div className="relative group cursor-pointer my-10" onClick={() => onSelectProduct(macProduct)}>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black">
            <img
              src={macProduct.mainImage}
              alt="MacBook Pro M4"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-10">
          <div className="glass-card p-6 rounded-2xl text-center border border-white/10">
            <Cpu className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-white">M4 Max Chip</h4>
            <p className="text-xs text-gray-400 font-light mt-1">Up to 16-core CPU and 40-core GPU</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center border border-white/10">
            <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-white">1600 Nits</h4>
            <p className="text-xs text-gray-400 font-light mt-1">Peak HDR Liquid Retina XDR brightness</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center border border-white/10">
            <BatteryCharging className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-white">24 Hours</h4>
            <p className="text-xs text-gray-400 font-light mt-1">Longest battery life ever in a Mac</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onSelectProduct(macProduct)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
          >
            <span>Explore MacBook Pro</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
