"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Tv,
  Smartphone,
  Play,
  Layers,
  Cpu,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Sparkles,
} from "lucide-react";

export const Capabilities: React.FC = () => {
  const [activeBitrate, setActiveBitrate] = useState("4K HDR (2160p)");
  const [activePlatform, setActivePlatform] = useState<"ios" | "android" | "cross">("ios");

  return (
    <section className="relative py-24 bg-pearl-200/40 dark:bg-violet-cosmic/50 border-y border-amethyst-500/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amethyst-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="holographic" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
            Flagship Specializations
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
            High-Impact Engineering Paradigms
          </h2>
          <p className="mt-4 text-base text-text-secondary dark:text-lavender-medium">
            Where ultra-low-latency distributed infrastructure meets pixel-perfect user interaction.
          </p>
        </div>

        {/* Feature 1: OTT Video Streaming Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30">
                <Tv className="w-5 h-5" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-amethyst-600 dark:text-amethyst-400">
                Media & Entertainment Backbone
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              End-to-End OTT Video Streaming Platforms
            </h3>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We engineer mission-critical video platforms scaling to millions of concurrent viewers. From live sports
              and multi-camera concerts to massive VOD catalogues, our architecture guarantees sub-second latency,
              adaptive bitrate stability, and carrier-grade DRM protection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Low-Latency HLS & CMAF Chunking",
                "Widevine, FairPlay & PlayReady Multi-DRM",
                "Dynamic Server-Side Ad Insertion (SSAI)",
                "Smart TV Apps (Tizen, webOS, Android TV)",
                "Adaptive Bitrate (ABR) Optimization",
                "Real-time QoS/QoE Telemetry & Analytics",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary dark:text-pearl-200">
                  <CheckCircle2 className="w-4 h-4 text-amethyst-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/ott-platforms" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Interactive OTT Showcase
              </Button>
              <span className="text-xs text-text-muted dark:text-lavender-medium/60 font-mono">
                [Tested for 1M+ Concurrent Streams]
              </span>
            </div>
          </div>

          {/* Interactive OTT Visual Card */}
          <div className="lg:col-span-6">
            <GlassCard className="border-amethyst-500/30 p-5 sm:p-7 shadow-2xl">
              {/* Simulated Video Player Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-amethyst-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    LIVE STREAM ENCODER
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {["1080p60", "4K HDR (2160p)"].map((res) => (
                    <button
                      key={res}
                      onClick={() => setActiveBitrate(res)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        activeBitrate === res
                          ? "bg-amethyst-600 text-white font-bold"
                          : "bg-black/5 dark:bg-white/5 text-text-secondary hover:bg-amethyst-500/15"
                      }`}
                    >
                      {res}
                    </button>
                  ))}
                </div>
              </div>

              {/* Player Video Stage */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-violet-cosmic via-violet-deep to-black overflow-hidden flex flex-col justify-between p-4 border border-white/10">
                {/* Background stylized streaming caustics */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,#9B6BE8_0%,transparent_60%)]" />

                <div className="relative z-10 flex justify-between items-center text-white/90">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    HLS CMAF • Low-Latency
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Wifi className="w-3 h-3" /> Latency: 1.18s
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-lg">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-white/75">
                    <span>Segment #8914</span>
                    <span>Buffer: 99.8% Healthy</span>
                  </div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-amethyst-400 to-sky-400 h-full w-[88%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Streaming Telemetry Strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-amethyst-500/15 text-center">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span className="block text-[10px] text-text-muted">Audio Profiles</span>
                  <span className="text-xs font-mono font-bold text-violet-royal dark:text-pearl-100">
                    Dolby Atmos / 5.1
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span className="block text-[10px] text-text-muted">DRM Enforcement</span>
                  <span className="text-xs font-mono font-bold text-violet-royal dark:text-pearl-100">
                    Hardware L1 Widevine
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span className="block text-[10px] text-text-muted">Target Ecosystem</span>
                  <span className="text-xs font-mono font-bold text-violet-royal dark:text-pearl-100">
                    Smart TVs & Mobile
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Feature 2: Mobile App Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Mobile Engineering Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <GlassCard className="border-amethyst-500/30 p-5 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-amethyst-500/15">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amethyst-600 dark:text-amethyst-400">
                    MOBILE RUNTIME SPEC
                  </span>
                </div>
                {/* Platform tabs */}
                <div className="flex gap-1">
                  {(["ios", "android", "cross"] as const).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`text-[10px] uppercase font-mono px-2.5 py-1 rounded-md transition-all ${
                        activePlatform === platform
                          ? "bg-amethyst-600 text-white font-bold"
                          : "bg-black/5 dark:bg-white/5 text-text-secondary hover:bg-amethyst-500/15"
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual simulated app shell */}
              <div className="rounded-xl bg-gradient-to-b from-pearl-100 to-pearl-300 dark:from-violet-deep dark:to-violet-cosmic p-5 border border-amethyst-500/20 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amethyst-500/20 flex items-center justify-center text-amethyst-600 dark:text-amethyst-300">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-violet-royal dark:text-pearl-50">
                        {activePlatform === "ios"
                          ? "SwiftUI Native Engine"
                          : activePlatform === "android"
                          ? "Jetpack Compose Native"
                          : "Flutter / React Native Hybrid"}
                      </h4>
                      <span className="text-[11px] text-text-muted dark:text-lavender-medium/70">
                        Hardware Accelerated • 120Hz ProMotion Ready
                      </span>
                    </div>
                  </div>
                  <Badge variant="amethyst" size="sm">
                    60+ FPS
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-amethyst-500/15">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1">
                      <Layers className="w-3.5 h-3.5 text-amethyst-500" /> Offline-First Sync
                    </div>
                    <p className="text-[11px] text-text-secondary dark:text-lavender-medium">
                      CRDT local state with bi-directional delta synchronization.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-amethyst-500/15">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1">
                      <Cpu className="w-3.5 h-3.5 text-amethyst-500" /> Biometrics & Secure Enclave
                    </div>
                    <p className="text-[11px] text-text-secondary dark:text-lavender-medium">
                      Hardware-backed key encryption for enterprise security.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amethyst-500/10 border border-amethyst-500/20 flex items-center justify-between text-xs">
                  <span className="font-mono text-amethyst-700 dark:text-amethyst-300">
                    Crash-Free Session Rate: 99.94%
                  </span>
                  <span className="text-[10px] text-text-muted">Global Production Telemetry</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-amethyst-600 dark:text-amethyst-400">
                Mobile Craftsmanship
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              Web & Mobile Application Development
            </h3>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We build mobile applications that feel alive in hand. Our engineering teams combine native device power
              (iOS Swift and Android Kotlin) with high-efficiency multiplatform frameworks to deliver tactile haptic
              feedback, instant offline responses, and seamless app-store deployment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Native Swift / SwiftUI for iOS & iPadOS",
                "Modern Kotlin & Jetpack Compose for Android",
                "High-Concurrency Background Data Sync",
                "Hardware Biometric Authentication",
                "Automated App Store & Play Store CI/CD",
                "Complex Custom Gesture & Motion UI",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary dark:text-pearl-200">
                  <CheckCircle2 className="w-4 h-4 text-amethyst-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services#mobile-apps" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Mobile Architecture Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
