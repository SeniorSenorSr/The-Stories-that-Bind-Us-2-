import React from 'react';
import { Heart, Users, Shield, Anchor, BookOpen } from 'lucide-react';
import { SciencePrinciple } from '../types';

const principles: SciencePrinciple[] = [
  {
    title: "Connection",
    description: "Relationships are the active ingredient in healthy development. Shared spaces create opportunities for these critical interactions.",
    icon: "Heart"
  },
  {
    title: "Co-creation",
    description: "Communities thrive when they build together. We believe in designing spaces and stories *with* families, not just for them.",
    icon: "Users"
  },
  {
    title: "Accessibility",
    description: "Every family deserves to feel welcome. Simple language, inclusive design, and open spaces remove barriers to belonging.",
    icon: "BookOpen"
  },
  {
    title: "Evidence with Empathy",
    description: "Science empowers us, but stories move us. We combine rigorous prevention science with the warmth of human experience.",
    icon: "Shield"
  }
];

const IconMap = {
  Heart: Heart,
  Users: Users,
  BookOpen: BookOpen,
  Shield: Shield,
  Anchor: Anchor
};

export const WhyItMatters: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream" id="science">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-3 py-1 bg-brand-sage/20 text-brand-slate rounded-full text-sm font-bold tracking-wide mb-6">
              THE SCIENCE
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-slate mb-6">
              Social Infrastructure is a Public Health Tool.
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                When we think of "health," we often think of doctors' offices. But prevention science tells us that the places where we live, learn, and play—our "social infrastructure"—are just as vital.
              </p>
              <p>
                Everyday interactions in libraries, parks, and on sidewalks build the "protective factors" that help children thrive and communities stay resilient.
              </p>
            </div>
            <div className="p-6 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/20">
              <h4 className="font-bold text-brand-slate mb-2">Did you know?</h4>
              <p className="text-sm text-gray-700">
                Research shows that simple "serve and return" interactions—like a parent responding to a child pointing at a bird in the park—build neural connections in the brain that last a lifetime.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const Icon = IconMap[principle.icon];
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-brand-slate">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};