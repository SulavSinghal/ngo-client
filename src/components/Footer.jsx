// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2A6C] text-[#bbc4eb] font-quicksand">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
        {/* Left Section: Logo & Social */}
        <div>
          <img
            src="./assets/logo.png"  // Or your real logo path
            alt="MWNAM Logo"
            className="h-16 mb-4"
          />
          <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Empowering communities through<br />
            social welfare, entertainment, and<br />
            education.
          </p>
       <div className="flex space-x-4 mt-2">
  <a href="#" aria-label="Facebook" className="hover:opacity-90 transition">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm shadow">
      <i className="fab fa-facebook-f text-xl text-white"></i>
    </span>
  </a>
  <a href="#" aria-label="Twitter" className="hover:opacity-90 transition">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm shadow">
      <i className="fab fa-twitter text-xl text-white"></i>
    </span>
  </a>
  <a href="#" aria-label="Instagram" className="hover:opacity-90 transition">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm shadow">
      <i className="fab fa-instagram text-xl text-white"></i>
    </span>
  </a>
  <a href="#" aria-label="YouTube" className="hover:opacity-90 transition">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm shadow">
      <i className="fab fa-youtube text-xl text-white"></i>
    </span>
  </a>
</div>

        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white text-md mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>Quick Links</h4>
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <li><a href="/" className="hover:text-[#caa23a] font-ibmplex">Home</a></li>
            <li><a href="/about" className="hover:text-[#caa23a] font-ibmplex">About Us</a></li>
            <li><a href="/activities" className="hover:text-[#caa23a] font-ibmplex">Activities</a></li>
            <li><a href="/gallery" className="hover:text-[#caa23a] font-ibmplex">Gallery</a></li>
            <li><a href="/terms" className="hover:text-[#caa23a] font-ibmplex">Terms and Conditions</a></li>
            <li><a href="/privacy" className="hover:text-[#caa23a] font-ibmplex">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Programs */}
        <div>
          <h4 className="text-white text-md  mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }} >Programs</h4>
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <li><a href="#" className="hover:text-[#caa23a]">Social Welfare</a></li>
            <li><a href="#" className="hover:text-[#caa23a]">Entertainment</a></li>
            <li><a href="#" className="hover:text-[#caa23a]">Education</a></li>
            <li><a href="#" className="hover:text-[#caa23a]">Health Awareness</a></li>
            <li><a href="#" className="hover:text-[#caa23a]">Community Building</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className="text-white text-md mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>Contact Us</h4>
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <li className="flex items-center"
>
              <span className="material-icons text-[#caa23a] mr-2">location_on</span>
              123 Community Street, City, Country
            </li>
            <li className="flex items-center " >
              <span className="material-icons text-[#caa23a] mr-2">email</span>
              info@mwnam.org
            </li>
            <li className="flex items-center">
              <span className="material-icons text-[#caa23a] mr-2">call</span>
              +123 456 7890
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#394076] my-4 mx-6"></div>
      {/* Copyright */}
      <div className="text-center text-xs text-[#bbc4eb] pb-6">
        © 2023 Mwnam Social Welfare and Entertainment Foundation. All rights reserved.
      </div>
      
      {/* If you're using @fortawesome/react-fontawesome or another icon library, swap <i> elements as needed */}
      {/* For Material Icons, ensure you have <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /> in public/index.html */}
    </footer>
  );
};

export default Footer;
