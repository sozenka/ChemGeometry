import React from 'react';
import { MoreHorizontal as LineHorizontal, Triangle, Box, Pentagon, Hexagon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Category } from '../types';
import { molecularGeometries } from '../data/molecularData';

const CategorySelector: React.FC = () => {
  const { categories, currentCategory, setCurrentCategory } = useAppContext();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'LineHorizontal':
        return <LineHorizontal className="h-6 w-6" />;
      case 'Triangle':
        return <Triangle className="h-6 w-6" />;
      case 'Box':
        return <Box className="h-6 w-6" />;
      case 'Pentagon':
        return <Pentagon className="h-6 w-6" />;
      case 'Hexagon':
        return <Hexagon className="h-6 w-6" />;
      default:
        return <Box className="h-6 w-6" />;
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Types d'hybridation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* All categories option */}
        <button
          onClick={() => setCurrentCategory(null)}
          className={`p-4 rounded-lg border flex items-center space-x-3 transition-all duration-300 transform hover:scale-102 hover:shadow-md
            ${!currentCategory 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md' 
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
            }`}
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <Box className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Toutes</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{molecularGeometries.length} géométries</p>
          </div>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
            className={`p-4 rounded-lg border flex items-center space-x-3 transition-all duration-300 transform hover:scale-102 hover:shadow-md
              ${currentCategory === category.id 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md' 
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              {getIconComponent(category.icon)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{category.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} géométries</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;