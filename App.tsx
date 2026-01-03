
import React from 'react';
import Navbar from './components/Navbar';
import ThreeScene from './components/ThreeScene';
import ProjectCard from './components/ProjectCard';
import DesignAssistant from './components/DesignAssistant';
import SkillsRadar from './components/SkillsRadar';
import { PROJECTS } from './constants';
// Added Sparkles to the lucide-react import
import { Layers, Cuboid, MousePointer2, Palette, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ThreeScene />

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 md:px-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
            <span className="text-xs font-orbitron font-bold tracking-widest text-indigo-400">OPEN FOR FREELANCE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold leading-tight">
            CRAFTING <span className="gradient-text">DIMENSIONS</span> <br />
            BEYOND IMAGINATION.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            I'm Aditya, a 3D designer focused on building immersive digital worlds, 
            cinematic visuals, and high-fidelity 3D assets that bridge reality and surrealism.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2">
              <span>EXPLORE WORK</span>
              <MousePointer2 size={18} />
            </button>
            <button className="glass font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors border-white/10">
              LET'S TALK
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Services Ribbon */}
      <div className="bg-white/5 backdrop-blur-xl border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <Cuboid className="text-indigo-500 mb-2" size={32} />
            <span className="text-2xl font-orbitron font-bold">50+</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">3D Environments</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Layers className="text-purple-500 mb-2" size={32} />
            <span className="text-2xl font-orbitron font-bold">120+</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">Custom Models</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Palette className="text-cyan-500 mb-2" size={32} />
            <span className="text-2xl font-orbitron font-bold">8+</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">Design Awards</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Sparkles className="text-yellow-500 mb-2" size={32} />
            <span className="text-2xl font-orbitron font-bold">1k+</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">Happy Hours</span>
          </div>
        </div>
      </div>

      {/* Work Gallery */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full" />
          </div>
          <p className="text-gray-400 max-w-md font-light">
            A curated collection of digital experiences pushing the boundaries of CGI and real-time visualization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* AI Assistant & Skills Section */}
      <section id="ai-assistant" className="py-32 px-6 bg-gradient-to-b from-transparent to-indigo-900/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-orbitron font-bold leading-tight">
              INTERACT WITH MY <br />
              <span className="gradient-text">CREATIVE NEURAL NET</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Designing in 3D is a complex blend of logic and creativity. My custom-trained Gemini AI Assistant is here to provide insights into my process, tools, or help you brainstorm your next project. 
              Ask it about my skills in Blender, Houdini, or Unreal Engine 5.
            </p>
            <div className="glass rounded-3xl p-8 border-white/5">
              <h3 className="font-orbitron text-sm tracking-widest text-indigo-400 mb-6 uppercase">Skill Proficiency</h3>
              <SkillsRadar />
            </div>
          </div>
          <div>
            <DesignAssistant />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
            READY TO BUILD THE <span className="gradient-text">FUTURE?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            Whether it's a Metaverse environment, a high-end product visualization, or abstract motion design, I'm ready to bring it to life.
          </p>
          <div className="flex justify-center pt-8">
            <a 
              href="mailto:hello@aditya.design" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition-all shadow-2xl shadow-indigo-600/30 font-orbitron"
            >
              SAY HELLO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <div className="font-orbitron font-bold text-lg text-white">ADITYA.3D</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
            <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
          </div>
          <div>© 2024 DESIGNED BY ADITYA</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
