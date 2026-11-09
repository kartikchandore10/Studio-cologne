"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Play, Sparkles, ExternalLink } from "lucide-react";
import { NAVIGATION_LINKS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { SoundAmbienceToggle } from "@/components/common/SoundAmbienceToggle";
import { PressKitModal } from "@/components/common/PressKitModal";
import { TrailerModal } from "@/components/common/TrailerModal";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Studio Brand Mark */}
          <Link
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-foreground text-background font-serif font-black text-lg transition-transform group-hover:scale-105 group-hover:rotate-1">
              SB
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-foreground transition-colors group-hover:text-primary">
                SLOW BROS.
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                Studio Cologne
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary/60 flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Soundscape Toggle */}
            <SoundAmbienceToggle />

            {/* Light / Dark Theme Toggle */}
            <ThemeToggle />

            {/* Press Kit Modal Trigger */}
            <div className="hidden sm:inline-flex">
              <PressKitModal />
            </div>

            {/* Quick Watch Trailer CTA */}
            <div className="hidden md:inline-flex">
              <TrailerModal>
                <Button
                  size="sm"
                  className="rounded-full font-mono text-xs uppercase tracking-wider gap-1.5 shadow-sm"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Trailer</span>
                </Button>
              </TrailerModal>
            </div>

            {/* Mobile Hamburger Button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-lg border-border"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}

