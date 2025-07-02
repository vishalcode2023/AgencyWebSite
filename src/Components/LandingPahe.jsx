import React from 'react';
import TopNavBar from '../Routers/TopNavBar';
import HeroSection from './HeroSection';
import ScrollSection from './ScrollSection';
import WorkGallery from './WorkGallery';
import TestimonialsSection from './TestimonialsSection';
import TeamSection from './TeamSection';
import FooterSection from './FooterSection';

const LandingPage = () => {
  return (
    <div className="w-full bg-[#111111] text-white">
      {/* NavBar */}
      <TopNavBar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Section */}
       <ScrollSection />

      {/* Working */}
      <WorkGallery/>

      {/* Testimonials Section */}
      <TestimonialsSection/>

      {/* Team Section */}
      <TeamSection/>

      {/* Footer Section */}
      <FooterSection/>
    </div>
  );
};

export default LandingPage;
