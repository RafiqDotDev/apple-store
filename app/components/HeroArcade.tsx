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

  // Ultra-Realistic Three.js 3D iPhone 17 Pro Max Stage
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Studio Lighting setup for Metallic Titanium & Glass Reflections
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainSpot = new THREE.DirectionalLight(0xffffff, 2.2);
    mainSpot.position.set(5, 6, 6);
    scene.add(mainSpot);

    const rimLightBlue = new THREE.DirectionalLight(0x38bdf8, 2.8);
    rimLightBlue.position.set(-6, -4, 3);
    scene.add(rimLightBlue);

    const rimLightWarm = new THREE.DirectionalLight(0xf59e0b, 1.8);
    rimLightWarm.position.set(4, -5, -4);
    scene.add(rimLightWarm);

    // Main 3D Phone Container
    const phoneGroup = new THREE.Group();

    // 1. iPhone 17 Pro Max Natural Titanium Chassis
    const phoneWidth = 2.45;
    const phoneHeight = 5.0;
    const phoneDepth = 0.32;

    const chassisGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0xc2bcb2, // Natural Titanium finish
      metalness: 0.92,
      roughness: 0.18,
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, titaniumMat);
    phoneGroup.add(chassisMesh);

    // 2. Front Ceramic Shield Screen Glass with Canvas Wallpaper Texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Wallpaper Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 1024);
      grad.addColorStop(0, "#09090b");
      grad.addColorStop(0.3, "#0369a1");
      grad.addColorStop(0.7, "#4338ca");
      grad.addColorStop(1, "#09090b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 1024);

      // Lock Screen Clock
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 90px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("9:41", 256, 220);

      // Date
      ctx.font = "600 32px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.fillText("Tuesday, September 15", 256, 130);

      // Lock Screen Widgets Box
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.beginPath();
      ctx.roundRect(80, 270, 352, 90, 20);
      ctx.fill();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 26px sans-serif";
      ctx.fillText("NEXORA 5G • PTA APPROVED", 256, 325);

      // Dynamic Island Pill
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.roundRect(176, 30, 160, 48, 24);
      ctx.fill();

      // Camera Hole in Dynamic Island
      ctx.fillStyle = "#09090b";
      ctx.beginPath();
      ctx.arc(310, 54, 12, 0, Math.PI * 2);
      ctx.fill();

      // Bottom Home Indicator Bar
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.roundRect(180, 980, 152, 10, 5);
      ctx.fill();
    }

    const screenTexture = new THREE.CanvasTexture(canvas);
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.08, phoneHeight - 0.08);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneDepth / 2 + 0.005;
    phoneGroup.add(screenMesh);

    // Screen Black Bezel Frame
    const bezelGeo = new THREE.PlaneGeometry(phoneWidth - 0.02, phoneHeight - 0.02);
    const bezelMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.z = phoneDepth / 2 + 0.002;
    phoneGroup.add(bezelMesh);

    // 3. Back Glass Panel
    const backGlassGeo = new THREE.PlaneGeometry(phoneWidth - 0.02, phoneHeight - 0.02);
    const backGlassMat = new THREE.MeshStandardMaterial({
      color: 0x3f3f46, // Matte Dark Titanium back
      metalness: 0.85,
      roughness: 0.25,
    });
    const backGlassMesh = new THREE.Mesh(backGlassGeo, backGlassMat);
    backGlassMesh.rotation.y = Math.PI;
    backGlassMesh.position.z = -(phoneDepth / 2 + 0.002);
    phoneGroup.add(backGlassMesh);

    // Apple Logo Etching (Back Center)
    const logoCanvas = document.createElement("canvas");
    logoCanvas.width = 256;
    logoCanvas.height = 256;
    const logoCtx = logoCanvas.getContext("2d");
    if (logoCtx) {
      logoCtx.fillStyle = "#ffffff";
      logoCtx.font = "bold 120px sans-serif";
      logoCtx.textAlign = "center";
      logoCtx.textBaseline = "middle";
      logoCtx.fillText("", 128, 128);
    }
    const logoTex = new THREE.CanvasTexture(logoCanvas);
    const logoGeo = new THREE.PlaneGeometry(0.7, 0.7);
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTex,
      transparent: true,
      opacity: 0.4,
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.rotation.y = Math.PI;
    logoMesh.position.set(0, 0, -(phoneDepth / 2 + 0.006));
    phoneGroup.add(logoMesh);

    // 4. Pro Camera Island Bump (Upper Left Back)
    const bumpW = 1.05;
    const bumpH = 1.05;
    const bumpD = 0.12;
    const bumpGeo = new THREE.BoxGeometry(bumpW, bumpH, bumpD);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      metalness: 0.9,
      roughness: 0.1,
    });
    const bumpMesh = new THREE.Mesh(bumpGeo, bumpMat);
    bumpMesh.position.set(-0.52, 1.6, -(phoneDepth / 2 + bumpD / 2));
    phoneGroup.add(bumpMesh);

    // 3 Sapphire Lenses & LiDAR Sensor
    const lensPositions = [
      { x: -0.74, y: 1.82 }, // Top Lens
      { x: -0.32, y: 1.6 },  // Ultra Wide Lens
      { x: -0.74, y: 1.38 }, // Telephoto 5x Lens
    ];

    lensPositions.forEach((pos) => {
      // Outer Metallic Ring
      const ringGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.08, 32);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xd4d4d8,
        metalness: 0.95,
        roughness: 0.05,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.set(pos.x, pos.y, -(phoneDepth / 2 + bumpD + 0.03));
      phoneGroup.add(ringMesh);

      // Inner Lens Sapphire Glass
      const innerGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.09, 32);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0x09090b,
        metalness: 0.98,
        roughness: 0.02,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      innerMesh.rotation.x = Math.PI / 2;
      innerMesh.position.set(pos.x, pos.y, -(phoneDepth / 2 + bumpD + 0.035));
      phoneGroup.add(innerMesh);
    });

    // TrueTone Flash + Rear Mic
    const flashGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const flashMesh = new THREE.Mesh(flashGeo, flashMat);
    flashMesh.rotation.x = Math.PI / 2;
    flashMesh.position.set(-0.32, 1.82, -(phoneDepth / 2 + bumpD + 0.02));
    phoneGroup.add(flashMesh);

    // LiDAR Sensor
    const lidarGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.06, 16);
    const lidarMat = new THREE.MeshBasicMaterial({ color: 0x18181b });
    const lidarMesh = new THREE.Mesh(lidarGeo, lidarMat);
    lidarMesh.rotation.x = Math.PI / 2;
    lidarMesh.position.set(-0.32, 1.38, -(phoneDepth / 2 + bumpD + 0.02));
    phoneGroup.add(lidarMesh);

    // 5. Side Metallic Buttons (Action Button, Volume, Power)
    // Left: Action Button + Volume Buttons
    const buttonMat = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, metalness: 0.95 });
    const actionBtnGeo = new THREE.BoxGeometry(0.04, 0.18, 0.12);
    const actionBtn = new THREE.Mesh(actionBtnGeo, buttonMat);
    actionBtn.position.set(-(phoneWidth / 2 + 0.01), 1.6, 0);
    phoneGroup.add(actionBtn);

    const volUpBtn = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.32, 0.12), buttonMat);
    volUpBtn.position.set(-(phoneWidth / 2 + 0.01), 1.1, 0);
    phoneGroup.add(volUpBtn);

    const volDownBtn = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.32, 0.12), buttonMat);
    volDownBtn.position.set(-(phoneWidth / 2 + 0.01), 0.7, 0);
    phoneGroup.add(volDownBtn);

    // Right: Power Button
    const powerBtn = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 0.12), buttonMat);
    powerBtn.position.set(phoneWidth / 2 + 0.01, 1.0, 0);
    phoneGroup.add(powerBtn);

    // 6. Orbital Particle Ring
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 3.3 + Math.random() * 0.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.09,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    scene.add(phoneGroup);

    // Interactivity: Drag to Rotate & Mouse Tilt
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

      // Gentle Floating Up/Down
      phoneGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // 360 Degree Continuous Rotation + Mouse Interaction
      phoneGroup.rotation.y = elapsedTime * 0.45 + mouseX * 0.6;
      phoneGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.12 + mouseY * 0.35;

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

        {/* Hero Grid: Left Content + Center 3D iPhone 17 Pro Max + Right Specs */}
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

          {/* Center Column: Ultra-Realistic 3D iPhone 17 Pro Max Stage */}
          <div className="lg:col-span-4 relative h-[380px] sm:h-[440px] flex items-center justify-center">
            {/* 3D Canvas Mount */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            
            {/* Overlay hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-400/50 text-[11px] font-silkscreen text-sky-300 flex items-center gap-2 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
              <span>DRAG TO ROTATE 3D iPHONE 17 PRO MAX</span>
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
