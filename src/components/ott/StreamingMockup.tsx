"use client";

import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/visual/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Settings,
  Tv,
  Smartphone,
  Monitor,
  Wifi,
  Sparkles,
  Layers,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";

export const StreamingMockup: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [streamType, setStreamType] = useState<"live" | "vod">("live");
  const [resolution, setResolution] = useState("4K HDR (2160p)");
  const [audioTrack, setAudioTrack] = useState("Dolby Atmos 7.1");
  const [activeDevice, setActiveDevice] = useState<"tv" | "web" | "mobile">("tv");
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? (streamType === "live" ? 95 : 0) : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, streamType]);

  return (
    <div className="space-y-6">
      {/* Device Viewport Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 dark:bg-violet-deep/80 border border-amethyst-500/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Badge variant="holographic" size="sm">
            <Sparkles className="w-3 h-3 text-amethyst-500" />
            Interactive Player Sandbox
          </Badge>
          <span className="text-xs text-text-secondary dark:text-lavender-medium hidden sm:inline">
            Simulate Miaga's Carrier-Grade OTT Client Runtime
          </span>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-amethyst-500/15">
          <button
            onClick={() => setActiveDevice("tv")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeDevice === "tv"
                ? "bg-amethyst-600 text-white font-bold shadow-sm"
                : "text-text-secondary hover:text-amethyst-500"
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Smart TV</span>
          </button>
          <button
            onClick={() => setActiveDevice("web")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeDevice === "web"
                ? "bg-amethyst-600 text-white font-bold shadow-sm"
                : "text-text-secondary hover:text-amethyst-500"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web Player</span>
          </button>
          <button
            onClick={() => setActiveDevice("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeDevice === "mobile"
                ? "bg-amethyst-600 text-white font-bold shadow-sm"
                : "text-text-secondary hover:text-amethyst-500"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App</span>
          </button>
        </div>
      </div>

      {/* Main Simulated Streaming Console */}
      <GlassCard className="p-4 sm:p-6 border-amethyst-500/30 overflow-hidden shadow-2xl">
        {/* Device Shell Framing */}
        <div
          className={`mx-auto transition-all duration-500 rounded-2xl bg-black border border-white/20 overflow-hidden shadow-2xl ${
            activeDevice === "mobile"
              ? "max-w-sm border-8 border-violet-royal/90 rounded-[36px]"
              : activeDevice === "web"
              ? "max-w-4xl"
              : "max-w-5xl"
          }`}
        >
          {/* Player Display Canvas */}
          <div className="relative aspect-video bg-gradient-to-tr from-violet-cosmic via-violet-deep to-black flex flex-col justify-between p-4 sm:p-6 select-none overflow-hidden">
            {/* Background Liquid Caustic Shimmer inside Video Stage */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_40%,#9B6BE8_0%,#38BDF8_25%,transparent_70%)] pointer-events-none" />

            {/* Top HUD: Channel/Title & Telemetry */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                {streamType === "live" ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-amethyst-600 text-white text-[11px] font-bold uppercase tracking-wider">
                    VOD ULTRA
                  </span>
                )}
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm tracking-wide drop-shadow">
                    {streamType === "live"
                      ? "[Channel 01: Global Premier Championship Live]"
                      : "[Feature Film: The Crystal Frontier - 4K Remaster]"}
                  </h4>
                  <span className="text-[10px] text-white/70 font-mono hidden sm:inline">
                    Miaga Low-Latency CMAF Ingest Pipeline
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Wifi className="w-3 h-3" /> 1.1s Latency
                </span>
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white/90 border border-white/10 hidden sm:inline">
                  {resolution}
                </span>
              </div>
            </div>

            {/* Center: Play/Pause interactive overlay button */}
            <div className="relative z-10 flex items-center justify-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-lg border border-white/40 flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
                aria-label={isPlaying ? "Pause stream" : "Play stream"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-white" />
                ) : (
                  <Play className="w-8 h-8 fill-white ml-1" />
                )}
              </button>
            </div>

            {/* Bottom HUD: Progress Bar & Player Controls */}
            <div className="relative z-10 space-y-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2 sm:p-3 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 rounded-b-xl">
              {/* Scrubber Line */}
              <div className="space-y-1">
                <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="bg-gradient-to-r from-amethyst-400 to-sky-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/80">
                  <span>{streamType === "live" ? "-00:01:14 (Live Edge)" : "01:24:50 / 02:18:00"}</span>
                  <span>Buffer: 99.8% Healthy (15s forward chunk)</span>
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-amethyst-300 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-amethyst-300 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/20">
                    <button
                      onClick={() => setStreamType("live")}
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded transition-all ${
                        streamType === "live" ? "bg-rose-600 text-white font-bold" : "text-white/60 hover:text-white"
                      }`}
                    >
                      Live Stream
                    </button>
                    <button
                      onClick={() => setStreamType("vod")}
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded transition-all ${
                        streamType === "vod" ? "bg-amethyst-600 text-white font-bold" : "text-white/60 hover:text-white"
                      }`}
                    >
                      VOD Catalogue
                    </button>
                  </div>
                </div>

                {/* Right Settings & Badges */}
                <div className="flex items-center gap-3 text-xs">
                  <select
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                    className="bg-black/60 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/20 focus:outline-none"
                  >
                    <option value="4K HDR (2160p)">4K HDR (2160p)</option>
                    <option value="1080p60 Full HD">1080p60 Full HD</option>
                    <option value="720p HD">720p HD</option>
                    <option value="Auto (ABR Dynamic)">Auto (ABR Dynamic)</option>
                  </select>

                  <select
                    value={audioTrack}
                    onChange={(e) => setAudioTrack(e.target.value)}
                    className="bg-black/60 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/20 focus:outline-none hidden sm:inline"
                  >
                    <option value="Dolby Atmos 7.1">Dolby Atmos 7.1</option>
                    <option value="5.1 Surround">5.1 Surround</option>
                    <option value="Stereo English">Stereo English</option>
                    <option value="Stereo Multi-Lang">Stereo Multi-Lang</option>
                  </select>

                  <button className="hover:text-amethyst-300 transition-colors" aria-label="Settings">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="hover:text-amethyst-300 transition-colors" aria-label="Fullscreen">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Channel / VOD Interactive Strip */}
        <div className="mt-6 pt-6 border-t border-amethyst-500/15">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-violet-royal dark:text-pearl-100 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amethyst-500" />
              Simulated OTT Content Carousel
            </span>
            <span className="text-[11px] text-text-muted font-mono">
              [Multi-Screen Dynamic Ingestion]
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { title: "[Live Channel: Sports HD]", viewers: "148,200 Viewers", tag: "LIVE" },
              { title: "[Live Channel: News 24/7]", viewers: "82,500 Viewers", tag: "LIVE" },
              { title: "[VOD: 4K Documentary]", viewers: "On-Demand", tag: "4K HDR" },
              { title: "[VOD: Global Series S01]", viewers: "On-Demand", tag: "DOLBY" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amethyst-500/15 hover:border-amethyst-500/40 hover:bg-amethyst-500/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amethyst-500/20 text-amethyst-600 dark:text-amethyst-300">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-text-muted font-mono">{item.viewers}</span>
                </div>
                <h5 className="text-xs font-semibold text-violet-royal dark:text-pearl-100 group-hover:text-amethyst-600 dark:group-hover:text-amethyst-300 truncate">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
