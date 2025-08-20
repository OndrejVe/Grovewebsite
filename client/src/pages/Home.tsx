import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { KPISection } from '@/components/sections/KPISection';
import { UseCasesPreview } from '@/components/sections/UseCasesPreview';
import { DIDPartnerSection } from '@/components/sections/DIDPartnerSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <KPISection />
        <UseCasesPreview />
        <DIDPartnerSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
