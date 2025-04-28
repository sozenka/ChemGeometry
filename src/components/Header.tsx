import React from 'react';
import { Moon, Sun, Search, Atom } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface HeaderProps {
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSearch = true }) => {
  const { isDarkMode, toggleDarkMode, setSearchTerm } = useAppContext();

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Atom className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-2xl font-serif font-bold text-blue-800 dark:text-blue-400">
            Chem<span className="text-indigo-600 dark:text-indigo-400">Geometry</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {showSearch && (
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Rechercher une géométrie..."
                className="pl-9 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          )}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;