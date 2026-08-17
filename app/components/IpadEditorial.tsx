import React from 'react';
import type { Product } from '../data/products';
import { ArrowRight, Edit3, Layers } from 'lucide-react';

interface IpadEditorialProps {
  ipadProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export const IpadEditorial: React.FC<IpadEditorialProps> = ({ ipadProduct, onSelectProduct }) => {
  return (
    <section id="ipad" className="py-24 px-4 bg-[#F7F7F5] text-black relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block">
              ULTRA RETINA XDR
            </span>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight">
              iPad. <br />
              <span className="text-gray-600 font-light">Your ideas, amplified.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
              Impossible thinness meets radical Tandem OLED display technology. Designed to bring digital art, high-speed 3D rendering, and effortless note-taking to life.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-black/5">
                  <Layers className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">5.1mm Ultra Thin</h4>
                  <p className="text-xs text-gray-600">Apple’s thinnest hardware engineering marvel ever.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-black/5">
                  <Edit3 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Apple Pencil Pro Ready</h4>
                  <p className="text-xs text-gray-600">Squeeze sensors, haptic engine, and barrel roll precision.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectProduct(ipadProduct)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors shadow-xl"
              >
                <span>Explore iPad Pro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="lg:col-span-7 cursor-pointer" onClick={() => onSelectProduct(ipadProduct)}>
            <div className="relative p-4 sm:p-8 bg-white rounded-3xl shadow-xl border border-black/5 hover:shadow-2xl transition-shadow duration-500">
              <img
                src={ipadProduct.mainImage}
                alt="iPad Pro Ultra"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
