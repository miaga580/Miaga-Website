import React from "react";
import Link from "next/link";
import { HeroCanvas } from "@/components/visual/HeroCanvas";
import { BokehField } from "@/components/visual/BokehField";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Capabilities } from "@/components/home/Capabilities";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStack } from "@/components/home/TechStack";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Portfolio } from "@/components/home/Portfolio";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_CONFIG } from "@/lib/company";
import { ArrowRight, Code, Smartphone, Cloud, Sparkles, CheckCircle2, Shield, Layers } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miaga Technologies LLP | Software & Mobile App Development",
  description:
    "Miaga Technologies LLP is an Indian software and mobile app development LLP specializing in custom software, Flutter mobile applications, and cloud integration.",
  alternates: {
    canonical: COMPANY_CONFIG.siteUrl,
  },
  openGraph: {
    title: "Miaga Technologies LLP | Software & Mobile App Development",
    description:
      "Miaga Technologies LLP is an Indian software and mobile app development LLP specializing in custom software, Flutter mobile applications, and cloud integration.",
    url: COMPANY_CONFIG.siteUrl,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section (Enhanced Full Viewport with Visual Hierarchy) */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Ambient celestial bokeh particles & Background Gradients */}
        <BokehField count={32} />

        {/* Dynamic mesh gradient backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amethyst-500/15 via-sky-400/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Refined Pill Badge with glowing indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 dark:bg-violet-deep/60 backdrop-blur-md border border-amethyst-500/25 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amethyst-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amethyst-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-royal dark:text-pearl-100">
                  Engineering Digital Realities
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 font-mono font-medium">
                  LLP
                </span>
              </div>

              {/* Dynamic, visually compelling headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-violet-royal dark:text-pearl-50 tracking-tight leading-[1.12]">
                Software & Apps Built with{" "}
                <span className="text-shimmer italic font-normal">
                  Precision
                </span>{" "}
                Craft.
              </h1>

              {/* Factual, credible company narrative */}
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary dark:text-lavender-medium max-w-2xl font-normal leading-relaxed">
                <strong className="text-violet-royal dark:text-pearl-100 font-semibold">{COMPANY_CONFIG.legalName}</strong> is an application engineering practice based in Kochi, Kerala. We specialize in custom software platforms, responsive Flutter mobile apps for Android & iOS, and robust AWS cloud backends.
              </p>

              {/* Polished CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="shadow-amethyst-glow hover:shadow-lg hover:scale-[1.02] transition-all"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>

                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="hover:bg-amethyst-500/10 transition-all"
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Core Verified Stack Cards (Interactive Glass Pill Cards) */}
              <div className="pt-8 border-t border-amethyst-500/15">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-muted dark:text-lavender-medium/60 block mb-3">
                  Production Engineering Stack
                </span>
                <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
                  <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-violet-deep/50 backdrop-blur-md border border-amethyst-500/20 hover:border-amethyst-500/40 transition-all group">
                    <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50 group-hover:text-amethyst-600 dark:group-hover:text-amethyst-300 transition-colors">
                      Flutter
                    </span>
                    <span className="text-[11px] text-text-muted leading-tight block mt-0.5">
                      iOS & Android Apps
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-violet-deep/50 backdrop-blur-md border border-amethyst-500/20 hover:border-amethyst-500/40 transition-all group">
                    <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50 group-hover:text-amethyst-600 dark:group-hover:text-amethyst-300 transition-colors">
                      Python
                    </span>
                    <span className="text-[11px] text-text-muted leading-tight block mt-0.5">
                      Backend & APIs
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-violet-deep/50 backdrop-blur-md border border-amethyst-500/20 hover:border-amethyst-500/40 transition-all group">
                    <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50 group-hover:text-amethyst-600 dark:group-hover:text-amethyst-300 transition-colors">
                      AWS
                    </span>
                    <span className="text-[11px] text-text-muted leading-tight block mt-0.5">
                      Cloud Hosting
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Visual 3D Stage */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Pillars Section (Polished Glass Cards) */}
      <section className="relative py-20 border-y border-amethyst-500/15 bg-pearl-200/30 dark:bg-violet-deep/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white/70 dark:bg-violet-cosmic/70 border border-amethyst-500/20 shadow-sm hover:border-amethyst-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/25 flex items-center justify-center mb-5">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-100 mb-2">
                Custom Software
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Bespoke software platforms engineered around your organizational workflows, prioritizing modularity, clean documentation, and reliable Python backend services.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/70 dark:bg-violet-cosmic/70 border border-amethyst-500/20 shadow-sm hover:border-amethyst-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/25 flex items-center justify-center mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-100 mb-2">
                Mobile & Web Apps
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Cross-platform mobile applications for Android and iOS using Flutter, delivering unified codebases, fluid device interfaces, and seamless store deployment.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/70 dark:bg-violet-cosmic/70 border border-amethyst-500/20 shadow-sm hover:border-amethyst-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/25 flex items-center justify-center mb-5">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-100 mb-2">
                Maintenance & Cloud
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Ongoing application updates, defect remediation, and AWS cloud environment health checks provided during regular business hours to keep platforms stable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Overview */}
      <ServicesGrid />

      {/* 4. Core Capabilities */}
      <Capabilities />

      {/* 5. Featured Portfolio (Our Work) */}
      <Portfolio />

      {/* 6. Engineering Process */}
      <ProcessTimeline />

      {/* 7. Technologies Strip */}
      <TechStack />

      {/* 8. Conversion Callout Banner */}
      <CtaBanner />
    </div>
  );
}
