import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SERVICES } from "@/lib/constants";
import {
  Code2,
  Smartphone,
  Tv,
  Palette,
  ShieldCheck,
  GitMerge,
  KeyRound,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Engineering Services | Miaga Technologies LLP",
  description:
    "Explore our full suite of digital engineering capabilities: custom enterprise software, native mobile apps, OTT video streaming systems, UI/UX design, QA testing, software licensing, and 24/7 maintenance.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Tv: <Tv className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  GitMerge: <GitMerge className="w-8 h-8" />,
  KeyRound: <KeyRound className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Enterprise Service Matrix"
        title="Full-Lifecycle Software Engineering & Platforms"
        subtitle="Miaga Technologies LLP delivers precision-crafted digital solutions, from carrier-grade video streaming infrastructure to native mobile ecosystems and 24/7 mission-critical operations."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Request Service Proposal
          </Button>
          <Button href="/ott-platforms" variant="secondary" size="md">
            View OTT Dedicated Showcase
          </Button>
        </div>
      </PageHeader>

      {/* Services Detailed Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <GlassCard className="p-8 sm:p-12 border-amethyst-500/25">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Overview, Narrative & Technologies */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/30 flex items-center justify-center">
                          {ICON_MAP[service.icon] || <Code2 className="w-8 h-8" />}
                        </div>
                        <div>
                          <span className="font-mono text-xs font-semibold text-text-muted">
                            Capability #0{index + 1}
                          </span>
                          <h2 className="font-display font-bold text-2xl sm:text-3xl text-violet-royal dark:text-pearl-50">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
                        {service.fullDesc}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100 flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-amethyst-500" />
                          Architectural Advantages
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary dark:text-lavender-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="pt-2">
                        <span className="text-xs uppercase tracking-wider font-bold text-text-muted block mb-2">
                          Production Stacks
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-amethyst-500/15 text-violet-royal dark:text-pearl-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Deliverables Card & CTA */}
                    <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-pearl-100/80 dark:bg-violet-cosmic/80 border border-amethyst-500/20 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Layers className="w-4 h-4 text-amethyst-500" />
                          <h3 className="text-xs uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100">
                            Engineered Deliverables
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary dark:text-lavender-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amethyst-500 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-amethyst-500/15 flex flex-col gap-3">
                        <Button
                          href={`/contact?service=${service.id}`}
                          variant="primary"
                          size="md"
                          className="w-full"
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                        >
                          Inquire for {service.title.split(" ")[0]}
                        </Button>

                        {service.id === "ott-platforms" && (
                          <Link
                            href="/ott-platforms"
                            className="text-center text-xs font-semibold text-amethyst-600 dark:text-amethyst-400 hover:underline"
                          >
                            Explore Dedicated Streaming Interactive Sandbox →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
