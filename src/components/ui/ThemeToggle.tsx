"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full border border-amethyst-500/20 bg-white/40 dark:bg-violet-deep/40 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Pearl Lavender theme" : "Switch to Night Sky theme"}
      title={isDark ? "Theme: Night Sky (Click for Pearl Lavender)" : "Theme: Pearl Lavender (Click for Night Sky)"}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full p-2 text-violet-royal dark:text-pearl-100 bg-white/60 dark:bg-violet-deep/80 border border-amethyst-500/25 hover:border-amethyst-500 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <span
          className={`absolute transition-all duration-500 transform ${
            isDark ? "rotate-90 opacity-0 scale-50 pointer-events-none" : "rotate-0 opacity-100 scale-100 text-amethyst-600"
          }`}
        >
          <Sun className="w-5 h-5" />
        </span>

        {/* Crescent Moon Icon for Dark (Night Sky) Mode */}
        <span
          className={`absolute transition-all duration-500 transform ${
            isDark ? "rotate-0 opacity-100 scale-100 text-amethyst-300" : "-rotate-90 opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <Moon className="w-5 h-5" />
        </span>
      </div>
    </button>
  );
};
