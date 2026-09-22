import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-violet-royal via-amethyst-800 to-violet-deep text-white shadow-2xl border border-white/20">
          {/* Ambient Ethereal Glow & Caustic Simulation */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amethyst-400/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Filigree corner accents */}
          <div className="absolute top-4 right-4 opacity-25 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M60 0C40 0 20 20 20 40V60" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="50" cy="10" r="2" fill="#FDE047" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-pearl-100 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
              Initiate Collaboration
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Ready to engineer your next mission-critical digital reality?
            </h2>

            <p className="text-base sm:text-lg text-pearl-300 leading-relaxed max-w-2xl mb-8">
              Whether you require a high-throughput OTT streaming platform, a native mobile app ecosystem, or bespoke enterprise software, Miaga Technologies LLP delivers world-class execution.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-violet-royal hover:bg-pearl-100 hover:text-violet-royal shadow-xl"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Architecture Consultation
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/25"
              >
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
