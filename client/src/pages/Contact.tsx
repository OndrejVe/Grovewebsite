import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div className="pt-16">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
