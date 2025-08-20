import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/usecases', label: t('usecases') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 theme-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src="/attached_assets/04_black_flat_1755711463165.png" 
                alt="Grove Tech AI" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E";
                }}
              />
              <span className="font-semibold text-lg">Grove Tech AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "text-gray-700 dark:text-gray-300 hover:text-brand-blue transition-colors cursor-pointer",
                  location === item.href && "text-brand-blue font-medium"
                )}>
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLanguage('cs')}
                className={cn(
                  "px-2 py-1 rounded transition-colors",
                  language === 'cs' 
                    ? "bg-brand-blue text-white font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                CZ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-2 py-1 rounded transition-colors",
                  language === 'en' 
                    ? "bg-brand-blue text-white font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className="block py-2 text-gray-700 dark:text-gray-300 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-4 py-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('cs')}
                  className={cn(
                    "px-2 py-1 rounded text-sm",
                    language === 'cs' ? "bg-brand-blue text-white" : "bg-gray-200 dark:bg-gray-700"
                  )}
                >
                  CZ
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "px-2 py-1 rounded text-sm",
                    language === 'en' ? "bg-brand-blue text-white" : "bg-gray-200 dark:bg-gray-700"
                  )}
                >
                  EN
                </button>
              </div>
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
