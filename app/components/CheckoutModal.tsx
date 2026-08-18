import React, { useState } from "react";
import { X, CheckCircle, CreditCard, Truck, ShieldCheck, MapPin } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, toggleCheckout, cartItems, cartTotal, removeFromCart } = useCartStore();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "Lahore",
    province: "Punjab",
    paymentMethod: "cod",
  });

  const [isOrdered, setIsOrdered] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleFinish = () => {
    // Clear cart
    cartItems.forEach((_, i) => removeFromCart(0));
    setIsOrdered(false);
    toggleCheckout(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border-4 border-slate-900 rounded-3xl pixel-box-shadow-lg overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#1e293b] text-white p-5 border-b-4 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-sky-400" />
            <h2 className="font-pixel text-base text-white uppercase">
              PAKISTAN EXPRESS CHECKOUT
            </h2>
          </div>
          <button
            onClick={() => toggleCheckout(false)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition border border-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-sky-50">
          {isOrdered ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-400 border-3 border-slate-900 rounded-2xl flex items-center justify-center mx-auto text-slate-950 font-pixel text-3xl">
                ✓
              </div>
              <h3 className="font-pixel text-lg text-slate-900">ORDER CONFIRMED!</h3>
              <p className="font-silkscreen text-xs text-slate-700 max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{formData.fullName}</strong>! Your order for <span className="font-bold">Rs. {cartTotal.toLocaleString()}</span> has been dispatched to {formData.city}, Pakistan.
              </p>
              <div className="bg-white p-4 border-2 border-slate-900 rounded-xl text-left font-mono text-xs space-y-1">
                <div>Order ID: #NX-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div>Payment Method: {formData.paymentMethod.toUpperCase()}</div>
                <div>PTA Status: Pre-cleared Official Guarantee</div>
              </div>
              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-slate-900 text-white font-pixel text-xs border-2 border-slate-950 rounded-xl pixel-btn-shadow transition"
              >
                RETURN TO STORE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Saim Chaudhry"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-slate-900 rounded-xl font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1">
                    Mobile Phone (WhatsApp):
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-slate-900 rounded-xl font-sans text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1">
                  Delivery Address:
                </label>
                <input
                  type="text"
                  required
                  placeholder="House #, Street, Sector / Area"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border-2 border-slate-900 rounded-xl font-sans text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1">
                    City in Pakistan:
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border-2 border-slate-900 rounded-xl font-sans text-xs"
                  >
                    {["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Peshawar", "Faisalabad", "Multan", "Quetta"].map(
                      (c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="block font-silkscreen text-xs font-bold text-slate-900 mb-1">
                    Payment Method:
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border-2 border-slate-900 rounded-xl font-sans text-xs font-bold text-slate-900"
                  >
                    <option value="cod">Cash on Delivery (COD)</option>
                    <option value="jazzcash">JazzCash Instant</option>
                    <option value="easypaisa">EasyPaisa</option>
                    <option value="bank">Direct Bank Transfer</option>
                  </select>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 bg-white border-2 border-slate-900 rounded-xl font-silkscreen text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span>Order Subtotal ({cartItems.length} items):</span>
                  <span className="font-mono">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Express Shipping:</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-slate-900 font-pixel text-sm pt-2 border-t border-slate-200 font-bold">
                  <span>PAYABLE AMOUNT:</span>
                  <span>Rs. {cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-pixel text-xs border-3 border-slate-900 rounded-xl pixel-btn-shadow transition font-bold uppercase tracking-wider"
              >
                PLACE ORDER NOW
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
