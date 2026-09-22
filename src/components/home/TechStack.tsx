"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Cpu } from "lucide-react";

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative py-20 border-b border-amethyst-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="silver" size="sm" className="mb-2">
            <Cpu className="w-3 h-3 text-amethyst-500" />
            Engineering Stack
          </Badge>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-violet-royal dark:text-pearl-100">
            Engineered with Modern, Resilient Technologies
          </h3>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === idx
                  ? "bg-amethyst-600 text-white shadow-amethyst-glow"
                  : "bg-white/60 dark:bg-violet-deep/60 text-text-secondary hover:text-amethyst-600 dark:hover:text-amethyst-300 border border-amethyst-500/15"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Badges for active category */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {TECH_CATEGORIES[activeCategory].items.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2.5 rounded-xl bg-white/80 dark:bg-violet-deep/80 border border-amethyst-500/20 shadow-sm flex items-center gap-2 text-xs sm:text-sm font-medium text-violet-royal dark:text-pearl-100 hover:border-amethyst-500 hover:shadow-amethyst-glow/40 transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-amethyst-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
