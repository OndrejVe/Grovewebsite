import { Zap, Clock, Shield } from 'lucide-react';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: t('innovation'),
      description: t('innovationDesc'),
      color: "bg-brand-blue"
    },
    {
      icon: Clock,
      title: t('speed'),
      description: t('speedDesc'),
      color: "bg-brand-green"
    },
    {
      icon: Shield,
      title: t('reliability'),
      description: t('reliabilityDesc'),
      color: "bg-purple-500"
    }
  ];

  const timelineSteps = [
    { step: 1, title: t('analysis'), description: t('analysisDesc'), color: 'bg-brand-blue', side: 'left' as const },
    { step: 2, title: t('prototype'), description: t('prototypeDesc'), color: 'bg-brand-green', side: 'right' as const },
    { step: 3, title: t('apiIntegration'), description: t('apiIntegrationDesc'), color: 'bg-purple-500', side: 'left' as const },
    { step: 4, title: t('testing'), description: t('testingDesc'), color: 'bg-orange-500', side: 'right' as const },
    { step: 5, title: t('scaling'), description: t('scalingDesc'), color: 'bg-red-500', side: 'left' as const },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {t('ourValues')}
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-8 h-8 ${value.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <value.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI vývojářský tým při práci na kódu" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            
            {/* Floating AI elements */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">AI Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 theme-transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t('developmentProcess')}
          </h3>
          
          <Timeline>
            {timelineSteps.map((step, index) => (
              <TimelineItem
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                color={step.color}
                side={step.side}
              />
            ))}
          </Timeline>
        </motion.div>
      </div>
    </section>
  );
}
