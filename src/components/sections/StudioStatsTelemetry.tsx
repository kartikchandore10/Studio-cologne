"use client";

import * as React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { STUDIO_TELEMETRY, CRAFTING_BREAKDOWN_DATA } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, Film, Award, Sparkles, Coffee, Mic } from "lucide-react";

export function StudioStatsTelemetry() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const barColors = ["#B24C34", "#E07A5F", "#D4A373", "#38A3A5", "#1F4E5B"];

  return (
    <section className="py-24 border-t border-border bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="amber">DECADE OF ARTISTRY</Badge>
            <span className="text-xs font-mono text-muted-foreground uppercase">
              // WORKSHOP METRICS & TELEMETRY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            The Numbers Behind the Craft
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Ten years of relentless analog focus in Cologne. Here is the physical anatomy of what it took to bring Harold Halibut and the FEDORA I from kitchen sketches to global release.
          </p>
        </div>

        {/* Big Counter Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[
            {
              value: "10",
              unit: "Years",
              label: "Development Span",
              sub: "2015 – 2024",
              icon: Clock,
            },
            {
              value: "42",
              unit: "Molds",
              label: "Clay Characters",
              sub: "Hand-sculpted faces",
              icon: Film,
            },
            {
              value: "28",
              unit: "Rooms",
              label: "Miniature Sets",
              sub: "1:10 physical timber",
              icon: Sparkles,
            },
            {
              value: "350k+",
              unit: "Photos",
              label: "Photogrammetry",
              sub: "Sub-mm 3D scans",
              icon: Activity,
            },
            {
              value: "26k",
              unit: "Lines",
              label: "Recorded Dialogue",
              sub: "Full voice cast",
              icon: Mic,
            },
            {
              value: "4.8k",
              unit: "Gallons",
              label: "Workshop Coffee",
              sub: "Cologne team fuel",
              icon: Coffee,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-5 rounded-2xl border border-border bg-card text-center hover:border-primary/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-primary font-mono mt-0.5">
                  {item.unit}
                </div>
                <div className="text-xs font-medium text-foreground mt-2">
                  {item.label}
                </div>
                <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Production Hours Breakdown Chart */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/70">
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Artisan Time Investment Breakdown
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Recorded hands-on craft & technology hours inside the Cologne workshop
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
              <Clock className="h-4 w-4" />
              <span>Total Logged: ~11,900 Hours</span>
            </div>
          </div>

          <div className="h-[280px] w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CRAFTING_BREAKDOWN_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <XAxis
                    dataKey="category"
                    tick={{ fill: "currentColor", fontSize: 11, fontFamily: "monospace" }}
                    stroke="hsl(var(--border))"
                  />
                  <YAxis
                    tick={{ fill: "currentColor", fontSize: 11, fontFamily: "monospace" }}
                    stroke="hsl(var(--border))"
                    unit="h"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="rounded-lg border border-border bg-popover p-3 shadow-lg font-mono text-xs">
                            <div className="font-bold text-foreground">{data.category}</div>
                            <div className="text-primary mt-1">{data.hours} Dedicated Hours</div>
                            <div className="text-muted-foreground text-[10px]">
                              {data.percentage}% of overall craft pipeline
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="hours" radius={[8, 8, 0, 0]}>
                    {CRAFTING_BREAKDOWN_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted-foreground font-mono text-xs">
                Rendering telemetry chart...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

