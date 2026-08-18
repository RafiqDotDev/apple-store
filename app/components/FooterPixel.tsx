import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const FooterPixel: React.FC = () => {
  const { setBrandFilter } = useCartStore();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative pt-12 pb-8 bg-[#38BDF8] border-t-4 border-slate-900 overflow-hidden text-slate-900">
      
      {/* Decorative Pixel Trees & Chest Graphic Bar matching Technically Stable Footer */}
      <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center justify-between opacity-80 select-none">
        <div className="flex items-center gap-2 font-pixel text-xl text-emerald-800">
          🌲 🌲 🌲
        </div>
        <div className="font-pixel text-2xl text-amber-500 animate-bounce">
          🎁 📦 🏆
        </div>
        <div className="flex items-center gap-2 font-pixel text-xl text-emerald-800">
          🌲 🌲 🌲
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="bg-white px-4 py-2 border-3 border-slate-900 rounded-xl pixel-btn-shadow inline-block">
            <span className="font-pixel text-xl text-slate-900">
              NEX<span className="text-sky-500">ORA</span>
            </span>
          </div>

          <p className="font-sans text-xs text-slate-900 font-medium leading-relaxed">
            Pakistan's premier 3D mobile store for authentic Apple iPhones, Samsung flagships, and ecosystem accessories.
          </p>

          <div className="space-y-2 text-xs font-silkscreen font-bold">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-900" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-900" />
              <span>support@nexora.pk</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-900" />
              <span>Islamabad • Lahore • Karachi</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-pixel text-sm text-slate-900 uppercase">
            NAVIGATION
          </h4>
          <ul className="space-y-2 font-silkscreen text-xs font-bold text-slate-800">
            {["Apple", "Samsung", "Google", "Nothing", "Accessories"].map((brand) => (
              <li key={brand}>
                <button
                  onClick={() => {
                    setBrandFilter(brand);
                    const el = document.getElementById("catalog");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-slate-950 hover:underline transition"
                >
                  ► {brand} Smartphones
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Trust & Shipping */}
        <div className="space-y-3">
          <h4 className="font-pixel text-sm text-slate-900 uppercase">
            PAKISTAN SERVICE
          </h4>
          <div className="space-y-2 bg-white/80 p-3.5 rounded-xl border-2 border-slate-900 text-xs font-sans">
            <div className="flex items-start gap-2">
              <Truck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-pixel text-[10px]">Nationwide Shipping</strong>
                <p className="text-[11px] text-slate-700">Express delivery to 100+ cities in Pakistan.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-pixel text-[10px]">PTA Verified</strong>
                <p className="text-[11px] text-slate-700">All devices guaranteed official PTA status.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter Signup matching Technically Stable Footer */}
        <div className="space-y-3">
          <h4 className="font-pixel text-sm text-slate-900 uppercase">
            NEWSLETTER
          </h4>
          <p className="font-silkscreen text-xs text-slate-800">
            Get drop alerts on new iPhone releases and price drops!
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-300 border-2 border-slate-900 rounded-xl font-pixel text-xs text-slate-950">
              ✓ SUBSCRIBED TO DROPS!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border-2 border-slate-900 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <button
                type="submit"
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-pixel text-xs border-2 border-slate-950 rounded-xl pixel-btn-shadow transition flex items-center justify-center gap-2"
              >
                SIGN UP <Send className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t-2 border-slate-900/30 flex flex-wrap items-center justify-between gap-4 font-silkscreen text-[11px] text-slate-800 font-bold">
        <span>© 2026 NEXORA PRO STORE. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED WITH RETRO PIXEL PASSION FOR PAKISTAN 🇵🇰</span>
      </div>
    </footer>
  );
};
