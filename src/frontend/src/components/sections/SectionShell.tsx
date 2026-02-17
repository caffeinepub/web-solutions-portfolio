import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, title, subtitle, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div>{children}</div>
      </div>
    </section>
  );
}
