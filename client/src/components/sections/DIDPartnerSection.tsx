import { motion } from 'framer-motion';
import { Video, Mic, MessageSquare, Zap, Shield, Clock, Stethoscope, Link, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function DIDPartnerSection() {
  const { t, language } = useLanguage();

  const capabilities = [
    {
      icon: Video,
      title: language === 'cs' ? 'AI Avatary' : 'AI Avatars',
      description: language === 'cs' 
        ? 'Realistické digitální avatary s přirozeným pohybem' 
        : 'Realistic digital avatars with natural movement',
      color: 'text-blue-600'
    },
    {
      icon: Mic,
      title: language === 'cs' ? 'Hlasové AI' : 'Voice AI',
      description: language === 'cs' 
        ? 'Přirozené hlasové interakce v jakémkoli jazyce' 
        : 'Natural voice interactions in any language',
      color: 'text-green-600'
    },
    {
      icon: MessageSquare,
      title: language === 'cs' ? 'Konverzace' : 'Conversations',
      description: language === 'cs' 
        ? 'Pokročilé textové a hlasové konverzace' 
        : 'Advanced text and voice conversations',
      color: 'text-purple-600'
    }
  ];

  const partnershipHighlights = [
    {
      title: language === 'cs' ? 'Prof. Richard projekt' : 'Prof. Richard Project',
      description: language === 'cs' 
        ? 'Úspěšně jsme vyvinuli AI doktora pro hematologii s CME a IACH' 
        : 'Successfully developed AI doctor for hematology with CME and IACH',
      icon: Stethoscope,
      color: 'text-red-600'
    },
    {
      title: language === 'cs' ? 'Pokročilé integrace' : 'Advanced Integrations',
      description: language === 'cs' 
        ? 'Propojujeme D-ID avatary s firemními systémy a databázemi' 
        : 'Connecting D-ID avatars with corporate systems and databases',
      icon: Link,
      color: 'text-blue-600'
    },
    {
      title: language === 'cs' ? 'Kompletní řešení' : 'Complete Solutions',
      description: language === 'cs' 
        ? 'Od konceptu přes vývoj až po nasazení v produkci' 
        : 'From concept through development to production deployment',
      icon: Rocket,
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20 theme-transition relative overflow-hidden">
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
              <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">
              {language === 'cs' ? 'Oficiální partner D-ID' : 'Official D-ID Partner'}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            {language === 'cs' 
              ? 'Generativní AI avatary nové generace' 
              : 'Next-generation generative AI avatars'
            }
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            {language === 'cs' 
              ? 'Jako oficiální partner D-ID přinášíme nejpokročilejší technologie generativních AI avatarů. Vyvíjíme nad jejich platformou komplexní řešení pro hotely, vzdělávání a zákaznickou podporu.'
              : 'As an official D-ID partner, we bring the most advanced generative AI avatar technologies. We develop comprehensive solutions on their platform for hotels, education, and customer support.'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {language === 'cs' ? 'Proč D-ID technologie?' : 'Why D-ID technology?'}
            </h3>
            
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-8 h-8 ${capability.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <capability.icon className={`w-4 h-4 ${capability.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI Avatar demonstrace" 
                  className="rounded-xl w-full h-64 object-cover mb-4" 
                />
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {language === 'cs' ? 'Live AI Avatar Demo' : 'Live AI Avatar Demo'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {language === 'cs' 
                      ? 'Interaktivní avatar s reálným časem odpovědí' 
                      : 'Interactive avatar with real-time responses'
                    }
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {language === 'cs' ? 'Aktivní' : 'Active'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Success Stories */}
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {language === 'cs' ? 'Naše D-ID projekty v praxi' : 'Our D-ID Projects in Practice'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {partnershipHighlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg bg-white/80 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <highlight.icon className={`w-8 h-8 ${highlight.color} mx-auto mb-3`} />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {language === 'cs' 
                ? 'Zajímá vás, jak můžeme D-ID technologie využít ve vašem projektu?' 
                : 'Interested in how we can use D-ID technologies in your project?'
              }
            </p>
            <a href="#contact">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-bold transform hover:scale-110 hover:shadow-2xl transition-all duration-300">
                {language === 'cs' ? 'Promluvme si o vašem projektu' : 'Let\'s discuss your project'}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Effects like Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-28 h-28 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}