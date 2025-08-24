import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const perks = [
  {
    icon: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm shadow text-[#caa23a]">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#caa23a" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
    ),
    text: 'Make a meaningful difference in communities',
  },
  {
    icon: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm shadow text-[#caa23a]">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#caa23a" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </span>
    ),
    text: 'Join a community of passionate individuals',
  },
  {
    icon: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm shadow text-[#caa23a]">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="#caa23a" d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
        </svg>
      </span>
    ),
    text: 'Develop new skills and experiences',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


const BecomeVolunteer = () => (
  <motion.section
    className="flex justify-center items-center py-10 px-4 font-sans"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="w-full max-w-4xl bg-[#2C7A7B] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Left image column */}
      <div className="md:w-1/2 w-full h-52 md:h-auto bg-gray-300 flex items-center justify-center">
        <img
          src="null" // Replace with actual image URL
          alt="Volunteering"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right content column */}
      <div className="md:w-1/2 w-full bg-[#2C7A7B] p-8 flex flex-col justify-center">
        <motion.h2
          className="text-white text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: "'Merriweather', serif" }}
          variants={itemVariants}
        >
          Become a Volunteer
        </motion.h2>
        <motion.p
          className="text-[#d8f2f3] mb-6 leading-relaxed text-base"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          variants={itemVariants}
        >
          Join our growing community of passionate volunteers and help us create meaningful impact. Together, we can make a difference in the lives of those who need it most.
        </motion.p>
        <motion.ul
          className="mb-8 space-y-4"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          variants={containerVariants}
        >
          {perks.map(({ icon, text }, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              {icon}
              <span className="text-white font-normal text-base">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          whileHover={{ scale: 1.07, boxShadow: "0 0 10px #D4AF37" }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="self-start"
        >
          <Link
            to="/volunteer"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-2 bg-[#D4AF37] hover:bg-[#b6912e] transition text-[#1A2A6C] shadow px-8 py-3 rounded-full font-medium text-base focus:outline-none inline-block"
          >
            Join Us Today
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default BecomeVolunteer;
