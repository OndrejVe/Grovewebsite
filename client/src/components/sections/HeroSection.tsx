import { ArrowRight, Brain, Code, Database, Zap, Cpu, Bot, Binary, Sparkles, Atom } from 'lucide-react';
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
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">AI Development Studio</span>
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
                Začít projekt
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#about" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-5 text-lg font-semibold border-3 border-blue-300/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl hover:border-blue-500 hover:text-blue-600 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group-hover:-rotate-1"
              >
{t('learnMore')}
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

      {/* Flowing Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large flowing gradient shapes */}
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        <motion.div 
          className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-bl from-pink-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 5
          }}
        />

        <motion.div 
          className="absolute -bottom-40 -left-20 w-72 h-72 bg-gradient-to-tr from-green-400/30 via-teal-400/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            delay: 10
          }}
        />

        <motion.div 
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-orange-400/25 via-pink-400/15 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [180, 0, -180]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
        />

        {/* Medium flowing elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 via-blue-400/15 to-transparent rounded-full blur-2xl"
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.2, 0.4, 0.2, 0.2]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-l from-teal-400/20 via-green-400/15 to-transparent rounded-full blur-2xl"
          animate={{ 
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [0.8, 1.1, 1, 0.8],
            opacity: [0.15, 0.35, 0.15, 0.15]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 7
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 via-pink-50/20 to-green-50/40 dark:from-blue-950/20 dark:via-purple-950/10 dark:via-pink-950/10 dark:to-green-950/20"></div>
        
        {/* AI & Dev Floating Elements */}
        <motion.div 
          className="absolute top-16 left-20 text-blue-500/30 dark:text-blue-400/40"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="w-8 h-8" />
        </motion.div>

        <motion.div 
          className="absolute top-32 right-24 text-purple-500/30 dark:text-purple-400/40"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Code className="w-10 h-10" />
        </motion.div>

        <motion.div 
          className="absolute bottom-40 left-16 text-green-500/30 dark:text-green-400/40"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.25, 0.55, 0.25],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Database className="w-7 h-7" />
        </motion.div>

        <motion.div 
          className="absolute bottom-20 right-32 text-pink-500/30 dark:text-pink-400/40"
          animate={{ 
            y: [0, 10, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 20, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-12 text-teal-500/30 dark:text-teal-400/40"
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <Atom className="w-8 h-8" />
        </motion.div>

        <motion.div 
          className="absolute top-1/3 right-16 text-orange-500/30 dark:text-orange-400/40"
          animate={{ 
            y: [0, 12, 0],
            x: [0, -8, 0],
            opacity: [0.25, 0.5, 0.25],
            scale: [0.9, 1.2, 0.9]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Bot className="w-9 h-9" />
        </motion.div>

        {/* Floating Code Snippets */}
        <motion.div 
          className="absolute top-20 right-1/3 text-xs font-mono text-blue-400/20 dark:text-blue-300/30 select-none"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          const ai = new LLM()
        </motion.div>

        <motion.div 
          className="absolute bottom-1/3 left-1/4 text-xs font-mono text-purple-400/20 dark:text-purple-300/30 select-none"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          {"{ model: 'gpt-4o' }"}
        </motion.div>

        <motion.div 
          className="absolute top-2/3 right-1/4 text-xs font-mono text-green-400/20 dark:text-green-300/30 select-none"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          await generate()
        </motion.div>

        {/* Binary/Data Streams */}
        <motion.div 
          className="absolute top-40 left-1/3 text-xs font-mono text-teal-400/15 dark:text-teal-300/25 select-none"
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          01001001 01000001
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 right-1/3 text-xs font-mono text-pink-400/15 dark:text-pink-300/25 select-none"
          animate={{ 
            y: [0, 25, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 3 }}
        >
          11000001 10101010
        </motion.div>

        {/* Algorithmic Patterns */}
        <motion.div 
          className="absolute top-1/4 right-20 text-sm text-orange-400/20 dark:text-orange-300/30 select-none"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ⚡
        </motion.div>

        <motion.div 
          className="absolute bottom-1/2 left-1/2 text-lg text-blue-400/20 dark:text-blue-300/30 select-none"
          animate={{ 
            rotate: [360, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
        >
          ⟨⟩
        </motion.div>
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
