import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { SmartImage } from "./SmartImage";

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
    toggleCheckout,
  } = useCartStore();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    const itemsListStr = cartItems
      .map(
        (item) =>
          `• ${item.product.name} (${item.selectedColor}, ${item.selectedStorage}, ${item.selectedPTA}) x${item.quantity} = Rs. ${(
            item.product.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const text = encodeURIComponent(
      `Hi NEXORA! I would like to place an order for the following cart items:\n\n${itemsListStr}\n\n*Total Amount:* Rs. ${cartTotal.toLocaleString()}\n\nPlease confirm availability and payment details for Pakistan delivery.`
    );

    window.open(`https://wa.me/923001234567?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={() => toggleCart(false)}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-4 border-slate-900 pixel-box-shadow-lg flex flex-col justify-between">
          
          {/* Header */}
          <div className="bg-[#1e293b] text-white p-5 border-b-4 border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-sky-400" />
              <h2 className="font-pixel text-base text-white uppercase">
                YOUR CART ({cartItems.length})
              </h2>
            </div>
            <button
              onClick={() => toggleCart(false)}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition border border-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-sky-50">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-white border-3 border-slate-900 rounded-2xl flex items-center justify-center mx-auto text-slate-400 font-pixel text-2xl">
                  🛒
                </div>
                <h3 className="font-pixel text-sm text-slate-900">YOUR CART IS EMPTY</h3>
                <p className="font-silkscreen text-xs text-slate-600">
                  Explore our smartphones and add your favorite device!
                </p>
                <button
                  onClick={() => toggleCart(false)}
                  className="mt-4 px-6 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-pixel text-xs border-2 border-slate-900 rounded-xl pixel-btn-shadow transition"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="pixel-card bg-white p-3.5 flex items-center gap-3 relative"
                >
                  {/* Item Image */}
                  <SmartImage
                    src={item.product.images[0]}
                    alt={item.product.name}
                    category={item.product.category}
                    className="w-16 h-16 object-cover rounded-lg border-2 border-slate-900 shrink-0"
                  />

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-pixel text-xs text-slate-900 truncate">
                      {item.product.name}
                    </h4>

                    <div className="font-silkscreen text-[10px] text-slate-500 space-x-1 my-1">
                      <span>{item.selectedColor}</span> • <span>{item.selectedStorage}</span> • 
                      <span className="text-sky-700 font-bold">{item.selectedPTA}</span>
                    </div>

                    <div className="font-pixel text-xs text-slate-900 font-bold">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-rose-500 hover:text-rose-700 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1 bg-slate-100 border border-slate-900 rounded-lg p-0.5 font-pixel text-xs">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center bg-white rounded text-slate-900 border border-slate-300 hover:bg-slate-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono font-bold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center bg-white rounded text-slate-900 border border-slate-300 hover:bg-slate-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="bg-white border-t-4 border-slate-900 p-5 space-y-4 shadow-lg">
              <div className="space-y-1.5 font-silkscreen text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-mono text-slate-900 font-bold">
                    Rs. {cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Nationwide Express Delivery:</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-slate-900 font-pixel text-sm pt-2 border-t border-slate-200">
                  <span>TOTAL:</span>
                  <span className="text-slate-900 font-bold">
                    Rs. {cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    toggleCart(false);
                    toggleCheckout(true);
                  }}
                  className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-pixel text-xs sm:text-sm border-3 border-slate-900 rounded-xl pixel-btn-shadow transition flex items-center justify-center gap-2 font-bold uppercase tracking-wider"
                >
                  PROCEED TO CHECKOUT <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-pixel text-xs border-3 border-slate-900 rounded-xl pixel-btn-shadow transition flex items-center justify-center gap-2 font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" /> ORDER VIA WHATSAPP
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
