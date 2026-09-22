import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amethyst" | "silver" | "holographic" | "subtle";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "amethyst",
  className = "",
  size = "sm",
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-semibold",
    md: "text-xs px-3 py-1 tracking-wide font-medium",
  };

  const variantStyles = {
    amethyst:
      "bg-amethyst-500/10 text-amethyst-700 dark:text-amethyst-300 border border-amethyst-500/25",
    silver:
      "bg-white/80 dark:bg-violet-deep/80 text-violet-royal dark:text-pearl-100 border border-silver-filigree dark:border-white/10 shadow-sm",
    holographic:
      "bg-gradient-to-r from-pink-500/10 via-amethyst-500/10 to-sky-500/10 text-violet-royal dark:text-pearl-100 border border-amethyst-400/30",
    subtle:
      "bg-black/5 dark:bg-white/5 text-text-secondary dark:text-lavender-medium border border-transparent",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full backdrop-blur-sm transition-all duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
