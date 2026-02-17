import SectionShell from './SectionShell';
import { Target, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision & Quality',
    description: 'Every line of code is crafted with attention to detail and best practices.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision drives our process. We collaborate closely to exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Rapid development without compromising on quality or performance.',
  },
];

export default function AboutSection() {
  return (
    <SectionShell id="about" title="About Us" subtitle="Building the future, one project at a time">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a passionate team of developers and designers dedicated to creating exceptional web
            experiences. With years of expertise in modern technologies, we transform complex challenges
            into elegant solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our approach combines cutting-edge technology with user-centered design, ensuring every
            project not only looks stunning but performs flawlessly across all devices and platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
