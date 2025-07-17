import React from 'react';

interface Brand {
  name: string;
  logo?: string;
}

interface BrandGridProps {
  brands: Brand[];
  title: string;
}

const BrandGrid: React.FC<BrandGridProps> = ({ brands, title }) => {
  return (
    <div className="w-full py-1.5 px-2">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="bg-green-100 rounded-md shadow-sm p-1.5 flex flex-col items-center justify-center hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            {brand.logo ? (
              <div className="h-16 w-full flex items-center justify-center mb-1">
                <img 
                  src={`/brands/${brand.logo}`} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
            ) : (
              <div className="h-16 w-full flex items-center justify-center mb-1">
                <span className="text-lg font-bold text-gray-800 text-center tracking-wide">{brand.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;