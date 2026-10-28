"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Terminal,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Code2,
  ExternalLink,
  Cpu,
} from "lucide-react";

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"app" | "backend" | "cloud">("app");

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      {/* Soft radiant ambient glow underneath the container */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-amethyst-500/20 via-sky-400/15 to-violet-600/20 rounded-3xl blur-2xl pointer-events-none opacity-80 dark:opacity-60" />

      {/* Main Glassmorphic Product Preview Card */}
      <div className="relative rounded-2xl bg-white/90 dark:bg-[#150d2a]/90 backdrop-blur-xl border border-amethyst-500/25 dark:border-amethyst-500/30 shadow-[0_20px_50px_rgba(42,27,77,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Top Window Chrome Header */}
        <div className="px-5 py-3.5 border-b border-black/5 dark:border-white/10 flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-text-muted font-medium">
              miaga-engineering-preview
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>

        {/* Tab Switcher: App Engine / Python Backend / Cloud */}
        <div className="px-5 pt-3 pb-2 flex gap-2 border-b border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
          <button
            type="button"
            onClick={() => setActiveTab("app")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "app"
                ? "bg-amethyst-600 text-white shadow-sm"
                : "text-text-secondary dark:text-lavender-medium hover:bg-amethyst-500/10"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (Flutter)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("backend")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "backend"
                ? "bg-amethyst-600 text-white shadow-sm"
                : "text-text-secondary dark:text-lavender-medium hover:bg-amethyst-500/10"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Backend (Python)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cloud")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "cloud"
                ? "bg-amethyst-600 text-white shadow-sm"
                : "text-text-secondary dark:text-lavender-medium hover:bg-amethyst-500/10"
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Cloud (AWS)</span>
          </button>
        </div>

        {/* Tab 1: Real Product Mockup - Mohabbath Matrimony */}
        {activeTab === "app" && (
          <div className="p-6 space-y-5 animate-fadeIn">
            {/* Header info */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-amethyst-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  M
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-base text-violet-royal dark:text-pearl-50">
                      Mohabbath Matrimony
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 font-mono font-semibold">
                      In Development
                    </span>
                  </div>
                  <span className="text-xs text-text-muted block mt-0.5">
                    Owned & operated by Miaga Technologies LLP
                  </span>
                </div>
              </div>

              <a
                href="https://www.mohabbathmatrimony.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-amethyst-600 dark:text-amethyst-400 hover:underline inline-flex items-center gap-1 shrink-0 mt-1"
              >
                <span>Visit site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Clean Mobile UI Card */}
            <div className="p-4 rounded-xl bg-pearl-100/70 dark:bg-black/30 border border-amethyst-500/15 space-y-3">
              <div className="flex items-center justify-between text-xs text-text-muted font-mono">
                <span>Target: Android & iOS</span>
                <span>Framework: Flutter</span>
              </div>

              {/* Simulated Matchmaking Card UI */}
              <div className="p-3.5 rounded-lg bg-white dark:bg-[#1a1233] border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amethyst-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                    MM
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="h-2.5 bg-amethyst-500/20 dark:bg-amethyst-400/20 rounded w-28 mb-1" />
                    <div className="h-2 bg-black/5 dark:bg-white/10 rounded w-40" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium font-mono">
                    Verified
                  </span>
                </div>

                <div className="pt-2 grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-text-muted">
                    Profile Filter
                  </div>
                  <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-text-muted">
                    Secure Auth
                  </div>
                  <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-text-muted">
                    Responsive UI
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary dark:text-lavender-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                <span>Single codebase for iOS & Android</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                <span>Python REST API integration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                <span>Modular UI component kits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                <span>Store release readiness</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Python Backend Mockup */}
        {activeTab === "backend" && (
          <div className="p-6 space-y-4 font-mono text-xs animate-fadeIn">
            <div className="flex items-center justify-between text-text-muted pb-2 border-b border-black/5 dark:border-white/5">
              <span>service_endpoint.py</span>
              <span className="text-[10px] text-amethyst-600 dark:text-amethyst-300">
                Python 3.11 • Clean Architecture
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0e081c] text-pearl-100 overflow-x-auto space-y-1.5 leading-relaxed text-[11px]">
              <div>
                <span className="text-pink-400">from</span> miaga.core{" "}
                <span className="text-pink-400">import</span> ApplicationEngine
              </div>
              <div>
                <span className="text-pink-400">from</span> miaga.database{" "}
                <span className="text-pink-400">import</span> PostgreSQLClient
              </div>
              <div className="text-text-muted"># Verified modular backend service</div>
              <div>
                <span className="text-sky-400">app</span> = ApplicationEngine(
                name=<span className="text-emerald-300">"MiagaPlatform"</span>)
              </div>
              <br />
              <div>
                <span className="text-amber-300">@app.route</span>(
                <span className="text-emerald-300">"/api/v1/health"</span>)
              </div>
              <div>
                <span className="text-purple-400">def</span>{" "}
                <span className="text-sky-300">health_check</span>():
              </div>
              <div className="pl-4">
                <span className="text-pink-400">return</span> {"{"}
                <span className="text-emerald-300">"status"</span>:{" "}
                <span className="text-emerald-300">"operational"</span>,{" "}
                <span className="text-emerald-300">"company"</span>:{" "}
                <span className="text-emerald-300">"Miaga Technologies LLP"</span>
                {"}"}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-text-secondary dark:text-lavender-medium pt-1">
              <span>✓ Clean modular service boundary</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                RESTful APIs
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: AWS Cloud Infrastructure */}
        {activeTab === "cloud" && (
          <div className="p-6 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
              <span className="font-display font-bold text-sm text-violet-royal dark:text-pearl-50">
                AWS Cloud Infrastructure
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold">
                Managed Hosting
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-pearl-100/60 dark:bg-black/30 border border-amethyst-500/15">
                <span className="text-[10px] font-mono text-text-muted block uppercase tracking-wider mb-1">
                  Compute & APIs
                </span>
                <span className="font-semibold text-xs text-violet-royal dark:text-pearl-100 block">
                  Amazon EC2 & ECS
                </span>
                <span className="text-[11px] text-text-secondary dark:text-lavender-medium mt-1 block">
                  Isolated backend environments
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-pearl-100/60 dark:bg-black/30 border border-amethyst-500/15">
                <span className="text-[10px] font-mono text-text-muted block uppercase tracking-wider mb-1">
                  Storage & CDN
                </span>
                <span className="font-semibold text-xs text-violet-royal dark:text-pearl-100 block">
                  Amazon S3 & CloudFront
                </span>
                <span className="text-[11px] text-text-secondary dark:text-lavender-medium mt-1 block">
                  Asset hosting & distribution
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
              <span className="font-medium text-emerald-700 dark:text-emerald-300">
                Production-Ready Deployment
              </span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                Kochi, Kerala Practice
              </span>
            </div>
          </div>
        )}

        {/* Bottom Card Footer */}
        <div className="px-5 py-3 border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-text-muted">
            <Layers className="w-3.5 h-3.5 text-amethyst-500" />
            <span>Structured Development Workflow</span>
          </div>
          <Link
            href="/services"
            className="font-medium text-amethyst-600 dark:text-amethyst-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Our services</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
