import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import BecomeVolunteer from '../components/HomePage/BecomeVolunteer';
import VoicesOfImpact from '../components/HomePage/VoicesOfImpact';
import AboutUsSection from '../components/HomePage/AboutUsSection';
import ActivitiesSection from '../components/HomePage/ActivitiesSection';
const Home = () => (
  <div>
    <HeroSection />
    <AboutUsSection />
    <ActivitiesSection limit={3} />
    <VoicesOfImpact />
    <BecomeVolunteer />
  </div>
);

export default Home;
