import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { COMPANY_CONFIG } from "@/lib/company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Miaga Technologies LLP",
  description:
    "Privacy Policy for Miaga Technologies LLP explaining what personal data is collected on this website, how it is used, and how to contact us.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Miaga Technologies LLP",
    description:
      "Privacy Policy for Miaga Technologies LLP explaining what personal data is collected on this website, how it is used, and how to contact us.",
    url: `${COMPANY_CONFIG.siteUrl}/privacy-policy`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative pb-24">
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        subtitle="How Miaga Technologies LLP collects, uses, and safeguards information submitted through this website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <GlassCard className="p-8 sm:p-12 border-amethyst-500/25 space-y-8 text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how <strong>{COMPANY_CONFIG.legalName}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles personal information collected from visitors through our website at{" "}
              <a href={COMPANY_CONFIG.siteUrl} className="text-amethyst-600 dark:text-amethyst-400 underline">
                {COMPANY_CONFIG.siteUrl}
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when you submit an inquiry through our contact form or contact us directly by email or telephone. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Corporate or Personal Email Address</li>
              <li>Telephone / Mobile Number</li>
              <li>Selected services or project requirements</li>
              <li>Any additional message or inquiry details you choose to share</li>
            </ul>
            <p>
              We do not collect sensitive personal data, financial details, or payment card information through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              3. How We Use Your Information
            </h2>
            <p>
              The information you provide is used strictly for legitimate business purposes, specifically:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to your project inquiries, questions, or requests for service proposals</li>
              <li>Communicating with you regarding technical requirements or consultations</li>
              <li>Maintaining standard internal correspondence and business communication records</li>
            </ul>
            <p>
              We do not sell, rent, or lease your personal information to third parties or marketing platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              4. Data Retention & Security
            </h2>
            <p>
              We retain contact inquiry information only as long as necessary to fulfill the purpose for which it was submitted, or as required by applicable laws and business recordkeeping obligations. We implement reasonable administrative and technical safeguards to prevent unauthorized access, loss, or disclosure of submitted information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              5. Third-Party Links & Services
            </h2>
            <p>
              Our website may contain links to external websites, including our featured in-house application at{" "}
              <a href="https://www.mohabbathmatrimony.com" target="_blank" rel="noopener noreferrer" className="text-amethyst-600 dark:text-amethyst-400 underline">
                www.mohabbathmatrimony.com
              </a>. We are not responsible for the privacy practices of external third-party sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              6. Your Rights & Contact Information
            </h2>
            <p>
              If you have questions regarding this Privacy Policy, or wish to review, update, or request deletion of contact information you previously provided to us, please contact our registered office:
            </p>
            <div className="p-4 rounded-xl bg-pearl-100 dark:bg-violet-cosmic/80 border border-amethyst-500/20 font-mono text-xs space-y-1 text-text-primary dark:text-pearl-100">
              <div className="font-bold">{COMPANY_CONFIG.legalName}</div>
              <div>Registered Office: {COMPANY_CONFIG.registeredOffice}</div>
              <div>Email: {COMPANY_CONFIG.email}</div>
              <div>Phone: {COMPANY_CONFIG.phones.primary}</div>
            </div>
          </section>

          <section className="pt-4 border-t border-amethyst-500/15 text-xs text-text-muted">
            <p>Last updated: 14 August 2026</p>
          </section>
        </GlassCard>
      </div>
    </div>
  );
}
