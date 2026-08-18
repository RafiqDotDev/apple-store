import React from "react";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { MOCK_PRODUCTS } from "../data/products";
import { SmartImage } from "./SmartImage";

export const AccessoriesPromo: React.FC = () => {
  const { addToCart, setActiveDetailProduct } = useCartStore();

  const accessories = MOCK_PRODUCTS.filter(
    (p) => p.category === "accessory" || p.category === "watch"
  );

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      
      {/* Section Banner Title matching Technically Stable "T-SHIRTS - BUY 2 GET 1 FREE!" */}
      <div className="bg-slate-900 text-white border-4 border-slate-950 rounded-2xl p-4 sm:p-6 pixel-box-shadow mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs bg-amber-400 text-slate-950 px-3 py-1 rounded-full w-max mb-2">
            <Sparkles className="w-3.5 h-3.5" /> SPECIAL ECOSYSTEM DEAL
          </div>
          <h2 className="font-pixel text-lg sm:text-2xl text-white uppercase tracking-wider">
            APPLE ACCESSORIES - BUY 2 GET 1 FREE!
          </h2>
          <p className="font-silkscreen text-xs text-sky-300 mt-1">
            Mix & match MagSafe Chargers, AirPods Max, Watch Bands, and Fast Power Adapters.
          </p>
        </div>
        <button
          onClick={() => {
            const catalogEl = document.getElementById("catalog");
            if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-pixel text-xs px-5 py-3 border-2 border-slate-900 rounded-xl pixel-btn-shadow transition flex items-center gap-2"
        >
          EXPLORE DEALS <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="pixel-card bg-white p-4 flex flex-col justify-between hover:-translate-y-1 transition duration-200"
          >
            <div className="relative w-full h-56 bg-slate-100 rounded-xl border-2 border-slate-900 overflow-hidden mb-4 p-3 flex items-center justify-center">
              <SmartImage
                src={item.images[0]}
                alt={item.name}
                category={item.category}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setActiveDetailProduct(item)}
              />
              <span className="absolute top-2 left-2 bg-rose-500 text-white font-pixel text-[10px] px-2 py-0.5 rounded border border-slate-900">
                BUY 2 GET 1
              </span>
            </div>

            <div>
              <span className="font-silkscreen text-[10px] text-sky-700 uppercase font-bold">
                {item.brand}
              </span>
              <h3
                onClick={() => setActiveDetailProduct(item)}
                className="font-pixel text-sm text-slate-900 line-clamp-1 cursor-pointer hover:text-sky-600 transition"
              >
                {item.name}
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1 line-clamp-1">
                {item.tagline}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t-2 border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-pixel text-sm text-slate-900">
                  Rs. {item.price.toLocaleString()}
                </span>
                {item.originalPrice && (
                  <span className="font-mono text-xs text-slate-400 line-through ml-2">
                    Rs. {item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-silkscreen text-xs border-2 border-slate-900 rounded-lg pixel-btn-shadow transition font-bold flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" /> ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
