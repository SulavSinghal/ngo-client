import React from 'react';
import HeroSection from '../components/HeroSection';
import BecomeVolunteer from '../components/BecomeVolunteer';
import VoicesOfImpact from '../components/VoicesOfImpact';
import AboutUsSection from '../components/AboutUsSection';
const Home = () => (
  <div>
    {/* Other home page sections */}
    <HeroSection />
    <AboutUsSection />
    <VoicesOfImpact />
    <BecomeVolunteer />
    {/* Other home page sections */}
  </div>
);

export default Home;
