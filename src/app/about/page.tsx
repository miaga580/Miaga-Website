import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CrescentLogo } from "@/components/visual/CrescentLogo";
import { Shield, Sparkles, Target, Compass, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Miaga Technologies LLP",
  description:
    "Learn about Miaga Technologies LLP: our engineering mission, architectural approach, core values, and commitment to high-reliability software craftsmanship.",
};

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-amethyst-500" />,
    title: "Engineering Precision",
    desc: "We reject superficial code shortcuts. Every system we design is built upon rigorous mathematical and architectural foundations, automated test suites, and transparent documentation.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amethyst-500" />,
    title: "Ethereal Craftsmanship",
    desc: "We believe enterprise software should evoke wonder. We merge technical resilience with sensory refinement—fluid micro-interactions, flawless contrast, and intuitive human ergonomics.",
  },
  {
    icon: <Shield className="w-6 h-6 text-amethyst-500" />,
    title: "Architectural Resilience",
    desc: "High concurrency is not an afterthought; it is our baseline. Our systems are engineered to withstand extreme network degradation, traffic surges, and mission-critical failovers.",
  },
  {
    icon: <Compass className="w-6 h-6 text-amethyst-500" />,
    title: "Radical Transparency",
    desc: "We engage as true engineering partners. Clients receive direct access to repositories, daily continuous integration metrics, clear deliverables, and honest technical guidance.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Corporate Identity"
        title="Miaga Technologies LLP"
        subtitle="Carrying on the business of software development, application development, design, programming, testing, licensing, sale, distribution, and maintenance of modern digital platforms."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-24">
        {/* 1. Mission & Corporate Entity Statement */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="silver" size="sm">
                Corporate Profile
              </Badge>
              <span className="text-xs uppercase tracking-widest font-mono text-text-muted">
                Entity Status: Active LLP
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-violet-royal dark:text-pearl-50 tracking-tight leading-tight">
              A Modern Engineering House with a Distinctive Signature
            </h2>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              <strong>Miaga Technologies LLP</strong> was formed to bridge the divide between severe enterprise
              architectures and ethereal digital design. We believe that mission-critical backends—video streaming
              pipelines, transactional platforms, and native mobile apps—deserve the same elevated aesthetic and tactile
              precision as luxury consumer interfaces.
            </p>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              Our multidisciplinary engineers and product architects oversee the entire lifecycle of software: from
              requirements discovery and high-fidelity prototyping, to cloud-native microservices engineering,
              automated QA regression, commercial licensing, and ongoing 24/7 SLA infrastructure maintenance.
            </p>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Initiate Corporate Dialogue
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-8 sm:p-10 border-amethyst-500/30 text-center flex flex-col items-center">
              <div className="mb-6 p-6 rounded-full bg-pearl-100 dark:bg-violet-cosmic border border-amethyst-500/20 shadow-inner">
                <CrescentLogo size={64} showText={false} animated={true} />
              </div>

              <h3 className="font-display font-bold text-2xl text-violet-royal dark:text-pearl-50">
                Miaga Technologies LLP
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-amethyst-600 dark:text-amethyst-300 mt-1 block">
                Engineering & Technology Solutions
              </span>

              <div className="w-full mt-6 pt-6 border-t border-amethyst-500/15 text-left space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted">Business Form:</span>
                  <span className="font-medium text-text-primary dark:text-pearl-100">
                    Limited Liability Partnership
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted">Primary Focus:</span>
                  <span className="font-medium text-text-primary dark:text-pearl-100">
                    Software, OTT Platforms & Mobile
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted">Quality Standard:</span>
                  <span className="font-medium text-text-primary dark:text-pearl-100">
                    Automated CI/CD & WCAG AA
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Corporate Attestation:</span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 font-mono">
                    © Miaga Technologies LLP
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 2. Core Values */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="holographic" size="md" className="mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
              Guiding Principles
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-violet-royal dark:text-pearl-100">
              The Tenets That Shape Our Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => (
              <GlassCard key={val.title} className="p-8 border-amethyst-500/25">
                <div className="w-12 h-12 rounded-xl bg-amethyst-500/10 border border-amethyst-500/20 flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
                  {val.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 3. Engineering Philosophy & Approach */}
        <section className="p-8 sm:p-14 rounded-3xl bg-pearl-100/70 dark:bg-violet-cosmic/70 border border-amethyst-500/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amethyst-600 dark:text-amethyst-400">
              Methodology
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              How We Approach Complex Engineering Challenges
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We operate in focused, highly autonomous engineering pods consisting of senior software architects, UI/UX
              designers, and QA automation leads. By keeping our teams lean and communication direct, we eliminate
              bureaucratic drag and translate high-level vision into scalable production software in record time.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { title: "Domain-Driven Design", desc: "Clean boundaries between core logic and infrastructure." },
                { title: "Continuous Delivery", desc: "Automated pipelines testing every commit before staging." },
                { title: "Zero Filler Code", desc: "Maintainable, concise, and documented solutions." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-amethyst-500/15">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-violet-royal dark:text-pearl-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-text-secondary dark:text-lavender-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
