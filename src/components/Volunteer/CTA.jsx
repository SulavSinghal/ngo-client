import React from "react";
import { motion } from "framer-motion";

export default function StillHaveQuestionsCard() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow max-w-2xl mx-auto my-12 p-8 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(31, 49, 108, 0.3)" }}
      // A gentle infinite pulse animation to draw subtle attention
      animate={{
        opacity: [1, 0.95, 1],
        scale: [1, 1.03, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      <h2
        className="text-xl md:text-xl font-bold text-[#1F316C] mb-2 text-center"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        Still have questions?
      </h2>
      <p
        className="text-gray-600 mb-6 text-center"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        We'd love to hear from you and guide you through the volunteer process.
      </p>
      <div className="flex flex-row gap-8">
        {/* Email */}
        <div className="flex items-center gap-2">
          <span className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
            {/* Envelope SVG */}
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 20H0V0H16V20Z" stroke="#E5E7EB" />
              <path d="M16 18H0V2H16V18Z" stroke="#E5E7EB" />
              <path d="M1.5 4C0.671875 4 0 4.67188 0 5.5C0 5.97187 0.221875 6.41562 0.6 6.7L7.4 11.8C7.75625 12.0656 8.24375 12.0656 8.6 11.8L15.4 6.7C15.7781 6.41562 16 5.97187 16 5.5C16 4.67188 15.3281 4 14.5 4H1.5ZM0 7.5V14C0 15.1031 0.896875 16 2 16H14C15.1031 16 16 15.1031 16 14V7.5L9.2 12.6C8.4875 13.1344 7.5125 13.1344 6.8 12.6L0 7.5Z" fill="#1F316C" />
            </svg>
          </span>
          <a href="mailto:volunteer@mwanam.org" className="text-[#233264] hover:underline text-sm md:text-base" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            volunteer@mwanam.org
          </a>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-2">
          <span className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
            {/* Phone SVG */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_245_851)">
                <path d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z" fill="#1F316C" />
              </g>
              <defs>
                <clipPath id="clip0_245_851">
                  <path d="M0 0H16V16H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <a href="tel:+1234567890" className="text-[#233264] hover:underline text-sm md:text-base" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            +123 456 7890
          </a>
        </div>
      </div>
    </motion.div>
  );
}
