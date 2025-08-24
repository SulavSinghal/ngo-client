import React from "react";
import { motion } from "framer-motion";

function ActivitiesHeroSection() {
  return (
    <motion.section
      className="bg-[#1A2A6C] py-14 md:py-10 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "'Merriweather', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Activities
        </motion.h1>
        <motion.p
          className="text-center text-[#F3D13CCC] text-lg tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Explore our initiatives and discover how we're making a meaningful impact in communities.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default ActivitiesHeroSection;
