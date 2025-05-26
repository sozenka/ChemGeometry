import React, { useState, useEffect } from 'react';
import { Shuffle, Trophy } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { MolecularGeometry } from '../../types';

interface Card {
  id: string;
  text: string;
  type: 'shape' | 'hybridization';
  isFlipped: boolean;
  isMatched: boolean;
}

const MatchingMode: React.FC = () => {
  const { filteredGeometries, updateProgress } = useAppContext();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (Array.isArray(filteredGeometries) && filteredGeometries.length > 0) {
      initializeGame();
    }
  }, [filteredGeometries]);

  const initializeGame = () => {
    const selectedGeometries = [...filteredGeometries]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

    const shapeCards = selectedGeometries.map(geometry => ({
      id: geometry.id + '-shape',
      text: geometry.shape,
      type: 'shape' as const,
      isFlipped: false,
      isMatched: false
    }));

    const hybridizationCards = selectedGeometries.map(geometry => ({
      id: geometry.id + '-hybridization',
      text: `${geometry.hybridization} (${geometry.class})`,
      type: 'hybridization' as const,
      isFlipped: false,
      isMatched: false
    }));

    setCards([...shapeCards, ...hybridizationCards].sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMatchedPairs(0);
    setIsGameComplete(false);
    setMoves(0);
  };

  const handleCardClick = (clickedCard: Card) => {
    if (
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }

    const newCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = newFlippedCards;
      const isMatch = 
        (firstCard.type !== secondCard.type) &&
        firstCard.id.split('-')[0] === secondCard.id.split('-')[0];

      if (isMatch) {
        const newMatchedPairs = matchedPairs + 1;
        setMatchedPairs(newMatchedPairs);
        setCards(cards.map(card =>
          card.id === firstCard.id || card.id === secondCard.id
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);

        if (newMatchedPairs === 8) {
          setIsGameComplete(true);
          updateProgress({
            completedSessions: (typeof updateProgress === 'function' ? 1 : 0),
            totalStudied: 8
          });
        }
      } else {
        setTimeout(() => {
          setCards(cards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  if (!Array.isArray(filteredGeometries) || filteredGeometries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucune géométrie disponible pour le jeu de correspondance</p>
      </div>
    );
  }

  if (isGameComplete) {
    return (
      <div className="my-6">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Félicitations!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Vous avez trouvé toutes les paires en {moves} coups!
          </p>
          <button
            onClick={initializeGame}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
          >
            <Shuffle className="h-5 w-5 mr-2" />
            Nouvelle partie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Associez les paires
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Coups: {moves} | Paires: {matchedPairs}/8
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <div
            key={card.id}
            className="aspect-[3/4] cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
                card.isFlipped || card.isMatched ? '[transform:rotateY(180deg)]' : ''
              } [transform-style:preserve-3d]`}
            >
              {/* Card Back */}
              <div
                className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg border-2 ${
                  card.isMatched 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                } flex items-center justify-center`}
              >
                <span className="text-2xl text-gray-400 dark:text-gray-600">?</span>
              </div>

              {/* Card Front */}
              <div
                className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border-2 ${
                  card.isMatched
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-blue-500 bg-white dark:bg-gray-800'
                } p-4 flex items-center justify-center text-center`}
              >
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingMode;