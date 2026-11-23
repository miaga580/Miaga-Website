import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { COMPANY_CONFIG } from "@/lib/company";
import { ExternalLink, ShieldAlert, Mail, Phone, Lock, UserX, FileCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Miaga Technologies LLP",
  description:
    "Privacy Policy for Miaga Technologies LLP and the applications it publishes, detailing data collection, purpose, sharing restrictions, retention, deletion rights, and security.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Miaga Technologies LLP",
    description:
      "Privacy Policy for Miaga Technologies LLP and the applications it publishes.",
    url: `${COMPANY_CONFIG.siteUrl}/privacy`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative pb-24">
      <PageHeader
        badge="Legal & Privacy Compliance"
        title="Privacy Policy"
        subtitle="Privacy Policy for Miaga Technologies LLP and the apps it publishes."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <GlassCard className="p-8 sm:p-12 border-amethyst-500/25 space-y-8 text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
          {/* Important notice for Mohabbath Matrimony users */}
          <div className="p-5 rounded-2xl bg-amethyst-500/10 dark:bg-amethyst-500/15 border border-amethyst-500/30 text-xs sm:text-sm text-violet-royal dark:text-pearl-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <FileCheck className="w-5 h-5 text-amethyst-600 dark:text-amethyst-400 shrink-0" />
              <span>
                Looking for the product-specific privacy policy for our matrimony app?
              </span>
            </div>
            <a
              href="https://www.mohabbathmatrimony.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-amethyst-600 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-sm hover:bg-amethyst-700 transition-colors shrink-0"
            >
              <span>mohabbathmatrimony.com/privacy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1. Introduction & Scope */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              1. Introduction & Scope
            </h2>
            <p>
              This Privacy Policy applies to <strong>{COMPANY_CONFIG.legalName}</strong> (LLPIN: {COMPANY_CONFIG.llpin}) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), our corporate website at{" "}
              <a href={COMPANY_CONFIG.siteUrl} className="text-amethyst-600 dark:text-amethyst-400 underline">
                {COMPANY_CONFIG.siteUrl}
              </a>, and the software applications published by Miaga Technologies LLP on Apple App Store, Google Play Store, and related digital distribution channels.
            </p>
          </section>

          {/* 2. Data Collected */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              2. Information We Collect
            </h2>
            <p>
              Depending on whether you visit our website or download and use our applications, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>Contact Information:</strong> Name, email address, telephone number, and message contents when you contact us via contact forms, customer support channels, or email.
              </li>
              <li>
                <strong>Account & Profile Information:</strong> Account credentials, verification details, and profile data voluntarily submitted inside our published applications.
              </li>
              <li>
                <strong>Technical & Diagnostic Data:</strong> IP address, device model, operating system version, app version, language preference, crash logs, and anonymized performance analytics necessary to maintain app stability.
              </li>
            </ul>
          </section>

          {/* 3. Purpose of Processing */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              3. Purpose of Data Processing
            </h2>
            <p>
              We process personal data strictly for legitimate operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide, operate, maintain, and improve our applications and services</li>
              <li>To authenticate user accounts and secure application access</li>
              <li>To respond to user inquiries, customer support requests, and service communications</li>
              <li>To detect, prevent, and remediate technical bugs, security incidents, or fraudulent activities</li>
              <li>To comply with applicable legal, accounting, and regulatory obligations</li>
            </ul>
          </section>

          {/* 4. Sharing: Service Providers Only - Never Sold */}
          <section className="space-y-3 p-5 rounded-2xl bg-pearl-100/80 dark:bg-violet-cosmic/70 border border-amethyst-500/20">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amethyst-500 shrink-0" />
              <h2 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-50">
                4. Data Sharing with Service Providers Only (Never Sold)
              </h2>
            </div>
            <p className="font-medium text-violet-royal dark:text-pearl-100">
              <strong>We do not sell, rent, trade, or monetize your personal data.</strong>
            </p>
            <p>
              Personal data is shared strictly with trusted third-party service providers who assist us in operating our services under strict contractual confidentiality obligations. These include cloud hosting and database providers (such as Amazon Web Services), push notification delivery platforms, crash reporting frameworks, and essential communication tools. These providers are authorized to process data solely to provide services to us and may not use it for their independent purposes.
            </p>
          </section>

          {/* 5. Retention and Deletion Rights */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              5. Data Retention & Your Deletion Rights
            </h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required to satisfy legal, dispute resolution, and regulatory requirements.
            </p>
            <p>
              <strong>Your Rights:</strong> You have the right to request access to, correction of, or deletion of your personal data at any time. Where our applications provide an in-app account deletion mechanism, you may delete your account and associated profile directly from within app settings. Alternatively, you may submit a deletion request by emailing us at{" "}
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-amethyst-600 dark:text-amethyst-400 font-semibold underline">
                {COMPANY_CONFIG.email}
              </a>. We will process verified requests within standard business response windows.
            </p>
          </section>

          {/* 6. Security */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              6. Data Security
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical security safeguards to protect personal data against accidental loss, unauthorized access, destruction, misuse, or alteration. All network communications between our apps and backend servers utilize encrypted TLS/HTTPS protocols.
            </p>
          </section>

          {/* 7. Age Requirement: No Users Under 18 */}
          <section className="space-y-3 p-5 rounded-2xl bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/25">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold">
              <UserX className="w-5 h-5 shrink-0" />
              <h2 className="font-display text-lg">
                7. Age Requirement: No Users Under 18
              </h2>
            </div>
            <p className="text-rose-900 dark:text-rose-200">
              Our website and applications (including Mohabbath Matrimony) are strictly intended for adult individuals who are at least 18 years of age (or the legal age of majority in their jurisdiction). We do not knowingly solicit, collect, or process personal data from children or individuals under the age of 18. If we become aware that personal data of a person under 18 has been collected, we will take immediate steps to delete that information.
            </p>
          </section>

          {/* 8. How to Contact Us */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              8. How to Contact Us
            </h2>
            <p>
              If you have questions, feedback, or data privacy requests regarding this Privacy Policy or our published apps, please contact our registered office:
            </p>
            <div className="p-5 rounded-2xl bg-pearl-100/80 dark:bg-violet-cosmic/70 border border-amethyst-500/20 font-mono text-xs space-y-1.5 text-text-primary dark:text-pearl-100">
              <div className="font-bold text-sm text-violet-royal dark:text-pearl-50">
                {COMPANY_CONFIG.legalName}
              </div>
              <div>LLPIN: {COMPANY_CONFIG.llpin}</div>
              <div>Designated Partner: {COMPANY_CONFIG.designatedPartner}</div>
              <div>Registered Office: {COMPANY_CONFIG.registeredOffice}</div>
              <div>
                Email:{" "}
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-amethyst-600 dark:text-amethyst-400 underline">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
              <div>Phone: {COMPANY_CONFIG.phones.primary}</div>
            </div>
          </section>

          {/* Effective Date */}
          <section className="pt-4 border-t border-amethyst-500/15 text-xs text-text-muted flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>Effective date: 23 November 2026</span>
            <span>Miaga Technologies LLP</span>
          </section>
        </GlassCard>
      </div>
    </div>
  );
}
