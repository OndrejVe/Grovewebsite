import { Building2, Lightbulb, ShoppingBag, Wine, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function DetailedUseCases() {
  const { t } = useLanguage();

  const detailedUseCases = [
    {
      id: "ai-concierge",
      icon: Building2,
      title: t('aiConciergeTitle'),
      description: "Inteligentní asistent pro hotelové služby, který zvládne rezervace, doporučení místních aktivit, informace o službách hotelu a zákaznickou podporu 24/7. Podporuje více jazyků a přizpůsobuje se preferencím hostů.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Luxusní hotelová lobby s moderními technologiemi",
      gradient: "from-blue-500 to-purple-600",
      buttonColor: "bg-brand-blue hover:bg-blue-600",
      benefits: [
        "24/7 dostupnost bez dodatečných nákladů na personál",
        "Personalizovaná doporučení pro každého hosta",
        "Integrace s rezervačními a PMS systémy",
        "Zvýšení spokojenosti hostů o 35%"
      ],
      imagePosition: "left"
    },
    {
      id: "ai-knowledge",
      icon: Lightbulb,
      title: t('aiKnowledgeTitle'),
      description: "Firemní AI asistent, který zná vaše procesy, dokumenty, postupy a pomáhá zaměstnancům rychle najít odpovědi. Redukuje čas strávený hledáním informací a zlepšuje efektivitu týmu.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Moderní kancelář s pracovníky používajícími AI nástroje",
      gradient: "from-green-500 to-teal-600",
      buttonColor: "bg-brand-green hover:bg-green-600",
      benefits: [
        "Snížení času hledání informací o 70%",
        "Okamžitý přístup k firemním znalostem",
        "Integrace s existujícími systémy",
        "Rychlejší onboarding nových zaměstnanců"
      ],
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Detailní Use Cases
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Prozkoumejte naše specializované AI řešení pro různá odvětví
          </p>
        </div>

        <div className="space-y-20">
          {detailedUseCases.map((useCase, index) => (
            <motion.div 
              key={useCase.id}
              id={useCase.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg theme-transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${useCase.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>
                <img 
                  src={useCase.image} 
                  alt={useCase.alt}
                  className={`w-full h-64 lg:h-full object-cover ${useCase.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
                />
                <div className={`p-8 lg:p-12 ${useCase.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-lg flex items-center justify-center mb-6`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {useCase.description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {t('keyBenefits')}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact">
                    <Button className={`${useCase.buttonColor} text-white px-6 py-3`}>
                      {t('wantToKnowMore')}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
