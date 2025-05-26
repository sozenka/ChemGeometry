import React from 'react';
import { useAppContext } from '../context/AppContext';
import { molecularGeometries } from '../data/molecularData';

const GeometryList: React.FC = () => {
  const { currentCategory } = useAppContext();

  const filteredGeometries = currentCategory
    ? molecularGeometries.filter(g => g.hybridization === currentCategory)
    : molecularGeometries;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {currentCategory ? `Géométries pour ${currentCategory}` : 'Toutes les géométries moléculaires'}
      </h2>

      {filteredGeometries.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Aucune géométrie disponible dans cette catégorie.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGeometries.map((geometry) => (
            <div
              key={geometry.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700"
            >
              <img
                src={geometry.imageUrl}
                alt={geometry.shape}
                className="w-full h-40 object-contain rounded mb-3"
              />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{geometry.shape}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Classe : {geometry.class}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Angles : {geometry.angles}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Polarité : {geometry.polarity}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{geometry.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GeometryList;
