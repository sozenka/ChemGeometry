import React, { createContext, useContext, useState, useEffect } from 'react';
import { MolecularGeometry, Category, UserProgress, StudyMode } from '../types';
import { molecularGeometries, categories } from '../data/molecularData';

interface AppContextType {
  molecularGeometries: MolecularGeometry[];
  categories: Category[];
  currentCategory: string | null;
  setCurrentCategory: (category: string | null) => void;
  currentMode: StudyMode;
  setCurrentMode: (mode: StudyMode) => void;
  userProgress: UserProgress;
  updateProgress: (data: Partial<UserProgress>) => void;
  favoriteGeometry: (id: string) => void;
  setGeometryDifficulty: (id: string, difficulty: 1 | 2 | 3) => void;
  filteredGeometries: MolecularGeometry[];
  setSearchTerm: (term: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultProgress: UserProgress = {
  completedSessions: 0,
  totalStudied: 0,
  masteredGeometries: [],
  strugglingGeometries: [],
  streakDays: 0,
  categoryProgress: {}
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentMode, setCurrentMode] = useState<StudyMode>('flashcard');
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('chemGeometryProgress');
    return saved ? JSON.parse(saved) : defaultProgress;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const filteredGeometries = molecularGeometries.filter(geometry => {
    const matchesCategory = !currentCategory || geometry.hybridization === currentCategory;
    const matchesSearch = !searchTerm || 
      geometry.shape.toLowerCase().includes(searchTerm.toLowerCase()) || 
      geometry.hybridization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      geometry.class.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    localStorage.setItem('chemGeometryProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const updateProgress = (data: Partial<UserProgress>) => {
    setUserProgress(prev => ({ ...prev, ...data }));
  };

  const favoriteGeometry = (id: string) => {
    const updatedGeometries = molecularGeometries.map(geometry => {
      if (geometry.id === id) {
        return { ...geometry, favorite: !geometry.favorite };
      }
      return geometry;
    });
    console.log('Geometry favorited:', id);
  };

  const setGeometryDifficulty = (id: string, difficulty: 1 | 2 | 3) => {
    const updatedGeometries = molecularGeometries.map(geometry => {
      if (geometry.id === id) {
        return { ...geometry, difficulty };
      }
      return geometry;
    });
    console.log('Geometry difficulty set:', id, difficulty);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        molecularGeometries,
        categories,
        currentCategory,
        setCurrentCategory,
        currentMode,
        setCurrentMode,
        userProgress,
        updateProgress,
        favoriteGeometry,
        setGeometryDifficulty,
        filteredGeometries,
        setSearchTerm,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};