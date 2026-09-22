import React from "react";
import Link from "next/link";
import { CrescentLogo } from "@/components/visual/CrescentLogo";
import { SERVICES, PRODUCTS, CONTACT_INFO } from "@/lib/constants";
import { ArrowUpRight, Sparkles, Mail, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-pearl-200/60 dark:bg-violet-cosmic/95 border-t border-amethyst-500/20 pt-16 pb-12 overflow-hidden">
      {/* Soft Ambient Caustic & Star Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amethyst-500/10 dark:bg-amethyst-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand Overview & Enterprise Contact Hook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-amethyst-500/15">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <CrescentLogo size={44} />
            </Link>
            <p className="text-sm text-text-secondary dark:text-lavender-medium max-w-md leading-relaxed mt-2">
              Engineering digital platforms with ethereal precision. From carrier-grade OTT streaming ecosystems and
              enterprise cloud systems to fluid mobile applications and proprietary software products.
            </p>

            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-amethyst-500/10 border border-amethyst-500/20 text-xs text-amethyst-700 dark:text-amethyst-300 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Global Enterprise Engagements</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Core Services */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-violet-royal dark:text-pearl-100 mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-text-secondary dark:text-lavender-medium">
                {SERVICES.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.id}`}
                      className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-amethyst-600 dark:text-amethyst-400 font-semibold hover:underline mt-1"
                  >
                    View All Services <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Flagship Practice & Products */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-violet-royal dark:text-pearl-100 mb-4">
                Specialties
              </h4>
              <ul className="space-y-2.5 text-xs text-text-secondary dark:text-lavender-medium">
                <li>
                  <Link
                    href="/ott-platforms"
                    className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors flex items-center gap-1"
                  >
                    <span>OTT Video Streaming</span>
                    <span className="text-[9px] px-1 bg-amethyst-500/20 text-amethyst-600 dark:text-amethyst-300 rounded">
                      Core
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#mobile-apps"
                    className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
                  >
                    Native iOS & Android
                  </Link>
                </li>
                {PRODUCTS.slice(0, 3).map((prod) => (
                  <li key={prod.id}>
                    <Link
                      href="/products"
                      className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
                    >
                      {prod.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate & Inquiries */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-violet-royal dark:text-pearl-100 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-text-secondary dark:text-lavender-medium">
                <li>
                  <Link href="/about" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    About Miaga LLP
                  </Link>
                </li>
                <li>
                  <Link href="/about#process" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Engineering Process
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Proprietary Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Consultation & RFPs
                  </Link>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-1.5 text-violet-royal dark:text-pearl-100">
                    <Mail className="w-3.5 h-3.5 text-amethyst-500" />
                    <span className="font-medium">{CONTACT_INFO.email}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Strict Copyright & Legal Statements */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted dark:text-lavender-medium/70">
          <div className="flex items-center gap-2 text-center sm:text-left font-medium">
            <span>© Miaga Technologies LLP. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1 text-[11px]">
              <Shield className="w-3.5 h-3.5 text-amethyst-500" />
              <span>Enterprise Standards & Governance</span>
            </span>
            <span>Security & Compliance</span>
            <span>Confidentiality Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
