import React from 'react';
import { Button } from './Button';
import { PlayCircle, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-blue/5 to-transparent -z-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 rounded-bl-[100px] -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-slate leading-[1.1]">
              The Stories That <br/>
              <span className="text-brand-blue relative inline-block">
                Bind Us
                <svg className="absolute w-full h-3 bottom-1 left-0 text-brand-yellow opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-brand-slate/80 leading-relaxed font-light">
              Stories, spaces, and the science of growing up together. 
              Discover how everyday places—like libraries and parks—help families connect, learn, and feel at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <PlayCircle size={20} />
                Watch Intro Video
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <BookOpen size={20} />
                Read a Story
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-4 text-sm text-brand-slate/60 font-medium">
              <span className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/50/50?random=${i}`} alt="User" />
                  </div>
                ))}
              </span>
              <p>Join 1,200+ families sharing stories.</p>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/800/600?random=10" 
                alt="Mother reading to child in a park" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <p className="font-serif italic text-lg">"The library isn't just about books. It's about belonging."</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-sage/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};