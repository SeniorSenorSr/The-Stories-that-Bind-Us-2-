import React, { useState } from 'react';
import { PlaceType, GeminiConnectionResponse } from '../types';
import { generateConnectionSpark } from '../services/geminiService';
import { Sparkles, MapPin, MessageCircle, Heart, Brain, Loader2 } from 'lucide-react';
import { Button } from './Button';

const PLACES: PlaceType[] = ['Library', 'Park', 'Sidewalk', 'Grocery Store'];

export const ConnectionSpark: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null);
  const [response, setResponse] = useState<GeminiConnectionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (place: PlaceType) => {
    setSelectedPlace(place);
    setLoading(true);
    setResponse(null);
    try {
      const result = await generateConnectionSpark(place);
      setResponse(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-brand-blue/10 rounded-3xl my-12 mx-4 md:mx-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <Sparkles size={200} className="text-brand-blue" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm text-brand-blue font-bold text-sm mb-4">
            <Sparkles size={16} />
            <span>AI Connection Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-slate mb-4">
            Spark a Moment, Wherever You Are
          </h2>
          <p className="text-lg text-brand-slate/80 max-w-2xl mx-auto">
            Select where you are right now to get a science-backed conversation starter or activity tailored to your environment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PLACES.map((place) => (
            <button
              key={place}
              onClick={() => handleGenerate(place)}
              disabled={loading}
              className={`px-6 py-3 rounded-xl border-2 transition-all font-bold flex items-center gap-2
                ${selectedPlace === place 
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg scale-105' 
                  : 'bg-white text-brand-slate border-transparent hover:border-brand-blue/30 hover:bg-blue-50'
                }`}
            >
              <MapPin size={18} />
              {place}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 text-brand-slate/60">
            <Loader2 size={48} className="animate-spin mb-4 text-brand-blue" />
            <p>Gathering creative ideas...</p>
          </div>
        )}

        {response && !loading && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {/* Conversation Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-brand-yellow flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4 text-brand-yellow-700 font-bold">
                <MessageCircle size={24} className="text-brand-yellow" />
                <h3>Ask Together</h3>
              </div>
              <p className="text-lg leading-relaxed">{response.conversationStarter}</p>
            </div>

            {/* Activity Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-brand-sage flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4 text-green-700 font-bold">
                <Brain size={24} className="text-brand-sage" />
                <h3>Play Together</h3>
              </div>
              <p className="text-lg leading-relaxed">{response.activity}</p>
            </div>

            {/* Reflection Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-brand-blue flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4 text-brand-blue font-bold">
                <Heart size={24} />
                <h3>Why It Matters</h3>
              </div>
              <p className="text-base italic text-gray-600">{response.reflection}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};