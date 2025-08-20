import { Link } from 'wouter';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center gap-3 mb-4 cursor-pointer">
                <img src="/attached_assets/04_black_flat_1755710813275.png" alt="Grove Tech AI" className="h-8 w-auto" />
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Grove Tech AI</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('heroSubtitle')}
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:info@grovetechai.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/grove-tech-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              <Link href="/about">
                <a className="block text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">
                  {t('about')}
                </a>
              </Link>
              <Link href="/usecases">
                <a className="block text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">
                  {t('usecases')}
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">
                  {t('contact')}
                </a>
              </Link>
              <Link href="/gdpr">
                <a className="block text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">
                  GDPR
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('companyDetails')}</h4>
            <div className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <p><strong>Grove Tech AI s.r.o.</strong></p>
              <p>IČO: 21707146</p>
              <p>DIČ: CZ21707146</p>
              <p>Varšavská 715/36</p>
              <p>Praha 2 – Vinohrady, 120 00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Grove Tech AI s.r.o. {t('allRightsReserved')}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/gdpr">
                <a className="hover:text-brand-blue transition-colors">
                  {t('privacyPolicy')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
