import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { COMPANY_CONFIG } from "@/lib/company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Miaga Technologies LLP",
  description:
    "Terms and Conditions governing the use of the Miaga Technologies LLP corporate website.",
  alternates: {
    canonical: `${COMPANY_CONFIG.siteUrl}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms and Conditions | Miaga Technologies LLP",
    description:
      "Terms and Conditions governing the use of the Miaga Technologies LLP corporate website.",
    url: `${COMPANY_CONFIG.siteUrl}/terms-and-conditions`,
    siteName: COMPANY_CONFIG.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative pb-24">
      <PageHeader
        badge="Legal"
        title="Terms and Conditions"
        subtitle="Terms and conditions governing the use of this website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <GlassCard className="p-8 sm:p-12 border-amethyst-500/25 space-y-8 text-sm text-text-secondary dark:text-lavender-medium leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the website of <strong>{COMPANY_CONFIG.legalName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at{" "}
              <a href={COMPANY_CONFIG.siteUrl} className="text-amethyst-600 dark:text-amethyst-400 underline">
                {COMPANY_CONFIG.siteUrl}
              </a>, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              2. About the Company & Scope of Website
            </h2>
            <p>
              {COMPANY_CONFIG.legalName} is a limited liability partnership incorporated in India carrying on the business of software development, application development, designing, programming, testing, implementation, licensing, sale, distribution and maintenance of software applications, platforms and digital solutions, including in-house products, plus related IT services.
            </p>
            <p>
              This website serves as an informational corporate presence describing our engineering capabilities, portfolio, and contact coordinates. Specific commercial software development or consulting services are governed by separate, formally executed written client agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              3. Intellectual Property Rights
            </h2>
            <p>
              All content on this website—including company branding, logos, graphic assets, layouts, text descriptions, and source code—is the property of {COMPANY_CONFIG.legalName} or its licensors and is protected by applicable intellectual property and copyright laws. Unauthorized reproduction, modification, or distribution is prohibited without our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              4. Permitted Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit false, misleading, or unauthorized information through our contact form</li>
              <li>Attempt to gain unauthorized access to our web servers, systems, or network infrastructure</li>
              <li>Transmit any malicious code, viruses, or harmful data to the website</li>
              <li>Interfere with or disrupt the normal operation of this website</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              5. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              The materials and information on this website are provided on an &quot;as is&quot; and &quot;as available&quot; basis for general corporate information. While we endeavor to keep all information accurate and current, we make no express or implied warranties regarding completeness or operational availability.
            </p>
            <p>
              To the fullest extent permitted by applicable law, {COMPANY_CONFIG.legalName} shall not be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Ernakulam / Kochi, Kerala, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50">
              7. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms and Conditions, please contact us at:
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
