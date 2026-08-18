import React, { useState, useEffect } from "react";
import { X, Star, ShoppingCart, MessageSquare, ShieldCheck, Check, Sparkles } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import type { PTAStatus } from "../data/products";
import { SmartImage } from "./SmartImage";

export const ProductDetailModal: React.FC = () => {
  const { activeDetailProduct, setActiveDetailProduct, addToCart } = useCartStore();

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("Default");
  const [selectedStorage, setSelectedStorage] = useState("Standard");
  const [selectedPTA, setSelectedPTA] = useState<PTAStatus>("PTA Approved");

  useEffect(() => {
    if (activeDetailProduct) {
      setSelectedImage(activeDetailProduct.images[0] || "");
      setSelectedColor(activeDetailProduct.colors[0]?.name || "Default");
      setSelectedStorage(activeDetailProduct.storageOptions[0] || "Standard");
      setSelectedPTA(activeDetailProduct.ptaStatus);
    }
  }, [activeDetailProduct]);

  if (!activeDetailProduct) return null;

  const product = activeDetailProduct;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hi NEXORA! I want to inquire/order:\n- Product: ${product.name}\n- Variant: ${selectedColor} / ${selectedStorage}\n- PTA Status: ${selectedPTA}\n- Price: Rs. ${product.price.toLocaleString()}\nIs this item available for delivery in Pakistan?`
    );
    window.open(`https://wa.me/923001234567?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border-4 border-slate-900 rounded-3xl pixel-box-shadow-lg overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveDetailProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition border-2 border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Bar */}
        <div className="bg-[#1e293b] text-white px-6 py-4 border-b-4 border-slate-900 flex items-center gap-3">
          <span className="font-pixel text-xs bg-amber-400 text-slate-950 px-3 py-1 rounded border border-slate-900 font-bold uppercase">
            {product.brand}
          </span>
          <h2 className="font-pixel text-lg sm:text-xl text-white truncate">
            {product.name}
          </h2>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8 bg-sky-50">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative w-full h-80 bg-white border-3 border-slate-900 rounded-2xl overflow-hidden p-4 flex items-center justify-center pixel-box-shadow-sm">
              <SmartImage
                src={selectedImage || product.images[0]}
                alt={product.name}
                category={product.category}
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute top-3 left-3 bg-slate-900 text-amber-300 font-pixel text-[10px] px-2.5 py-1 rounded border border-slate-700">
                100% AUTHENTIC
              </span>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 bg-white rounded-xl border-2 overflow-hidden p-1 transition ${
                      selectedImage === img
                        ? "border-sky-500 ring-2 ring-sky-300"
                        : "border-slate-900 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <SmartImage src={img} alt="thumb" category={product.category} className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            )}

            {/* Warranty & PTA Badge Box */}
            <div className="p-4 bg-white border-2 border-slate-900 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-silkscreen text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>WARRANTY & COMPLIANCE</span>
              </div>
              <p className="font-sans text-xs text-slate-600">
                {product.warranty} • Official PTA Status pre-cleared for Pakistani cellular networks.
              </p>
            </div>
          </div>

          {/* Right Column: Configuration & Purchase */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Title & Price */}
            <div>
              <div className="flex items-center gap-2 text-amber-500 font-bold text-xs mb-1">
                <span>★★★★★</span>
                <span className="font-mono text-slate-600">({product.reviewCount} customer reviews)</span>
              </div>

              <h1 className="font-pixel text-xl sm:text-2xl text-slate-900">
                {product.name}
              </h1>

              <p className="font-sans text-xs text-slate-600 mt-1">
                {product.tagline}
              </p>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-pixel text-xl sm:text-2xl text-slate-900">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-sm text-slate-400 line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div>
                <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-2">
                  SELECT COLOR: <span className="text-sky-700">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 font-silkscreen text-xs transition ${
                        selectedColor === c.name
                          ? "bg-slate-900 text-white border-slate-900 pixel-box-shadow-sm"
                          : "bg-white text-slate-800 border-slate-300 hover:border-slate-900"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-900"
                        style={{ backgroundColor: c.hex }}
                      />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selector */}
            {product.storageOptions.length > 0 && (
              <div>
                <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-2">
                  STORAGE CAPACITY:
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {product.storageOptions.map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStorage(st)}
                      className={`px-4 py-2 rounded-xl border-2 font-pixel text-xs transition ${
                        selectedStorage === st
                          ? "bg-sky-500 text-slate-950 border-slate-900 pixel-box-shadow-sm"
                          : "bg-white text-slate-800 border-slate-300 hover:border-slate-900"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PTA Status Selector */}
            <div>
              <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-2">
                PAKISTAN PTA STATUS:
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {(["PTA Approved", "Non-PTA", "VIP PTA"] as PTAStatus[]).map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedPTA(status)}
                    className={`px-3 py-1.5 rounded-xl border-2 font-silkscreen text-xs transition ${
                      selectedPTA === status
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-900"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  addToCart(product, selectedColor, selectedStorage, selectedPTA);
                  setActiveDetailProduct(null);
                }}
                className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-pixel text-xs sm:text-sm border-3 border-slate-900 rounded-xl pixel-btn-shadow transition flex items-center justify-center gap-2 uppercase tracking-wider font-bold"
              >
                <ShoppingCart className="w-5 h-5" /> ADD TO CART
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-pixel text-xs sm:text-sm border-3 border-slate-900 rounded-xl pixel-btn-shadow transition flex items-center justify-center gap-2 uppercase tracking-wider font-bold"
              >
                <MessageSquare className="w-5 h-5" /> ORDER ON WHATSAPP
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
