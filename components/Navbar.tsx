
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center mx-4 mt-4 rounded-2xl border-white/5">
      <div className="font-orbitron text-2xl font-bold tracking-tighter">
        ADITYA<span className="text-indigo-500">.</span>3D
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
        <a href="#work" className="hover:text-white transition-colors">WORK</a>
        <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
        <a href="#ai-assistant" className="hover:text-white transition-colors">AI ASSISTANT</a>
        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20">
        HIRE ME
      </button>
    </nav>
  );
};

export default Navbar;
