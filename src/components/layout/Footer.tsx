import React from "react";
import Link from "next/link";
import { CrescentLogo } from "@/components/visual/CrescentLogo";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";
import { COMPANY_CONFIG } from "@/lib/company";
import { ArrowUpRight, Sparkles, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-pearl-200/60 dark:bg-violet-cosmic/95 border-t border-amethyst-500/20 pt-16 pb-12 overflow-hidden">
      {/* Soft Ambient Caustic & Star Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amethyst-500/10 dark:bg-amethyst-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand Overview & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-amethyst-500/15">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <CrescentLogo size={44} showLlpBadge={true} />
            </Link>
            <p className="text-sm text-text-secondary dark:text-lavender-medium max-w-md leading-relaxed mt-2">
              {COMPANY_CONFIG.legalName} is a software and app development limited liability partnership. We build custom software solutions, responsive web and mobile applications, and maintain digital platforms for our clients.
            </p>

            <div className="mt-2 space-y-1.5 text-xs text-text-secondary dark:text-lavender-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amethyst-500 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.registeredOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amethyst-500 shrink-0" />
                <span>{COMPANY_CONFIG.phones.primary}</span>
              </div>
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
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.id}`}
                      className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Work */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-violet-royal dark:text-pearl-100 mb-4">
                Our Work
              </h4>
              <ul className="space-y-2.5 text-xs text-text-secondary dark:text-lavender-medium">
                <li>
                  <Link
                    href="/#apps"
                    className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
                  >
                    Mohabbath Matrimony
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.mohabbathmatrimony.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>mohabbathmatrimony.com</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
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
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="pt-2">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-1.5 text-violet-royal dark:text-pearl-100 hover:text-amethyst-600 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5 text-amethyst-500" />
                    <span className="font-medium">{CONTACT_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Strict Copyright & Legal Navigation Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted dark:text-lavender-medium/70">
          <div className="flex items-center gap-2 text-center sm:text-left font-medium">
            <span>© {COMPANY_CONFIG.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-amethyst-600 dark:hover:text-amethyst-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
