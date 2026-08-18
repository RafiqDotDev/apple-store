import { useState, useEffect } from "react";
import type { Product, PTAStatus } from "../data/products";

export type CartItem = {
  product: Product;
  selectedColor: string;
  selectedStorage: string;
  selectedPTA: PTAStatus;
  quantity: number;
};

// Simple reactive state store for React Router
type StoreListener = () => void;

let cartItems: CartItem[] = [];
let wishlistProductIds: string[] = [];
let compareProductIds: string[] = ["iphone-17-pro-max", "galaxy-s26-ultra"];
let isCartOpen = false;
let isSearchOpen = false;
let isCompareOpen = false;
let isCheckoutOpen = false;
let isDiscountModalOpen = false;
let activeDetailProduct: Product | null = null;
let searchQuery = "";
let selectedBrandFilter = "All";

const listeners = new Set<StoreListener>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export const cartStore = {
  subscribe(listener: StoreListener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  getCartItems() {
    return cartItems;
  },

  getWishlist() {
    return wishlistProductIds;
  },

  getCompareIds() {
    return compareProductIds;
  },

  isCartOpen() {
    return isCartOpen;
  },

  isSearchOpen() {
    return isSearchOpen;
  },

  isCompareOpen() {
    return isCompareOpen;
  },

  isCheckoutOpen() {
    return isCheckoutOpen;
  },

  isDiscountModalOpen() {
    return isDiscountModalOpen;
  },

  getActiveDetailProduct() {
    return activeDetailProduct;
  },

  getSearchQuery() {
    return searchQuery;
  },

  getSelectedBrandFilter() {
    return selectedBrandFilter;
  },

  setBrandFilter(brand: string) {
    selectedBrandFilter = brand;
    emitChange();
  },

  setSearchQuery(query: string) {
    searchQuery = query;
    emitChange();
  },

  toggleCart(open?: boolean) {
    isCartOpen = open !== undefined ? open : !isCartOpen;
    emitChange();
  },

  toggleSearch(open?: boolean) {
    isSearchOpen = open !== undefined ? open : !isSearchOpen;
    emitChange();
  },

  toggleCompare(open?: boolean) {
    isCompareOpen = open !== undefined ? open : !isCompareOpen;
    emitChange();
  },

  toggleCheckout(open?: boolean) {
    isCheckoutOpen = open !== undefined ? open : !isCheckoutOpen;
    emitChange();
  },

  toggleDiscountModal(open?: boolean) {
    isDiscountModalOpen = open !== undefined ? open : !isDiscountModalOpen;
    emitChange();
  },

  setActiveDetailProduct(product: Product | null) {
    activeDetailProduct = product;
    emitChange();
  },

  addToCart(product: Product, color?: string, storage?: string, pta?: PTAStatus) {
    const selectedColor = color || (product.colors[0]?.name ?? "Default");
    const selectedStorage = storage || (product.storageOptions[0] ?? "Standard");
    const selectedPTA = pta || product.ptaStatus;

    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedStorage === selectedStorage &&
        item.selectedPTA === selectedPTA
    );

    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += 1;
    } else {
      cartItems.push({
        product,
        selectedColor,
        selectedStorage,
        selectedPTA,
        quantity: 1,
      });
    }

    isCartOpen = true;
    emitChange();
  },

  updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      cartItems.splice(index, 1);
    } else {
      cartItems[index].quantity = quantity;
    }
    emitChange();
  },

  removeFromCart(index: number) {
    cartItems.splice(index, 1);
    emitChange();
  },

  toggleWishlist(productId: string) {
    if (wishlistProductIds.includes(productId)) {
      wishlistProductIds = wishlistProductIds.filter((id) => id !== productId);
    } else {
      wishlistProductIds.push(productId);
    }
    emitChange();
  },

  toggleCompareProduct(productId: string) {
    if (compareProductIds.includes(productId)) {
      compareProductIds = compareProductIds.filter((id) => id !== productId);
    } else {
      if (compareProductIds.length >= 3) {
        compareProductIds.shift(); // keep max 3
      }
      compareProductIds.push(productId);
    }
    emitChange();
  },

  getCartTotal() {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  },

  getCartItemCount() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  },
};

export function useCartStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    return cartStore.subscribe(() => setTick((t) => t + 1));
  }, []);

  return {
    cartItems: cartStore.getCartItems(),
    wishlist: cartStore.getWishlist(),
    compareIds: cartStore.getCompareIds(),
    isCartOpen: cartStore.isCartOpen(),
    isSearchOpen: cartStore.isSearchOpen(),
    isCompareOpen: cartStore.isCompareOpen(),
    isCheckoutOpen: cartStore.isCheckoutOpen(),
    isDiscountModalOpen: cartStore.isDiscountModalOpen(),
    activeDetailProduct: cartStore.getActiveDetailProduct(),
    searchQuery: cartStore.getSearchQuery(),
    selectedBrandFilter: cartStore.getSelectedBrandFilter(),
    cartTotal: cartStore.getCartTotal(),
    cartItemCount: cartStore.getCartItemCount(),
    toggleCart: cartStore.toggleCart,
    toggleSearch: cartStore.toggleSearch,
    toggleCompare: cartStore.toggleCompare,
    toggleCheckout: cartStore.toggleCheckout,
    toggleDiscountModal: cartStore.toggleDiscountModal,
    setActiveDetailProduct: cartStore.setActiveDetailProduct,
    addToCart: cartStore.addToCart,
    updateQuantity: cartStore.updateQuantity,
    removeFromCart: cartStore.removeFromCart,
    toggleWishlist: cartStore.toggleWishlist,
    toggleCompareProduct: cartStore.toggleCompareProduct,
    setSearchQuery: cartStore.setSearchQuery,
    setBrandFilter: cartStore.setBrandFilter,
  };
}
