import React from 'react';
import { SquareStack as CardStack, ListChecks, LayoutGrid } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { StudyMode } from '../types';

const ModeSelector: React.FC = () => {
  const { currentMode, setCurrentMode } = useAppContext();

  const modes: { id: StudyMode; name: string; icon: React.ReactNode; description: string }[] = [
    {
      id: 'flashcard',
      name: 'Flashcards',
      icon: <CardStack className="h-6 w-6" />,
      description: 'Apprenez les géométries'
    },
    {
      id: 'quiz',
      name: 'Quiz',
      icon: <ListChecks className="h-6 w-6" />,
      description: 'Testez vos connaissances'
    },
    {
      id: 'matching',
      name: 'Correspondance',
      icon: <LayoutGrid className="h-6 w-6" />,
      description: 'Associez les paires'
    }
  ];

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Mode d'étude</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setCurrentMode(mode.id)}
            className={`p-4 rounded-lg border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md
              ${currentMode === mode.id 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md' 
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
          >
            <div className="flex items-center justify-center h-12 w-12 mb-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              {mode.icon}
            </div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">{mode.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{mode.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;