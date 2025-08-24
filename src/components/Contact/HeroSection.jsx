import React from "react";
import { motion } from "framer-motion";

function ActivitiesHeroSection() {
  return (
    <section className="bg-[#1A2A6C] py-14 md:py-10 w-full">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "'Merriweather', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-center text-[#F3D13CCC] text-lg tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Explore our initiatives and discover how we're making a meaningful impact in communities.
        </motion.p>
      </div>
    </section>
  );
}

export default ActivitiesHeroSection;
