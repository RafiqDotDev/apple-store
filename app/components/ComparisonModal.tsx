import React from "react";
import { X, SlidersHorizontal, Check, Trash2, ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { MOCK_PRODUCTS } from "../data/products";
import { SmartImage } from "./SmartImage";

export const ComparisonModal: React.FC = () => {
  const { isCompareOpen, toggleCompare, compareIds, toggleCompareProduct, addToCart } = useCartStore();

  if (!isCompareOpen) return null;

  const comparedProducts = MOCK_PRODUCTS.filter((p) => compareIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border-4 border-slate-900 rounded-3xl pixel-box-shadow-lg overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#1e293b] text-white p-5 border-b-4 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-amber-400" />
            <h2 className="font-pixel text-base text-white uppercase">
              SMARTPHONE SPEC COMPARISON ({comparedProducts.length}/3)
            </h2>
          </div>
          <button
            onClick={() => toggleCompare(false)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition border border-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Content */}
        <div className="p-6 bg-sky-50 overflow-x-auto">
          {comparedProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="font-pixel text-sm text-slate-900">NO DEVICES SELECTED FOR COMPARISON</p>
              <p className="font-silkscreen text-xs text-slate-600">
                Click the compare icon (⚙) on product cards to compare specs side-by-side!
              </p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr>
                  <th className="p-3 font-silkscreen text-xs text-slate-900 border-b-2 border-slate-900 w-1/4">
                    SPECIFICATION
                  </th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-3 border-b-2 border-slate-900 text-center w-1/4">
                      <div className="space-y-2">
                        <SmartImage
                          src={p.images[0]}
                          alt={p.name}
                          category={p.category}
                          className="w-20 h-20 object-cover mx-auto rounded-lg border-2 border-slate-900"
                        />
                        <h4 className="font-pixel text-xs text-slate-900 truncate">{p.name}</h4>
                        <div className="font-pixel text-xs text-amber-600 font-bold">
                          Rs. {p.price.toLocaleString()}
                        </div>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => addToCart(p)}
                            className="px-2.5 py-1 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded font-silkscreen text-[10px] font-bold border border-slate-900"
                          >
                            ADD TO CART
                          </button>
                          <button
                            onClick={() => toggleCompareProduct(p.id)}
                            className="p-1 bg-rose-100 text-rose-600 rounded border border-rose-300"
                            title="Remove from compare"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">Brand</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center font-bold text-slate-800">
                      {p.brand}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">PTA Status</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center font-bold text-sky-700 font-silkscreen">
                      {p.ptaStatus}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">Display</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-slate-700">
                      {p.fullSpecs.Display || p.shortSpecs[0]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">Processor</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-slate-700">
                      {p.fullSpecs.Processor || p.shortSpecs[1]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">Camera System</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-slate-700">
                      {p.fullSpecs.Camera || p.shortSpecs[2]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-silkscreen font-bold text-slate-900 bg-white/60">Warranty</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-emerald-700 font-bold">
                      {p.warranty}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
