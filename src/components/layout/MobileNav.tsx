"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, Film, Hammer, History, Award, Mail } from "lucide-react";
import { NAVIGATION_LINKS } from "@/data/mockData";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { SoundAmbienceToggle } from "@/components/common/SoundAmbienceToggle";
import { PressKitModal } from "@/components/common/PressKitModal";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent background scroll when mobile nav is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-card border-l border-border p-6 shadow-2xl flex flex-col justify-between md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border/70">
                <div>
                  <div className="font-serif text-xl font-bold tracking-tight text-foreground">
                    SLOW BROS.
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary">
                    Cologne Atelier
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-1">
                {NAVIGATION_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary/70 hover:text-primary transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {link.badge}
                      </span>
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Quick Utility Section */}
              <div className="mt-6 pt-6 border-t border-border/70 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Experience Controls
                </div>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <SoundAmbienceToggle />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-border/70 space-y-3">
              <PressKitModal>
                <Button variant="outline" className="w-full justify-center font-mono text-xs uppercase tracking-wider">
                  Open Factsheet & Press Kit
                </Button>
              </PressKitModal>
              <Button asChild className="w-full justify-center rounded-xl font-semibold">
                <a
                  href="https://store.steampowered.com/app/924290/Harold_Halibut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Play Harold Halibut</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <p className="text-[11px] text-center text-muted-foreground font-mono">
                Slow Bros. GmbH • Handcrafted in Cologne
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

