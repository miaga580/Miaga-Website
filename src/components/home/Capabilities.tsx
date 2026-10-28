"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Capabilities: React.FC = () => {
  return (
    <section className="relative py-24 bg-pearl-200/40 dark:bg-violet-cosmic/50 border-y border-amethyst-500/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amethyst-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="silver" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
            Core Capabilities
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
            Software & Mobile Development Focus
          </h2>
          <p className="mt-4 text-base text-text-secondary dark:text-lavender-medium">
            Building reliable digital solutions tailored to operational requirements and mobile platforms.
          </p>
        </div>

        {/* Feature 1: Software Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30">
                <Code2 className="w-5 h-5" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-amethyst-600 dark:text-amethyst-400">
                Software Engineering
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              Software Development & Architecture
            </h3>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We design, build, and deploy reliable software platforms engineered around your specific business requirements and workflows. Our development process prioritizes clean architecture, modular system components, and clear documentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Custom Backend Architectures",
                "System Integration APIs",
                "Data Modeling & Storage",
                "Technical Documentation",
                "Modular Service Architecture",
                "Cloud Deployment on AWS",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary dark:text-pearl-200">
                  <CheckCircle2 className="w-4 h-4 text-amethyst-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/services#software-development" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Software Development Details
              </Button>
            </div>
          </div>

          {/* Software Card Overview */}
          <div className="lg:col-span-6">
            <GlassCard className="border-amethyst-500/30 p-6 sm:p-8 shadow-xl">
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-amethyst-600 dark:text-amethyst-400 mb-4">
                Architecture Highlights
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-amethyst-500/15">
                  <h5 className="font-display font-bold text-sm text-violet-royal dark:text-pearl-50 mb-1">
                    Python & AWS Cloud Backends
                  </h5>
                  <p className="text-xs text-text-secondary dark:text-lavender-medium leading-relaxed">
                    Structured application backends leveraging Python services and Amazon Web Services infrastructure for steady, dependable operations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-amethyst-500/15">
                  <h5 className="font-display font-bold text-sm text-violet-royal dark:text-pearl-50 mb-1">
                    Clean, Maintainable Components
                  </h5>
                  <p className="text-xs text-text-secondary dark:text-lavender-medium leading-relaxed">
                    Modular codebases designed for ongoing feature enhancements and straightforward developer maintenance over time.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Feature 2: Mobile App Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Mobile Spec Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <GlassCard className="border-amethyst-500/30 p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amethyst-500/15">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amethyst-600 dark:text-amethyst-400">
                  Mobile Application Practice
                </span>
                <span className="text-xs font-mono text-text-muted">
                  Android & iOS
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-amethyst-500/15">
                <h5 className="font-display font-bold text-sm text-violet-royal dark:text-pearl-50 mb-1">
                  Cross-Platform Flutter Development
                </h5>
                <p className="text-xs text-text-secondary dark:text-lavender-medium leading-relaxed">
                  We use Flutter to deliver consistent, fluid user interfaces across Android and iOS devices from a single maintainable codebase.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-amethyst-500/15">
                <h5 className="font-display font-bold text-sm text-violet-royal dark:text-pearl-50 mb-1">
                  In-House Application Engineering
                </h5>
                <p className="text-xs text-text-secondary dark:text-lavender-medium leading-relaxed">
                  Demonstrated through our in-house application, Mohabbath Matrimony, currently in development with Flutter and Python.
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-amethyst-600 dark:text-amethyst-400">
                Mobile Engineering
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              Web & Mobile App Development
            </h3>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We create practical, responsive mobile and web applications for Android, iOS, and modern web browsers. Using Flutter and proven web frameworks, we deliver consistent user experiences across platforms from a single, maintainable codebase.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Cross-Platform Mobile Apps (Android & iOS)",
                "Responsive Web Applications",
                "RESTful API & Backend Connections",
                "App Store & Play Store Packaging",
                "Form Validation & User Workflows",
                "Secure Client-Server Communication",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary dark:text-pearl-200">
                  <CheckCircle2 className="w-4 h-4 text-amethyst-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services#web-mobile-apps" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Mobile App Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
