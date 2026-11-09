import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { GamesShowcase } from "@/components/sections/GamesShowcase";
import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { PhysicalVsDigitalSlider } from "@/components/sections/PhysicalVsDigitalSlider";
import { InteractiveSetInspector } from "@/components/sections/InteractiveSetInspector";
import { StudioStatsTelemetry } from "@/components/sections/StudioStatsTelemetry";
import { PressAndAccolades } from "@/components/sections/PressAndAccolades";
import { StudioTimelineSection } from "@/components/sections/StudioTimelineSection";
import { NewsletterAndContact } from "@/components/sections/NewsletterAndContact";
import { WorkshopHUD } from "@/components/common/WorkshopHUD";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Sticky Atmospheric Navigation */}
      <Header />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <HeroSection />

        {/* 2. Production Catalogue / Games */}
        <GamesShowcase />

        {/* 3. The Workshop / Tactile Craftsmanship */}
        <CraftsmanshipSection />

        {/* 4. Analog vs Digital Comparison Slider */}
        <PhysicalVsDigitalSlider />

        {/* 5. Diorama Hotspot Set Inspector */}
        <InteractiveSetInspector />

        {/* 6. Production Telemetry & Artisan Hours Chart */}
        <StudioStatsTelemetry />

        {/* 7. Critical Acclaim & Festival Accolades */}
        <PressAndAccolades />

        {/* 8. Retrospective 10-Year Studio Timeline */}
        <StudioTimelineSection />

        {/* 9. Dispatch & Contact Inquiries */}
        <NewsletterAndContact />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Keyboard Accessibility HUD */}
      <WorkshopHUD />
    </div>
  );
}
