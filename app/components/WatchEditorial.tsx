import React from 'react';
import type { Product } from '../data/products';
import { ArrowRight, Activity, Compass, HeartPulse } from 'lucide-react';

interface WatchEditorialProps {
  watchProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export const WatchEditorial: React.FC<WatchEditorialProps> = ({ watchProduct, onSelectProduct }) => {
  return (
    <section id="watch" className="py-24 px-4 bg-[#0B0B0C] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Watch Macro Shot */}
          <div className="lg:col-span-6 cursor-pointer" onClick={() => onSelectProduct(watchProduct)}>
            <div className="relative group overflow-hidden rounded-3xl glass-card p-4 border border-white/10 shadow-2xl">
              <img
                src={watchProduct.mainImage}
                alt="Apple Watch Ultra 3"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full text-xs font-light text-white backdrop-blur-md">
                <span>49mm Grade 5 Titanium</span>
              </div>
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 block">
              MACRO PRECISION
            </span>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Time, redesigned.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Crafted from aerospace-grade titanium for peak endurance. Equipped with multi-band GPS precision, water resistance up to 100m, and revolutionary health sensors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="glass-card p-4 rounded-xl border border-white/10">
                <Compass className="w-5 h-5 text-orange-500 mb-2" />
                <h5 className="text-sm font-semibold text-white">Dual GPS</h5>
                <p className="text-[11px] text-gray-400 font-light">L1 + L5 frequency precision</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10">
                <HeartPulse className="w-5 h-5 text-red-400 mb-2" />
                <h5 className="text-sm font-semibold text-white">ECG & Vitals</h5>
                <p className="text-[11px] text-gray-400 font-light">Real-time health telemetry</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10">
                <Activity className="w-5 h-5 text-emerald-400 mb-2" />
                <h5 className="text-sm font-semibold text-white">72h Battery</h5>
                <p className="text-[11px] text-gray-400 font-light">Low Power mode endurance</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectProduct(watchProduct)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shadow-lg"
              >
                <span>Explore Apple Watch Ultra 3</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
