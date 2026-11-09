"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCOLADES } from "@/data/mockData";
import { Accolade } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Award, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { PressKitModal } from "@/components/common/PressKitModal";

export function PressAndAccolades() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextAccolade = () => {
    setCurrentIndex((prev) => (prev + 1) % ACCOLADES.length);
  };

  const prevAccolade = () => {
    setCurrentIndex((prev) => (prev - 1 + ACCOLADES.length) % ACCOLADES.length);
  };

  const current = ACCOLADES[currentIndex];

  return (
    <section id="accolades" className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="amber">GLOBAL ACCLAIM</Badge>
            <span className="text-xs font-mono text-muted-foreground uppercase">
              // CRITICAL RECEPTION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Critics Are Saying
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From Tribeca to leading international publications, Harold Halibut has been celebrated as a landmark achievement in handcrafted interactive art.
          </p>
        </div>

        {/* Featured Testimonial Hero Slider */}
        <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-14 shadow-2xl max-w-4xl mx-auto mb-16 overflow-hidden">
          {/* Subtle quote watermark */}
          <Quote className="absolute -top-4 -right-4 w-32 h-32 text-primary/10 pointer-events-none rotate-180" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Badge variant="amber" className="text-xs font-mono px-3 py-1">
                  {current.badge || "Award Winner"}
                </Badge>
                {current.score && (
                  <span className="font-mono text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    {current.score}
                  </span>
                )}
                <span className="text-xs font-mono text-muted-foreground ml-auto">
                  {current.date}
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-lg text-foreground">
                    {current.publication}
                  </div>
                  {current.author && (
                    <div className="text-xs text-muted-foreground font-mono">
                      By {current.author}
                    </div>
                  )}
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevAccolade}
                    className="h-9 w-9 rounded-full border-border"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-mono text-xs text-muted-foreground px-2">
                    {currentIndex + 1} / {ACCOLADES.length}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextAccolade}
                    className="h-9 w-9 rounded-full border-border"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Critic Grid Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {ACCOLADES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3.5 rounded-xl border text-center transition-all ${
                currentIndex === idx
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card border-border hover:bg-secondary text-foreground"
              }`}
            >
              <div className="font-serif font-bold text-sm truncate">{item.publication}</div>
              <div className={`text-[11px] font-mono mt-1 ${currentIndex === idx ? "text-primary-foreground/90 font-semibold" : "text-primary"}`}>
                {item.score || item.badge}
              </div>
            </button>
          ))}
        </div>

        {/* Press kit CTA bar */}
        <div className="mt-14 p-6 rounded-2xl border border-dashed border-border/80 bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif font-bold text-base text-foreground">
              Are you a journalist, reviewer, or content creator?
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-0.5">
              Access review codes, direct interview booking, and 4K uncompressed media.
            </div>
          </div>
          <PressKitModal>
            <Button size="sm" className="font-mono text-xs gap-2 rounded-xl shrink-0">
              <Award className="h-4 w-4" />
              <span>Open Press Kit & Assets</span>
            </Button>
          </PressKitModal>
        </div>
      </div>
    </section>
  );
}

