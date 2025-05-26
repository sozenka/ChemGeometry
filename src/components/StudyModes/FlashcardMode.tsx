import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, HeartPulse, RotateCcw } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { MolecularGeometry } from '../../types';

const FlashcardMode: React.FC = () => {
  const { filteredGeometries } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentGeometries, setCurrentGeometries] = useState<MolecularGeometry[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (Array.isArray(filteredGeometries) && filteredGeometries.length > 0) {
      const shuffled = [...filteredGeometries].sort(() => Math.random() - 0.5);
      setCurrentGeometries(shuffled);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [filteredGeometries]);

  const currentGeometry = currentGeometries[currentIndex];

  const handleCardClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleNextCard = () => {
    if (currentIndex < currentGeometries.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleReset = () => {
    if (Array.isArray(filteredGeometries) && filteredGeometries.length > 0) {
      const shuffled = [...filteredGeometries].sort(() => Math.random() - 0.5);
      setCurrentGeometries(shuffled);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  if (!Array.isArray(filteredGeometries) || filteredGeometries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucune géométrie disponible dans cette catégorie</p>
      </div>
    );
  }

  if (!currentGeometry) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucune géométrie disponible</p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Flashcards <span className="text-sm text-gray-500 dark:text-gray-400">({currentIndex + 1}/{currentGeometries.length})</span>
        </h2>
        <button 
          onClick={handleReset}
          className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Mélanger
        </button>
      </div>

      <div className="relative perspective-1000 mx-auto my-6" style={{ height: '400px', maxWidth: '600px' }}>
        <div 
          className={`absolute w-full h-full rounded-xl shadow-lg cursor-pointer transition-transform duration-300 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleCardClick}
        >
          {/* Front of card - Hybridization and Class */}
          <div className="absolute w-full h-full backface-hidden rounded-xl bg-white dark:bg-gray-800 p-8 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
            <div className="text-xs font-medium uppercase mb-2 text-blue-600 dark:text-blue-400">
              {currentGeometry.hybridization}
            </div>
            <h3 className="text-3xl font-serif font-bold text-center text-gray-800 dark:text-gray-200 mb-3">
              {currentGeometry.class}
            </h3>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {currentGeometry.shape}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
              (Cliquez pour voir plus de détails)
            </p>
          </div>

          {/* Back of card - Details and Image */}
          <div className="absolute w-full h-full backface-hidden rounded-xl bg-white dark:bg-gray-800 p-8 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rotate-y-180">
            <div className="text-center mb-4">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Angles: {currentGeometry.angles}
              </p>
              <p className={`text-sm font-medium mt-2 ${
                currentGeometry.polarity === 'polaire' 
                  ? 'text-red-500 dark:text-red-400'
                  : 'text-green-500 dark:text-green-400'
              }`}>
                {currentGeometry.polarity}
              </p>
            </div>
            {currentGeometry.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
                {currentGeometry.description}
              </p>
            )}
            <img 
              src={currentGeometry.imageUrl} 
              alt={currentGeometry.shape}
              className="w-48 h-48 object-contain mb-4"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              (Cliquez pour revenir)
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 my-4">
        <button 
          onClick={handlePrevCard}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full ${
            currentIndex === 0 
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50'
          }`}
          aria-label="Précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={handleNextCard}
          disabled={currentIndex === currentGeometries.length - 1}
          className={`p-3 rounded-full ${
            currentIndex === currentGeometries.length - 1 
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50'
          }`}
          aria-label="Suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlashcardMode;