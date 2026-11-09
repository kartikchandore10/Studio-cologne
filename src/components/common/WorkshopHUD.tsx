"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Command, Keyboard, Sun, Moon, Volume2, Gamepad2, Compass, FileText, Sparkles } from "lucide-react";

export function WorkshopHUD() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "t" || e.key === "T") {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      } else if (e.key === "g" || e.key === "G") {
        document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "c" || e.key === "C") {
        document.getElementById("craft")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "s" || e.key === "S") {
        document.getElementById("sets")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resolvedTheme, setTheme]);

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-muted-foreground hover:text-foreground text-xs font-mono border border-border/80 shadow-md hover:border-primary/50 transition-all hover:scale-105"
            title="Press '?' for keyboard shortcuts"
            aria-label="Open workshop keyboard shortcuts"
          >
            <Keyboard className="h-3.5 w-3.5 text-primary" />
            <span>Shortcuts</span>
            <kbd className="px-1.5 py-0.2 rounded bg-muted text-[10px] border border-border">?</kbd>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md border-border bg-card">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="amber">SLOW BROS. WORKSHOP HUD</Badge>
            </div>
            <DialogTitle className="font-serif text-xl">Quick Navigation Shortcuts</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Navigate the atelier instantly with single-key accessibility shortcuts.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2.5 my-3 text-xs font-mono">
            {[
              { key: "T", label: "Toggle Theme (Light / Dark Mode)", icon: Sun },
              { key: "G", label: "Jump to Games & Productions", icon: Gamepad2 },
              { key: "C", label: "Jump to Workshop Craftsmanship", icon: Sparkles },
              { key: "S", label: "Jump to Diorama Set Inspector", icon: Compass },
              { key: "?", label: "Toggle this Shortcut HUD", icon: Command },
            ].map((shortcut) => {
              const Icon = shortcut.icon;
              return (
                <div
                  key={shortcut.key}
                  className="flex items-center justify-between p-2.5 rounded-lg border border-border/70 bg-muted/20"
                >
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{shortcut.label}</span>
                  </div>
                  <kbd className="px-2 py-1 rounded bg-card border border-border font-bold text-primary shadow-sm">
                    {shortcut.key}
                  </kbd>
                </div>
              );
            })}
          </div>

          <div className="text-[11px] text-muted-foreground font-mono text-center pt-2 border-t border-border/70">
            Engineered with WCAG 2.1 accessibility & keyboard navigation standards.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

