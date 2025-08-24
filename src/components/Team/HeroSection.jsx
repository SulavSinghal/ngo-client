import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[620px] min-h-[430px] flex items-center px-8 overflow-hidden"
      style={{
        backgroundColor: "#1A2A6C",
      }}
    >
      {/* Animated background image */}
      <motion.img
        src="/assets/team-bg.jpg" // Replace with your actual image path
        alt="Volunteer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{once: false}}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#1F316C] opacity-60 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl py-20 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-2 max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
           viewport={{once: false}}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-[#F3D13C] max-w-2xl"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
           viewport={{once: false}}
        >
          Mwanam is powered by a team of changemakers who are passionate about
          creating equal opportunities for all. Together, we dream, build, and
          serve.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
