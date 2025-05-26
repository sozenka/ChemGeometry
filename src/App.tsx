import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header />
        <main>
          <Dashboard />
        </main>
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>ChemGeometry</p>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;