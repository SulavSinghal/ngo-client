import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef(null);

  // Fetch slides from backend
  useEffect(() => {
    fetch(`${API_URL}/api/slides`)
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(e => console.error("Error fetching slides:", e));
  }, []);

  // Cycle slides every 5s, pause on hover
  useEffect(() => {
    if (slides.length < 2) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[activeIdx];
  const imgUrl = slide.image
    ? slide.image.startsWith('http')
      ? slide.image
      : `${API_URL}${slide.image.startsWith('/') ? '' : '/'}${slide.image}`
    : '';

  // Slide Animation Variants
  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div
      className="relative w-full h-[620px] min-h-[430px] flex items-center justify-start px-8 overflow-hidden select-none"
      style={{
        backgroundColor: slide.backgroundColor || "",
        color: slide.textColor || "",
        backgroundImage: imgUrl ? `url(${imgUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />

      {/* AnimatePresence for smooth slide transitions */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeIdx}
          className="relative z-10 max-w-4xl py-20 px-4"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Merriweather', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {slide.headline}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-[#D4AF37] max-w-2xl"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {slide.description}
          </motion.p>
          <motion.div
            className="flex gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {slide.ctaText && slide.ctaLink && (
              <a
                href={slide.ctaLink}
                className="px-6 py-3 bg-[#D4AF37] text-black rounded-full shadow hover:bg-yellow-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.ctaText}
              </a>
            )}
            {slide.secondaryText && (
              <Link
                to="/volunteer"
                onClick={() => window.scrollTo(0, 0)}
                className="px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-[#1f326f] transition"
              >
                Join Us Today
              </Link>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            aria-label={`Goto slide ${i + 1}`}
            onClick={() => setActiveIdx(i)}
            className={`h-3 w-3 rounded-full border-2 border-white transition ${
              i === activeIdx ? "bg-white" : "bg-gray-500 opacity-70"
            }`}
            style={{ outline: "none" }}
            whileTap={{ scale: 0.8 }}
            whileHover={i === activeIdx ? { scale: 1.3, boxShadow: "0 0 8px white" } : { scale: 1.2 }}
            animate={i === activeIdx ? { scale: [1, 1.3, 1], boxShadow: ["0 0 0px white", "0 0 8px white", "0 0 0px white"] } : {}}
            transition={{ repeat: i === activeIdx ? Infinity : 0, duration: 2, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
