"use client";

import React, { useEffect, useRef } from "react";

interface SparkleParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  color: string;
}

export const SparkleTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check if device supports fine hover and user prefers motion
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: SparkleParticle[] = [];
    const colors = ["#FFFFFF", "#E0CEF8", "#9B6BE8", "#38BDF8", "#FDE047", "#F472B6"];
    let lastX = 0;
    let lastY = 0;
    let throttle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      throttle++;
      if (throttle % 2 !== 0) return; // spawn gently, not overcrowded

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 2) {
        // Spawn 1-2 micro particles
        const count = Math.min(2, Math.floor(speed / 8) + 1);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: e.clientX + (Math.random() - 0.5) * 6,
            y: e.clientY + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2 - 0.3,
            size: Math.random() * 2.8 + 1.2,
            alpha: 1.0,
            life: Math.random() * 20 + 25,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 1 / p.life;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        // Draw micro 4-point diamond star
        ctx.beginPath();
        const r = p.size;
        ctx.moveTo(p.x, p.y - r * 1.5);
        ctx.lineTo(p.x + r * 0.5, p.y);
        ctx.lineTo(p.x, p.y + r * 1.5);
        ctx.lineTo(p.x - r * 0.5, p.y);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    />
  );
};
