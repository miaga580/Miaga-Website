import React from "react";
import { BokehField } from "@/components/visual/BokehField";
import { Badge } from "@/components/ui/Badge";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-amethyst-500/15">
      {/* Background Ethereal Glow & Bokeh Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-amethyst-500/12 dark:bg-amethyst-600/20 rounded-full blur-3xl" />
        <BokehField count={18} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="flex justify-center mb-4">
            <Badge variant="holographic" size="md">
              {badge}
            </Badge>
          </div>
        )}

        <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-violet-royal dark:text-pearl-50 tracking-tight leading-[1.15] mb-6">
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-text-secondary dark:text-lavender-medium max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>

        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </div>
  );
};
