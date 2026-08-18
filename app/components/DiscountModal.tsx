import React, { useState } from "react";
import { X, Sparkles, Gift } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const DiscountModal: React.FC = () => {
  const { isDiscountModalOpen, toggleDiscountModal } = useCartStore();
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  if (!isDiscountModalOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setUnlocked(true);
      setTimeout(() => {
        toggleDiscountModal(false);
        setUnlocked(false);
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border-4 border-slate-900 rounded-2xl pixel-box-shadow-lg overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => toggleDiscountModal(false)}
          className="absolute top-3 right-3 z-10 p-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Art - Matching Technically Stable Duck/Arcade Banner */}
        <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 p-6 text-slate-900 border-b-4 border-slate-900 relative overflow-hidden">
          <div className="absolute top-2 right-8 opacity-20 text-6xl select-none font-pixel">
            🎮
          </div>
          <div className="flex items-center gap-2 font-pixel text-xs bg-amber-300 text-slate-950 px-3 py-1 rounded-full w-max border-2 border-slate-900 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> SPECIAL UNLOCK OFFER
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-slate-900 leading-tight">
            Get 10% off your first phone order!
          </h2>
          <p className="font-silkscreen text-xs text-slate-800 mt-1">
            Sign up to unlock exclusive discounts & PTA warranty alerts.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 bg-sky-50">
          {unlocked ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-400 border-3 border-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-950 font-pixel text-2xl">
                🎉
              </div>
              <h3 className="font-pixel text-lg text-slate-900">PROMO CODE UNLOCKED!</h3>
              <p className="font-silkscreen text-xs text-emerald-700 mt-1 bg-emerald-100 p-2 rounded-lg border border-emerald-300">
                Use code <span className="font-mono font-bold text-slate-900">NEXORA10</span> at checkout!
              </p>
            </div>
          ) : (
            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1.5">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email (e.g. saim@gmail.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-3 border-slate-900 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-red-500 hover:bg-red-600 text-white font-pixel text-xs sm:text-sm border-3 border-slate-900 rounded-xl pixel-btn-shadow transition uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4" /> UNLOCK OFFER
              </button>

              <button
                type="button"
                onClick={() => toggleDiscountModal(false)}
                className="w-full py-2 bg-sky-200 hover:bg-sky-300 text-slate-800 font-silkscreen text-xs rounded-lg transition text-center border border-sky-300"
              >
                No thanks, I'll pay full price
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
