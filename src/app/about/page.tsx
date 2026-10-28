import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CrescentLogo } from "@/components/visual/CrescentLogo";
import { COMPANY_CONFIG } from "@/lib/company";
import { Shield, Target, Compass, Code, ArrowRight, Building, Calendar, Hash, MapPin, Mail, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Miaga Technologies LLP",
  description:
    "Learn about Miaga Technologies LLP: our corporate profile, legal registration, software development focus, and engineering principles.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | Miaga Technologies LLP",
    description:
      "Learn about Miaga Technologies LLP: our corporate profile, legal registration, software development focus, and engineering principles.",
    url: `${COMPANY_CONFIG.siteUrl}/about`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-amethyst-500" />,
    title: "Practical Engineering",
    desc: "We focus on clean, reliable code that solves concrete operational needs. Every application we develop is built with tested patterns and transparent documentation.",
  },
  {
    icon: <Code className="w-6 h-6 text-amethyst-500" />,
    title: "Purpose-Built Solutions",
    desc: "We build custom software tailored around our clients' workflows, prioritizing clarity, user ergonomics, and straightforward maintenance.",
  },
  {
    icon: <Shield className="w-6 h-6 text-amethyst-500" />,
    title: "System Reliability",
    desc: "We design software and cloud deployments with structured testing and stable configurations to ensure predictable performance.",
  },
  {
    icon: <Compass className="w-6 h-6 text-amethyst-500" />,
    title: "Transparent Collaboration",
    desc: "We operate with clear communication, documented deliverables, and direct engineering access throughout every development engagement.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Corporate Profile"
        title="About Miaga Technologies LLP"
        subtitle={COMPANY_CONFIG.businessPurpose}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-24">
        {/* 1. Who We Are & Corporate Entity Statement */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="silver" size="sm">
                Corporate Profile
              </Badge>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-violet-royal dark:text-pearl-50 tracking-tight leading-tight">
              Software & Application Development Practice
            </h2>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              <strong>{COMPANY_CONFIG.legalName}</strong> is a small software and application development limited liability partnership incorporated in Kerala, India. We carry on the business of software development, application development, designing, programming, testing, implementation, licensing, sale, distribution and maintenance of software applications, platforms and digital solutions, including in-house products, plus related IT services.
            </p>

            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              Our core work focuses on creating custom software architectures, native and cross-platform mobile applications using Flutter and Python, and managing secure cloud environments hosted on AWS. We also build and maintain proprietary digital solutions such as our featured matrimony mobile application, Mohabbath Matrimony.
            </p>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Contact Our Team
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-8 sm:p-10 border-amethyst-500/30 text-center flex flex-col items-center">
              <div className="mb-6 p-6 rounded-full bg-pearl-100 dark:bg-violet-cosmic border border-amethyst-500/20 shadow-inner">
                <CrescentLogo size={64} showText={false} animated={false} />
              </div>

              <h3 className="font-display font-bold text-2xl text-violet-royal dark:text-pearl-50">
                {COMPANY_CONFIG.legalName}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-amethyst-600 dark:text-amethyst-300 mt-1 block">
                Corporate Entity Details
              </span>

              <div className="w-full mt-6 pt-6 border-t border-amethyst-500/15 text-left space-y-3.5 text-xs">
                <div className="flex items-start justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amethyst-500" /> Legal Entity:
                  </span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 text-right">
                    {COMPANY_CONFIG.legalName}
                  </span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amethyst-500" /> Incorporated:
                  </span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 text-right">
                    {COMPANY_CONFIG.incorporated}
                  </span>
                </div>

                <div className="flex flex-col gap-1 py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amethyst-500" /> Registered Office:
                  </span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 leading-relaxed">
                    {COMPANY_CONFIG.registeredOffice}
                  </span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amethyst-500" /> Phone:
                  </span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 text-right">
                    {COMPANY_CONFIG.phones.primary}
                  </span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amethyst-500" /> Email:
                  </span>
                  <span className="font-medium text-text-primary dark:text-pearl-100 text-right">
                    {COMPANY_CONFIG.email}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 2. Guiding Principles */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="silver" size="md" className="mb-3">
              Principles
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-violet-royal dark:text-pearl-100">
              Our Principles & Development Approach
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

        {/* 3. Business Scope */}
        <section className="p-8 sm:p-14 rounded-3xl bg-pearl-100/70 dark:bg-violet-cosmic/70 border border-amethyst-500/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amethyst-600 dark:text-amethyst-400">
              Business Scope
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-royal dark:text-pearl-50">
              What We Build & Deliver
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-lavender-medium leading-relaxed">
              We manage digital projects from initial design and programming through deployment and ongoing support. Every project is carried out with clear specifications, practical tech choices, and responsive communication during business hours.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { title: "Custom Software", desc: "Backend services and data solutions built with Python and AWS." },
                { title: "Mobile & Web Apps", desc: "Cross-platform mobile apps built with Flutter for Android and iOS." },
                { title: "Support & Updates", desc: "Regular defect remediation and platform maintenance." },
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
