import { Building2, Lightbulb, ShoppingBag, Wine, Stethoscope, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function DetailedUseCases() {
  const { t } = useLanguage();

  const detailedUseCases = [
    {
      id: "ai-doctor",
      icon: Stethoscope,
      title: t('aiDoctorTitle'),
      description: "Specializovaný AI doktor Prof. Richard je průlomový projekt vyvinutý v partnerství s CME Congresses a International Academy for Clinical Hematology (IACH). Tento pokročilý AI systém s interaktivní avatar technologií poskytuje expertní konzultace v oblasti hematologie a demonstruje budoucnost zdravotnictví.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "AI doktor Prof. Richard s avatary technologií pro hematologii",
      gradient: "from-red-500 to-pink-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
      benefits: [
        "Reálný projekt nasazený v produkčním prostředí",
        "Partnerství s prestigními lékařskými institucemi",
        "Specializace na hematologii s expertními znalostmi",
        "Interaktivní AI avatary pro přirozené konzultace",
        "Real-time konverzace s pacienty a lékaři",
        "Demonstrace budoucnosti AI ve zdravotnictví"
      ],
      imagePosition: "left",
      isProduction: true,
      partners: ["CME Congresses", "International Academy for Clinical Hematology (IACH)"]
    },
    {
      id: "ai-concierge",
      icon: Building2,
      title: t('aiConciergeTitle'),
      description: "Inteligentní asistent pro hotelové služby, který zvládne rezervace, doporučení místních aktivit, informace o službách hotelu a zákaznickou podporu 24/7. Podporuje více jazyků a přizpůsobuje se preferencím hostů.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Hotelový recepční pracující s AI asistentem na tabletu",
      gradient: "from-blue-500 to-purple-600",
      buttonColor: "bg-brand-blue hover:bg-blue-600",
      benefits: [
        "24/7 dostupnost bez dodatečných nákladů na personál",
        "Personalizovaná doporučení pro každého hosta",
        "Integrace s rezervačními a PMS systémy",
        "Zvýšení spokojenosti hostů o 35%"
      ],
      imagePosition: "right"
    },
    {
      id: "ai-knowledge",
      icon: Lightbulb,
      title: t('aiKnowledgeTitle'),
      description: "Firemní AI asistent, který zná vaše procesy, dokumenty, postupy a pomáhá zaměstnancům rychle najít odpovědi. Redukuje čas strávený hledáním informací a zlepšuje efektivitu týmu.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Zaměstnanec používající AI knowledge assistant na počítači",
      gradient: "from-green-500 to-teal-600",
      buttonColor: "bg-brand-green hover:bg-green-600",
      benefits: [
        "Snížení času hledání informací o 70%",
        "Okamžitý přístup k firemním znalostem",
        "Integrace s existujícími systémy",
        "Rychlejší onboarding nových zaměstnanců"
      ],
      imagePosition: "right"
    },
    {
      id: "ai-ecommerce",
      icon: ShoppingBag,
      title: t('aiEcommerceTitle'),
      description: "Personalizovaný nákupní asistent, který doporučuje produkty na míru potřebám a preferencím zákazníků. Analyzuje chování uživatelů a předpovídá jejich preference pro maximalizaci konverzí.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Zákazník nakupující online s AI doporučením produktů",
      gradient: "from-orange-500 to-red-600",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      benefits: [
        "Zvýšení konverzní míry o 45%",
        "Personalizovaná doporučení v reálném čase",
        "Analýza chování a preferencí zákazníků",
        "Automatické cross-selling a up-selling"
      ],
      imagePosition: "left"
    },
    {
      id: "ai-sommelier",
      icon: Wine,
      title: t('aiSommelierTitle'),
      description: "Inteligentní doporučovací systém pro víno podle chuti, jídla, ceny a příležitosti. Kombinuje odborné znalosti sommeliéra s preferencemi uživatele pro dokonalé páření.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Sommeliér používající AI systém pro doporučení vína",
      gradient: "from-purple-500 to-pink-600",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      benefits: [
        "Expertní doporučení na základě preferencí",
        "Dokonalé párování vína s jídlem",
        "Personalizované cenové rozmezí",
        "Rozšíření vinného portfolia restaurací"
      ],
      imagePosition: "right"
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
            {t('useCasesSubtitle')}
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
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {useCase.description}
                  </p>
                  
                  {useCase.partners && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Partneři projektu:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {useCase.partners.map((partner, idx) => (
                          <li key={idx}>• {partner}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
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
