import React from 'react';
import { SERVICE_PERKS } from '../data/products';
import { ShieldCheck, Sparkles, Lock, Truck, Award } from 'lucide-react';

export const WhyShopWithUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 stroke-[1.5]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 stroke-[1.5]" />;
      case 'Lock': return <Lock className="w-6 h-6 stroke-[1.5]" />;
      case 'Truck': return <Truck className="w-6 h-6 stroke-[1.5]" />;
      case 'Award': return <Award className="w-6 h-6 stroke-[1.5]" />;
      default: return <ShieldCheck className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section className="py-24 px-4 bg-[#0B0B0C] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-2">
            THE LUXE PROMISE
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Why Shop With Us
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            An uncompromised concierge standard designed around safety, speed, and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICE_PERKS.map((perk) => (
            <div
              key={perk.id}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                  {getIcon(perk.icon)}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {perk.title}
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
