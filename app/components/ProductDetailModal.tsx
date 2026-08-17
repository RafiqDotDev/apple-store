import React, { useState } from 'react';
import type { Product, ColorOption, StorageOption } from '../data/products';
import { X, Check, Star, ShieldCheck, Truck, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: ColorOption, selectedStorage?: StorageOption, calculatedPrice?: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    product.colors[0] || { name: 'Standard', hex: '#8E8E93' }
  );

  const [selectedStorage, setSelectedStorage] = useState<StorageOption | undefined>(
    product.storageOptions ? product.storageOptions[0] : undefined
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);

  // Dynamic calculated price based on storage tier
  const calculatedPrice = product.price + (selectedStorage?.extraPrice || 0);
  const formattedCalculatedPrice = `$${calculatedPrice.toLocaleString()}`;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedStorage, calculatedPrice);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-0 sm:p-4 animate-fade-in-up">
      
      <div className="relative w-full max-w-4xl min-h-screen sm:min-h-0 bg-[#0B0B0C] border border-white/10 sm:rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
          aria-label="Close detail view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[85vh] sm:max-h-[80vh] no-scrollbar">
          
          {/* Header info */}
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light mt-1">
              {product.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery View */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                <img
                  src={product.gallery[activeImageIndex] || product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                        activeImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Configurator */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Price & Rating */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {formattedCalculatedPrice}
                  </span>
                  <span className="text-xs text-gray-400 block font-light">
                    or ${(calculatedPrice / 24).toFixed(2)}/mo. for 24 mo.
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Color Configuration */}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                  Finish — <span className="text-white">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, idx) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-white/15 border-white text-white ring-2 ring-white/20'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/20 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Storage Configuration */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                    Storage Capacity
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {product.storageOptions.map((storage, idx) => {
                      const isSelected = selectedStorage?.size === storage.size;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedStorage(storage)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-white text-black border-white shadow-lg'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-sm">{storage.size}</div>
                          <div className={`text-[11px] ${isSelected ? 'text-gray-700' : 'text-gray-400'}`}>
                            {storage.extraPrice > 0 ? `+$${storage.extraPrice}` : 'Included'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Specs Accordion */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                <button
                  onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                  className="w-full p-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white"
                >
                  <span>Technical Specifications</span>
                  {isSpecsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {isSpecsOpen && (
                  <div className="p-4 pt-0 space-y-2 border-t border-white/5">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between text-xs py-1 border-b border-white/5 last:border-0">
                        <span className="text-gray-400 font-light">{spec.label}</span>
                        <span className="text-white font-medium text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Sticky Purchase Footer Bar */}
        <div className="p-4 bg-[#141416] border-t border-white/10 flex items-center justify-between gap-4 z-20">
          <div>
            <div className="text-xs text-gray-400 line-clamp-1">{product.name} • {selectedColor.name}</div>
            <div className="text-lg font-bold text-white">{formattedCalculatedPrice}</div>
          </div>

          <button
            onClick={handleAdd}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag</span>
          </button>
        </div>

      </div>

    </div>
  );
};
