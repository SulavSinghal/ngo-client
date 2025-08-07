import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import BecomeVolunteer from '../components/HomePage/BecomeVolunteer';
import VoicesOfImpact from '../components/HomePage/VoicesOfImpact';
import AboutUsSection from '../components/HomePage/AboutUsSection';
import ActivitiesSection from '../components/HomePage/ActivitiesSection';
const Home = () => (
  <div>
    {/* Other home page sections */}
    <HeroSection />
    <AboutUsSection />
      <ActivitiesSection limit={3} />
    <VoicesOfImpact />
    <BecomeVolunteer />
    {/* Other home page sections */}
  </div>
);

export default Home;
