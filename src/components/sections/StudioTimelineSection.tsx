"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TIMELINE_MILESTONES } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { History, Calendar, MapPin, Sparkles } from "lucide-react";

export function StudioTimelineSection() {
  return (
    <section id="timeline" className="py-24 border-t border-border bg-card/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="amber">THE RETROSPECTIVE</Badge>
            <span className="text-xs font-mono text-muted-foreground uppercase">
              // 2015 TO PRESENT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            A Decade of Dedication
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From four friends brainstorming over dinner in a Cologne apartment to a globally celebrated game release. Trace the journey of tactile game creation.
          </p>
        </div>

        {/* Timeline Vertical Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/80 via-primary/40 to-border pointer-events-none" />

          <div className="space-y-12">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spine Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl border border-border bg-card shadow-lg hover:border-primary/50 transition-all">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xl font-extrabold text-primary">
                            {milestone.year}
                          </span>
                          <span className="text-[11px] font-mono text-muted-foreground uppercase">
                            • {milestone.phase}
                          </span>
                        </div>
                        <Badge variant="subtle" className="text-[10px]">
                          {milestone.highlightTag}
                        </Badge>
                      </div>

                      <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground pt-2 border-t border-border/60">
                        <MapPin className="h-3 w-3 text-primary" />
                        <span>{milestone.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

