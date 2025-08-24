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
      {/* Animated Background Image with fade and scale-in */}
      <motion.img
        src="/your-background-image.jpg" // Replace with your actual image path
        alt="Volunteer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-10"></div>

      {/* Content area with slide and fade */}
      <motion.div
        className="relative z-20 max-w-4xl py-20 px-4 flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Be the Change.
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl text-white"
          style={{ fontFamily: "'Merriweather', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Volunteer With Us.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-2xl text-white"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Join hands with Mwanam to uplift lives through education, welfare, and creativity. Every small effort counts.
        </motion.p>
        <motion.button
          className="bg-[#F3D91C] hover:bg-[#FFD700] text-gray-900 font-medium px-8 py-3 rounded-full shadow-lg transition self-start"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.07, boxShadow: "0 0 15px #F3D91C" }}
          onClick={() => {
            const formSection = document.getElementById("volunteer-form");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Become a Volunteer
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
