"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SET_INSPECTOR_ITEMS } from "@/data/mockData";
import { SetInspectorItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, Sparkles, Box, Compass, Layers, X, Eye } from "lucide-react";

export function InteractiveSetInspector() {
  const [activeSet, setActiveSet] = React.useState<SetInspectorItem>(SET_INSPECTOR_ITEMS[0]);
  const [activeHotspotIndex, setActiveHotspotIndex] = React.useState<number | null>(0);

  const selectedHotspot = activeHotspotIndex !== null ? activeSet.hotspots[activeHotspotIndex] : null;

  return (
    <section id="sets" className="py-24 border-t border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="cyan">INTERACTIVE DIORAMA INSPECTOR</Badge>
              <span className="text-xs font-mono text-muted-foreground uppercase">
                // FEDORA I SHIP SCHEMATICS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Explore the Physical Sets
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Click the glowing interactive pins across each 1:10 physical scale diorama to uncover the handcrafted woodworking, micro-wiring, and weathered patina crafted in Cologne.
            </p>
          </div>

          {/* Set Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {SET_INSPECTOR_ITEMS.map((item) => {
              const isCurrent = activeSet.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSet(item);
                    setActiveHotspotIndex(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                    isCurrent
                      ? "bg-primary text-primary-foreground border-primary shadow-md font-semibold"
                      : "bg-card border-border hover:bg-secondary text-foreground"
                  }`}
                >
                  {item.name.split(" ")[0]} {item.name.split(" ")[1]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Diorama Interactive Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual Display with Hotspot Pins (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-border bg-black shadow-2xl group">
            {/* Aspect container */}
            <div className="relative aspect-[16/10] w-full">
              <img
                src={activeSet.image}
                alt={activeSet.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Set Title Banner */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <span className="font-mono text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                  {activeSet.room}
                </span>
                <span className="font-mono text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 flex items-center gap-1.5 text-cyan-300">
                  <Compass className="h-3.5 w-3.5" />
                  {activeSet.dimensions}
                </span>
              </div>

              {/* Interactive Hotspot Pins */}
              {activeSet.hotspots.map((hotspot, idx) => {
                const isActive = activeHotspotIndex === idx;
                return (
                  <div
                    key={hotspot.title}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveHotspotIndex(idx)}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-primary/50 ${
                        isActive
                          ? "bg-primary text-white scale-125 shadow-lg shadow-primary/50"
                          : "bg-black/70 backdrop-blur-md border-2 border-white/80 text-white hover:scale-110"
                      }`}
                      aria-label={`Inspect hotspot: ${hotspot.title}`}
                    >
                      <span className="text-[11px] font-mono font-bold">{idx + 1}</span>

                      {/* Radar pulsing ring */}
                      <span
                        className={`absolute inset-0 rounded-full animate-ping pointer-events-none ${
                          isActive ? "bg-primary opacity-60" : "bg-white/40 opacity-30"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}

              {/* Hint Bar */}
              <div className="absolute bottom-4 left-4 text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                <Eye className="h-3 w-3 text-cyan-400" />
                <span>Click pins [1 - {activeSet.hotspots.length}] to inspect handcrafted secrets</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hotspot Inspector Details & Material Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Active Hotspot Callout Box */}
            <div className="rounded-2xl border border-primary/50 bg-card p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-3 border-b border-border/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-mono text-xs flex items-center justify-center font-bold">
                    {(activeHotspotIndex ?? 0) + 1}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                    Craft Spotlight
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">PIN DATA</span>
              </div>

              {selectedHotspot ? (
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-lg text-foreground">
                    {selectedHotspot.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {selectedHotspot.detail}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Select a pin on the set to view details.</p>
              )}
            </div>

            {/* Set Architectural Specifications */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-foreground">
                <Layers className="h-4 w-4 text-primary" />
                <span>Physical Construction Materials</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {activeSet.materialsUsed.map((mat) => (
                  <span
                    key={mat}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg bg-muted border border-border/70 text-foreground"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-border/60 text-xs font-mono space-y-1.5">
                <div className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Atmospheric Mood:</span>{" "}
                  {activeSet.lightingMood}
                </div>
                <div className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Diorama Dimensions:</span>{" "}
                  {activeSet.dimensions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

