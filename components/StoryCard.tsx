import React from 'react';
import { Story } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-brand-slate shadow-sm">
          {story.tag}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-brand-slate mb-2 group-hover:text-brand-blue transition-colors">
          {story.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
          {story.summary}
        </p>
        <button className="flex items-center gap-2 text-brand-blue font-bold text-sm group/btn self-start">
          <span>Read Story</span>
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};