import { ArrowRight, Brain, Code, Database, Zap, Cpu, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const { t } = useLanguage();
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = t('heroTitleAccent');

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);


  const techElements = [
    { icon: Brain, label: "Neural Networks", position: "top-20 left-10", delay: 0 },
    { icon: Code, label: "Python/JS/TS", position: "top-32 right-20", delay: 0.5 },
    { icon: Database, label: "Vector DB", position: "bottom-32 left-16", delay: 1 },
    { icon: Zap, label: "LLM APIs", position: "bottom-20 right-12", delay: 1.5 },
    { icon: Cpu, label: "GPU Computing", position: "top-1/2 left-8", delay: 2 },
    { icon: Bot, label: "AI Agents", position: "top-1/2 right-8", delay: 2.5 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 theme-transition min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">✨ AI Development Studio</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
            <motion.span 
              className="block text-gray-900 dark:text-gray-100 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('heroTitle')}
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {typewriterText}
              {showCursor && <span className="animate-pulse text-blue-600">|</span>}
            </motion.span>
          </h1>
          
          <motion.div 
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { label: "RAG Systems", color: "from-blue-500 to-blue-600", text: "text-white" },
                { label: "Multilingual", color: "from-green-500 to-green-600", text: "text-white" },
                { label: "On-prem/Cloud", color: "from-purple-500 to-purple-600", text: "text-white" },
                { label: "Security & Audit", color: "from-orange-500 to-orange-600", text: "text-white" },
                { label: "Real-time Avatars", color: "from-pink-500 to-pink-600", text: "text-white" }
              ].map((chip, index) => (
                <motion.span 
                  key={chip.label}
                  className={`bg-gradient-to-r ${chip.color} ${chip.text} px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform cursor-default`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <a href="#contact" className="group">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-5 text-lg font-bold transform hover:scale-110 hover:shadow-2xl transition-all duration-300 group-hover:rotate-1"
              >
                🚀 Začít projekt
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#about" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-5 text-lg font-semibold border-3 border-blue-300/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl hover:border-blue-500 hover:text-blue-600 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group-hover:-rotate-1"
              >
                ✨ {t('learnMore')}
              </Button>
            </a>
          </motion.div>

          {/* Code snippet animation */}
          <motion.div 
            className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 max-w-lg mx-auto text-left font-mono text-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-2">ai_integration.py</span>
            </div>
            <div className="text-green-400">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.6 }}
                className="overflow-hidden"
              >
                <div className="whitespace-nowrap">
                  <span className="text-purple-400">from</span> grove_ai <span className="text-purple-400">import</span> LLMOrchestrator<br/>
                  <span className="text-yellow-400">ai</span> = LLMOrchestrator(models=<span className="text-blue-400">["gpt-4", "claude-3.5"]</span>)<br/>
                  <span className="text-yellow-400">response</span> = ai.generate(<span className="text-green-400">"Where others stop..."</span>)
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating AI/Dev Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {techElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} p-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl`}
            initial={{ opacity: 0, scale: 0, rotate: -20, y: 50 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1.1, 1, 0.8],
              rotate: [-20, 0, 5, -5],
              y: [50, 0, -10, 20]
            }}
            transition={{ 
              duration: 4, 
              delay: element.delay,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut"
            }}
          >
            <element.icon className="w-8 h-8 text-blue-600 dark:text-green-400 mb-2" />
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {element.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500" />
        </svg>
      </div>

      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-brand-blue/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: Math.random() * 4,
                repeat: Infinity,
                repeatDelay: Math.random() * 8
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
