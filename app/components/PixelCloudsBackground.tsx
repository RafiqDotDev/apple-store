import React from "react";

export const PixelCloudsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Pixel Cloud 1 - High altitude fast layer */}
      <div
        className="absolute top-12 left-0 animate-cloud-layer-1"
        style={{ animationDelay: "0s" }}
      >
        <PixelCloudShape scale={1.2} opacity={0.85} />
      </div>

      <div
        className="absolute top-36 left-0 animate-cloud-layer-1"
        style={{ animationDelay: "-14s" }}
      >
        <PixelCloudShape scale={0.9} opacity={0.7} />
      </div>

      {/* Pixel Cloud 2 - Mid altitude slow layer */}
      <div
        className="absolute top-[480px] left-0 animate-cloud-layer-2"
        style={{ animationDelay: "-5s" }}
      >
        <PixelCloudShape scale={1.4} opacity={0.8} />
      </div>

      <div
        className="absolute top-[720px] left-0 animate-cloud-layer-2"
        style={{ animationDelay: "-25s" }}
      >
        <PixelCloudShape scale={1.0} opacity={0.65} />
      </div>

      {/* Pixel Cloud 3 - Lower altitude layer */}
      <div
        className="absolute top-[1100px] left-0 animate-cloud-layer-3"
        style={{ animationDelay: "-2s" }}
      >
        <PixelCloudShape scale={1.3} opacity={0.75} />
      </div>

      <div
        className="absolute top-[1450px] left-0 animate-cloud-layer-reverse"
        style={{ animationDelay: "-10s" }}
      >
        <PixelCloudShape scale={1.1} opacity={0.6} />
      </div>

      {/* Floating Retro Pixel Stars & Coins in Sky */}
      <div className="absolute top-24 left-[15%] text-amber-300 font-pixel text-xs animate-bounce opacity-70">
        ✨
      </div>
      <div className="absolute top-64 right-[12%] text-amber-400 font-pixel text-sm animate-pulse opacity-80">
        🪙
      </div>
      <div className="absolute top-[800px] left-[8%] text-amber-300 font-pixel text-xs animate-bounce opacity-70" style={{ animationDelay: "1s" }}>
        ⭐
      </div>
      <div className="absolute top-[1300px] right-[20%] text-amber-300 font-pixel text-xs animate-pulse opacity-80" style={{ animationDelay: "1.5s" }}>
        ✨
      </div>
    </div>
  );
};

// SVG Pixel Art Cloud matching Retro Gaming Arcade Clouds
const PixelCloudShape: React.FC<{ scale?: number; opacity?: number }> = ({
  scale = 1,
  opacity = 0.8,
}) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
      className="drop-shadow-[3px_3px_0px_rgba(15,23,42,0.3)]"
    >
      <svg
        width="160"
        height="70"
        viewBox="0 0 160 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark Pixel Shadow/Border Base */}
        <path
          d="M30 40H20V50H10V60H150V50H140V40H130V30H110V20H90V10H60V20H40V30H30V40Z"
          fill="#0F172A"
          fillOpacity="0.25"
        />
        
        {/* Main White Fluffy Pixel Cloud Body */}
        <rect x="20" y="40" width="120" height="20" fill="white" />
        <rect x="30" y="30" width="100" height="10" fill="white" />
        <rect x="40" y="20" width="70" height="10" fill="white" />
        <rect x="60" y="10" width="30" height="10" fill="white" />

        {/* Soft Sky Blue Shading Accent on Cloud Bottom */}
        <rect x="25" y="52" width="110" height="6" fill="#BAE6FD" />
        <rect x="35" y="44" width="20" height="4" fill="#E0F2FE" />
        <rect x="85" y="44" width="25" height="4" fill="#E0F2FE" />
      </svg>
    </div>
  );
};
