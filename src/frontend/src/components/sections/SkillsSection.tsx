import SectionShell from './SectionShell';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Motoko', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Internet Computer', 'Figma', 'VS Code'],
  },
  {
    category: 'Methodologies',
    skills: ['Agile', 'CI/CD', 'Test-Driven Development', 'Responsive Design', 'Web3', 'Blockchain'],
  },
];

export default function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills & Technologies"
      subtitle="Our expertise spans the full stack of modern web development"
    >
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="text-sm px-4 py-2 hover:bg-accent hover:border-accent-foreground/20 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
