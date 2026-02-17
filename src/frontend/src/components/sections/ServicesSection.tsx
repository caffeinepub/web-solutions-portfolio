import SectionShell from './SectionShell';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Smartphone, Database, Palette, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Beautiful, mobile-first designs that work seamlessly across all devices.',
    tags: ['Mobile', 'Tablet', 'Desktop'],
  },
  {
    icon: Database,
    title: 'Backend Solutions',
    description: 'Scalable backend architectures with robust APIs and data management.',
    tags: ['APIs', 'Databases', 'Cloud'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
    tags: ['SEO', 'Speed', 'Analytics'],
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Secure, reliable applications with ongoing support and updates.',
    tags: ['Security', 'Updates', 'Support'],
  },
];

export default function ServicesSection() {
  return (
    <SectionShell
      id="services"
      title="Our Services"
      subtitle="Comprehensive web solutions tailored to your needs"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
