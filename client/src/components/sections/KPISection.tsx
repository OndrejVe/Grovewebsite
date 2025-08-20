import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Brain, Code2, Zap, Rocket, Database, Bot } from 'lucide-react';

export function KPISection() {
  const { t } = useLanguage();

  const kpis = [
    {
      number: "20+",
      description: t('kpi1'),
      color: "text-brand-blue",
      icon: Brain,
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      number: "5",
      description: t('kpi2'),
      color: "text-brand-green",
      icon: Rocket,
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      number: "100%",
      description: t('kpi3'),
      color: "text-purple-600",
      icon: Zap,
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      number: "∞",
      description: t('kpi4'),
      color: "text-orange-600",
      icon: Database,
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  const technologies = [
    { name: "Python", usage: 95 },
    { name: "TypeScript", usage: 90 },
    { name: "OpenAI API", usage: 85 },
    { name: "Vector DBs", usage: 80 },
    { name: "Docker", usage: 88 },
    { name: "AWS/Azure", usage: 75 }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <motion.div 
              key={index}
              className={`text-center p-8 rounded-xl ${kpi.bgColor} border border-gray-200 dark:border-gray-700 hover-lift relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 mx-auto mb-4 ${kpi.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`text-4xl font-bold ${kpi.color} mb-2`}>
                  {kpi.number}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {kpi.description}
                </p>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute top-2 right-2 opacity-20">
                <Code2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="absolute bottom-2 left-2 opacity-10">
                <Bot className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div 
          className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Our Tech Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cutting-edge technologies powering our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-sm">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {tech.name}
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-blue to-brand-green rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.usage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {tech.usage}% proficiency
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
