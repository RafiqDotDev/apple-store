import React from "react";

export const PixelCloudsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Real Cloud 1 - High altitude fast layer */}
      <div
        className="absolute top-10 left-0 animate-cloud-layer-1"
        style={{ animationDelay: "0s" }}
      >
        <RealFluffyCloud scale={1.3} opacity={0.9} variant={1} />
      </div>

      <div
        className="absolute top-32 left-0 animate-cloud-layer-1"
        style={{ animationDelay: "-14s" }}
      >
        <RealFluffyCloud scale={0.95} opacity={0.75} variant={2} />
      </div>

      {/* Real Cloud 2 - Mid altitude slow layer */}
      <div
        className="absolute top-[420px] left-0 animate-cloud-layer-2"
        style={{ animationDelay: "-6s" }}
      >
        <RealFluffyCloud scale={1.5} opacity={0.85} variant={3} />
      </div>

      <div
        className="absolute top-[680px] left-0 animate-cloud-layer-2"
        style={{ animationDelay: "-22s" }}
      >
        <RealFluffyCloud scale={1.1} opacity={0.7} variant={1} />
      </div>

      {/* Real Cloud 3 - Lower altitude layer */}
      <div
        className="absolute top-[1050px] left-0 animate-cloud-layer-3"
        style={{ animationDelay: "-3s" }}
      >
        <RealFluffyCloud scale={1.4} opacity={0.8} variant={2} />
      </div>

      <div
        className="absolute top-[1400px] left-0 animate-cloud-layer-reverse"
        style={{ animationDelay: "-12s" }}
      >
        <RealFluffyCloud scale={1.2} opacity={0.65} variant={3} />
      </div>

      {/* Floating Retro Stars & Sparkles in Sky */}
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

// Real Volumetric Fluffy Cloud Renderer with SVG gradients and soft blur
const RealFluffyCloud: React.FC<{
  scale?: number;
  opacity?: number;
  variant?: 1 | 2 | 3;
}> = ({ scale = 1, opacity = 0.85, variant = 1 }) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
      className="drop-shadow-[0_12px_24px_rgba(15,23,42,0.15)] transition-transform duration-300"
    >
      {variant === 1 && (
        <svg
          width="320"
          height="160"
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#F0F9FF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.85" />
            </linearGradient>
            <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
          <g filter="url(#blur1)">
            <ellipse cx="160" cy="115" rx="130" ry="35" fill="url(#cloudGrad1)" />
            <circle cx="95" cy="95" r="48" fill="url(#cloudGrad1)" />
            <circle cx="155" cy="70" r="60" fill="url(#cloudGrad1)" />
            <circle cx="215" cy="85" r="50" fill="url(#cloudGrad1)" />
            <circle cx="125" cy="60" r="38" fill="url(#cloudGrad1)" />
          </g>
        </svg>
      )}

      {variant === 2 && (
        <svg
          width="380"
          height="170"
          viewBox="0 0 380 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.8" />
            </linearGradient>
            <filter id="blur2" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <g filter="url(#blur2)">
            <ellipse cx="190" cy="120" rx="160" ry="38" fill="url(#cloudGrad2)" />
            <circle cx="110" cy="100" r="54" fill="url(#cloudGrad2)" />
            <circle cx="180" cy="75" r="65" fill="url(#cloudGrad2)" />
            <circle cx="250" cy="90" r="58" fill="url(#cloudGrad2)" />
            <circle cx="300" cy="110" r="42" fill="url(#cloudGrad2)" />
          </g>
        </svg>
      )}

      {variant === 3 && (
        <svg
          width="290"
          height="150"
          viewBox="0 0 290 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F0F9FF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.85" />
            </linearGradient>
            <filter id="blur3" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          <g filter="url(#blur3)">
            <ellipse cx="145" cy="105" rx="115" ry="32" fill="url(#cloudGrad3)" />
            <circle cx="80" cy="85" r="42" fill="url(#cloudGrad3)" />
            <circle cx="140" cy="60" r="54" fill="url(#cloudGrad3)" />
            <circle cx="195" cy="75" r="45" fill="url(#cloudGrad3)" />
          </g>
        </svg>
      )}
    </div>
  );
};
