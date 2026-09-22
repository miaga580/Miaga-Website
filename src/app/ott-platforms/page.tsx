import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StreamingMockup } from "@/components/ott/StreamingMockup";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Tv,
  Radio,
  CreditCard,
  MonitorSmartphone,
  Film,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Cpu,
  Globe,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "OTT & Video Streaming Platforms | Miaga Technologies LLP",
  description:
    "Carrier-grade OTT video streaming platform engineering. Low-latency live and VOD delivery, smart TV and mobile apps, multi-DRM security, and real-time QoE analytics.",
};

const OTT_FEATURES = [
  {
    icon: <Radio className="w-6 h-6 text-amethyst-500" />,
    title: "Live & VOD High-Throughput Delivery",
    desc: "Sub-second glass-to-glass latency leveraging CMAF and chunked HLS/MPEG-DASH. Adaptive bitrate (ABR) ladders dynamically adjust to network variations without buffering or stutter.",
    points: [
      "Sub-second live streaming glass-to-glass latency",
      "Dynamic ABR algorithms preventing re-buffering",
      "Automated live-to-VOD clipping and archival",
      "Multi-region CDN origin shielding and caching",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-amethyst-500" />,
    title: "Subscriptions & Monetization Engine",
    desc: "Flexible revenue architectures accommodating SVOD (recurring subscriptions), AVOD (server-side ad insertion with SCTE-35 markers), TVOD (pay-per-view), and freemium tiers.",
    points: [
      "Targeted Server-Side Ad Insertion (SSAI / CSAI)",
      "Multi-currency recurring subscription billing",
      "App Store, Google Play & Roku in-app purchases",
      "Tiered paywalls with granular entitlement rules",
    ],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-amethyst-500" />,
    title: "True Multi-Device Ecosystem",
    desc: "Unified viewer experiences across Smart TVs (Samsung Tizen, LG webOS, Android TV, Apple TV, Fire TV), mobile platforms (iOS and Android), and progressive modern web players.",
    points: [
      "Custom Smart TV player SDKs with 10-foot UI",
      "Seamless cross-device resume and watch history sync",
      "Chromecast and Apple AirPlay 2 casting support",
      "Offline downloads with hardware-encrypted storage",
    ],
  },
  {
    icon: <Film className="w-6 h-6 text-amethyst-500" />,
    title: "Video CMS & Multi-DRM Security",
    desc: "Comprehensive media asset management with automated multi-profile cloud transcoding, metadata taxonomy, and enterprise-grade multi-DRM cryptographic packaging.",
    points: [
      "Automated cloud transcoding pipelines (FFmpeg / AWS)",
      "Widevine Modular, Apple FairPlay & Microsoft PlayReady",
      "Dynamic forensic watermarking and screen-capture deterrence",
      "Multi-track audio (Dolby Atmos / 5.1) and multi-language subtitles",
    ],
  },
  {
    icon: <LineChart className="w-6 h-6 text-amethyst-500" />,
    title: "Real-Time QoE & QoS Telemetry",
    desc: "Granular client-side and server-side instrumentation capturing buffer ratios, time-to-first-frame (TTFF), bitrate switches, drop-off rates, and concurrent stream health.",
    points: [
      "Sub-second video heartbeat and playback telemetry",
      "Automated root-cause bottleneck identification",
      "Real-time geographical concurrency heatmaps",
      "Executive churn and content engagement analytics",
    ],
  },
];

export default function OttPlatformsPage() {
  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Specialized Engineering Practice"
        title="Next-Generation OTT Video Streaming Platforms"
        subtitle="We build scalable, broadcast-grade video streaming ecosystems for media conglomerates, live sports broadcasters, and digital entertainment creators."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact?service=ott-platforms" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Request OTT Technical Blueprint
          </Button>
          <Button href="/products" variant="secondary" size="md">
            View [Product: StreamCore OTT]
          </Button>
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-24">
        {/* 1. Interactive Streaming Sandbox */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-violet-royal dark:text-pearl-100">
              Interactive Client Player Architecture
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-text-secondary dark:text-lavender-medium">
              Interact with the live player controls below to explore resolution adaptation, multi-audio tracks, and multi-device viewports.
            </p>
          </div>

          <StreamingMockup />
        </section>

        {/* 2. Core OTT Feature List Showcase */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="holographic" size="md" className="mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amethyst-500" />
              Comprehensive Technical Matrix
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-violet-royal dark:text-pearl-100 tracking-tight">
              Enterprise Streaming Capabilities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary dark:text-lavender-medium">
              Every layer of our OTT architecture is designed for fault tolerance, security, and effortless scaling to millions of simultaneous streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OTT_FEATURES.map((feature, idx) => (
              <GlassCard key={idx} className="p-7 border-amethyst-500/25 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amethyst-500/10 flex items-center justify-center border border-amethyst-500/20 mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-violet-royal dark:text-pearl-50 mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-lavender-medium leading-relaxed mb-5">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-amethyst-500/15 space-y-2">
                  {feature.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-text-primary dark:text-pearl-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amethyst-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}

            {/* Architecture Card */}
            <GlassCard className="p-7 border-amethyst-500/35 bg-gradient-to-br from-amethyst-900/40 via-violet-cosmic/60 to-violet-deep/80 text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-5">
                  <ShieldCheck className="w-6 h-6 text-amethyst-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  Turnkey Deployment & SLA Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-pearl-200 leading-relaxed mb-4">
                  We don't just build your OTT platform; our DevOps team provides 24/7 origin monitoring, CDN traffic re-routing, and guaranteed 99.99% availability during major live events.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15">
                <Button href="/contact?service=ott-platforms" variant="primary" size="sm" className="w-full">
                  Discuss Live Streaming Requirements
                </Button>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 3. Interactive Architecture Flow Diagram */}
        <section className="p-8 sm:p-12 rounded-3xl bg-pearl-100/70 dark:bg-violet-cosmic/70 border border-amethyst-500/25">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amethyst-600 dark:text-amethyst-400">
              Pipeline Topology
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-violet-royal dark:text-pearl-100 mt-1">
              End-to-End Glass-to-Glass Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              {
                step: "01. Ingestion",
                title: "Live Feed & Mezzanine VOD",
                desc: "SRT, RTMP, and ProRes high-bitrate ingestion feeds.",
                icon: <Server className="w-5 h-5" />,
              },
              {
                step: "02. Transcode",
                title: "Hardware Encoding",
                desc: "HEVC / H.264 multi-bitrate ladder transcode with FFmpeg.",
                icon: <Cpu className="w-5 h-5" />,
              },
              {
                step: "03. Packaging",
                title: "CMAF & Multi-DRM",
                desc: "Widevine, FairPlay encryption & chunked packaging.",
                icon: <Lock className="w-5 h-5" />,
              },
              {
                step: "04. Delivery",
                title: "Global Multi-CDN",
                desc: "Dynamic load balancing with automated edge routing.",
                icon: <Globe className="w-5 h-5" />,
              },
              {
                step: "05. Playback",
                title: "Multi-Screen Players",
                desc: "Smart TV, Web, and iOS/Android playback SDKs.",
                icon: <Tv className="w-5 h-5" />,
              },
            ].map((node, i) => (
              <div
                key={node.step}
                className="p-5 rounded-2xl bg-white/80 dark:bg-violet-deep/80 border border-amethyst-500/20 flex flex-col justify-between text-left shadow-sm relative group hover:border-amethyst-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-amethyst-600 dark:text-amethyst-300">
                    <div className="p-2 rounded-lg bg-amethyst-500/10 border border-amethyst-500/20">
                      {node.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold">{node.step}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-violet-royal dark:text-pearl-100 mb-1">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-text-secondary dark:text-lavender-medium leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
