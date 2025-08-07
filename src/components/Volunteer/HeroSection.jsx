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
        src="/your-background-image.jpg" // Replace with your actual image path
        alt="Volunteer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl py-20 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-2 max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Be the Change.
        </h1>
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Volunteer With Us.
        </h2>
        <p
          className="text-lg md:text-xl mb-8 text-white max-w-2xl"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Join hands with Mwanam to uplift lives through education, welfare, and creativity. Every small effort counts.
        </p>

        {/* Call to Action Button */}
    
        <button
          className="bg-[#F3D91C] hover:bg-[#FFD700] text-gray-900 font-medium px-8 py-3 rounded-full shadow-lg transition"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          onClick={() => {
            const formSection = document.getElementById("volunteer-form");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Become a Volunteer
        </button>

      </div>
    </div>
  );
};

export default HeroSection;
