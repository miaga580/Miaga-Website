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
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
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
      {/* 1. Hero Section (Full Viewport) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Ambient celestial bokeh particles */}
        <BokehField count={28} />

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="silver" size="md">
                  Software & App Development LLP
                </Badge>
              </div>

              <h1 className="font-display font-bold text-[28px] sm:text-5xl lg:text-6xl text-violet-royal dark:text-pearl-50 tracking-tight leading-[1.2] sm:leading-[1.1]">
                Software and Application Development for Modern Businesses.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-text-secondary dark:text-lavender-medium max-w-2xl font-normal leading-relaxed">
                {COMPANY_CONFIG.legalName} is a software and application development firm based in Kochi, Kerala. We build custom software platforms, native and cross-platform mobile apps, and maintain secure digital solutions for our clients.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Contact Us
                </Button>

                <Button href="/services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>

              {/* Core Pillars */}
              <div className="pt-6 border-t border-amethyst-500/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50">
                    Flutter
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Android & iOS Apps
                  </span>
                </div>

                <div>
                  <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50">
                    Python
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Backend & APIs
                  </span>
                </div>

                <div>
                  <span className="block text-base sm:text-lg font-display font-bold text-violet-royal dark:text-pearl-50">
                    AWS
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-muted leading-tight block">
                    Cloud Infrastructure
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

      {/* 2. Executive Overview */}
      <section className="relative py-16 border-y border-amethyst-500/15 bg-white/40 dark:bg-violet-deep/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                Custom Software
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Clean, documented, and modular architectures designed around your specific business processes and workflows.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                Mobile & Web Apps
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Cross-platform mobile applications for Android and iOS using Flutter, delivering responsive experiences across devices.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-2.5 rounded-xl bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-100">
                Ongoing Maintenance
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                Application updates, defect remediation, and infrastructure support provided during standard business hours.
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
