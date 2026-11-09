"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowDown, ExternalLink, ShieldCheck, Gamepad2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrailerModal } from "@/components/common/TrailerModal";
import { PressKitModal } from "@/components/common/PressKitModal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Cinematic Visual / Atmospheric Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Ambient atmospheric radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-cyan-600/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Vintage blueprint / diorama grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Story Hook (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Studio Indicator Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="amber" className="gap-1.5 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>SLOW BROS. GAMES ATELIER</span>
              </Badge>
              <Badge variant="subtle" className="py-1 px-2.5">
                EST. 2015 // COLOGNE, GERMANY
              </Badge>
              <Badge variant="cyan" className="hidden sm:inline-flex py-1 px-2.5">
                HAROLD HALIBUT AVAILABLE NOW
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
              Handmade <br />
              <span className="italic font-normal text-primary">Digital</span> Worlds.
            </h1>

            {/* Sub-lead narrative text */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              We bridge the tactile soul of physical craftsmanship with interactive narrative cinema. Every prop is hand-carved in timber, every character sculpted in clay, and every room photogrammetrically scanned into living, breathing worlds.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <TrailerModal>
                <Button
                  size="lg"
                  className="rounded-xl font-mono text-xs uppercase tracking-wider gap-2 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Launch Cinema Trailer</span>
                </Button>
              </TrailerModal>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl font-mono text-xs uppercase tracking-wider gap-2 border-border/80 hover:bg-secondary/80"
              >
                <a href="#games">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  <span>Explore Games</span>
                </a>
              </Button>

              <PressKitModal>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-xl font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Studio Factsheet
                </Button>
              </PressKitModal>
            </div>

            {/* Platform Matrix & Release Pill */}
            <div className="pt-6 border-t border-border/60">
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>Play Harold Halibut on your favorite platform</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  { name: "Steam (PC/Deck)", link: "https://store.steampowered.com/app/924290/Harold_Halibut/" },
                  { name: "PlayStation 5", link: "https://store.playstation.com/concept/10008581" },
                  { name: "Xbox Series X|S", link: "https://www.xbox.com/games/store/harold-halibut/9n9c6z1c5ksw" },
                  { name: "Xbox Game Pass", link: "https://www.xbox.com/xbox-game-pass" },
                  { name: "Mac App Store", link: "https://store.steampowered.com/app/924290/Harold_Halibut/" },
                ].map((p) => (
                  <a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg border border-border/70 bg-card hover:bg-secondary hover:border-primary/50 text-foreground transition-all flex items-center gap-1 group"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Cinematic Diorama Showcase Card (5 cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-border/70 via-border/30 to-border/70 border border-border/80 shadow-2xl group">
              {/* Corner tactile registration marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-primary" />

              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-card border border-border/60">
                {/* Visual Imagery */}
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
                  alt="Harold Halibut submarine spaceship diorama"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    FIG 1.0 // FEDORA I SUBMERSIBLE
                  </span>
                  <span className="font-mono text-[10px] text-amber-400 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    10 Yrs Craft
                  </span>
                </div>

                {/* Central Play Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrailerModal>
                    <button
                      className="w-16 h-16 rounded-full bg-primary/90 text-white hover:bg-primary hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center backdrop-blur-sm group/btn focus:outline-none focus:ring-4 focus:ring-primary/40"
                      aria-label="Play trailer video"
                    >
                      <Play className="h-7 w-7 fill-white translate-x-0.5" />
                    </button>
                  </TrailerModal>
                </div>

                {/* Bottom Story & Award Pill */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-xs font-serif font-medium text-amber-300">
                      Tribeca Festival Official Selection
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white leading-tight">
                    Harold Halibut
                  </h3>
                  <p className="text-[12px] text-white/80 line-clamp-2">
                    Submerged for 250 years in an alien ocean, a lonely janitor seeks the keys to launching a handmade civilization.
                  </p>
                </div>
              </div>

              {/* Bottom Technical Slate Stamp */}
              <div className="mt-2.5 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                <span>Scale: 1:10 Diorama</span>
                <span>Craft: Wood • Clay • Film</span>
                <span className="text-primary font-semibold">24 FPS Animation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#games"
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-xs font-mono"
            aria-label="Scroll down to games section"
          >
            <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

