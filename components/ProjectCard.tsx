
import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="flex items-center space-x-2 text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <span>View Case Study</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-[10px] font-orbitron font-bold tracking-[0.2em] text-indigo-500 uppercase">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-white group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-3 line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
