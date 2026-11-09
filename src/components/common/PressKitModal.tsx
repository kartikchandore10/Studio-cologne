"use client";

import * as React from "react";
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
import { Download, FileText, ExternalLink, Award, CheckCircle2, Building, Mail, Sparkles } from "lucide-react";
import { STUDIO_TEAM, STUDIO_TELEMETRY } from "@/data/mockData";

export function PressKitModal({ children }: { children?: React.ReactNode }) {
  const [downloadedAsset, setDownloadedAsset] = React.useState<string | null>(null);

  const handleSimulatedDownload = (assetName: string) => {
    setDownloadedAsset(assetName);
    setTimeout(() => {
      setDownloadedAsset(null);
    }, 2500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5 border-border">
            <FileText className="h-3.5 w-3.5" />
            <span>Press Kit</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto border-border bg-card">
        <DialogHeader className="border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="amber">Slow Bros. Official Factsheet</Badge>
            <Badge variant="subtle">Cologne, Germany</Badge>
          </div>
          <DialogTitle className="text-2xl font-serif">Slow Bros. Studio & Harold Halibut Press Kit</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Comprehensive press assets, high-resolution media, studio history, and technical specifications for journalists and media creators.
          </DialogDescription>
        </DialogHeader>

        {/* Factsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2 text-sm">
          {/* Studio Quick Facts */}
          <div className="space-y-4 rounded-xl border border-border/80 p-4 bg-muted/20">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Building className="h-4 w-4 text-primary" />
              <span>Studio Quick Facts</span>
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li className="flex justify-between border-b border-border/40 pb-1">
                <span className="text-muted-foreground">Founding Date:</span>
                <span className="font-semibold text-foreground">February 2015</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-1">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-semibold text-foreground">Cologne, Germany</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-1">
                <span className="text-muted-foreground">Studio Model:</span>
                <span className="font-semibold text-foreground">Artisanal Independent (GmbH)</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-1">
                <span className="text-muted-foreground">Flagship Title:</span>
                <span className="font-semibold text-foreground">Harold Halibut (2024)</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-1">
                <span className="text-muted-foreground">Platforms:</span>
                <span className="font-semibold text-foreground">PC, PS5, Xbox Series X|S, Mac</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Press Inquiries:</span>
                <span className="font-semibold text-primary">mail@slow-bros.com</span>
              </li>
            </ul>
          </div>

          {/* Craft Metrics */}
          <div className="space-y-4 rounded-xl border border-border/80 p-4 bg-muted/20">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Craft Metrics (10-Year Production)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-primary">{STUDIO_TELEMETRY.developmentYears} yrs</div>
                <div className="text-[11px] text-muted-foreground">Full Dev Cycle</div>
              </div>
              <div className="p-2.5 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-primary">{STUDIO_TELEMETRY.handmadePuppetsCount}</div>
                <div className="text-[11px] text-muted-foreground">Clay Puppets</div>
              </div>
              <div className="p-2.5 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-primary">{STUDIO_TELEMETRY.physicalSetsBuilt}</div>
                <div className="text-[11px] text-muted-foreground">Miniature Sets</div>
              </div>
              <div className="p-2.5 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-primary">350k+</div>
                <div className="text-[11px] text-muted-foreground">Photogrammetry Scans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Members */}
        <div className="my-2">
          <h4 className="font-serif font-semibold text-base mb-2">The Founding Quartet</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {STUDIO_TEAM.map((member) => (
              <div key={member.name} className="p-2.5 rounded-lg border border-border/60 bg-muted/10">
                <div className="font-medium text-foreground">{member.name}</div>
                <div className="text-primary text-[11px] font-mono">{member.role}</div>
                <div className="text-muted-foreground mt-0.5 text-[11px]">{member.focus}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Media Assets */}
        <div className="border-t border-border/60 pt-4 mt-2">
          <h4 className="font-serif font-semibold text-base mb-3 flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            <span>Download Press Packs & Media Kits</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              {
                id: "logos",
                title: "Logos & Studio Vector Pack",
                desc: "SVG, PNG, EPS vector assets in light/dark variants",
                size: "18.4 MB",
              },
              {
                id: "stills",
                title: "4K Key Art & Cinematic Screenshots",
                desc: "Uncompressed 3840×2160 in-game and workshop stills",
                size: "142.8 MB",
              },
              {
                id: "trailers",
                title: "Official Launch & Story Trailers (ProRes)",
                desc: "Clean b-roll and high-bitrate broadcast trailers",
                size: "1.2 GB",
              },
              {
                id: "factsheet-pdf",
                title: "Full Studio History & Factsheet PDF",
                desc: "Printable 8-page booklet with artist commentary",
                size: "6.5 MB",
              },
            ].map((pack) => (
              <div
                key={pack.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border/80 bg-card hover:border-primary/50 transition-colors"
              >
                <div className="pr-2">
                  <div className="font-medium text-xs text-foreground">{pack.title}</div>
                  <div className="text-[11px] text-muted-foreground">{pack.desc}</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-0.5">{pack.size}</div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs shrink-0 font-mono gap-1"
                  onClick={() => handleSimulatedDownload(pack.id)}
                >
                  {downloadedAsset === pack.id ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Ready</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      <span>ZIP</span>
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-border/60 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>Inquiries & Review Code Requests: popagenda / mail@slow-bros.com</span>
          </div>
          <a
            href="https://slow-bros.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-[11px]"
          >
            <span>Visit slow-bros.com</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

