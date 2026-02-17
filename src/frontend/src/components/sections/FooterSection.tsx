import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: SiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: SiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com', label: 'X (Twitter)' },
];

export default function FooterSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'websolutions-portfolio'
  );

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/generated/logo-mark.dim_512x512.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-foreground">WebSolutions</span>
            </div>
            <p className="text-muted-foreground">
              Crafting exceptional web experiences with modern technologies and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WebSolutions. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
