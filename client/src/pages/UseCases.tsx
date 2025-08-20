import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { DetailedUseCases } from '@/components/sections/DetailedUseCases';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UseCases() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div className="pt-16">
          <DetailedUseCases />
        </div>
      </main>
      <Footer />
    </div>
  );
}
