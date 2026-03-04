import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { SecuritySection } from "@/components/SecuritySection";
import { AudienceSection } from "@/components/AudienceSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <HeroSection />
        <EcosystemSection />
        <PhilosophySection />
        <ArchitectureSection />
        <SecuritySection />
        <AudienceSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
