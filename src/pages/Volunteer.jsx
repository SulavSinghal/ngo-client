import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/Volunteer/HeroSection";
import WhyVolunteerSection from "../components/Volunteer/WhyVolunteerUs";
import VolunteerStoriesSection from "../components/Volunteer/Story";
import VolunteerApplication from "../components/Volunteer/Form";
import CTA from "../components/Volunteer/CTA";
import VolunteerOpportunitiesSection from "../components/Volunteer/Oppurtunites";
const Volunteer = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleBecomeVolunteerClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showForm]);

  return (
    <div>
      <HeroSection />

      <WhyVolunteerSection />

      <VolunteerStoriesSection />
      {/* <VolunteerOpportunitiesSection /> */}
      <div id="volunteer-form">
        <VolunteerApplication />
      </div>
      <CTA />
    </div>
    
  );
};

export default Volunteer;
