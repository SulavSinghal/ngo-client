// components/AboutUsSection.jsx
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// --- SVG Icon Components ---

const PeopleIcon = (props) => (
  <svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_40_24)">
      <path d="M10.418 0.558594C11.9098 0.558594 13.3406 1.15123 14.3954 2.20612C15.4503 3.26101 16.043 4.69175 16.043 6.18359C16.043 7.67544 15.4503 9.10618 14.3954 10.1611C13.3406 11.216 11.9098 11.8086 10.418 11.8086C8.92613 11.8086 7.49539 11.216 6.44049 10.1611C5.3856 9.10618 4.79297 7.67544 4.79297 6.18359C4.79297 4.69175 5.3856 3.26101 6.44049 2.20612C7.49539 1.15123 8.92613 0.558594 10.418 0.558594ZM36.293 0.558594C37.7848 0.558594 39.2156 1.15123 40.2704 2.20612C41.3253 3.26101 41.918 4.69175 41.918 6.18359C41.918 7.67544 41.3253 9.10618 40.2704 10.1611C39.2156 11.216 37.7848 11.8086 36.293 11.8086C34.8011 11.8086 33.3704 11.216 32.3155 10.1611C31.2606 9.10618 30.668 7.67544 30.668 6.18359C30.668 4.69175 31.2606 3.26101 32.3155 2.20612C33.3704 1.15123 34.8011 0.558594 36.293 0.558594ZM0.292969 21.5609C0.292969 17.4195 3.65391 14.0586 7.79531 14.0586H10.7977C11.9156 14.0586 12.9773 14.3047 13.9336 14.7406C13.8422 15.2469 13.8 15.7742 13.8 16.3086C13.8 18.9945 14.9812 21.4062 16.8445 23.0586C16.8305 23.0586 16.8164 23.0586 16.7953 23.0586H1.79062C0.967969 23.0586 0.292969 22.3836 0.292969 21.5609ZM28.7906 23.0586C28.7766 23.0586 28.7625 23.0586 28.7414 23.0586C30.6117 21.4062 31.7859 18.9945 31.7859 16.3086C31.7859 15.7742 31.7367 15.2539 31.6523 14.7406C32.6086 14.2977 33.6703 14.0586 34.7883 14.0586H37.7906C41.932 14.0586 45.293 17.4195 45.293 21.5609C45.293 22.3906 44.618 23.0586 43.7953 23.0586H28.7906ZM16.043 16.3086C16.043 14.5184 16.7541 12.8015 18.02 11.5356C19.2859 10.2698 21.0028 9.55859 22.793 9.55859C24.5832 9.55859 26.3001 10.2698 27.5659 11.5356C28.8318 12.8015 29.543 14.5184 29.543 16.3086C29.543 18.0988 28.8318 19.8157 27.5659 21.0816C26.3001 22.3474 24.5832 23.0586 22.793 23.0586C21.0028 23.0586 19.2859 22.3474 18.02 21.0816C16.7541 19.8157 16.043 18.0988 16.043 16.3086ZM9.29297 34.6812C9.29297 29.5062 13.4906 25.3086 18.6656 25.3086H26.9203C32.0953 25.3086 36.293 29.5062 36.293 34.6812C36.293 35.7148 35.4562 36.5586 34.4156 36.5586H11.1703C10.1367 36.5586 9.29297 35.7219 9.29297 34.6812Z" fill="#2C7A7B"/>
    </g>
    <defs>
      <clipPath id="clip0_40_24">
        <path d="M0.292969 0.558594H45.293V36.5586H0.292969V0.558594Z" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const EventsIcon = (props) => (
  <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_40_31)">
<path d="M9.48047 0.558594C10.725 0.558594 11.7305 1.56406 11.7305 2.80859V5.05859H20.7305V2.80859C20.7305 1.56406 21.7359 0.558594 22.9805 0.558594C24.225 0.558594 25.2305 1.56406 25.2305 2.80859V5.05859H28.6055C30.4688 5.05859 31.9805 6.57031 31.9805 8.43359V11.8086H0.480469V8.43359C0.480469 6.57031 1.99219 5.05859 3.85547 5.05859H7.23047V2.80859C7.23047 1.56406 8.23594 0.558594 9.48047 0.558594ZM0.480469 14.0586H31.9805V33.1836C31.9805 35.0469 30.4688 36.5586 28.6055 36.5586H3.85547C1.99219 36.5586 0.480469 35.0469 0.480469 33.1836V14.0586ZM23.6133 22.0039C24.2742 21.343 24.2742 20.2742 23.6133 19.6203C22.9523 18.9664 21.8836 18.9594 21.2297 19.6203L14.55 26.3L11.2453 22.9953C10.5844 22.3344 9.51562 22.3344 8.86172 22.9953C8.20781 23.6562 8.20078 24.725 8.86172 25.3789L13.3617 29.8789C14.0227 30.5398 15.0914 30.5398 15.7453 29.8789L23.6133 22.0039Z" fill="#2C7A7B"/>
</g>
<defs>
<clipPath id="clip0_40_31">
<path d="M0.480469 0.558594H31.9805V36.5586H0.480469V0.558594Z" fill="white"/>
</clipPath>
</defs>
</svg>

);

