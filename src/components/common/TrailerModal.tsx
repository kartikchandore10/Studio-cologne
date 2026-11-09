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
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrailerModalProps {
  videoUrl?: string;
  title?: string;
  children?: React.ReactNode;
}

export function TrailerModal({
  videoUrl = "https://www.youtube.com/embed/8b9hVb7Sj1Y?autoplay=1",
  title = "Harold Halibut — Official Launch Trailer",
  children,
}: TrailerModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2 font-mono text-xs tracking-wider uppercase border-border/80 hover:border-primary"
          >
            <Play className="h-4 w-4 text-primary fill-primary" />
            <span>Watch Trailer</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-zinc-800">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Harold Halibut cinema trailer</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video w-full">
          {isOpen ? (
            <iframe
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-white">
              Loading player...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

