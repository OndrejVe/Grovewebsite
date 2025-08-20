import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  color?: string;
  side?: 'left' | 'right';
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-blue"></div>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}

export function TimelineItem({ step, title, description, color = "bg-brand-blue", side = "left" }: TimelineItemProps) {
  const colors = {
    'bg-brand-blue': 'bg-brand-blue',
    'bg-brand-green': 'bg-brand-green',
    'bg-purple-500': 'bg-purple-500',
    'bg-orange-500': 'bg-orange-500',
    'bg-red-500': 'bg-red-500',
  };

  const colorClass = colors[color as keyof typeof colors] || colors['bg-brand-blue'];

  return (
    <div className="relative flex items-center">
      <div className={cn(
        "absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10",
        colorClass
      )}>
        <span className="text-white font-semibold text-sm">{step}</span>
      </div>
      
      <div className={cn(
        "ml-12 md:ml-0",
        side === 'right' ? "md:w-1/2 md:pl-8 md:ml-auto" : "md:w-1/2 md:pr-8 md:text-right"
      )}>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}
