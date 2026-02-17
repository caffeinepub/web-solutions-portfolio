import { useEffect } from 'react';
import TopNav from './components/layout/TopNav';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
