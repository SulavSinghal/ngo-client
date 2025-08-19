import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Fetch slides from backend
  useEffect(() => {
 fetch(`${API_URL}/api/slides`)
  .then(res => {
    return res.text(); // not .json()
  })
  .then(text => {
    try {
      const data = JSON.parse(text);
      setSlides(data);
    } catch (e) {
      console.error("Expected JSON but got:", text);
    }
  });

}, []);

  // Cycle slides every 5 seconds
  useEffect(() => {
    if (slides.length < 2) return; // No need to cycle single slide
    const timer = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[activeIdx];

  return (
    <div
      className="relative w-full h-[620px] min-h-[430px] flex items-center justify-start px-8 overflow-hidden"
      style={{
        background: slide.backgroundColor || "#1A2A6C",
        color: slide.textColor || "",
        backgroundImage: slide.image ? `url(${slide.image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"  style={{
      fontFamily: "'Merriweather', serif",
    }}>{slide.headline}</h1>
        <p className="text-lg md:text-xl mb-8 text-[#D4AF37] max-w-2xl" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.description}</p>
        <div className="flex gap-4 mb-4">
          {slide.ctaText && slide.ctaLink &&
            <a
              href={slide.ctaLink}
              className="px-6 py-3 bg-[#D4AF37] text-black rounded-full shadow hover:bg-yellow-500 transition"
            >
              {slide.ctaText}
            </a>
          }
          {slide.secondaryText && 
            <Link
            to="/volunteer"
            onClick={() => window.scrollTo(0, 0)}
           className="px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-[#1f326f] transition"
          >
            Join Us Today
          </Link>
          }
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Goto slide ${i + 1}`}
            onClick={() => setActiveIdx(i)}
            className={`h-3 w-3 rounded-full border-2 border-white transition ${i === activeIdx ? "bg-white" : "bg-gray-500 opacity-70"}`}
            style={{ outline: "none" }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
