import React from 'react';
import { siteConfig } from '@/lib/siteData';

const Logo = ({ className = '', imageClassName = 'h-12', showText = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={siteConfig.logoUrl}
        alt={siteConfig.name}
        className={`${imageClassName} w-auto object-contain`}
      />
      {showText && (
        <div className="hidden leading-tight sm:block">
          <span className="block text-sm font-bold text-slate-950 dark:text-white">
            {siteConfig.shortName}
          </span>
          <span className="block text-xs font-medium text-slate-500 dark:text-slate-300">
            {siteConfig.tagline}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
