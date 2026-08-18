import React from "react";
import { Star, CheckCircle, Quote, Sparkles } from "lucide-react";
import { MOCK_CUSTOMER_SETUPS } from "../data/products";
import { SmartImage } from "./SmartImage";

export const CustomerSetups: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* Section Title matching Technically Stable "WHAT OUR CUSTOMERS THINK" */}
      <div className="text-center mb-8">
        <h2 className="font-pixel text-xl sm:text-3xl text-slate-900 uppercase tracking-wider mb-2">
          WHAT OUR CUSTOMERS THINK
        </h2>
        <div className="flex items-center justify-center gap-1.5 text-amber-400 font-pixel text-xs bg-slate-900 text-white px-4 py-1.5 rounded-full inline-flex border-2 border-slate-900 shadow-sm">
          <span>★★★★★</span>
          <span className="font-silkscreen text-[11px] text-sky-300 ml-1">4.9 / 5.0 (2,400+ REVIEWS IN PAKISTAN)</span>
        </div>
      </div>

      {/* Setups Cards Carousel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_CUSTOMER_SETUPS.map((setup) => (
          <div
            key={setup.id}
            className="pixel-card bg-white p-4 flex flex-col justify-between hover:-translate-y-1 transition duration-200"
          >
            {/* Setup Image Frame */}
            <div className="relative w-full h-48 mb-4 bg-slate-900 rounded-lg border-2 border-slate-900 overflow-hidden">
              <SmartImage
                src={setup.imageUrl}
                alt={setup.name}
                category="setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-slate-900/90 text-white text-[10px] font-silkscreen px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> {setup.city}
              </span>
            </div>

            {/* Comment */}
            <div className="space-y-2 flex-1">
              <div className="flex items-center text-amber-400 text-xs">
                {"★".repeat(setup.rating)}
              </div>
              
              <p className="font-sans text-xs text-slate-700 italic line-clamp-3 leading-relaxed">
                "{setup.comment}"
              </p>
            </div>

            {/* Verified Buyer Footer */}
            <div className="pt-3 mt-3 border-t-2 border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-pixel text-xs text-slate-900 flex items-center gap-1">
                  {setup.name}
                  {setup.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500 fill-sky-100" />
                  )}
                </h4>
                <span className="font-mono text-[10px] text-slate-400">{setup.handle}</span>
              </div>
              <span className="font-silkscreen text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-300">
                VERIFIED
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
