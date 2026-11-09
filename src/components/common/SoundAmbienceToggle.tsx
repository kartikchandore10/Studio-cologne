"use client";

import * as React from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function SoundAmbienceToggle() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const gainNodeRef = React.useRef<GainNode | null>(null);

  const toggleSound = () => {
    try {
      if (!isPlaying) {
        // Start atmospheric submarine drone & workshop hum
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Submarine Sub Drone (Low frequency soothing rumble)
        const subOsc = ctx.createOscillator();
        subOsc.type = "sine";
        subOsc.frequency.setValueAtTime(55, ctx.currentTime); // A1 note

        const subFilter = ctx.createBiquadFilter();
        subFilter.type = "lowpass";
        subFilter.frequency.setValueAtTime(140, ctx.currentTime);

        subOsc.connect(subFilter);
        subFilter.connect(masterGain);
        subOsc.start();

        // Harmonic shimmer
        const harmonicOsc = ctx.createOscillator();
        harmonicOsc.type = "triangle";
        harmonicOsc.frequency.setValueAtTime(110, ctx.currentTime);

        const harmonicGain = ctx.createGain();
        harmonicGain.gain.setValueAtTime(0.015, ctx.currentTime);

        harmonicOsc.connect(harmonicGain);
        harmonicGain.connect(masterGain);
        harmonicOsc.start();

        setIsPlaying(true);
      } else {
        // Stop audio gracefully
        if (gainNodeRef.current && audioContextRef.current) {
          const ctx = audioContextRef.current;
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
          setTimeout(() => {
            ctx.close();
            audioContextRef.current = null;
            setIsPlaying(false);
          }, 800);
        } else {
          setIsPlaying(false);
        }
      }
    } catch {
      // Audio autoplay policy fallback
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleSound}
      className={`h-9 px-2.5 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
        isPlaying
          ? "border-accent bg-accent/15 text-accent font-semibold"
          : "border-border/70 hover:bg-secondary text-muted-foreground"
      }`}
      title={isPlaying ? "Mute Fedora I Sub-Deck Ambience" : "Enable Atmospheric Soundscape (Benthic Drone)"}
      aria-label="Toggle atmospheric soundscape"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isPlaying ? (
          <motion.div
            key="playing"
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Volume2 className="h-3.5 w-3.5 animate-pulse text-amber-500" />
            <span className="hidden md:inline font-mono text-[11px] uppercase tracking-wider">
              Fedora Ambience
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <VolumeX className="h-3.5 w-3.5 opacity-60" />
            <span className="hidden md:inline font-mono text-[11px] uppercase tracking-wider">
              Ambience
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}

