import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { StoryCard } from './components/StoryCard';
import { ConnectionSpark } from './components/ConnectionSpark';
import { WhyItMatters } from './components/WhyItMatters';
import { Button } from './components/Button';
import { Story } from './types';
import { Menu, X, Instagram, Mail, Twitter, BookOpen } from 'lucide-react';

const STATIC_STORIES: Story[] = [
  {
    id: '1',
    title: 'The Sidewalk Chalk Gallery',
    summary: 'How a neighborhood in Ohio turned their cracked sidewalks into a canvas for connection during a long summer.',
    tag: 'Sidewalk',
    imageUrl: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'Quiet Corners, Loud Minds',
    summary: 'Exploring the role of the local library as a safe haven for teenagers to explore new identities and ideas.',
    tag: 'Library',
    imageUrl: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'Saturday Morning at the Splash Pad',
    summary: 'Observations on parental resilience and informal support networks forming around a simple water fixture.',
    tag: 'Park',
    imageUrl: 'https://picsum.photos/400/300?random=3'
  }
];

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-brand-slate">
              The Stories That Bind Us
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#stories" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Stories</a>
            <a href="#families" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">For Families</a>
            <a href="#science" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">The Science</a>
            <a href="#about" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">About</a>
            <Button size="sm">Get Involved</Button>
          </div>

          <button 
            className="md:hidden p-2 text-brand-slate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <a href="#stories" className="py-2 px-4 hover:bg-gray-50 rounded-lg">Stories</a>
            <a href="#families" className="py-2 px-4 hover:bg-gray-50 rounded-lg">For Families</a>
            <a href="#science" className="py-2 px-4 hover:bg-gray-50 rounded-lg">The Science</a>
            <a href="#about" className="py-2 px-4 hover:bg-gray-50 rounded-lg">About</a>
            <Button className="w-full">Get Involved</Button>
          </div>
        )}
      </nav>

      <main>
        <Hero />

        {/* Stories Section */}
        <section id="stories" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-slate mb-4">Latest Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Glimpses into the everyday magic of our shared spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATIC_STORIES.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">View All Stories</Button>
          </div>
        </section>

        {/* Connection Spark (AI Feature) */}
        <div id="families">
           <ConnectionSpark />
        </div>

        {/* For Communities Split Section */}
        <section id="communities" className="py-20 bg-brand-slate text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                 <img 
                   src="https://picsum.photos/600/600?random=20" 
                   alt="Community meeting" 
                   className="rounded-2xl shadow-2xl opacity-90"
                 />
               </div>
               <div className="order-1 lg:order-2 space-y-6">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-yellow">For Communities</h2>
                 <p className="text-brand-cream/80 text-lg leading-relaxed">
                   Are you a librarian, educator, or urban planner? We offer resources to help you evaluate your programs, co-create stories with your patrons, and demonstrate the impact of your work through prevention science.
                 </p>
                 <ul className="space-y-4">
                    {['Program Evaluation Tools', 'Co-creation Workshops', 'Impact Reporting'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                        <span className="font-bold text-lg">{item}</span>
                      </li>
                    ))}
                 </ul>
                 <Button variant="secondary">Partner With Us</Button>
               </div>
            </div>
          </div>
        </section>

        <WhyItMatters />

        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden">
             <img src="https://picsum.photos/200/200?random=99" alt="Founder" className="w-full h-full object-cover"/>
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-slate mb-6">About the Project</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            "I started *The Stories That Bind Us* after spending a decade working in both public libraries and prevention science research labs. I realized that the most powerful interventions weren't happening in clinics—they were happening during storytime, on park benches, and in the quiet corners of our neighborhoods. This project is my love letter to those spaces."
          </p>
          <div className="font-bold text-brand-blue">— Project Founder</div>
        </section>

        {/* Contact / Footer */}
        <footer className="bg-white border-t border-gray-100 py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white">
                  <BookOpen size={18} />
                </div>
                <span className="font-serif font-bold text-lg text-brand-slate">
                  The Stories That Bind Us
                </span>
              </div>
              <p className="text-gray-500 max-w-sm mb-6">
                Building stronger families and communities through the power of place and story.
              </p>
              <div className="flex gap-4 text-brand-slate/60">
                <a href="#" className="hover:text-brand-blue transition-colors"><Instagram size={24}/></a>
                <a href="#" className="hover:text-brand-blue transition-colors"><Twitter size={24}/></a>
                <a href="#" className="hover:text-brand-blue transition-colors"><Mail size={24}/></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-brand-slate mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-brand-blue">Stories</a></li>
                <li><a href="#" className="hover:text-brand-blue">For Families</a></li>
                <li><a href="#" className="hover:text-brand-blue">For Communities</a></li>
                <li><a href="#" className="hover:text-brand-blue">Research</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-slate mb-4">Stay Connected</h4>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
                <Button size="sm" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-50 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} The Stories That Bind Us. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;