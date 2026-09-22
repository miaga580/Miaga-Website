"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { CrescentLogo } from "@/components/visual/CrescentLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-violet-cosmic/85 backdrop-blur-xl py-3 border-b border-amethyst-500/15 shadow-[0_4px_25px_rgba(42,27,77,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center transition-transform duration-300 hover:scale-[1.02]">
            <CrescentLogo size={38} animated={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-violet-deep/50 border border-amethyst-500/15 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-amethyst-600 shadow-[0_2px_10px_rgba(155,107,232,0.4)]"
                      : "text-violet-royal dark:text-pearl-200 hover:text-amethyst-600 dark:hover:text-amethyst-300 hover:bg-amethyst-500/10"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1 py-0.2 rounded bg-amethyst-400/20 text-amethyst-600 dark:text-amethyst-200 border border-amethyst-400/30">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action buttons & Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-violet-royal dark:text-pearl-100 bg-white/60 dark:bg-violet-deep/80 border border-amethyst-500/20 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-violet-cosmic/95 backdrop-blur-2xl border-b border-amethyst-500/20 shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 font-semibold"
                      : "text-violet-royal dark:text-pearl-200 hover:bg-amethyst-500/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amethyst-400" />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amethyst-400/20 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-400/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-amethyst-500/15 flex flex-col gap-3">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
