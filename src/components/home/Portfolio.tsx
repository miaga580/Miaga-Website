"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { MOHABBATH_PORTFOLIO } from "@/lib/constants";
import { ArrowRight, Smartphone, Sparkles, ExternalLink } from "lucide-react";

export const Portfolio: React.FC = () => {
  return (
    <section id="apps" className="relative py-24 sm:py-32 bg-white/40 dark:bg-violet-deep/30 border-y border-amethyst-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="silver" size="md">
              <Sparkles className="w-3 h-3 text-amethyst-500" />
              Our Work
            </Badge>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
            Featured Application
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-lavender-medium leading-relaxed">
            In-house mobile and web application products engineered by our development practice.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <GlassCard className="border-amethyst-500/20 p-6 sm:p-8 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={MOHABBATH_PORTFOLIO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-amethyst-500/20 rounded-full inline-flex text-amethyst-600 dark:text-amethyst-300 hover:bg-amethyst-500/40 transition-colors"
                aria-label={`Open ${MOHABBATH_PORTFOLIO.title} website`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amethyst-500/20 to-violet-royal/20 flex items-center justify-center border border-amethyst-500/30">
                <Smartphone className="w-6 h-6 text-amethyst-600 dark:text-amethyst-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-violet-royal dark:text-pearl-50">
                  {MOHABBATH_PORTFOLIO.title}
                </h3>
                <span className="text-xs text-amethyst-600 dark:text-amethyst-400 font-mono">
                  {MOHABBATH_PORTFOLIO.status}
                </span>
              </div>
            </div>

            <p className="text-text-secondary dark:text-lavender-medium text-sm leading-relaxed mb-6">
              {MOHABBATH_PORTFOLIO.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {MOHABBATH_PORTFOLIO.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs text-text-secondary dark:text-pearl-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={MOHABBATH_PORTFOLIO.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amethyst-600 dark:text-amethyst-400 hover:text-amethyst-700 dark:hover:text-amethyst-300 transition-colors"
            >
              Visit Application <ArrowRight className="w-4 h-4" />
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
