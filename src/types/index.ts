export interface MolecularGeometry {
  id: string;
  hybridization: 'sp' | 'sp²' | 'sp³' | 'sp³d' | 'sp³d²';
  class: string;
  shape: string;
  angles: string;
  polarity: 'polaire' | 'non polaire';
  imageUrl: string;
  description?: string;
  lastReviewed?: number;
  correctCount?: number;
  incorrectCount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export type StudyMode = 'flashcard' | 'quiz' | 'matching' | 'spelling';

export interface UserProgress {
  completedSessions: number;
  totalStudied: number;
  masteredGeometries: string[];
  strugglingGeometries: string[];
  lastStudyDate?: number;
  streakDays: number;
  categoryProgress: Record<string, {
    total: number;
    mastered: number;
  }>;
}