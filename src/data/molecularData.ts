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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/AX2E0-2D.png',
    description: 'Forme la plus simple avec deux liaisons alignées à 180°'
  },
  {
    id: 'trigonal-planar',
    hybridization: 'sp²',
    class: 'AB₃',
    shape: 'Triangulaire plane',
    angles: '120°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/AX3E0-side-2D.png',
    description: 'Trois liaisons dans un plan formant des angles égaux de 120°'
  },
  {
    id: 'angular-planar',
    hybridization: 'sp²',
    class: 'AB₂E',
    shape: 'Angulaire Plane',
    angles: '<120°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/AX2E1-2D.png',
    description: 'Deux liaisons et un doublet non liant dans un plan'
  },
  {
    id: 'tetrahedral',
    hybridization: 'sp³',
    class: 'AB₄',
    shape: 'Tétraédrique',
    angles: '109,5°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/AX4E0-2D.png',
    description: 'Quatre liaisons formant un tétraèdre parfait'
  },
  {
    id: 'pyramidal',
    hybridization: 'sp³',
    class: 'AB₃E',
    shape: 'Pyramidale',
    angles: '<109,5°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/AX3E1-2D.png',
    description: 'Trois liaisons et un doublet non liant formant une pyramide'
  },
  {
    id: 'angular-sp3',
    hybridization: 'sp³',
    class: 'AB₂E₂',
    shape: 'Angulaire Plane',
    angles: '<109,5°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/AX2E2-2D.png',
    description: 'Deux liaisons et deux doublets non liants'
  },
  {
    id: 'trigonal-bipyramidal',
    hybridization: 'sp³d',
    class: 'AB₅',
    shape: 'Bipyramidale',
    angles: '90°, 120°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/AX5E0-2D.png',
    description: 'Cinq liaisons formant deux pyramides triangulaires opposées'
  },
  {
    id: 'seesaw',
    hybridization: 'sp³d',
    class: 'AB₄E',
    shape: 'À bascule',
    angles: '~90°, ~120°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/AX4E1-2D.png',
    description: 'Quatre liaisons et un doublet non liant en forme de balançoire'
  },
  {
    id: 't-shaped',
    hybridization: 'sp³d',
    class: 'AB₃E₂',
    shape: 'En T',
    angles: '90°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/AX3E2-2D.png',
    description: 'Trois liaisons formant un T avec deux doublets non liants'
  },
  {
    id: 'linear-sp3d',
    hybridization: 'sp³d',
    class: 'AB₂E₃',
    shape: 'Linéaire',
    angles: '180°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/AX2E3-2D.png',
    description: 'Deux liaisons alignées avec trois doublets non liants'
  },
  {
    id: 'octahedral',
    hybridization: 'sp³d²',
    class: 'AB₆',
    shape: 'Octaédrique',
    angles: '90°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/AX6E0-2D.png',
    description: 'Six liaisons formant un octaèdre régulier'
  },
  {
    id: 'square-pyramidal',
    hybridization: 'sp³d²',
    class: 'AB₅E',
    shape: 'Pyramidale à base carrée',
    angles: '~90°',
    polarity: 'polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/AX5E1-2D.png',
    description: 'Cinq liaisons et un doublet non liant en pyramide à base carrée'
  },
  {
    id: 'square-planar',
    hybridization: 'sp³d²',
    class: 'AB₄E₂',
    shape: 'Carré plan',
    angles: '90°',
    polarity: 'non polaire',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/AX4E2-2D.png',
    description: 'Quatre liaisons dans un plan carré avec deux doublets non liants'
  }
];

export const getGeometriesByHybridization = (hybridization: string): MolecularGeometry[] => {
  return molecularGeometries.filter(geometry => geometry.hybridization === hybridization);
};