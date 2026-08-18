import React from "react";
import { Star, Flame, Sparkles, CheckCircle } from "lucide-react";
import { SmartImage } from "./SmartImage";

export const DungeonReviews: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* Dungeon Castle Pixel Banner matching Technically Stable "REVIEWS" Section */}
      <div className="bg-[#1e293b] border-4 border-slate-950 rounded-3xl p-6 sm:p-10 pixel-box-shadow-lg text-white relative overflow-hidden">
        
        {/* Dungeon Pixel Details: Torches, Shields, Ladders */}
        <div className="flex items-center justify-between border-b-2 border-slate-700 pb-4 mb-8">
          
          {/* Left Torch */}
          <div className="flex items-center gap-2 font-silkscreen text-xs text-amber-400">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
            <span className="hidden sm:inline">CASTLE REVIEWS</span>
          </div>

          {/* Center Pixel Title */}
          <h2 className="font-pixel text-xl sm:text-3xl text-white tracking-widest uppercase">
            REVIEWS 🏰
          </h2>

          {/* Right Torch */}
          <div className="flex items-center gap-2 font-silkscreen text-xs text-amber-400">
            <span className="hidden sm:inline">VERIFIED LORE</span>
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>

        {/* Reviews Featured Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Thumbnail Setup */}
          <div className="md:col-span-4 bg-slate-900 border-3 border-slate-900 rounded-2xl p-4 pixel-btn-shadow">
            <SmartImage
              src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop"
              alt="Setup review"
              category="setup"
              className="w-full h-48 object-cover rounded-xl border-2 border-slate-700 mb-3"
            />
            <div className="flex items-center justify-between">
              <span className="font-pixel text-xs text-sky-400">@usman_tech</span>
              <span className="font-silkscreen text-[10px] bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
                VERIFIED BUYER
              </span>
            </div>
          </div>

          {/* Right Customer Quote Card matching Technically Stable "FANTASTIC!" Review Box */}
          <div className="md:col-span-8 bg-[#0f172a] border-4 border-sky-500/80 rounded-2xl p-6 sm:p-8 pixel-btn-shadow space-y-4 relative">
            
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-amber-400 text-lg">
              ★★★★★
            </div>

            {/* Headline */}
            <h3 className="font-pixel text-lg sm:text-xl text-amber-300 uppercase tracking-wider">
              "FANTASTIC! BEST IPHONE STORE IN PAKISTAN."
            </h3>

            {/* Quote Body */}
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              "This shop does not look like any normal mobile retailer. Ordered the iPhone 17 Pro Max in Natural Titanium. Received pre-verified PTA approval documentation and full official warranty. The 3D retro arcade aesthetic is so refreshing and delivery to Karachi was lightning fast!"
            </p>

            {/* Author */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-silkscreen text-sky-400">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Usman Raza — Karachi, Pakistan
              </span>
              <span className="text-slate-400">Verified Purchase • iPhone 17 Pro Max</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