const VolunteerIcon = (props) => (
<svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_40_38)">
<path d="M10.543 5.94453C10.543 2.97031 12.9547 0.558594 15.9289 0.558594C17.3563 0.558594 18.7273 1.12812 19.7328 2.13359L20.3867 2.7875L21.0406 2.13359C22.0461 1.12812 23.4172 0.558594 24.8445 0.558594C27.8188 0.558594 30.2305 2.97031 30.2305 5.94453C30.2305 7.37187 29.6609 8.74297 28.6555 9.74844L21.3781 17.0188C20.8297 17.5672 19.9367 17.5672 19.3883 17.0188L12.118 9.74844C11.1125 8.74297 10.543 7.37187 10.543 5.94453ZM40.0883 24.2047C41.0094 25.4562 40.7422 27.2141 39.4906 28.1352L30.5891 34.6953C28.9438 35.9047 26.9609 36.5586 24.9148 36.5586H13.6367H2.38672C1.14219 36.5586 0.136719 35.5531 0.136719 34.3086V29.8086C0.136719 28.5641 1.14219 27.5586 2.38672 27.5586H4.97422L8.13125 25.0273C9.72734 23.7477 11.7102 23.0586 13.7562 23.0586H19.2617H20.3867H24.8867C26.1313 23.0586 27.1367 24.0641 27.1367 25.3086C27.1367 26.5531 26.1313 27.5586 24.8867 27.5586H20.3867H19.2617C18.643 27.5586 18.1367 28.0648 18.1367 28.6836C18.1367 29.3023 18.643 29.8086 19.2617 29.8086H27.7414L36.1578 23.607C37.4094 22.6859 39.1672 22.9531 40.0883 24.2047ZM13.7492 27.5586H13.6859C13.707 27.5586 13.7281 27.5586 13.7492 27.5586Z" fill="#2C7A7B"/>
</g>
<defs>
<clipPath id="clip0_40_38">
<path d="M0.136719 0.558594H40.6367V36.5586H0.136719V0.558594Z" fill="white"/>
</clipPath>
</defs>
</svg>


);

const statIcons = [PeopleIcon, EventsIcon, VolunteerIcon];

const AboutUsSection = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/about-us`);
        setContent(response.data);
      } catch (err) {
        setError('Failed to load content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!content) return <div>No content available.</div>;

    // Animation Variants
  const parentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25
      }
    }
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
   <motion.section
     initial="hidden"
      animate="visible"
      variants={parentVariants}
  style={{
    textAlign: 'center',
    padding: '60px 20px 36px 20px',
    fontFamily: 'sans-serif',
    background: '#fff', // or use your site's background
  }}
>
  <motion.img
    src="./assets/logo.png"
    alt="Mwnam Foundation Logo"
    initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
    transition={{ duration: 0.7 }}
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100px',
      marginBottom: '0px',
    }}
  />

  <motion.h1 className="text-3xl font-bold mb-4 text-[#1A2A6C]"
    style={{
      fontFamily: "'Merriweather', serif",
    }}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
  >
    {content.heading}
  </motion.h1>

  
  <motion.p className="font-sans text-gray-700 max-w-6xl mx-auto mb-12 leading-relaxed text-md"
    initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.35 }} >
  {content.description}
</motion.p>


  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '100px',
      flexWrap: 'wrap',
    }}
  >
    {content.stats.map((stat, index) => {
      const IconComponent = statIcons[index];
      return (
        // This div is now a flex column to stack items vertically
       <motion.div
  key={index}
  variants={childVariants}
              whileHover={{ scale: 1.09, boxShadow: "0 8px 30px rgba(44, 122, 123, 0.18)" }}
              transition={{ duration: 0.2 }}
  style={{
    width: '170px',                       // fix width for alignment
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }}
>
  <div style={{ height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
    <IconComponent style={{ width: '46px', height: '37px', color: '#115C54', display: 'block', margin: 'auto' }} />
  </div>
  <div
    style={{
      color: '#00205B',
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      marginBottom: '2px',
      fontFamily: "'Merriweather', serif"
    }}
  >
    {stat.value}
  </div>
  <div style={{ color: '#555', fontSize: '1rem', letterSpacing: '.1px', marginTop: '1px', fontFamily: "'Quicksand', sans-serif"}}>
    {stat.title}
  </div>
</motion.div>

      );
    })}
  </div>
</motion.section>

  );
};

export default AboutUsSection;