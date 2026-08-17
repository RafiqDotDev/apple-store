import React, { useState } from 'react';
import { Product, ColorOption, StorageOption } from '../data/products';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface CartItem {
  id: string; // unique item id
  product: Product;
  selectedColor: ColorOption;
  selectedStorage?: StorageOption;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onTriggerToast: (msg: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onTriggerToast,
}) => {
  if (!isOpen) return null;

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free white-glove express delivery
  const total = subtotal + shipping;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
      setOrderComplete(false);
      setIsCheckingOut(false);
      onClose();
      onTriggerToast('Order placed successfully! Official invoice sent to your email.');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex justify-end animate-fade-in-up">
      
      <div className="w-full max-w-md bg-[#0B0B0C] border-l border-white/10 h-full flex flex-col justify-between text-white p-6 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold tracking-tight">Shopping Bag</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 font-semibold">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
            <h4 className="text-2xl font-bold text-white">Order Confirmed!</h4>
            <p className="text-sm text-gray-400 font-light">
              Thank you for choosing AURA Luxe Boutique. Your hardware is being prepared for priority white-glove shipping.
            </p>
          </div>
        ) : isCheckingOut ? (
          <form onSubmit={handleCheckoutSubmit} className="flex-1 overflow-y-auto py-6 space-y-4 no-scrollbar">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Express Checkout
              </h4>
              <button
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="text-xs text-blue-400 hover:underline"
              >
                ← Back to Bag
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Rafiq"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  placeholder="Street, City, Pakistan"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Payment Method</label>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1">
                  <div className="font-semibold text-white">Apple Pay / Credit Card / Cash on Delivery</div>
                  <div>256-Bit SSL Encrypted Transaction</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors shadow-lg"
              >
                Place Order — ${total.toLocaleString()}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex-1 overflow-y-auto py-6 space-y-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center text-gray-500 font-light space-y-3">
                <p className="text-lg">Your bag is empty.</p>
                <p className="text-xs text-gray-600">Discover iconic products in our collection.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4"
                >
                  <img
                    src={item.product.mainImage}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl bg-white/5"
                  />

                  <div className="flex-1">
                    <h5 className="font-bold text-white text-sm">{item.product.name}</h5>
                    <div className="text-xs text-gray-400 font-light">
                      {item.selectedColor.name} {item.selectedStorage ? `• ${item.selectedStorage.size}` : ''}
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">
                      ${item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-gray-300 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-gray-300 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer Summary */}
        {!isCheckingOut && !orderComplete && cartItems.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Express White-Glove Delivery</span>
                <span className="text-emerald-400 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/5">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Continue to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
