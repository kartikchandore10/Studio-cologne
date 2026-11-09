import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { GrainOverlay } from "@/components/common/GrainOverlay";

export const metadata: Metadata = {
  title: "Slow Bros. | Handmade Digital Worlds — Creators of Harold Halibut",
  description:
    "Slow Bros. is an independent game studio based in Cologne, Germany, dedicated to bridging analog stop-motion craftsmanship with digital interactive narrative cinema.",
  keywords: [
    "Slow Bros",
    "Harold Halibut",
    "Stop-Motion Game",
    "Indie Game Studio",
    "Cologne Game Dev",
    "Handmade Video Games",
    "Photogrammetry",
    "Tribeca Games Winner",
  ],
  authors: [{ name: "Slow Bros. GmbH" }],
  openGraph: {
    title: "Slow Bros. | Handmade Digital Worlds",
    description:
      "A cross-media indie game studio crafting stop-motion narrative worlds from wood, clay, fabric, and wire.",
    type: "website",
    locale: "en_US",
    siteName: "Slow Bros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen relative antialiased">
        <Providers>
          <GrainOverlay />
          {children}
        </Providers>
      </body>
    </html>
  );
}
