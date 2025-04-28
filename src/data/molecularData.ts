import { MolecularGeometry, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'sp',
    name: 'sp',
    icon: 'LineHorizontal',
    count: 1
  },
  {
    id: 'sp2',
    name: 'sp²',
    icon: 'Triangle',
    count: 2
  },
  {
    id: 'sp3',
    name: 'sp³',
    icon: 'Box',
    count: 3
  },
  {
    id: 'sp3d',
    name: 'sp³d',
    icon: 'Pentagon',
    count: 4
  },
  {
    id: 'sp3d2',
    name: 'sp³d²',
    icon: 'Hexagon',
    count: 3
  }
];

export const molecularGeometries: MolecularGeometry[] = [
  {
    id: 'linear-sp',
    hybridization: 'sp',
    class: 'AB₂',
    shape: 'Linéaire',
    angles: '180°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/linear-molecule.jpg',
    description: 'Forme la plus simple avec deux liaisons alignées à 180°'
  },
  {
    id: 'trigonal-planar',
    hybridization: 'sp²',
    class: 'AB₃',
    shape: 'Triangulaire plane',
    angles: '120°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/trigonal-planar.jpg',
    description: 'Trois liaisons dans un plan formant des angles égaux de 120°'
  },
  {
    id: 'angular-planar',
    hybridization: 'sp²',
    class: 'AB₂E',
    shape: 'Angulaire Plane',
    angles: '<120°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/angular-planar.jpg',
    description: 'Deux liaisons et un doublet non liant dans un plan'
  },
  {
    id: 'tetrahedral',
    hybridization: 'sp³',
    class: 'AB₄',
    shape: 'Tétraédrique',
    angles: '109,5°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/tetrahedral.jpg',
    description: 'Quatre liaisons formant un tétraèdre parfait'
  },
  {
    id: 'pyramidal',
    hybridization: 'sp³',
    class: 'AB₃E',
    shape: 'Pyramidale',
    angles: '<109.5°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/pyramidal.jpg',
    description: 'Trois liaisons et un doublet non liant formant une pyramide'
  },
  {
    id: 'angular-sp3',
    hybridization: 'sp³',
    class: 'AB₂E₂',
    shape: 'Angulaire Plane',
    angles: '<109.5°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/angular-sp3.jpg',
    description: 'Deux liaisons et deux doublets non liants'
  },
  {
    id: 'trigonal-bipyramidal',
    hybridization: 'sp³d',
    class: 'AB₅',
    shape: 'Bipyramidale',
    angles: '90°, 120°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/trigonal-bipyramidal.jpg',
    description: 'Cinq liaisons formant deux pyramides triangulaires opposées'
  },
  {
    id: 'seesaw',
    hybridization: 'sp³d',
    class: 'AB₄E',
    shape: 'À bascule',
    angles: '109.5°, 120°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/seesaw.jpg',
    description: 'Quatre liaisons et un doublet non liant en forme de balançoire'
  },
  {
    id: 't-shaped',
    hybridization: 'sp³d',
    class: 'AB₃E₂',
    shape: 'En T',
    angles: '90°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/t-shaped.jpg',
    description: 'Trois liaisons formant un T avec deux doublets non liants'
  },
  {
    id: 'linear-sp3d',
    hybridization: 'sp³d',
    class: 'AB₂E₃',
    shape: 'Linéaire',
    angles: '180°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/linear-sp3d.jpg',
    description: 'Deux liaisons alignées avec trois doublets non liants'
  },
  {
    id: 'octahedral',
    hybridization: 'sp³d²',
    class: 'AB₆',
    shape: 'Octaédrique',
    angles: '90°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/octahedral.jpg',
    description: 'Six liaisons formant un octaèdre régulier'
  },
  {
    id: 'square-pyramidal',
    hybridization: 'sp³d²',
    class: 'AB₅E',
    shape: 'Pyramidale à base carrée',
    angles: '~90°',
    polarity: 'polaire',
    imageUrl: 'https://images.pexels.com/photos/square-pyramidal.jpg',
    description: 'Cinq liaisons et un doublet non liant en pyramide à base carrée'
  },
  {
    id: 'square-planar',
    hybridization: 'sp³d²',
    class: 'AB₄E₂',
    shape: 'Carré plan',
    angles: '90°',
    polarity: 'non polaire',
    imageUrl: 'https://images.pexels.com/photos/square-planar.jpg',
    description: 'Quatre liaisons dans un plan carré avec deux doublets non liants'
  }
];

export const getGeometriesByHybridization = (hybridization: string): MolecularGeometry[] => {
  return molecularGeometries.filter(geometry => geometry.hybridization === hybridization);
};