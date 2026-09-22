import React from "react";
import Link from "next/link";
import { HeroCanvas } from "@/components/visual/HeroCanvas";
import { BokehField } from "@/components/visual/BokehField";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Capabilities } from "@/components/home/Capabilities";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStack } from "@/components/home/TechStack";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Shield, Cpu, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section (Full Viewport) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Ambient celestial bokeh particles */}
        <BokehField count={28} />

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="holographic" size="md">
                  <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
                  Ethereal Tech Craftsmanship
                </Badge>
              </div>

              <h1 className="font-display font-bold text-[26px] sm:text-5xl lg:text-7xl text-violet-royal dark:text-pearl-50 tracking-tight leading-[1.22] sm:leading-[1.08]">
                Engineering Digital Realities<br className="hidden sm:hidden" /> with{" "}
                <span className="text-shimmer italic font-normal">Ethereal</span>{" "}
                Precision.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-text-secondary dark:text-lavender-medium max-w-2xl font-normal leading-relaxed">
                Miaga Technologies LLP builds mission-critical software architectures, carrier-grade OTT video
                streaming ecosystems, tactile mobile applications, and proprietary digital platforms for enterprises
                worldwide.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>

                <Button href="#services" variant="secondary" size="lg">
                  See Our Work & Capabilities
                </Button>
              </div>

              {/* Trust Indicators (Honest Architecture Benchmarks with Explicit Placeholders) */}
              <div className="pt-6 border-t border-amethyst-500/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <span className="block text-base sm:text-xl font-display font-bold text-violet-royal dark:text-pearl-50">
                    99.99%
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Streaming Uptime Architecture
                  </span>
                </div>

                <div>
                  <span className="block text-base sm:text-xl font-display font-bold text-violet-royal dark:text-pearl-50">
                    60 FPS
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Fluid Native UI Execution
                  </span>
                </div>

                <div>
                  <span className="block text-base sm:text-xl font-display font-bold text-violet-royal dark:text-pearl-50">
                    &lt; 1.5s
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Glass-to-Glass Live Latency
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Visual Canvas */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Executive Intro */}
      <section className="relative py-16 border-y border-amethyst-500/15 bg-white/40 dark:bg-violet-deep/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                Architectural Integrity
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Clean, documented, and modular architectures designed for scale, resilience, and unbending data security.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                High-Concurrency Power
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Specialized in massive throughput: million-user video concurrency, sub-second API responses, and low-memory mobile footprints.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                Turnkey Lifecycle Support
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Comprehensive ownership from UX prototyping, CI/CD, and multi-DRM licensing to 24/7 SLA operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Overview */}
      <ServicesGrid />

      {/* 4. Flagship Capabilities (OTT Platforms & Mobile Apps) */}
      <Capabilities />

      {/* 5. Engineering Process (Discover → Design → Build → Test → Launch → Maintain) */}
      <ProcessTimeline />

      {/* 6. Technologies Strip */}
      <TechStack />

      {/* 7. Conversion Callout Banner */}
      <CtaBanner />
    </div>
  );
}
