import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { Word } from '../../types';

const SpellingMode: React.FC = () => {
  const { filteredWords, updateProgress } = useAppContext();
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showGender, setShowGender] = useState(false);

  useEffect(() => {
    if (filteredWords.length > 0) {
      selectNewWord();
    }
  }, [filteredWords]);

  const selectNewWord = () => {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    setCurrentWord(filteredWords[randomIndex]);
    setUserInput('');
    setShowResult(false);
    setShowGender(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentWord) return;

    const isAnswerCorrect = userInput.toLowerCase().trim() === currentWord.french.toLowerCase();
    setIsCorrect(isAnswerCorrect);
    setShowResult(true);
    setShowGender(true);

    if (isAnswerCorrect) {
      updateProgress({
        totalWordsStudied: prev => prev + 1
      });
    }
  };

  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'masculin':
        return 'text-blue-600 dark:text-blue-400';
      case 'féminin':
        return 'text-red-500 dark:text-red-400';
      case 'neutre':
        return 'text-green-500 dark:text-green-400';
      case 'pluriel':
        return 'text-purple-500 dark:text-purple-400';
      default:
        return '';
    }
  };

  if (!currentWord) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucun mot disponible dans cette catégorie</p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-200">
              {currentWord.germanArticle} {currentWord.german}
            </h3>
            {showGender && (
              <p className={`text-sm font-medium mt-2 ${getGenderColor(currentWord.gender)}`}>
                ({currentWord.gender})
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Tapez la traduction en français..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={showResult}
              />
            </div>

            {!showResult ? (
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Vérifier
              </button>
            ) : (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  isCorrect 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  <div className="flex items-center">
                    {isCorrect ? (
                      <Check className="h-5 w-5 mr-2" />
                    ) : (
                      <X className="h-5 w-5 mr-2" />
                    )}
                    <p>
                      {isCorrect 
                        ? 'Correct!' 
                        : `La bonne réponse était: ${currentWord.french}`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={selectNewWord}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Mot suivant
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpellingMode;