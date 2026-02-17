import SectionShell from './SectionShell';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Featured Projects"
      subtitle="Showcasing our latest work and innovations"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
