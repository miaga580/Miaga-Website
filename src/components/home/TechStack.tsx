"use client";

import React from "react";
import { TECH_CATEGORIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Cpu } from "lucide-react";

export const TechStack: React.FC = () => {
  return (
    <section className="relative py-20 border-b border-amethyst-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="silver" size="sm" className="mb-2">
            <Cpu className="w-3 h-3 text-amethyst-500" />
            Technology Stack
          </Badge>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-violet-royal dark:text-pearl-100">
            Technologies We Use
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium mt-2">
            Our active production tools and frameworks for software, mobile, and cloud development.
          </p>
        </div>

        {/* Badges for active category */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {TECH_CATEGORIES[0].items.map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 rounded-xl bg-white/80 dark:bg-violet-deep/80 border border-amethyst-500/20 shadow-sm flex items-center gap-2 text-sm font-medium text-violet-royal dark:text-pearl-100 hover:border-amethyst-500 transition-all duration-200"
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
