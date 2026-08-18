import type { Route } from "./+types/home";
import React from "react";

// Components
import { Header } from "../components/Header";
import { HeroArcade } from "../components/HeroArcade";
import { BestSellers } from "../components/BestSellers";
import { CustomerSetups } from "../components/CustomerSetups";
import { AccessoriesPromo } from "../components/AccessoriesPromo";
import { OtherStuffsBanner } from "../components/OtherStuffsBanner";
import { DungeonReviews } from "../components/DungeonReviews";
import { FooterPixel } from "../components/FooterPixel";
import { PixelCloudsBackground } from "../components/PixelCloudsBackground";

// Modals & Overlays
import { DiscountModal } from "../components/DiscountModal";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { CartDrawer } from "../components/CartDrawer";
import { ComparisonModal } from "../components/ComparisonModal";
import { CheckoutModal } from "../components/CheckoutModal";
import { SearchModal } from "../components/SearchModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NEXORA | Premium 3D Apple & Mobile Store Pakistan" },
    {
      name: "description",
      content:
        "Pakistan's premier 3D smartphone retailer featuring authentic iPhones, Samsung Galaxy flagships, PTA pre-cleared devices, official warranty, and instant nationwide express delivery.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#59BFFF] text-slate-900 selection:bg-slate-900 selection:text-white font-sans relative">
      
      {/* Animated Pixel Clouds Running Backdrop */}
      <PixelCloudsBackground />

      {/* Main Page Layout */}
      <div className="relative z-10 space-y-4">
        <Header />
        
        <main className="space-y-4">
          <HeroArcade />
          <BestSellers />
          <CustomerSetups />
          <AccessoriesPromo />
          <OtherStuffsBanner />
          <DungeonReviews />
        </main>

        <FooterPixel />
      </div>

      {/* Interactive Overlays & Modals */}
      <DiscountModal />
      <ProductDetailModal />
      <CartDrawer />
      <ComparisonModal />
      <CheckoutModal />
      <SearchModal />
    </div>
  );
}
