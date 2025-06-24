
import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-lg px-4 py-3',
    lg: 'text-2xl px-6 py-4'
  };

  return (
    <div className={`bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 rounded-xl inline-flex items-center space-x-2 shadow-lg ${sizeClasses[size]} ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg opacity-80 blur-sm"></div>
        <span className="relative text-blue-600 font-kumar-one font-bold drop-shadow-sm">હરસિધ્ધિ</span>
      </div>
      <span className="text-red-500 font-kumar-one font-bold drop-shadow-sm">ટ્રેડીંગ</span>
    </div>
  );
};

export default BrandLogo;
