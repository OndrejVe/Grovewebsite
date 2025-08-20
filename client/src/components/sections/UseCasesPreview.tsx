import { Building2, Lightbulb, ShoppingBag, Wine, Stethoscope, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function UseCasesPreview() {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: Stethoscope,
      title: t('aiDoctorTitle'),
      description: t('aiDoctorDescription'),
      gradient: "from-red-500 to-pink-600",
      href: "#ai-doctor",
      featured: true
    },
    {
      icon: Building2,
      title: t('aiConciergeTitle'),
      description: t('aiConciergeDescription'),
      gradient: "from-blue-500 to-purple-600",
      href: "#ai-concierge"
    },
    {
      icon: Lightbulb,
      title: t('aiKnowledgeTitle'),
      description: t('aiKnowledgeDescription'),
      gradient: "from-green-500 to-teal-600",
      href: "#ai-knowledge"
    },
    {
      icon: ShoppingBag,
      title: t('aiEcommerceTitle'),
      description: t('aiEcommerceDescription'),
      gradient: "from-orange-500 to-red-600",
      href: "#ai-ecommerce"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('useCasesTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specializujeme se na AI řešení pro reálné podnikové procesy
          </p>
        </div>

        {/* Featured Case */}
        <div className="mb-12">
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border-2 border-red-200 dark:border-red-800 theme-transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('aiDoctorTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('aiDoctorDescription')}
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Partneři:</strong> CME Congresses, International Academy for Clinical Hematology (IACH)<br/>
                <strong>Specializace:</strong> Hematologie, interaktivní AI avatary, real-time konverzace
              </p>
            </div>
            <a 
              href="/usecases" 
              className="inline-flex items-center text-brand-blue hover:text-blue-600 font-medium"
            >
              {t('learnMore')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.slice(1).map((useCase, index) => (
            <motion.div 
              key={index + 1}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover-lift theme-transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-lg flex items-center justify-center mb-6`}>
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {useCase.description}
              </p>
              <a 
                href="/usecases" 
                className="inline-flex items-center text-brand-blue hover:text-blue-600 font-medium"
              >
                {t('learnMore')}
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/usecases">
            <Button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3">
              {t('viewAllUseCases')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
