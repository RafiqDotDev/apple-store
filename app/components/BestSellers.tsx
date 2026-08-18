import React from "react";
import { Star, Eye, ShoppingCart, Heart, SlidersHorizontal, Check } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { MOCK_PRODUCTS, type Product } from "../data/products";
import { SmartImage } from "./SmartImage";

export const BestSellers: React.FC = () => {
  const {
    addToCart,
    toggleWishlist,
    wishlist,
    toggleCompareProduct,
    compareIds,
    setActiveDetailProduct,
    selectedBrandFilter,
    setBrandFilter
  } = useCartStore();

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (selectedBrandFilter === "All") return true;
    if (selectedBrandFilter === "Accessories") return product.category === "accessory";
    return product.brand.toLowerCase() === selectedBrandFilter.toLowerCase();
  });

  return (
    <section id="catalog" className="py-10 px-4 max-w-7xl mx-auto">
      
      {/* Section Header - Matching Technically Stable Pixel Heading "BEST SELLING MOUSE MATS" */}
      <div className="text-center mb-8">
        <h2 className="font-pixel text-xl sm:text-3xl text-slate-900 tracking-wider uppercase drop-shadow-sm mb-3">
          BEST SELLING SMARTPHONES
        </h2>
        <p className="font-silkscreen text-xs text-slate-800 bg-white/70 inline-block px-4 py-1 rounded-full border-2 border-slate-900">
          Official PTA Approved • Express Nationwide Shipping
        </p>
      </div>

      {/* Brand Filters Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {["All", "Apple", "Samsung", "Google", "Nothing", "Accessories"].map((brand) => {
          const isActive = selectedBrandFilter === brand;
          return (
            <button
              key={brand}
              onClick={() => setBrandFilter(brand)}
              className={`font-silkscreen text-xs px-4 py-2 rounded-xl border-3 border-slate-900 pixel-btn-shadow transition font-bold ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900 hover:bg-sky-100"
              }`}
            >
              {brand}
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid - Matching White Rounded Bordered Cards in Technically Stable Image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setActiveDetailProduct(product)}
            onAddToCart={() => addToCart(product)}
            isWishlisted={wishlist.includes(product.id)}
            onToggleWishlist={() => toggleWishlist(product.id)}
            isCompared={compareIds.includes(product.id)}
            onToggleCompare={() => toggleCompareProduct(product.id)}
          />
        ))}
      </div>

      {/* Bottom View All Button - Matching Cyan Button in Image */}
      <div className="text-center mt-10">
        <button
          onClick={() => setBrandFilter("All")}
          className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-pixel text-xs sm:text-sm px-8 py-3.5 border-3 border-slate-900 rounded-xl pixel-btn-shadow tracking-wider transition uppercase"
        >
          VIEW ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};

type ProductCardProps = {
  product: Product;
  onQuickView: () => void;
  onAddToCart: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  isCompared: boolean;
  onToggleCompare: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
}) => {
  return (
    <div className="pixel-card group relative flex flex-col justify-between overflow-hidden bg-white p-4 transition-transform duration-200 hover:-translate-y-1">
      
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-silkscreen text-[10px] bg-slate-900 text-amber-300 font-bold px-2.5 py-0.5 rounded border border-slate-900 uppercase">
          {product.badge || product.ptaStatus}
        </span>

        {/* Wishlist & Compare Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleCompare}
            className={`p-1.5 rounded border-2 border-slate-900 transition ${
              isCompared ? "bg-amber-400 text-slate-950" : "bg-sky-100 hover:bg-sky-200 text-slate-700"
            }`}
            title="Compare"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onToggleWishlist}
            className={`p-1.5 rounded border-2 border-slate-900 transition ${
              isWishlisted ? "bg-rose-500 text-white" : "bg-rose-100 hover:bg-rose-200 text-slate-700"
            }`}
            title="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-white" : ""}`} />
          </button>
        </div>
      </div>

      {/* Product Image Frame */}
      <div className="relative w-full aspect-square mb-4 bg-slate-100 rounded-xl border-2 border-slate-900 overflow-hidden flex items-center justify-center p-3">
        <SmartImage
          src={product.images[0]}
          alt={product.name}
          category={product.category}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />

        {/* Quick View Floating Overlay */}
        <button
          onClick={onQuickView}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white hover:bg-slate-900 font-silkscreen text-xs px-3.5 py-1.5 rounded-lg border-2 border-slate-700 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="w-3.5 h-3.5 text-sky-400" /> QUICK VIEW
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Tag */}
          <div className="font-silkscreen text-[10px] text-sky-700 uppercase tracking-wider font-bold">
            {product.brand}
          </div>

          {/* Product Title */}
          <h3
            onClick={onQuickView}
            className="font-pixel text-xs sm:text-sm text-slate-900 line-clamp-1 cursor-pointer hover:text-sky-600 transition"
          >
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 my-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-300"
                }`}
              />
            ))}
            <span className="font-mono text-[11px] font-bold text-slate-600 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Color Swatch Dots matching Technically Stable image */}
          <div className="flex items-center gap-1.5 my-2">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="w-3.5 h-3.5 rounded-full border border-slate-900 shadow-sm"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Pricing & Add Button */}
        <div className="pt-2 border-t-2 border-slate-200 flex items-center justify-between gap-2">
          <div>
            <div className="font-pixel text-xs sm:text-sm text-slate-900 font-bold">
              Rs. {product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="font-mono text-[10px] text-slate-400 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>

          <button
            onClick={onAddToCart}
            className="p-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg border-2 border-slate-900 pixel-btn-shadow transition font-bold"
            title="Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
