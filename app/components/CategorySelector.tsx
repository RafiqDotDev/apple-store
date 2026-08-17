import React from 'react';
import { CATEGORIES } from '../data/products';
import { Smartphone, Laptop, Tablet, Watch, Headphones, Cable, Sparkles } from 'lucide-react';

interface CategorySelectorProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Tablet': return <Tablet className="w-5 h-5" />;
      case 'Watch': return <Watch className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      case 'Cable': return <Cable className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-12 px-4 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Explore Categories
          </h3>
          <span className="text-xs text-gray-500 font-light hidden sm:inline">
            Swipe left or right to browse
          </span>
        </div>

        {/* Scrollable Horizontal Pill Cards */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl whitespace-nowrap text-sm font-medium transition-all duration-300 border flex-shrink-0 ${
                  isActive
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                    : 'glass-card text-gray-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-black' : 'text-gray-400'}>
                  {getIcon(cat.icon)}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
