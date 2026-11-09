"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO_PROJECTS } from "@/data/mockData";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Play, Layers, Clock, Cpu, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { TrailerModal } from "@/components/common/TrailerModal";

export function GamesShowcase() {
  const [filter, setFilter] = React.useState<string>("all");
  const [selectedProject, setSelectedProject] = React.useState<Project>(STUDIO_PROJECTS[0]);

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return STUDIO_PROJECTS;
    return STUDIO_PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="games" className="py-24 border-t border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="amber">PRODUCTION ARCHIVE</Badge>
              <span className="text-xs font-mono text-muted-foreground uppercase">
                // CATALOGUE 2015-2025
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Works & Productions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every Slow Bros game begins physically in our Cologne workshop—carved from balsa wood, hand-sculpted in polymer clay, and brought to digital life with photogrammetry and motion capture.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="shrink-0">
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList>
                <TabsTrigger value="all">All Works ({STUDIO_PROJECTS.length})</TabsTrigger>
                <TabsTrigger value="released">Released</TabsTrigger>
                <TabsTrigger value="in-production">In Production</TabsTrigger>
                <TabsTrigger value="experimental">Archive</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Featured Project Showcase (Harold Halibut / Active item spotlight) */}
        <div className="rounded-3xl border border-border bg-card/70 overflow-hidden shadow-xl mb-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Cover / Trailer Area */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-muted/30">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                  {selectedProject.number}
                </span>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-primary/90 text-primary-foreground">
                  {selectedProject.status}
                </span>
              </div>

              {/* Interactive Trailer Button */}
              {selectedProject.trailerVideoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrailerModal
                    videoUrl={selectedProject.trailerVideoUrl}
                    title={`${selectedProject.title} Trailer`}
                  >
                    <button
                      className="group flex items-center gap-3 px-5 py-3 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 hover:scale-105 active:scale-95 transition-all shadow-xl"
                      aria-label={`Play trailer for ${selectedProject.title}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Play className="h-5 w-5 fill-current translate-x-0.5" />
                      </div>
                      <div className="text-left font-mono text-xs">
                        <div className="font-semibold uppercase tracking-wider">Watch Trailer</div>
                        <div className="text-[10px] text-white/70">4K Cinematic Reel</div>
                      </div>
                    </button>
                  </TrailerModal>
                </div>
              )}

              {/* Bottom Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-black/60 text-white/90 backdrop-blur-sm border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications & Story Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                    {selectedProject.category.toUpperCase()} // {selectedProject.releaseYear}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    10-Year Handmade Journey
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>

                <p className="font-serif italic text-sm text-primary/90">
                  &ldquo;{selectedProject.tagline}&rdquo;
                </p>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2 pt-2 border-t border-border/70 text-xs font-mono">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Playtime:</strong> {selectedProject.specifications.duration}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Cpu className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Engine & Scan:</strong> {selectedProject.specifications.engine}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Layers className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Physical Scale:</strong> {selectedProject.specifications.physicalScale}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Audio & Cast:</strong> {selectedProject.specifications.voiceCast}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions & Platform Badges */}
              <div className="pt-6 border-t border-border/70 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Official Store Links:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.steamUrl && (
                    <Button asChild size="sm" className="font-mono text-xs gap-1.5 rounded-lg">
                      <a href={selectedProject.steamUrl} target="_blank" rel="noopener noreferrer">
                        <span>Steam Store</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  {selectedProject.playstationUrl && (
                    <Button asChild size="sm" variant="outline" className="font-mono text-xs gap-1.5 rounded-lg">
                      <a href={selectedProject.playstationUrl} target="_blank" rel="noopener noreferrer">
                        <span>PlayStation Store</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  {selectedProject.xboxUrl && (
                    <Button asChild size="sm" variant="outline" className="font-mono text-xs gap-1.5 rounded-lg">
                      <a href={selectedProject.xboxUrl} target="_blank" rel="noopener noreferrer">
                        <span>Xbox Store</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card Grid (Selectable list) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all text-left group ${
                    isSelected
                      ? "border-primary bg-card shadow-lg ring-2 ring-primary/20"
                      : "border-border bg-card/50 hover:bg-card hover:border-border/80 hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-sm">
                        {project.number}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant={project.category === "released" ? "default" : "amber"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{project.releaseYear}</span>
                      <span className="capitalize">{project.category}</span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-primary">
                      <span>{isSelected ? "Currently Viewing" : "Click to Inspect"}</span>
                      {isSelected ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

