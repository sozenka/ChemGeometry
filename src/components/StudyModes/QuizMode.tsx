import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { MolecularGeometry } from '../../types';

const QuizMode: React.FC = () => {
  const { filteredGeometries, updateProgress } = useAppContext();
  const [currentQuestions, setCurrentQuestions] = useState<MolecularGeometry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (Array.isArray(filteredGeometries) && filteredGeometries.length > 0) {
      const shuffled = [...filteredGeometries].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(13, shuffled.length));
      setCurrentQuestions(selected);
      setCurrentIndex(0);
      setSelectedOption(null);
      setResult(null);
      setScore({ correct: 0, total: 0 });
      setQuizCompleted(false);
    }
  }, [filteredGeometries]);

  useEffect(() => {
    if (currentQuestions.length > 0) {
      generateOptions();
    }
  }, [currentIndex, currentQuestions]);

const generateOptions = () => {
  
  const currentGeometry = currentQuestions[currentIndex];
  if (!currentGeometry) return;

  // Get 3 other unique shapes different from current
  const otherGeometries = filteredGeometries
    .filter(geo => geo.shape !== currentGeometry.shape)
    .sort(() => Math.random() - 0.5);

  const uniqueOptions = new Set<string>();
  uniqueOptions.add(currentGeometry.shape);

  for (const geo of otherGeometries) {
    if (uniqueOptions.size >= 4) break;
    uniqueOptions.add(geo.shape);
  }

  // Shuffle the options
  const allOptions = Array.from(uniqueOptions).sort(() => Math.random() - 0.5);
  setOptions(allOptions);
};


  const handleSelectOption = (option: string) => {
    if (result !== null) return;
    
    const currentGeometry = currentQuestions[currentIndex];
    const isCorrect = option === currentGeometry.shape;
    
    setSelectedOption(option);
    setResult(isCorrect ? 'correct' : 'incorrect');
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setResult(null);
    } else {
      setQuizCompleted(true);
      updateProgress({
        completedSessions: (score.total > 0 ? 1 : 0),
        totalStudied: currentQuestions.length
      });
    }
  };

  const handleRestartQuiz = () => {
    const shuffled = [...filteredGeometries].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(13, shuffled.length));
    setCurrentQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setResult(null);
    setScore({ correct: 0, total: 0 });
    setQuizCompleted(false);
  };

  if (!Array.isArray(filteredGeometries) || filteredGeometries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucune géométrie disponible pour le quiz</p>
      </div>
    );
  }

  const currentGeometry = currentQuestions[currentIndex];

  if (!currentGeometry && !quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>Aucune géométrie disponible pour le quiz</p>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score.correct / score.total) * 100);
    
    return (
      <div className="my-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <Award className="h-16 w-16 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Quiz terminé!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Votre score: <span className="font-bold">{score.correct}/{score.total}</span> ({percentage}%)
          </p>
          
          {percentage >= 80 ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-3 rounded-lg mb-6">
              Excellent! Vous maîtrisez bien ces géométries.
            </div>
          ) : percentage >= 50 ? (
            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 p-3 rounded-lg mb-6">
              Bon travail! Continuez à pratiquer pour améliorer votre score.
            </div>
          ) : (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-3 rounded-lg mb-6">
              Ces géométries nécessitent plus de pratique. Ne vous découragez pas!
            </div>
          )}
          
          <button
            onClick={handleRestartQuiz}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Recommencer le quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Quiz <span className="text-sm text-gray-500 dark:text-gray-400">({currentIndex + 1}/{currentQuestions.length})</span>
        </h2>
        <div className="text-sm font-medium">
          Score: <span className="text-blue-600 dark:text-blue-400">{score.correct}/{score.total}</span>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Pour l'hybridation {currentGeometry.hybridization} et la classe {currentGeometry.class}:
          </p>
          <h3 className="text-xl font-medium text-center text-gray-800 dark:text-gray-200 mb-2">
            Quelle est la forme géométrique?
          </h3>
          {currentGeometry.imageUrl && (
            <div className="flex justify-center mb-4">
              <img 
                src={currentGeometry.imageUrl} 
                alt="Géométrie moléculaire"
                className="w-32 h-32 object-contain"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(option)}
              disabled={result !== null}
              className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                selectedOption === option
                  ? result === 'correct'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                  : option === currentGeometry.shape && result === 'incorrect'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <div className="flex items-center">
                <span className="flex-1">{option}</span>
                {selectedOption === option && result === 'correct' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {selectedOption === option && result === 'incorrect' && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                {option === currentGeometry.shape && selectedOption !== option && result === 'incorrect' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {result !== null && (
        <div className="flex justify-center">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentIndex < currentQuestions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizMode;