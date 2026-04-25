import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ToolsSection from './components/ToolsSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ToolsSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}

export default App;
