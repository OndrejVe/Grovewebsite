import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function GDPR() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900 theme-transition">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zpět na hlavní stránku
                </Button>
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              {t('gdprTitle')}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                1. {t('gdprBasicInfo')}
              </h2>
              <p>
                {t('gdprBasicInfoText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                2. {t('gdprDataProcessed')}
              </h2>
              <p>
                {t('gdprDataProcessedText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                3. {t('gdprPurpose')}
              </h2>
              <p>
                {t('gdprPurposeText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                4. {t('gdprContact')}
              </h2>
              <p>
                {t('gdprContactText')}{' '}
                <a href="mailto:info@grovetechai.com" className="text-brand-blue hover:text-blue-600">
                  info@grovetechai.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
