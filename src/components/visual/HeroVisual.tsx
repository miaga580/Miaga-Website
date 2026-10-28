"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles,
  Heart,
  Search,
  Filter,
  UserCheck,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";

export const HeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "1. UI/UX Design", tech: "Figma Prototype" },
    { label: "2. Mobile App", tech: "Flutter (Android/iOS)" },
    { label: "3. Backend API", tech: "Python Services" },
    { label: "4. Deployment", tech: "AWS Cloud" },
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none py-4">
      {/* Dynamic atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-amethyst-600/25 via-pink-500/15 to-sky-400/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Composition: Isometric-inspired layered device & architecture showcase */}
      <div className="relative flex items-center justify-center min-h-[480px]">
        {/* Floating Background Glass Card: Engineering Architecture & Services */}
        <div className="absolute top-2 right-0 sm:-right-4 w-[280px] sm:w-[320px] rounded-2xl bg-white/75 dark:bg-[#160d2e]/85 backdrop-blur-xl border border-amethyst-500/20 dark:border-amethyst-500/30 p-5 shadow-[0_15px_40px_rgba(42,27,77,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-transform hover:-translate-y-1 duration-300">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300">
                <Cpu className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-display font-bold text-violet-royal dark:text-pearl-50">
                Architecture Flow
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </span>
          </div>

          {/* Interactive Flow Steps */}
          <div className="space-y-2">
            {steps.map((st, i) => (
              <button
                type="button"
                key={st.label}
                onClick={() => setActiveStep(i)}
                className={`w-full p-2 rounded-xl text-left flex items-center justify-between text-xs transition-all ${
                  activeStep === i
                    ? "bg-amethyst-600 text-white font-medium shadow-sm"
                    : "bg-black/[0.02] dark:bg-white/[0.02] hover:bg-amethyst-500/10 text-text-secondary dark:text-lavender-medium"
                }`}
              >
                <span>{st.label}</span>
                <span className={`text-[10px] font-mono ${activeStep === i ? "text-purple-100" : "text-text-muted"}`}>
                  {st.tech}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-text-muted">
            <span>Built by Miaga Technologies</span>
            <Link href="/services" className="text-amethyst-600 dark:text-amethyst-400 font-semibold hover:underline flex items-center gap-0.5">
              Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Foreground Hero Device Mockup: Sleek Modern Smartphone Shell */}
        <div className="relative z-20 w-[240px] sm:w-[260px] rounded-[38px] bg-gradient-to-b from-slate-800 via-slate-900 to-black p-2.5 shadow-[0_25px_60px_rgba(42,27,77,0.25)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-slate-700/60 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          {/* Phone Screen Screen Frame */}
          <div className="rounded-[30px] overflow-hidden bg-white dark:bg-[#0f0920] border border-black/10 dark:border-white/10 flex flex-col h-[440px]">
            {/* Phone Dynamic Island / Speaker notch */}
            <div className="pt-2 px-6 flex items-center justify-between bg-transparent">
              <span className="text-[10px] font-semibold text-text-secondary dark:text-lavender-medium">9:41</span>
              <div className="w-16 h-3.5 bg-black dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800 ml-auto mr-1.5" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 bg-text-secondary dark:bg-lavender-medium rounded-[1px]" />
              </div>
            </div>

            {/* App UI - Mohabbath Matrimony Real Product Showcase */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              {/* Top App Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amethyst-600 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                      M
                    </div>
                    <div>
                      <span className="block text-[11px] font-display font-bold text-violet-royal dark:text-pearl-50 leading-none">
                        Mohabbath
                      </span>
                      <span className="text-[8px] text-amethyst-600 dark:text-amethyst-300 font-mono">
                        Matrimony
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium">
                    Verified App
                  </span>
                </div>

                {/* Profile Discovery Card Preview */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-amethyst-100 to-pearl-200 dark:from-violet-900/40 dark:to-violet-950/40 border border-amethyst-500/20 p-3 space-y-2.5 relative">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-amethyst-500/30 via-pink-400/20 to-sky-400/30 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-violet-deep/80 backdrop-blur-md flex items-center justify-center text-amethyst-600 dark:text-amethyst-300 shadow-md">
                      <Heart className="w-6 h-6 fill-amethyst-500 text-amethyst-500" />
                    </div>
                    <span className="text-[9px] text-violet-royal dark:text-pearl-100 font-semibold mt-1.5">
                      Tailored Matchmaking
                    </span>
                    <span className="text-[7.5px] text-text-muted">
                      Flutter • Cross-Platform UI
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-violet-royal dark:text-pearl-50">
                        Profile Discovery
                      </span>
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-amethyst-500/20 text-amethyst-700 dark:text-amethyst-300 font-mono">
                        98% Match
                      </span>
                    </div>
                    <p className="text-[8px] text-text-secondary dark:text-lavender-medium leading-tight">
                      Structured criteria filtering and responsive interaction designed for iOS & Android.
                    </p>
                  </div>

                  <div className="flex gap-1 pt-1">
                    <span className="text-[8px] px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/10 text-text-primary dark:text-pearl-200 font-medium">
                      Kerala
                    </span>
                    <span className="text-[8px] px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/10 text-text-primary dark:text-pearl-200 font-medium">
                      Verified
                    </span>
                    <span className="text-[8px] px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/10 text-text-primary dark:text-pearl-200 font-medium">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom App Navigation Bar */}
              <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-around text-text-muted">
                <div className="flex flex-col items-center text-amethyst-600 dark:text-amethyst-400">
                  <Search className="w-3.5 h-3.5" />
                  <span className="text-[7px] mt-0.5 font-bold">Discover</span>
                </div>
                <div className="flex flex-col items-center">
                  <Filter className="w-3.5 h-3.5" />
                  <span className="text-[7px] mt-0.5">Filter</span>
                </div>
                <div className="flex flex-col items-center">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className="text-[7px] mt-0.5">Matches</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bottom Accent Card: Verified Delivery Badge */}
        <div className="absolute -bottom-2 -left-2 sm:-left-4 z-30 rounded-2xl bg-white/90 dark:bg-[#160d2e]/90 backdrop-blur-xl border border-amethyst-500/25 p-3.5 shadow-xl flex items-center gap-3 max-w-[240px] animate-float-slow">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-violet-royal dark:text-pearl-50">
              In-House Production
            </span>
            <span className="text-[10px] text-text-muted block mt-0.5">
              Owned & run by Miaga Technologies LLP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
