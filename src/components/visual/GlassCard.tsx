"use client";

import React, { useRef, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverGlow = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverGlow) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`glass-card relative rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Dynamic silver-amethyst radial spotlight following cursor on hover */}
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(155, 107, 232, 0.15), transparent 75%)`,
          }}
        />
      )}

      {/* Subtle silver border sheen highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-amethyst-400/40 to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
