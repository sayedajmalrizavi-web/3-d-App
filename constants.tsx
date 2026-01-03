
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Metropolis',
    category: 'Environment Design',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    description: 'A sprawling sci-fi cityscape with dynamic neon lighting and procedural building generation.'
  },
  {
    id: '2',
    title: 'Void Guardian',
    category: 'Character Sculpting',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    description: 'High-fidelity character model featuring PBR textures and complex skeletal rigging.'
  },
  {
    id: '3',
    title: 'Fluidity Vase',
    category: 'Product Visualization',
    imageUrl: 'https://picsum.photos/id/30/800/600',
    description: 'Minimalist product design highlighting photorealistic caustic reflections and refraction.'
  },
  {
    id: '4',
    title: 'Biomechanical Core',
    category: 'Abstract Art',
    imageUrl: 'https://picsum.photos/id/40/800/600',
    description: 'Exploration of organic and mechanical fusions through procedural geometry nodes.'
  }
];

export const SKILLS: Skill[] = [
  { subject: 'Modeling', A: 95, fullMark: 100 },
  { subject: 'Texturing', A: 85, fullMark: 100 },
  { subject: 'Lighting', A: 90, fullMark: 100 },
  { subject: 'Animation', A: 75, fullMark: 100 },
  { subject: 'Rendering', A: 92, fullMark: 100 },
  { subject: 'Sculpting', A: 80, fullMark: 100 },
];
