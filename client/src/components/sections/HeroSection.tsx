import { ArrowRight, Brain, Code, Database, Zap, Cpu, Bot, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [email, setEmail] = useState('');

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

  const quickContactMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/contact', {
        name: 'Quick Contact',
        email,
        message: 'Zájem o AI řešení - rychlý kontakt z hlavní stránky',
        language
      });
    },
    onSuccess: () => {
      toast({
        title: "Děkujeme!",
        description: "Ozveme se vám do 24 hodin.",
      });
      setEmail('');
    },
    onError: () => {
      toast({
        title: "Chyba",
        description: "Zkuste to prosím znovu.",
        variant: "destructive",
      });
    }
  });

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      quickContactMutation.mutate(email);
    }
  };

  const techElements = [
    { icon: Brain, label: "Neural Networks", position: "top-20 left-10", delay: 0 },
    { icon: Code, label: "Python/JS/TS", position: "top-32 right-20", delay: 0.5 },
    { icon: Database, label: "Vector DB", position: "bottom-32 left-16", delay: 1 },
    { icon: Zap, label: "LLM APIs", position: "bottom-20 right-12", delay: 1.5 },
    { icon: Cpu, label: "GPU Computing", position: "top-1/2 left-8", delay: 2 },
    { icon: Bot, label: "AI Agents", position: "top-1/2 right-8", delay: 2.5 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-950 dark:to-green-950 theme-transition min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Development in Progress</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900 dark:text-gray-100">{t('heroTitle')}</span>
            <span className="block bg-gradient-to-r from-brand-blue via-purple-500 to-brand-green bg-clip-text text-transparent">
              {typewriterText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full font-medium">RAG Systems</span>
              <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full font-medium">Multilingual</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">On-prem/Cloud</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">Security & Audit</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">Real-time Avatars</span>
            </div>
          </div>
          
          {/* Quick Contact Form */}
          <motion.div 
            className="flex flex-col items-center gap-4 mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleQuickContact} className="w-full">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="vas-email@firma.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 focus:border-brand-blue"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={quickContactMutation.isPending}
                  className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 transform hover:scale-105 hover:shadow-xl transition-all duration-200"
                >
                  {quickContactMutation.isPending ? '...' : <Send className="w-5 h-5" />}
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Popište váš AI projekt - ozveme se do 24h
            </p>
            
            <div className="flex gap-4 mt-4">
              <a href="#about">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-brand-blue/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                >
                  {t('learnMore')}
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-brand-green/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:border-brand-green hover:text-brand-green transition-all duration-200"
                >
                  {t('contactUs')}
                </Button>
              </a>
            </div>
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

      {/* Floating AI/Dev Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {techElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} p-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg border border-white/20`}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 8
            }}
          >
            <element.icon className="w-6 h-6 text-brand-blue dark:text-brand-green" />
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 whitespace-nowrap">
              {element.label}
            </div>
          </motion.div>
        ))}
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
