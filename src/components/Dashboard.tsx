import React from 'react';
import { useAppContext } from '../context/AppContext';
import CategorySelector from './CategorySelector';
import ModeSelector from './ModeSelector';
import FlashcardMode from './StudyModes/FlashcardMode';
import QuizMode from './StudyModes/QuizMode';
import MatchingMode from './StudyModes/MatchingMode';
import { CheckCircle2, Award, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentMode, userProgress } = useAppContext();

  const renderStudyMode = () => {
    switch (currentMode) {
      case 'flashcard':
        return <FlashcardMode />;
      case 'quiz':
        return <QuizMode />;
      case 'matching':
        return <MatchingMode />;
      default:
        return <FlashcardMode />;
    }
  };

  // Add null checks for userProgress properties
  const masteredGeometriesCount = userProgress?.masteredGeometries?.length || 0;
  const completedSessions = userProgress?.completedSessions || 0;
  const streakDays = userProgress?.streakDays || 0;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Progress stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center">
          <div className="mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
            <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sessions terminées</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{completedSessions}</p>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center">
          <div className="mr-4 flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
            <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Géométries maîtrisées</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{masteredGeometriesCount}</p>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center">
          <div className="mr-4 flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jours consécutifs</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{streakDays}</p>
          </div>
        </div>
      </div>

      {/* Category selector */}
      <CategorySelector />
      
      {/* Mode selector */}
      <ModeSelector />
      
      {/* Current study mode */}
      {renderStudyMode()}
    </div>
  );
};

export default Dashboard;