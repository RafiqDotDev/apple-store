import React from "react";
import { Heart, Sparkles, Box, Key, Zap } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const OtherStuffsBanner: React.FC = () => {
  const { toggleDiscountModal, toggleCart } = useCartStore();

  const items = [
    {
      title: "MYSTERY PHONE BOX",
      desc: "Contains 1 Flagship Smartphone + MagSafe Charger + Premium Case!",
      tag: "MYSTERY EDITION",
      icon: Box,
      price: "Rs. 99,999",
      bg: "from-purple-900 to-indigo-900",
    },
    {
      title: "CUSTOM RETRO KEYCAPS",
      desc: "Apple Mechanical Keyboard Custom Keycap Sets.",
      tag: "EXCLUSIVE",
      icon: Key,
      price: "Rs. 8,999",
      bg: "from-slate-900 to-slate-800",
    },
    {
      title: "PTA VIP UNLOCK PASS",
      desc: "Fast-Track PTA Duty Payment & Guarantee Service.",
      tag: "SERVICE PASS",
      icon: Zap,
      price: "Rs. 14,999",
      bg: "from-amber-950 to-slate-900",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* Retro Dark Pixel Banner matching Technically Stable "OTHER STUFFS" with 5 Hearts */}
      <div className="bg-[#151D2A] border-4 border-slate-900 rounded-3xl p-6 sm:p-8 pixel-box-shadow-lg text-white">
        
        {/* Banner Title Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-700/60 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-pixel text-lg sm:text-2xl text-white tracking-wider">
              OTHER STUFFS 🎮
            </h2>
          </div>

          {/* 5 Heart Icons matching Technically Stable Image */}
          <div className="flex items-center gap-1.5 text-rose-500 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart key={i} className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>

        {/* 3 Mystery / Accessory Cards Grid matching Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.bg} border-3 border-slate-900 rounded-2xl p-5 pixel-btn-shadow flex flex-col justify-between hover:scale-[1.02] transition duration-200 group relative overflow-hidden`}
              >
                {/* Background Glow Overlay */}
                <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition" />

                <div>
                  <span className="font-silkscreen text-[10px] bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded border border-slate-900 uppercase">
                    {item.tag}
                  </span>

                  <div className="my-4 flex items-center gap-3">
                    <div className="p-3 bg-slate-900/90 border-2 border-slate-700 rounded-xl text-sky-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-pixel text-sm sm:text-base text-white">
                        {item.title}
                      </h3>
                      <span className="font-pixel text-xs text-amber-400 font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <button
                    onClick={() => toggleDiscountModal(true)}
                    className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-pixel text-xs border-2 border-slate-900 rounded-xl pixel-btn-shadow transition text-center uppercase tracking-wider font-bold"
                  >
                    CLAIM ITEM 🎁
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
