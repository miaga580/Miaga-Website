"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.z = 6.2;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting - multi-point celestial glow with iridescent rim
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
      mainLight.position.set(5, 6, 5);
      scene.add(mainLight);

      const purpleGlow = new THREE.PointLight(0xa855f7, 4.5, 14);
      purpleGlow.position.set(-3.5, -2, 3);
      scene.add(purpleGlow);

      const cyanGlow = new THREE.PointLight(0x38bdf8, 3.0, 12);
      cyanGlow.position.set(3.5, -2.5, 3.5);
      scene.add(cyanGlow);

      const pinkGlow = new THREE.PointLight(0xf472b6, 2.5, 10);
      pinkGlow.position.set(0, 4, 2);
      scene.add(pinkGlow);

      const visualGroup = new THREE.Group();
      scene.add(visualGroup);

      // 1. Faceted Jewel Geometry - icosahedron with physical transmission
      const gemGeometry = new THREE.IcosahedronGeometry(1.5, 0);
      const gemMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x9333ea,
        emissive: 0x3b0764,
        emissiveIntensity: 0.5,
        roughness: 0.08,
        metalness: 0.1,
        transmission: 0.72,
        ior: 1.75,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        flatShading: true,
      });
      const gemMesh = new THREE.Mesh(gemGeometry, gemMaterial);
      visualGroup.add(gemMesh);

      // 2. Crisp Holographic Wireframe Edges
      const wireframeGeometry = new THREE.WireframeGeometry(gemGeometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
      });
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      gemMesh.add(wireframe);

      // 3. Floating Inner Radiant Core
      const innerCoreGeometry = new THREE.OctahedronGeometry(0.75, 0);
      const innerCoreMaterial = new THREE.MeshStandardMaterial({
        color: 0xf5d0fe,
        emissive: 0xc084fc,
        emissiveIntensity: 0.9,
        roughness: 0.15,
        metalness: 0.85,
        flatShading: true,
      });
      const innerCore = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
      gemMesh.add(innerCore);

      // 4. Multi-Axis Filigree Orbital Rings
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xe9d5ff,
        metalness: 0.95,
        roughness: 0.15,
      });

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.02, 16, 120), ringMaterial);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 7;
      visualGroup.add(ring1);

      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.018, 16, 120), ringMaterial);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = Math.PI / 3.5;
      visualGroup.add(ring2);

      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.012, 16, 120), ringMaterial);
      ring3.rotation.x = Math.PI / 2.2;
      ring3.rotation.z = Math.PI / 5;
      visualGroup.add(ring3);

      // 5. Orbital Beads / Satellites on rings
      const beadGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const beadMat1 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 1 });
      const beadMat2 = new THREE.MeshStandardMaterial({ color: 0xf472b6, emissive: 0xdb2777, emissiveIntensity: 1 });
      const beadMat3 = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1 });

      const bead1 = new THREE.Mesh(beadGeo, beadMat1);
      const bead2 = new THREE.Mesh(beadGeo, beadMat2);
      const bead3 = new THREE.Mesh(beadGeo, beadMat3);
      scene.add(bead1);
      scene.add(bead2);
      scene.add(bead3);

      // 6. Floating Celestial Particle Field
      const particleCount = 100;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = 2.2 + Math.random() * 2.5;

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const particleMat = new THREE.PointsMaterial({
        color: 0xf5f3ff,
        size: 0.05,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      visualGroup.add(particles);

      // Interactive Parallax
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
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Resize observer
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
          // Smooth rotation
          gemMesh.rotation.y = elapsedTime * 0.28;
          gemMesh.rotation.x = Math.sin(elapsedTime * 0.22) * 0.25;

          innerCore.rotation.y = -elapsedTime * 0.5;
          innerCore.rotation.z = Math.cos(elapsedTime * 0.3) * 0.3;

          ring1.rotation.z = elapsedTime * 0.18;
          ring2.rotation.z = -elapsedTime * 0.14;
          ring3.rotation.y = elapsedTime * 0.12;

          // Animate beads along orbital trajectories
          const t1 = elapsedTime * 0.9;
          bead1.position.set(
            visualGroup.position.x + Math.cos(t1) * 2.15,
            visualGroup.position.y + Math.sin(t1) * 1.0,
            visualGroup.position.z + Math.sin(t1) * 1.8
          );

          const t2 = -elapsedTime * 0.75 + 1.2;
          bead2.position.set(
            visualGroup.position.x + Math.sin(t2) * 1.8,
            visualGroup.position.y + Math.cos(t2) * 2.45 * 0.85,
            visualGroup.position.z + Math.cos(t2) * 1.6
          );

          const t3 = elapsedTime * 0.6 + 2.5;
          bead3.position.set(
            visualGroup.position.x + Math.cos(t3) * 2.7 * 0.9,
            visualGroup.position.y + Math.sin(t3) * 0.6,
            visualGroup.position.z + Math.sin(t3) * 2.4
          );

          particles.rotation.y = elapsedTime * 0.05;
          visualGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.12;

          // Parallax easing
          targetRotX = mouseY * 0.5;
          targetRotY = mouseX * 0.6;
          visualGroup.rotation.x += (targetRotX - visualGroup.rotation.x) * 0.05;
          visualGroup.rotation.y += (targetRotY - visualGroup.rotation.y) * 0.05;
        }

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);

        gemGeometry.dispose();
        gemMaterial.dispose();
        wireframeGeometry.dispose();
        wireframeMaterial.dispose();
        innerCoreGeometry.dispose();
        innerCoreMaterial.dispose();
        ringMaterial.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer?.dispose();
      };
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to SVG", e);
      setWebglSupported(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] lg:min-h-[580px] flex items-center justify-center overflow-visible"
    >
      {/* Dynamic Multi-layered Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Soft violet radial core */}
        <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-amethyst-600/35 via-violet-600/20 to-sky-500/20 blur-[85px] animate-pulse-subtle" />
        
        {/* Holographic accent glint */}
        <div
          className="absolute w-[320px] h-[320px] rounded-full opacity-30 dark:opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 45% 45%, rgba(244, 114, 182, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 80%)",
          }}
        />

        {/* Concentric orbital rings watermark */}
        <svg
          className="absolute w-[440px] h-[440px] opacity-25 dark:opacity-20 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" className="text-amethyst-300" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-lavender-medium" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        </svg>
      </div>

      {/* Floating Status Badges for high visual interest */}
      <div className="absolute -top-2 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/80 dark:bg-violet-deep/80 backdrop-blur-xl border border-white/40 dark:border-amethyst-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(155,107,232,0.25)] animate-float-slow">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-violet-royal dark:text-pearl-50">Active Development</span>
          <span className="text-[9px] font-mono text-text-muted">Flutter • Python • AWS</span>
        </div>
      </div>

      <div
        className="absolute -bottom-4 left-4 sm:left-8 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-violet-deep/80 backdrop-blur-xl border border-white/40 dark:border-amethyst-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(155,107,232,0.25)] animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amethyst-600 to-sky-400 flex items-center justify-center text-white text-xs font-bold shadow-md">
          M
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-violet-royal dark:text-pearl-50">Mohabbath Matrimony</span>
          <span className="text-[9px] text-amethyst-600 dark:text-amethyst-300 font-medium">In-House App In Progress</span>
        </div>
      </div>

      {/* Primary Visual: WebGL Canvas */}
      {webglSupported ? (
        <canvas ref={canvasRef} className="relative z-10 w-full h-full max-w-[560px] max-h-[560px]" />
      ) : (
        <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-amethyst-600 to-violet-800 shadow-2xl animate-pulse" />
        </div>
      )}
    </div>
  );
};
