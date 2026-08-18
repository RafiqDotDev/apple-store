import React from "react";
import { Search, ShoppingBag, Heart, SlidersHorizontal, Sparkles } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const Header: React.FC = () => {
  const {
    cartItemCount,
    wishlist,
    compareIds,
    toggleCart,
    toggleSearch,
    toggleCompare,
    toggleDiscountModal,
    setBrandFilter
  } = useCartStore();

  const marqueeItems = [
    "🚀 FREE NATIONWIDE EXPRESS DELIVERY IN PAKISTAN",
    "⚡ 100% PTA APPROVED DEVICES & GUARANTEE",
    "🍎 1 YEAR OFFICIAL APPLE WARRANTY",
    "📱 ORIGINAL SAMSUNG GALAXY & GOOGLE PIXEL STOCK",
    "💬 INSTANT WHATSAPP ORDER SUPPORT (+92 300 1234567)",
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      
      {/* Continuous Marquee Ticker Announcement Bar matching Technically Stable */}
      <div className="bg-slate-900 text-white text-xs py-2 border-b-2 border-slate-950 overflow-hidden relative flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-silkscreen text-[#38BDF8]">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx} className="flex items-center gap-2 font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0 animate-pulse" />
              {text}
            </span>
          ))}
        </div>

        <button
          onClick={() => toggleDiscountModal(true)}
          className="hidden md:flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-3 py-1 rounded-md text-[11px] font-pixel border border-white/20 shadow-sm shrink-0 z-10 mr-4 ml-auto"
        >
          🎁 GET 10% OFF
        </button>
      </div>

      {/* Main Pixel Header Container */}
      <div className="bg-[#48B0F8] border-b-4 border-slate-900 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo - Technically Stable Pixel Style */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={() => setBrandFilter("All")}
              className="group flex items-center gap-2 bg-white px-4 py-2 border-3 border-slate-900 rounded-xl pixel-btn-shadow"
            >
              <span className="font-pixel text-slate-900 text-lg sm:text-xl tracking-wider">
                NEX<span className="text-sky-500">ORA</span>
              </span>
              <span className="hidden md:inline-block font-silkscreen text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded border border-sky-300">
                PRO STORE
              </span>
            </a>
          </div>

          {/* Nav Categories */}
          <nav className="hidden lg:flex items-center gap-2">
            {["All", "Apple", "Samsung", "Google", "Nothing", "Accessories"].map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setBrandFilter(brand);
                  const catalogEl = document.getElementById("catalog");
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-silkscreen text-xs text-slate-900 font-bold bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-lg border-2 border-slate-900 pixel-btn-shadow transition"
              >
                {brand}
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => toggleSearch(true)}
              className="p-2.5 bg-white border-2 border-slate-900 rounded-lg pixel-btn-shadow text-slate-900 hover:bg-sky-50 transition relative group"
              title="Search Phones (/)"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline-block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded font-mono opacity-0 group-hover:opacity-100 transition">
                /
              </span>
            </button>

            {/* Compare Drawer Trigger */}
            <button
              onClick={() => toggleCompare(true)}
              className="p-2.5 bg-white border-2 border-slate-900 rounded-lg pixel-btn-shadow text-slate-900 hover:bg-sky-50 transition relative"
              title="Compare Devices"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {compareIds.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 font-bold text-xs w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono">
                  {compareIds.length}
                </span>
              )}
            </button>

            {/* Wishlist Icon */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => {
                  const catalogEl = document.getElementById("catalog");
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-2.5 bg-white border-2 border-slate-900 rounded-lg pixel-btn-shadow text-slate-900 hover:bg-rose-50 transition"
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlist.length > 0 ? "fill-rose-500 text-rose-500" : ""}`} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white font-bold text-xs w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>

            {/* Cart Trigger */}
            <button
              onClick={() => toggleCart(true)}
              className="flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-3.5 py-2 border-3 border-slate-900 rounded-xl pixel-btn-shadow font-bold text-xs font-silkscreen transition"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">CART</span>
              <span className="bg-slate-900 text-white px-2 py-0.5 rounded-full text-xs font-mono">
                {cartItemCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
