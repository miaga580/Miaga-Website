import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PRODUCTS } from "@/lib/constants";
import { Box, Layers, Cpu, ArrowRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";

export const metadata = {
  title: "Proprietary Software Products | Miaga Technologies LLP",
  description:
    "Explore Miaga Technologies LLP's in-house software engines, development frameworks, and platforms engineered for streaming, QA automation, mobile sync, and licensing.",
};

export default function ProductsPage() {
  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="In-House Platforms & Toolchains"
        title="Proprietary Digital Products"
        subtitle="In parallel with bespoke client engineering, Miaga Technologies LLP invests heavily in internal R&D, developing reusable, high-efficiency software engines and developer platforms."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact?subject=Products" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Inquire for Enterprise Licensing & Pilot Access
          </Button>
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Placeholder Advisory Banner */}
        <div className="p-4 rounded-2xl bg-amethyst-500/10 border border-amethyst-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-violet-royal dark:text-pearl-100">
            <Terminal className="w-4 h-4 text-amethyst-500 shrink-0" />
            <span>
              <strong>Note on In-House Products:</strong> The software products below represent Miaga's proprietary IP. Product specifications and cards below are formatted with clear placeholders ready for live deployment synchronization.
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-amethyst-600 dark:text-amethyst-300 shrink-0">
            [Status: Active R&D]
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PRODUCTS.map((product, idx) => (
            <GlassCard key={product.id} className="p-8 sm:p-10 border-amethyst-500/30 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-300 flex items-center justify-center border border-amethyst-500/25">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-text-muted">
                        Product Code: {product.codeName}
                      </span>
                    </div>
                  </div>
                  <Badge variant="amethyst" size="sm">
                    {product.status}
                  </Badge>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-violet-royal dark:text-pearl-50 mb-2">
                  {product.name}
                </h2>

                <p className="text-sm font-medium text-amethyst-700 dark:text-amethyst-300 mb-4">
                  {product.tagline}
                </p>

                <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
                    Engineered Capabilities
                  </span>
                  <div className="space-y-2">
                    {product.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-text-secondary dark:text-lavender-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Matrix */}
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-amethyst-500/15 space-y-3 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amethyst-500" />
                    Technical Metrics & Environment
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key}>
                        <span className="text-[10px] text-text-muted block">{key}</span>
                        <span className="font-mono font-semibold text-violet-royal dark:text-pearl-100">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with tech stack & action */}
              <div className="pt-6 border-t border-amethyst-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-amethyst-500/10 text-amethyst-700 dark:text-amethyst-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  href={`/contact?product=${product.id}`}
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Request Early Access
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
