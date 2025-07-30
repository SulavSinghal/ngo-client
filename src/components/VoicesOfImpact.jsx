import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Sub-component for individual testimonial cards
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col h-full text-left">
    <div className="flex-grow">
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g clipPath="url(#clip0_40_121)">

<path d="M0.65625 10.125C0.65625 7.01719 3.17344 4.5 6.28125 4.5H6.65625C7.48594 4.5 8.15625 5.17031 8.15625 6C8.15625 6.82969 7.48594 7.5 6.65625 7.5H6.28125C4.83281 7.5 3.65625 8.67656 3.65625 10.125V10.5H6.65625C8.31094 10.5 9.65625 11.8453 9.65625 13.5V16.5C9.65625 18.1547 8.31094 19.5 6.65625 19.5H3.65625C2.00156 19.5 0.65625 18.1547 0.65625 16.5V15V13.5V10.125ZM12.6562 10.125C12.6562 7.01719 15.1734 4.5 18.2812 4.5H18.6562C19.4859 4.5 20.1562 5.17031 20.1562 6C20.1562 6.82969 19.4859 7.5 18.6562 7.5H18.2812C16.8328 7.5 15.6562 8.67656 15.6562 10.125V10.5H18.6562C20.3109 10.5 21.6562 11.8453 21.6562 13.5V16.5C21.6562 18.1547 20.3109 19.5 18.6562 19.5H15.6562C14.0016 19.5 12.6562 18.1547 12.6562 16.5V15V13.5V10.125Z" fill="#D4AF37"/>

</g>

<defs>

<clipPath id="clip0_40_121">

<path d="M0.65625 0H21.6562V24H0.65625V0Z" fill="white"/>

</clipPath>

</defs>

</svg> 
      <p className="text-gray-300 italic text-md mb-6 flex-grow mt-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        "{testimonial.quote}"
      </p>
    </div>
    <div className="flex items-center mt-4">
      <img 
        // Construct the full URL for the image
        src={`${API_URL}/${testimonial.imageUrl}`} 
        alt={testimonial.name} 
        className="w-14 h-14 rounded-full object-cover"
        onError={(e) => { e.target.src = 'https://placehold.co/60x60/27757a/FFF?text=User'; }}
      />
      <div className="ml-4">
        <p className=" text-white font-display" style={{ fontFamily: "'Quicksand', sans-serif" }} >{testimonial.name}</p>
        <p className="text-[#D4AF37] text-sm">{testimonial.occupation}</p>
      </div>
    </div>
  </div>
);

const VoicesOfImpact = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/testimonials`);
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="bg-[#1A2A6C] py-20 px-4 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 font-serif" style={{ fontFamily: "'Merriweather', serif" }}>
          Voices of Impact
        </h2>
        <p className="text-lg text-[#D4AF37CC] max-w-2xl mx-auto mb-12 font-display">
          Hear from those whose lives have been touched by our programs and initiatives.
        </p>
        {loading ? (
          <p className="text-white">Loading testimonials...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VoicesOfImpact;
