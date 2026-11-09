"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CRAFT_SPECIMENS } from "@/data/mockData";
import { CraftSpecimen } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Hammer, Scissors, ScanLine, Sparkles, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export function CraftsmanshipSection() {
  const [activeSpecimen, setActiveSpecimen] = React.useState<CraftSpecimen>(CRAFT_SPECIMENS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="h-5 w-5" />;
      case "Hammer":
        return <Hammer className="h-5 w-5" />;
      case "Scissors":
        return <Scissors className="h-5 w-5" />;
      case "ScanLine":
      default:
        return <ScanLine className="h-5 w-5" />;
    }
  };

  return (
    <section id="craft" className="py-24 border-t border-border bg-card/40 relative overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(224,122,95,0.08),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="amber">THE WORKSHOP ATELIER</Badge>
            <span className="text-xs font-mono text-muted-foreground uppercase">
              // PHYSICAL TO DIGITAL PIPELINE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Feel the Artist&apos;s Hand
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            In an era of purely procedural algorithms, Slow Bros builds tangible physical realities. Every character, chair, light fixture, and corridor began its life as physical wood, clay, fabric, and solder in Cologne.
          </p>
        </div>

        {/* Interactive Specimen Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {CRAFT_SPECIMENS.map((specimen) => {
            const isActive = activeSpecimen.id === specimen.id;
            return (
              <button
                key={specimen.id}
                onClick={() => setActiveSpecimen(specimen)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? "bg-card border-primary shadow-lg ring-2 ring-primary/20"
                    : "bg-card/40 border-border hover:bg-card hover:border-border/80"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {getIcon(specimen.iconName)}
                  </div>
                  {isActive && <Sparkles className="h-4 w-4 text-primary animate-pulse" />}
                </div>

                <div className="text-xs font-mono uppercase text-muted-foreground truncate mb-1">
                  {specimen.material}
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-foreground line-clamp-1">
                  {specimen.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Specimen Display */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpecimen.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Specimen Image & Stamp */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md bg-muted">
                  <img
                    src={activeSpecimen.image}
                    alt={activeSpecimen.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {activeSpecimen.physicalOrigin}
                    </span>
                    <span className="bg-primary/90 text-primary-foreground font-semibold px-2.5 py-1 rounded-md">
                      SPECIMEN NO. {activeSpecimen.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Technical Deep Dive */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="amber">{activeSpecimen.material}</Badge>
                    <span className="text-xs font-mono text-muted-foreground">Craft Archive</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    {activeSpecimen.title}
                  </h3>
                  <p className="text-xs font-mono text-primary font-semibold">
                    Technique: {activeSpecimen.technique}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {activeSpecimen.description}
                </p>

                {/* Key Metric Card */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-border/80 bg-muted/20">
                    <div className="font-mono text-3xl font-extrabold text-primary">
                      {activeSpecimen.statNumber}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {activeSpecimen.statLabel}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-border/80 bg-muted/20 flex flex-col justify-center">
                    <div className="text-xs font-mono uppercase text-muted-foreground">
                      Physical Scale Ratio
                    </div>
                    <div className="text-lg font-serif font-bold text-foreground mt-0.5">
                      1:10 Miniature Diorama
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Sub-millimeter scan fidelity
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Button asChild variant="outline" className="font-mono text-xs gap-2 rounded-xl">
                    <a href="#sets">
                      <span>Inspect Complete Sets</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

