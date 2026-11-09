"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layers, Sparkles, SlidersHorizontal, ArrowLeftRight } from "lucide-react";

export function PhysicalVsDigitalSlider() {
  const [sliderPos, setSliderPos] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="cyan">TRANSMUTATION COMPARISON</Badge>
            <span className="text-xs font-mono text-muted-foreground uppercase">
              // ANALOG VS DIGITAL
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            From Clay to Realtime Engine
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Drag the tactile divider below to see how physical clay sculptures and wooden sets in Cologne are transmuted into interactive digital shaders.
          </p>
        </div>

        {/* Interactive Comparison Viewport */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => {
              isDragging.current = true;
            }}
            onMouseUp={() => {
              isDragging.current = false;
            }}
            onMouseLeave={() => {
              isDragging.current = false;
            }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-border/80 shadow-2xl select-none cursor-ew-resize bg-card"
          >
            {/* Right Side: Digital Photogrammetry (Background full) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop"
                alt="Digital photogrammetry in-engine render"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Digital Label (Right) */}
              <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center gap-1.5 shadow-lg">
                <Sparkles className="h-3.5 w-3.5" />
                <span>REALTIME UNITY SHADER // 4K</span>
              </div>

              <div className="absolute bottom-4 right-4 text-right text-white font-mono text-xs hidden sm:block">
                <div className="font-semibold text-cyan-300">Phase II: Digital Transmutation</div>
                <div className="text-[11px] text-white/70">Polarized 3D mesh + subsurface scattering</div>
              </div>
            </div>

            {/* Left Side: Physical Clay & Miniature (Clipped by slider position) */}
            <div
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1400&auto=format&fit=crop"
                alt="Physical sculpted clay and wood miniature"
                className="w-full h-full object-cover filter sepia-[0.15] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Physical Label (Left) */}
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-amber-500/30 text-amber-400 font-mono text-xs flex items-center gap-1.5 shadow-lg">
                <Layers className="h-3.5 w-3.5" />
                <span>HANDMADE CLAY & TIMBER // 1:10</span>
              </div>

              <div className="absolute bottom-4 left-4 text-white font-mono text-xs hidden sm:block">
                <div className="font-semibold text-amber-300">Phase I: Physical Craft</div>
                <div className="text-[11px] text-white/70">Polymer clay, balsa wood, hand-sewn cotton</div>
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] -translate-x-1/2 flex items-center justify-center pointer-events-none z-30"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground border-2 border-white shadow-xl flex items-center justify-center">
                <ArrowLeftRight className="h-4 w-4" />
              </div>
            </div>

            {/* Touch / Click Hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 pointer-events-none sm:hidden">
              <SlidersHorizontal className="h-3 w-3 text-primary" />
              <span>Drag to compare</span>
            </div>
          </div>

          {/* Quick preset slider jumps */}
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
            <button
              onClick={() => setSliderPos(20)}
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              ← Reveal Digital Mesh (80%)
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className="hover:text-primary transition-colors"
            >
              [ Reset 50 / 50 ]
            </button>
            <button
              onClick={() => setSliderPos(80)}
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Reveal Physical Clay (80%) →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

