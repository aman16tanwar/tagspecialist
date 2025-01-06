import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/home/HeroSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import AIToolsSection from './components/AIToolsSection/AIToolsSection';
import SkillsShowcase from './components/clients/SkillsShowcase';
import AboutPage from './pages/AboutPage';

function App()


{
  return (
    <Layout>
      <HeroSection />
      <PortfolioSection />
      <AIToolsSection />
      <SkillsShowcase />
      <AboutPage />
    </Layout>
  );
}

export default App;