import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Heart, Sparkles, ShieldCheck, Zap, Cpu, Award } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { MOCK_PRODUCTS } from "../data/products";

export const HeroArcade: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { setActiveDetailProduct } = useCartStore();
  const [activeSpec, setActiveSpec] = useState(0);

  const heroProduct = MOCK_PRODUCTS.find((p) => p.id === "iphone-17-pro-max") || MOCK_PRODUCTS[0];

  const specsList = [
    { label: "120Hz ProMotion", icon: Zap, detail: "Super Retina XDR OLED Display" },
    { label: "A19 Pro Bionic", icon: Cpu, detail: "3nm Architecture with 6-Core GPU" },
    { label: "PTA Approved", icon: ShieldCheck, detail: "Official Pakistan Telecommunication Authority" },
    { label: "1 Year Apple Warranty", icon: Award, detail: "Official Manufacturer Coverage" },
  ];

  // Three.js Interactive 3D Phone Stage
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf43f5e, 1.8);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    // Create 3D Phone Body Geometry
    const phoneGroup = new THREE.Group();

    // Main Chassis Body
    const bodyGeo = new THREE.BoxGeometry(2.4, 4.8, 0.35);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      metalness: 0.9,
      roughness: 0.15,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    phoneGroup.add(bodyMesh);

    // Screen Glass Layer
    const screenGeo = new THREE.PlaneGeometry(2.25, 4.6);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x09090b,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.18;
    phoneGroup.add(screenMesh);

    // Screen Glow Border Frame
    const borderGeo = new THREE.PlaneGeometry(2.32, 4.68);
    const borderMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.position.z = 0.175;
    phoneGroup.add(borderMesh);

    // Dynamic Island Notch
    const notchGeo = new THREE.BoxGeometry(0.65, 0.14, 0.05);
    const notchMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const notchMesh = new THREE.Mesh(notchGeo, notchMat);
    notchMesh.position.set(0, 2.05, 0.2);
    phoneGroup.add(notchMesh);

    // Camera Bump Housing (Back)
    const bumpGeo = new THREE.BoxGeometry(1.1, 1.1, 0.15);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const bumpMesh = new THREE.Mesh(bumpGeo, bumpMat);
    bumpMesh.position.set(-0.5, 1.5, -0.2);
    phoneGroup.add(bumpMesh);

    // 3 Camera Lenses
    for (let i = 0; i < 3; i++) {
      const lensGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.1, 32);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.95,
        roughness: 0.05,
      });
      const lensMesh = new THREE.Mesh(lensGeo, lensMat);
      lensMesh.rotation.x = Math.PI / 2;

      const posX = i === 0 ? -0.7 : i === 1 ? -0.3 : -0.7;
      const posY = i === 0 ? 1.7 : i === 1 ? 1.5 : 1.25;

      lensMesh.position.set(posX, posY, -0.25);
      phoneGroup.add(lensMesh);
    }

    // Outer Orbital Particle Ring
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 3.2 + Math.random() * 0.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    scene.add(phoneGroup);

    // Tilt mouse interactivity
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth floating motion
      phoneGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      
      // Target rotation based on mouse + slow continuous spin
      phoneGroup.rotation.y = elapsedTime * 0.4 + mouseX * 0.5;
      phoneGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 + mouseY * 0.3;

      particles.rotation.z = elapsedTime * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto">
      
      {/* Retro Arcade Container matching Technically Stable Hero Board */}
      <div className="bg-[#1C273A] border-4 border-slate-900 rounded-3xl p-6 sm:p-8 pixel-box-shadow-lg relative overflow-hidden text-white">
        
        {/* Pixel Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

        {/* Top Arcade Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-700/60 pb-4 mb-6 relative z-10">
          
          {/* Chapter Banner */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 px-4 py-1.5 rounded-lg border-2 border-slate-900 pixel-box-shadow-sm font-pixel text-xs text-white">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
            <span>NEW CHAPTER UNLOCKED!</span>
          </div>

          {/* Health Bar (3 Pixel Hearts) matching Technically Stable image */}
          <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700 font-silkscreen text-xs text-rose-400">
            <span>HP:</span>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" />
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </div>

        {/* Hero Grid: Left Content + Center 3D Stage + Right Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-block bg-sky-500/20 text-sky-300 font-silkscreen text-xs px-3 py-1 rounded-md border border-sky-400/40">
              FLAGSHIP 2026 EDITION
            </div>
            
            <h1 className="font-pixel text-2xl sm:text-4xl leading-tight text-white tracking-wide">
              iPHONE 17 PRO MAX
            </h1>
            
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the pinnacle of mobile innovation. Grade 5 Titanium chassis, custom 48MP Triple Pro Camera array, and official PTA compliance across Pakistan.
            </p>

            {/* Price Badge */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-pixel text-xl sm:text-2xl text-amber-400">
                Rs. 499,999
              </span>
              <span className="font-mono text-sm text-slate-400 line-through">
                Rs. 539,999
              </span>
              <span className="bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded border border-slate-900">
                SAVE 7%
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setActiveDetailProduct(heroProduct)}
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-pixel text-xs sm:text-sm px-6 py-3.5 border-3 border-slate-900 rounded-xl pixel-btn-shadow transition tracking-wider"
              >
                🎮 SHOP THIS PHONE
              </button>

              <a
                href="#catalog"
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-silkscreen text-xs px-5 py-3 border-3 border-slate-900 rounded-xl pixel-btn-shadow transition font-bold"
              >
                EXPLORE ALL
              </a>
            </div>
          </div>

          {/* Center Column: 3D Interactive Smartphone Viewer */}
          <div className="lg:col-span-4 relative h-[380px] sm:h-[440px] flex items-center justify-center">
            {/* 3D Canvas Mount */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            
            {/* Overlay hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-sky-400/40 text-[11px] font-silkscreen text-sky-300 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>DRAG TO ROTATE 3D</span>
            </div>
          </div>

          {/* Right Column: Spec Highlights Box */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-silkscreen text-xs text-sky-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>FEATURE MATRIX</span>
              <div className="h-0.5 flex-1 bg-sky-500/30" />
            </div>

            {specsList.map((spec, idx) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveSpec(idx)}
                  className={`p-3.5 rounded-xl border-2 transition cursor-pointer ${
                    activeSpec === idx
                      ? "bg-sky-500/20 border-sky-400 text-white pixel-box-shadow-sm"
                      : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg text-sky-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-pixel text-[11px] text-white">{spec.label}</h4>
                      <p className="font-sans text-[11px] text-slate-400">{spec.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
