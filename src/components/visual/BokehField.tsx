"use client";

import React, { useMemo } from "react";

interface BokehFieldProps {
  count?: number;
  className?: string;
}

export const BokehField: React.FC<BokehFieldProps> = ({ count = 24, className = "" }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 6 + 2;
      const duration = Math.random() * 10 + 12;
      const delay = Math.random() * 8;
      const isStar = i % 3 === 0;
      const color =
        i % 4 === 0
          ? "rgba(155, 107, 232, 0.45)"
          : i % 4 === 1
          ? "rgba(224, 206, 248, 0.5)"
          : i % 4 === 2
          ? "rgba(56, 189, 248, 0.35)"
          : "rgba(253, 224, 71, 0.35)";

      return {
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size,
        duration: `${duration}s`,
        delay: `${delay}s`,
        isStar,
        color,
      };
    });
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) =>
        p.isStar ? (
          <div
            key={p.id}
            className="absolute animate-pulse-subtle"
            style={{
              top: p.top,
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          >
            <svg width={p.size * 2} height={p.size * 2} viewBox="0 0 24 24" fill={p.color}>
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
            </svg>
          </div>
        ) : (
          <div
            key={p.id}
            className="absolute rounded-full blur-[1px] animate-float-slow"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        )
      )}
    </div>
  );
};
