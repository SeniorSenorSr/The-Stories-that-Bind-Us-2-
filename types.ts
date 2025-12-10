export interface Story {
  id: string;
  title: string;
  summary: string;
  tag: 'Library' | 'Park' | 'Sidewalk' | 'Home' | 'School';
  imageUrl: string;
}

export interface SciencePrinciple {
  title: string;
  description: string;
  icon: 'Heart' | 'Users' | 'BookOpen' | 'Shield' | 'Anchor';
}

export type PlaceType = 'Library' | 'Park' | 'Sidewalk' | 'Grocery Store';

export interface GeminiConnectionResponse {
  conversationStarter: string;
  activity: string;
  reflection: string;
}