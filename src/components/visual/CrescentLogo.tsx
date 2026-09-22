import React from "react";

interface CrescentLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  animated?: boolean;
}

export const CrescentLogo: React.FC<CrescentLogoProps> = ({
  className = "",
  size = 40,
  showText = true,
  animated = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${animated ? "animate-pulse-subtle" : ""}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible filter drop-shadow-[0_2px_12px_rgba(155,107,232,0.35)]"
        >
          <defs>
            <linearGradient id="crescentSilver" x1="12" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E2E8F0" />
              <stop offset="55%" stopColor="#CBD5E1" />
              <stop offset="85%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <linearGradient id="amethystCore" x1="28" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5EEFD" />
              <stop offset="30%" stopColor="#C6A6F3" />
              <stop offset="70%" stopColor="#9B6BE8" />
              <stop offset="100%" stopColor="#6839C2" />
            </linearGradient>

            <linearGradient id="holoGlint" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F472B6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0.8" />
            </linearGradient>

            <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx="34" cy="34" r="22" fill="#9B6BE8" fillOpacity="0.15" filter="url(#logoGlow)" />

          {/* Filigree Outer Floral Curves */}
          <path
            d="M40 10C35 14 31 19 29 25C27 31 27 37 29 43C31 49 35 54 40 58C25 56 15 45 15 34C15 23 25 12 40 10Z"
            fill="url(#crescentSilver)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />

          {/* Filigree Inner Ornamental Swirl */}
          <path
            d="M32 20C29 24 28 29 28 34C28 39 29 44 32 48"
            stroke="url(#holoGlint)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="1 3"
          />

          {/* Faceted Amethyst Gem In Crescent Arch */}
          <g transform="translate(36, 34)" filter="url(#logoGlow)">
            {/* Top facet */}
            <polygon points="0,-12 9,-4 0,0 -9,-4" fill="#E9D5FF" stroke="#FFFFFF" strokeWidth="0.5" />
            {/* Bottom-left facet */}
            <polygon points="-9,-4 0,0 0,14" fill="#9B6BE8" stroke="#FFFFFF" strokeWidth="0.5" />
            {/* Bottom-right facet */}
            <polygon points="9,-4 0,0 0,14" fill="#6839C2" stroke="#FFFFFF" strokeWidth="0.5" />
            {/* Center light reflect facet */}
            <polygon points="0,-12 0,0 4,-2" fill="#FFFFFF" opacity="0.75" />
            {/* Holographic rim */}
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
          </g>

          {/* Delicate Celestial Stars */}
          <path
            d="M49 16L50.5 20.5L55 22L50.5 23.5L49 28L47.5 23.5L43 22L47.5 20.5Z"
            fill="#FFFFFF"
            filter="url(#logoGlow)"
          />
          <path d="M47 48L48 51L51 52L48 53L47 56L46 53L43 52L46 51Z" fill="#F4EFFF" />
          <circle cx="21" cy="20" r="1.2" fill="#FDE047" opacity="0.9" />
          <circle cx="17" cy="42" r="1" fill="#38BDF8" opacity="0.9" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold tracking-wide text-lg sm:text-xl text-violet-royal dark:text-pearl-100">
              MIAGA
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
              LLP
            </span>
          </div>
          <span className="text-[10px] tracking-wider uppercase font-medium text-text-secondary dark:text-lavender-medium">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};
