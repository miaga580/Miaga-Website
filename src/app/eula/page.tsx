import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { COMPANY_CONFIG } from "@/lib/company";
import { ExternalLink, ShieldCheck, Mail, Phone, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use (EULA) | Miaga Technologies LLP",
  description:
    "End User License Agreement (EULA) and Terms of Use for applications published by Miaga Technologies LLP under the Apple Standard EULA.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/eula`,
  },
  openGraph: {
    title: "Terms of Use (EULA) | Miaga Technologies LLP",
    description:
      "End User License Agreement (EULA) and Terms of Use for applications published by Miaga Technologies LLP under the Apple Standard EULA.",
    url: `${COMPANY_CONFIG.siteUrl}/eula`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function EulaPage() {
  return (
    <div className="relative pb-24">
      <PageHeader
        badge="Legal & App Store Agreement"
        title="Terms of Use (EULA)"
        subtitle="End User License Agreement governing applications published by Miaga Technologies LLP."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <GlassCard className="p-8 sm:p-12 border-amethyst-500/25 space-y-8 text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
          {/* Main Statement */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
                Standard End User License Agreement
              </h2>
            </div>
            <p className="text-base text-violet-royal dark:text-pearl-100 font-medium leading-relaxed">
              Apps published by <strong>{COMPANY_CONFIG.legalName}</strong> are licensed under the Apple Standard End User License Agreement (Apple Standard EULA):{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amethyst-600 dark:text-amethyst-400 font-semibold underline inline-flex items-center gap-1 hover:text-amethyst-700 dark:hover:text-amethyst-300"
              >
                <span>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </section>

          {/* Privacy Link */}
          <section className="p-5 rounded-2xl bg-pearl-100/80 dark:bg-violet-cosmic/70 border border-amethyst-500/20 space-y-2">
            <div className="flex items-center gap-2 text-violet-royal dark:text-pearl-50 font-bold">
              <FileText className="w-4 h-4 text-amethyst-500" />
              <span>Privacy Policy Notice</span>
            </div>
            <p>
              Your privacy is of vital importance to us. Please also read our Privacy Policy:{" "}
              <Link
                href="/privacy"
                className="text-amethyst-600 dark:text-amethyst-400 font-semibold underline hover:text-amethyst-700 dark:hover:text-amethyst-300"
              >
                /privacy
              </Link>
            </p>
          </section>

          {/* Scope of License & Terms */}
          <section className="space-y-3">
            <h3 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-50">
              Scope of License & App Terms
            </h3>
            <p>
              By downloading, installing, or accessing any application published by {COMPANY_CONFIG.legalName} (including in-house products such as Mohabbath Matrimony), you agree to be bound by the terms of the Apple Standard EULA, as supplemented by applicable local laws and product terms.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>License Grant:</strong> You are granted a non-transferable, non-exclusive license to use the application on Apple-branded products that you own or control, as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions.
              </li>
              <li>
                <strong>Restrictions:</strong> You may not modify, reverse engineer, decompile, or disassemble the application, nor create derivative works from it.
              </li>
              <li>
                <strong>Consent to Use of Data:</strong> You agree that we may collect and use technical data and related information as described in our Privacy Policy.
              </li>
              <li>
                <strong>Termination:</strong> This agreement is effective until terminated by you or {COMPANY_CONFIG.legalName}. Your rights under this license terminate automatically if you fail to comply with any of its terms.
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="space-y-3 pt-2">
            <h3 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-50">
              Support & Contact Information
            </h3>
            <p>
              For any questions regarding our applications, terms of use, licensing, or support requests, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-black/30 border border-amethyst-500/20 font-mono text-xs space-y-2 text-text-primary dark:text-pearl-100">
              <div className="font-bold text-sm text-violet-royal dark:text-pearl-50">
                {COMPANY_CONFIG.legalName}
              </div>
              <div className="text-text-muted">LLPIN: {COMPANY_CONFIG.llpin}</div>
              <div>Address: {COMPANY_CONFIG.registeredOffice}</div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="flex items-center gap-1.5 font-sans">
                  <Mail className="w-3.5 h-3.5 text-amethyst-500" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-amethyst-600 dark:text-amethyst-400 underline font-mono">
                    {COMPANY_CONFIG.email}
                  </a>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1.5 font-sans">
                  <Phone className="w-3.5 h-3.5 text-amethyst-500" />
                  <span className="font-mono">{COMPANY_CONFIG.phones.primary}</span>
                </span>
              </div>
            </div>
          </section>

          <section className="pt-4 border-t border-amethyst-500/15 text-xs text-text-muted flex justify-between items-center">
            <span>Last updated: 23 November 2026</span>
            <span>Miaga Technologies LLP</span>
          </section>
        </GlassCard>
      </div>
    </div>
  );
}
