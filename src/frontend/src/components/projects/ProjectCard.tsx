import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      {/* Project Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Project Info */}
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-base line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Project Links */}
      {(project.liveUrl || project.githubUrl) && (
        <CardFooter className="flex gap-2 pt-4 border-t border-border">
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
