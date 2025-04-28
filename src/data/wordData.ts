import { Word, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'classroom',
    name: 'Objets en classe',
    icon: 'GraduationCap',
    wordCount: 23
  },
  {
    id: 'food',
    name: 'Essen - Nourriture',
    icon: 'Coffee',
    wordCount: 37
  },
  {
    id: 'home',
    name: 'Objets dans la maison',
    icon: 'Home',
    wordCount: 34
  }
];

export const words: Word[] = [
  // Classroom objects
  {
    id: 'beamer',
    german: 'Beamer',
    french: 'projecteur',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'blatt',
    german: 'Blatt',
    french: 'feuille',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'bleistift',
    german: 'Bleistift',
    french: 'crayon à mine',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'boden',
    german: 'Boden',
    french: 'plancher',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'brille',
    german: 'Brille',
    french: 'lunette',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'classroom'
  },
  {
    id: 'buch',
    german: 'Buch',
    french: 'livre',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'bueroklammer',
    german: 'Büroklammer',
    french: 'trombone',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'classroom'
  },
  {
    id: 'computer',
    german: 'Computer',
    french: 'ordinateur',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'druckbleistift',
    german: 'Druckbleistift',
    french: 'pousse-mine',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'fenster',
    german: 'Fenster',
    french: 'fenêtre',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'handy',
    german: 'Handy',
    french: 'téléphone portable',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'heft',
    german: 'Heft',
    french: 'cahier',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'kugelschreiber',
    german: 'Kugelschreiber',
    french: 'stylo',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'landkarte',
    german: 'Landkarte',
    french: 'carte géographique',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'classroom'
  },
  {
    id: 'lehrer',
    german: 'Lehrer',
    french: 'professeur',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'licht',
    german: 'Licht',
    french: 'lumière',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'lineal',
    german: 'Lineal',
    french: 'règle',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'maeppchen',
    german: 'Mäppchen',
    french: 'trousse à crayons',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'classroom'
  },
  {
    id: 'marker',
    german: 'Marker',
    french: 'surligneur',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'maus',
    german: 'Maus',
    french: 'souris',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'classroom'
  },
  {
    id: 'muelleimer',
    german: 'Mülleimer',
    french: 'poubelle',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'classroom'
  },
  {
    id: 'notiz',
    german: 'Notiz',
    french: 'note',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'classroom'
  },
  
  // Food items
  {
    id: 'apfel',
    german: 'Apfel',
    french: 'pomme',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'apfelsine',
    german: 'Apfelsine',
    french: 'orange',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'bier',
    german: 'Bier',
    french: 'bière',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'birne',
    german: 'Birne',
    french: 'poire',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'brezel',
    german: 'Brezel',
    french: 'bretzel',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'brot',
    german: 'Brot',
    french: 'pain',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'butter',
    german: 'Butter',
    french: 'beurre',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'cola',
    german: 'Cola',
    french: 'coca',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'ei',
    german: 'Ei',
    french: 'œuf',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'eis',
    german: 'Eis',
    french: 'glace',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'fisch',
    german: 'Fisch',
    french: 'poisson',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'gemuese',
    german: 'Gemüse',
    french: 'légumes',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'haehnchen',
    german: 'Hähnchen',
    french: 'poulet',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'honig',
    german: 'Honig',
    french: 'miel',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'joghurt',
    german: 'Joghurt',
    french: 'yaourt',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'kaffee',
    german: 'Kaffee',
    french: 'café',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'kartoffel',
    german: 'Kartoffel',
    french: 'pomme de terre',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'kaese',
    german: 'Käse',
    french: 'fromage',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'keks',
    german: 'Keks',
    french: 'biscuit',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'kuchen',
    german: 'Kuchen',
    french: 'gâteau',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'marmelade',
    german: 'Marmelade',
    french: 'confiture',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'milch',
    german: 'Milch',
    french: 'lait',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'nudeln',
    german: 'Nudeln',
    french: 'pâtes',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'obst',
    german: 'Obst',
    french: 'fruits',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'orangensaft',
    german: 'Orangensaft',
    french: 'jus d\'orange',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'paprika',
    german: 'Paprika',
    french: 'poivron',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'pommes',
    german: 'Pommes',
    french: 'frites',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'rotwein',
    german: 'Rotwein',
    french: 'vin rouge',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'salat',
    german: 'Salat',
    french: 'salade',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'sandwich',
    german: 'Sandwich',
    french: 'sandwich',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'schinken',
    german: 'Schinken',
    french: 'jambon',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'steak',
    german: 'Steak',
    french: 'steak',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'food'
  },
  {
    id: 'suppe',
    german: 'Suppe',
    french: 'soupe',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'tee',
    german: 'Tee',
    french: 'thé',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'tomate',
    german: 'Tomate',
    french: 'tomate',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'weisswein',
    german: 'Weißwein',
    french: 'vin blanc',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'wurst',
    german: 'Wurst',
    french: 'saucisse',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'zitrone',
    german: 'Zitrone',
    french: 'citron',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  {
    id: 'zucker',
    german: 'Zucker',
    french: 'sucre',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'food'
  },
  {
    id: 'zwiebel',
    german: 'Zwiebel',
    french: 'oignon',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'food'
  },
  
  // Home objects
  {
    id: 'badewanne',
    german: 'Badewanne',
    french: 'baignoire',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'bett',
    german: 'Bett',
    french: 'lit',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'bild',
    german: 'Bild',
    french: 'image',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'buerostuhl',
    german: 'Bürostuhl',
    french: 'chaise de bureau',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'cdplayer',
    german: 'CD-Player',
    french: 'lecteur CD',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'fernseher',
    german: 'Fernseher',
    french: 'télévision',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'hocker',
    german: 'Hocker',
    french: 'tabouret',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'nachttisch',
    german: 'Nachttisch',
    french: 'table de nuit',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'plattenspieler',
    german: 'Plattenspieler',
    french: 'tourne-disque',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'radio',
    german: 'Radio',
    french: 'radio',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'regal',
    german: 'Regal',
    french: 'étagère',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'schreibtisch',
    german: 'Schreibtisch',
    french: 'bureau',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'sessel',
    german: 'Sessel',
    french: 'fauteuil',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'sofa',
    german: 'Sofa',
    french: 'canapé',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'spiegel',
    german: 'Spiegel',
    french: 'miroir',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'spuele',
    german: 'Spüle',
    french: 'évier',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'herd',
    german: 'Herd',
    french: 'cuisinière',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'kaffeetisch',
    german: 'Kaffeetisch',
    french: 'table basse',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'kommode',
    german: 'Kommode',
    french: 'commode',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'kuechenschraenke',
    german: 'Küchenschränke',
    french: 'placards de cuisine',
    gender: 'pluriel',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'kuehlschrank',
    german: 'Kühlschrank',
    french: 'réfrigérateur',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'lampe',
    german: 'Lampe',
    french: 'lampe',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'matratze',
    german: 'Matratze',
    french: 'matelas',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'mikrowelle',
    german: 'Mikrowelle',
    french: 'micro-ondes',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'spuelmaschine',
    german: 'Spülmaschine',
    french: 'lave-vaisselle',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'stuhl',
    german: 'Stuhl',
    french: 'chaise',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'teppich',
    german: 'Teppich',
    french: 'tapis',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'tisch',
    german: 'Tisch',
    french: 'table',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'toilette',
    german: 'Toilette',
    french: 'toilettes',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'truhe',
    german: 'Truhe',
    french: 'coffre',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'uhr',
    german: 'Uhr',
    french: 'horloge',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  },
  {
    id: 'vorhang',
    german: 'Vorhang',
    french: 'rideau',
    gender: 'masculin',
    germanArticle: 'der',
    category: 'home'
  },
  {
    id: 'waschbecken',
    german: 'Waschbecken',
    french: 'lavabo',
    gender: 'neutre',
    germanArticle: 'das',
    category: 'home'
  },
  {
    id: 'waschmaschine',
    german: 'Waschmaschine',
    french: 'machine à laver',
    gender: 'féminin',
    germanArticle: 'die',
    category: 'home'
  }
];

// Get words by category
export const getWordsByCategory = (categoryId: string): Word[] => {
  return words.filter(word => word.category === categoryId);
};