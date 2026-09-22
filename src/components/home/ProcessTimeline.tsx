"use client";

import React, { useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle, Sparkles, ChevronRight } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="holographic" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
            Rigorous Delivery Framework
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
            The Six Pillars of Engineering Certainty
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-lavender-medium">
            From initial architectural discovery to long-term SLA maintenance, our structured methodology eliminates risk and guarantees delivery.
          </p>
        </div>

        {/* Interactive Step Navigator for desktop & mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left transition-all duration-300 border ${
                  isActive
                    ? "bg-amethyst-600 text-white border-white/30 shadow-amethyst-glow"
                    : "bg-white/40 dark:bg-violet-deep/50 text-violet-royal dark:text-pearl-200 border-amethyst-500/15 hover:border-amethyst-500/40 hover:bg-white/70"
                }`}
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest opacity-80 mb-1">
                  {step.number}
                </span>
                <span className="block text-xs sm:text-sm font-bold truncate">
                  {step.title.split(" & ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <GlassCard className="p-8 sm:p-12 border-amethyst-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-text-muted">
                  Phase Milestone
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-amethyst-700 dark:text-amethyst-300 font-medium italic">
                "{PROCESS_STEPS[activeStep].tagline}"
              </p>

              <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-pearl-100 dark:bg-violet-cosmic/70 border border-amethyst-500/20 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amethyst-500" />
                Key Deliverables
              </span>
              <ul className="space-y-2">
                {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary dark:text-lavender-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
