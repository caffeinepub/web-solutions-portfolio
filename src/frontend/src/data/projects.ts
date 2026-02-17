export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    thumbnail: '/assets/generated/project-thumb-1.dim_1200x800.png',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media management with real-time metrics, scheduling, and multi-platform integration.',
    thumbnail: '/assets/generated/project-thumb-2.dim_1200x800.png',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Chart.js', 'REST APIs'],
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Blockchain DApp',
    description:
      'Decentralized application built on the Internet Computer with smart contracts, wallet integration, and secure transactions.',
    thumbnail: '/assets/generated/project-thumb-3.dim_1200x800.png',
    techStack: ['React', 'Motoko', 'Internet Computer', 'Web3', 'TypeScript'],
    githubUrl: 'https://github.com',
  },
];
