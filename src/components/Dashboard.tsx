import React from 'react';
import { useAppContext } from '../context/AppContext';
import CategorySelector from './CategorySelector';
import ModeSelector from './ModeSelector';
import FlashcardMode from './StudyModes/FlashcardMode';
import QuizMode from './StudyModes/QuizMode';
import MatchingMode from './StudyModes/MatchingMode';
import GeometryList from './GeometryList';
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

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Category selector */}
      <CategorySelector />
      
      {/* Mode selector */}
      <ModeSelector />
      
      {/* Current study mode */}
      {renderStudyMode()}

      {/* Geometry list section */}
      <GeometryList />
    </div>
  );
};

export default Dashboard;
