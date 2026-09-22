"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Smartphone,
  Tv,
  Palette,
  ShieldCheck,
  GitMerge,
  KeyRound,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  GitMerge: <GitMerge className="w-6 h-6" />,
  KeyRound: <KeyRound className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="holographic" size="md">
              <Sparkles className="w-3 h-3 text-amethyst-500" />
              Full-Spectrum Engineering
            </Badge>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
            End-to-End Capabilities for the Modern Digital Frontier
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-lavender-medium leading-relaxed">
            From low-latency streaming infrastructure and native mobile apps to bespoke enterprise software and continuous 24/7 SLA maintenance.
          </p>
        </div>

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const isFlagship = service.id === "ott-platforms" || service.id === "mobile-apps";
            return (
              <GlassCard
                key={service.id}
                className={`flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 ${
                  isFlagship
                    ? "border-amethyst-500/35 bg-white/90 dark:bg-violet-deep/90 shadow-amethyst-glow/20"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amethyst-500/10 dark:bg-amethyst-500/20 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/25 group-hover:bg-amethyst-600 group-hover:text-white transition-all duration-300">
                      {ICON_MAP[service.icon] || <Code2 className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-semibold text-text-muted dark:text-lavender-medium/60">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-violet-royal dark:text-pearl-50 mb-2.5 group-hover:text-amethyst-600 dark:group-hover:text-amethyst-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-amethyst-500/15 mb-4">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-violet-royal dark:text-pearl-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amethyst-600 dark:text-amethyst-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-violet-royal dark:text-pearl-100 bg-white/70 dark:bg-violet-deep/80 border border-amethyst-500/30 hover:border-amethyst-500 hover:shadow-amethyst-glow transition-all"
          >
            <span>Review All 8 Service Specifications & Deliverables</span>
            <ArrowRight className="w-4 h-4 text-amethyst-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
