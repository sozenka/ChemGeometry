# ChemGeometry

![ChemGeometry Banner](https://img.shields.io/badge/Chemistry-Education-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)

An interactive web application designed to help students learn and master molecular geometry and hybridization concepts in chemistry. ChemGeometry provides an engaging learning experience through multiple study modes including flashcards, quizzes, and matching games.

## 🌟 Features

### Study Modes
- **📚 Flashcard Mode**: Review molecular geometries with interactive flashcards
- **✅ Quiz Mode**: Test your knowledge with multiple-choice questions
- **🎯 Matching Mode**: Match molecular structures with their properties

### Hybridization Coverage
- **sp**: Linear geometries
- **sp²**: Trigonal planar structures
- **sp³**: Tetrahedral and related geometries
- **sp³d**: Trigonal bipyramidal configurations
- **sp³d²**: Octahedral structures

### Learning Features
- 🎨 Visual representations of molecular structures
- 📊 Progress tracking and statistics
- 🌓 Dark mode support
- 📱 Responsive design for mobile and desktop
- 🇫🇷 French language interface
- 🎯 Category-based learning organization

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sozenka/ChemGeometry.git
cd ChemGeometry
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Headless UI 1.7.18
- **Icons**: Lucide React 0.344.0
- **State Management**: React Context API

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📂 Project Structure

```
ChemGeometry/
├── src/
│   ├── components/         # React components
│   │   ├── StudyModes/    # Study mode components (Flashcard, Quiz, Matching)
│   │   ├── CategorySelector.tsx
│   │   ├── Dashboard.tsx
│   │   ├── GeometryList.tsx
│   │   ├── Header.tsx
│   │   └── ModeSelector.tsx
│   ├── context/           # React Context providers
│   ├── data/              # Molecular geometry data
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎓 Educational Content

The application covers key concepts in molecular geometry including:

- **Hybridization types**: sp, sp², sp³, sp³d, sp³d²
- **Molecular classes**: AB₂, AB₃, AB₄, etc.
- **Bond angles**: 180°, 120°, 109.5°, etc.
- **Polarity**: Polar and non-polar molecules
- **3D shapes**: Linear, trigonal planar, tetrahedral, octahedral, and more

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to ChemGeometry:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**sozenka**
- GitHub: [@sozenka](https://github.com/sozenka)

## 🙏 Acknowledgments

- Molecular structure images from Wikimedia Commons
- Icons provided by Lucide React
- Built with React, TypeScript, and Vite

## 📧 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

Made with ❤️ for chemistry students
