
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Skill {
  subject: string;
  A: number;
  fullMark: number;
}
