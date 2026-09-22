import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Box, ArrowRight, Sparkles, Layers } from "lucide-react";

export const ProductsTeaser: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-pearl-200/30 dark:bg-violet-cosmic/40 border-t border-amethyst-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="holographic" size="md" className="mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
              In-House Digital IP
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight leading-tight">
              Proprietary Software Solutions
            </h2>
            <p className="mt-4 text-base text-text-secondary dark:text-lavender-medium">
              Alongside custom engineering, Miaga Technologies LLP develops high-performance proprietary software engines and development toolchains.
            </p>
          </div>

          <div>
            <Button href="/products" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore In-House Platforms
            </Button>
          </div>
        </div>

        {/* Product Cards Grid with Clear Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.slice(0, 2).map((product) => (
            <GlassCard key={product.id} className="p-8 border-amethyst-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 flex items-center justify-center border border-amethyst-500/25">
                      <Box className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-text-muted">
                      {product.codeName}
                    </span>
                  </div>
                  <Badge variant="amethyst" size="sm">
                    {product.status}
                  </Badge>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-violet-royal dark:text-pearl-50 mb-2">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-amethyst-700 dark:text-amethyst-300 mb-4">
                  {product.tagline}
                </p>

                <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-amethyst-500/15 space-y-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-violet-royal dark:text-pearl-100 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-amethyst-500" />
                    Architectural Specifications
                  </span>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                      <div key={key}>
                        <span className="text-[10px] text-text-muted block">{key}</span>
                        <span className="font-mono font-semibold text-text-primary dark:text-pearl-100">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-amethyst-500/15">
                <div className="flex flex-wrap gap-1.5">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-amethyst-500/10 text-amethyst-700 dark:text-amethyst-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amethyst-600 dark:text-amethyst-400 hover:underline shrink-0 ml-2"
                >
                  <span>Details & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
