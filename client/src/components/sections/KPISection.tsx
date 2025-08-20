import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function KPISection() {
  const { t } = useLanguage();

  const kpis = [
    {
      number: "20+",
      description: t('kpi1'),
      color: "text-brand-blue"
    },
    {
      number: "5",
      description: t('kpi2'),
      color: "text-brand-green"
    },
    {
      number: "100%",
      description: t('kpi3'),
      color: "text-brand-blue"
    },
    {
      number: "∞",
      description: t('kpi4'),
      color: "text-brand-green"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-bold ${kpi.color} mb-2`}>
                {kpi.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
