"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.z = 6.8;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting: Ethereal amethyst, cyan glint, and soft white specular
      const ambientLight = new THREE.AmbientLight(0xf4efff, 1.2);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
      mainLight.position.set(4, 5, 4);
      scene.add(mainLight);

      const purpleGlow = new THREE.PointLight(0x9b6be8, 3.5, 12);
      purpleGlow.position.set(-3, -2, 2);
      scene.add(purpleGlow);

      const aquaGlow = new THREE.PointLight(0x38bdf8, 2.0, 10);
      aquaGlow.position.set(3, -3, 3);
      scene.add(aquaGlow);

      const goldGlow = new THREE.PointLight(0xfde047, 1.5, 8);
      goldGlow.position.set(0, 4, 2);
      scene.add(goldGlow);

      // Root Group for gem + orbital filigree rings
      const visualGroup = new THREE.Group();
      scene.add(visualGroup);

      // 1. Faceted Amethyst Gem (Faceted Icosahedron / Jewel cut)
      const gemGeometry = new THREE.IcosahedronGeometry(1.65, 0);
      const gemMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x9b6be8,
        emissive: 0x241442,
        roughness: 0.12,
        metalness: 0.15,
        transmission: 0.55,
        ior: 1.6,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        flatShading: true,
      });
      const gemMesh = new THREE.Mesh(gemGeometry, gemMaterial);
      visualGroup.add(gemMesh);

      // 2. Silver Wireframe Filigree Accent on Gem
      const wireframeGeometry = new THREE.WireframeGeometry(gemGeometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.35,
        linewidth: 1,
      });
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      gemMesh.add(wireframe);

      // 3. Inner Core Radiant Gem (brighter refracted core)
      const innerCoreGeometry = new THREE.OctahedronGeometry(0.9, 0);
      const innerCoreMaterial = new THREE.MeshStandardMaterial({
        color: 0xe0cef8,
        emissive: 0x8247e5,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
        flatShading: true,
      });
      const innerCore = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
      gemMesh.add(innerCore);

      // 4. Silver Orbital Rings (Filigree celestial halo)
      const ring1Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xd8dee9,
        metalness: 0.9,
        roughness: 0.2,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ringMaterial);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      visualGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
      const ring2 = new THREE.Mesh(ring2Geo, ringMaterial);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = Math.PI / 4;
      visualGroup.add(ring2);

      // 5. Floating Star & Crystal Particles
      const particleCount = 80;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = 2.4 + Math.random() * 2.8;

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        scales[i] = Math.random() * 0.05 + 0.02;
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const particleMat = new THREE.PointsMaterial({
        color: 0xfbf9ff,
        size: 0.06,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      visualGroup.add(particles);

      // Mouse Parallax tracking
      let targetRotX = 0;
      let targetRotY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX = x;
        mouseY = y;
        targetRotY = x * 0.9;
        targetRotX = y * 0.7;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Resize handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          // Continuous gentle floating
          gemMesh.rotation.y += 0.005;
          gemMesh.rotation.x = Math.sin(elapsedTime * 0.8) * 0.15;
          innerCore.rotation.y -= 0.008;

          ring1.rotation.z += 0.003;
          ring2.rotation.z -= 0.002;
          particles.rotation.y += 0.001;

          // Parallax interpolation (lerp)
          visualGroup.rotation.y += (targetRotY - visualGroup.rotation.y) * 0.05;
          visualGroup.rotation.x += (targetRotX - visualGroup.rotation.x) * 0.05;

          // Gentle floating wave
          visualGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
        }

        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer?.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization note:", err);
      setWebglSupported(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] lg:min-h-[580px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Liquid Light Caustic Simulation via Layered CSS & SVG Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Caustic light ripple 1 */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[130%] h-[130%] rounded-[48%] opacity-35 dark:opacity-20 blur-3xl animate-float-slow"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(155, 107, 232, 0.45) 0%, rgba(230, 220, 250, 0.3) 35%, rgba(56, 189, 248, 0.15) 70%, transparent 100%)",
            animationDuration: "14s",
          }}
        />
        {/* Caustic light ripple 2 (holographic aqua/gold shimmer) */}
        <div
          className="absolute -bottom-[20%] -right-[15%] w-[120%] h-[120%] rounded-[55%] opacity-25 dark:opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, rgba(244, 114, 182, 0.3) 0%, rgba(253, 224, 71, 0.2) 40%, rgba(130, 71, 229, 0.25) 75%, transparent 100%)",
            animation: "float 18s ease-in-out infinite reverse",
          }}
        />
        {/* Pearlescent concentric ripples */}
        <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="rippleGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0CEF8" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#9B6BE8" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50%" cy="52%" rx="42%" ry="24%" fill="url(#rippleGrad)" />
          <ellipse cx="50%" cy="52%" rx="30%" ry="16%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="6 8" />
          <ellipse cx="50%" cy="52%" rx="20%" ry="10%" fill="none" stroke="rgba(230,220,250,0.3)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Primary Visual: WebGL Faceted Gem Canvas or High-Fidelity Vector Fallback */}
      {webglSupported ? (
        <canvas ref={canvasRef} className="relative z-10 w-full h-full max-w-[620px] max-h-[620px]" />
      ) : (
        <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          {/* Static High-Fidelity SVG Gem Fallback */}
          <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_15px_35px_rgba(155,107,232,0.4)]">
            <defs>
              <linearGradient id="fallbackGemGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="50%" stopColor="#9B6BE8" />
                <stop offset="100%" stopColor="#441990" />
              </linearGradient>
            </defs>
            <polygon points="100,20 160,65 160,135 100,180 40,135 40,65" fill="url(#fallbackGemGrad)" stroke="#FFFFFF" strokeWidth="2" />
            <polygon points="100,20 100,100 160,65" fill="#C6A6F3" opacity="0.8" />
            <polygon points="100,20 40,65 100,100" fill="#E0CEF8" opacity="0.9" />
            <polygon points="40,65 40,135 100,100" fill="#8247E5" opacity="0.7" />
            <polygon points="160,65 160,135 100,100" fill="#6839C2" opacity="0.85" />
            <polygon points="40,135 100,180 100,100" fill="#5521B0" opacity="0.9" />
            <polygon points="160,135 100,180 100,100" fill="#3B147D" opacity="0.95" />
          </svg>
        </div>
      )}

      {/* Filigree Crescent Moon Overlay Companion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[68%] -translate-y-[55%] pointer-events-none z-0 opacity-85 dark:opacity-60 scale-125 sm:scale-150">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none">
          <path
            d="M60 15C42 22 30 38 30 55C30 72 42 88 60 95C38 90 20 72 20 55C20 38 38 20 60 15Z"
            fill="url(#silverGradHero)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          <defs>
            <linearGradient id="silverGradHero" x1="20" y1="15" x2="60" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#E2E8F0" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#CBD5E1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
