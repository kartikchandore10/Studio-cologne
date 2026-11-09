"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Heart, ArrowUp, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PressKitModal } from "@/components/common/PressKitModal";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/60 relative overflow-hidden">
      {/* Decorative background grid subtle lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Studio Overview & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground text-background font-serif font-black text-sm">
                SB
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-foreground">
                SLOW BROS.
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              We are an independent game studio based in Cologne, Germany. We sculpt, frame, sew, and 3D-scan physical dioramas to craft tactile narrative worlds with genuine soul.
            </p>

            <div className="pt-2 text-xs font-mono text-muted-foreground space-y-1">
              <div>Slow Bros. GmbH</div>
              <div>Cologne, North Rhine-Westphalia, Germany</div>
              <div className="text-primary">mail@slow-bros.com</div>
            </div>

            {/* Newsletter Dispatch */}
            <div className="pt-4 max-w-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-foreground block mb-2 font-semibold">
                Workshop Dispatch (Newsletter)
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email for studio logs..."
                  className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full transition-colors"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-lg shrink-0 font-mono text-xs uppercase"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-1.5 animate-fadeIn">
                  ✓ Dispatch logged. Danke schön!
                </p>
              )}
            </div>
          </div>

          {/* Col 3: Projects & Releases */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-foreground">
              Works
            </h4>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <a
                  href="https://store.steampowered.com/app/924290/Harold_Halibut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Harold Halibut (2024)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-primary transition-colors">
                  Project Epilogue (In Dev)
                </a>
              </li>
              <li>
                <a href="#sets" className="hover:text-primary transition-colors">
                  FEDORA I 3D Archive
                </a>
              </li>
              <li>
                <a
                  href="https://haroldhalibut.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Harold Halibut Website</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Craft & Press */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-foreground">
              Studio & Press
            </h4>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <a href="#craft" className="hover:text-primary transition-colors">
                  Analog Workshop
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-primary transition-colors">
                  10-Year Timeline
                </a>
              </li>
              <li>
                <a href="#accolades" className="hover:text-primary transition-colors">
                  Accolades & Reviews
                </a>
              </li>
              <li>
                <PressKitModal>
                  <button className="hover:text-primary transition-colors text-left">
                    Official Press Kit
                  </button>
                </PressKitModal>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Inquiries & Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Community & Platforms */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-foreground">
              Community
            </h4>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <a
                  href="https://store.steampowered.com/app/924290/Harold_Halibut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Steam Community
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@SlowBros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  YouTube Dev Diaries
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram Behind-the-Scenes
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/SlowBrosGames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  X (Twitter) @SlowBrosGames
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row: Legal, Impressum & Back to Top */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Slow Bros. GmbH. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a href="#legal" className="hover:text-foreground transition-colors">
              Impressum (Legal Notice)
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#privacy" className="hover:text-foreground transition-colors">
              Privacy Policy (GDPR)
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted-foreground">
              Cologne, Germany
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-border hover:bg-secondary"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Return to surface"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

