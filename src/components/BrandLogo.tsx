import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number | string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-8 h-8', size }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden flex items-center justify-center p-0.5 bg-white border border-black/10 dark:border-white/15 shadow-xs transition-transform duration-200 group-hover:scale-105 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <img
        src="/logo.svg"
        alt="UK DEV Logo"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};
