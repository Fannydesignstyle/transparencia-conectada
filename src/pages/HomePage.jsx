import React from 'react';
import HeroSection from '../components/landing/HeroSection';

import ValueProposition from '../components/landing/ValueProposition';
import ProjectGoals from '../components/landing/ProjectGoals';
import Manifesto from '../components/landing/Manifiesto';
import FounderProfile from '../components/landing/FounderProfile';
import MetricsSection from '../components/landing/MetricsSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ProjectGoals />
      <Manifesto />
      <FounderProfile />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
