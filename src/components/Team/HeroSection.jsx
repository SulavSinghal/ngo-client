import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[620px] min-h-[430px] flex items-center px-8 overflow-hidden"
      style={{
        backgroundColor: "#1A2A6C",
      }}
    >
      {/* Absolutely positioned background image */}
      <img
        src="/assets/team-bg.jpg" // Replace with your actual image path
        alt="Volunteer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#1F316C] opacity-60 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl py-20 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-2 max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Meet Our Team
        </h1>
        <p
          className="text-lg md:text-xl mb-8 text-[#F3D13C] max-w-2xl"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
         Mwanam is powered by a team of changemakers who are passionate about creating equal opportunities for all. Together, we dream, build, and serve.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
