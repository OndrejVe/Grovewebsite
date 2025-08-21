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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl mb-8 border border-white/20">
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">AI Use Cases</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            {t('useCasesTitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Specializujeme se na AI řešení pro reálné podnikové procesy
          </p>
        </motion.div>

        {/* Featured Case */}
        <div className="mb-12">
          <motion.div 
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/50 theme-transition hover:shadow-3xl hover:scale-105 transition-all duration-300"
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
              href="#contact" 
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
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 theme-transition"
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
                href="#contact" 
                className="inline-flex items-center text-brand-blue hover:text-blue-600 font-medium"
              >
                {t('learnMore')}
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-bold transform hover:scale-110 hover:shadow-2xl transition-all duration-300">
              Kontaktujte nás pro konzultaci
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </a>
        </div>
      </div>

      {/* Background Effects like Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 w-30 h-30 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-24 right-12 w-38 h-38 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-22 h-22 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
