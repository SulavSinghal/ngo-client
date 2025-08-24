import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const ContactPage = () => {
  // State for the contact form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
  // State for the contact information fetched from the backend
  const [contactInfo, setContactInfo] = useState(null);
  
  // State for handling form submission status
  const [status, setStatus] = useState('');

  // Fetch contact information when the component mounts
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        // Replace with your actual API endpoint if different
        const res = await axios.get(`${API_URL}/api/contact-info`);
        setContactInfo(res.data);
      } catch (err) {
        console.error("Error fetching contact info:", err);
      }
    };

    fetchContactInfo();
  }, []);

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Replace with your actual API endpoint if different
      await axios.post(`${API_URL}/api/messages`, formData);
      setStatus('Message sent successfully!');
      // Reset form after successful submission
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000); // Clear status message after 3 seconds
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus('Failed to send message. Please try again.');
       setTimeout(() => setStatus(''), 3000);
    }
  };

  const inputStyles = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500";
  const labelStyles = "block text-gray-700 text-sm font-semibold mb-2";

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
        
        {/* Left Side: Message Form */}
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={slideInLeft}
    
        className="flex flex-col">
          <h2 className="text-3xl font-bold text-[#1A2A6C] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelStyles}>Your Name</label>
              <input type="text" name="name" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className={labelStyles}>Email Address</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="phone" className={labelStyles}>Phone Number (Optional)</label>
              <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className={inputStyles} />
            </div>
            <div>
              <label htmlFor="subject" className={labelStyles}>Subject</label>
              <select name="subject" id="subject" value={formData.subject} onChange={handleChange} required className={inputStyles}>
                <option value="" disabled>Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className={labelStyles}>Your Message</label>
              <textarea name="message" id="message" rows="5" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required className={inputStyles}></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-[#317D7C] text-white font-bold py-3 px-4 rounded-3xl hover:bg-teal-700 transition duration-300 flex items-center justify-center gap-2">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3003 0.175119C16.616 0.393869 16.7816 0.771994 16.7222 1.15012L14.7222 14.1501C14.6753 14.4532 14.491 14.7189 14.2222 14.8689C13.9535 15.0189 13.6316 15.0376 13.3472 14.9189L9.6097 13.3657L7.46908 15.6814C7.19095 15.9845 6.75345 16.0845 6.36908 15.9345C5.9847 15.7845 5.7347 15.4126 5.7347 15.0001V12.3876C5.7347 12.2626 5.78158 12.1439 5.86595 12.0532L11.1034 6.33762C11.2847 6.14074 11.2785 5.83762 11.091 5.65012C10.9035 5.46262 10.6003 5.45012 10.4035 5.62824L4.0472 11.2751L1.28783 9.89387C0.956576 9.72824 0.744075 9.39699 0.7347 9.02824C0.725325 8.65949 0.919076 8.31574 1.23783 8.13137L15.2378 0.131369C15.5722 -0.0592555 15.9847 -0.0405055 16.3003 0.175119Z" fill="white"/>
</svg>                Send Message
              </button>
            </div>
             {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
          </form>
        </motion.div>

        {/* Right Side: Contact Information */}
        <div className="space-y-10">
          {/* Contact Details */}
           <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInRight}
        className="bg-gray-100 p-8 rounded-lg"
      >
            <h2 className="text-3xl text-[#1A2A6C] mb-6 font-bold" style={{ fontFamily: "'Merriweather', serif" }} >Contact Information</h2>
            {contactInfo ? (
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-[#317D7C] text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2A6C]">Our Location</h3>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-[#317D7C] text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2A6C]">Email Address</h3>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-[#317D7C] text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2A6C]">Phone Number</h3>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaClock className="text-[#317D7C] text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2A6C]">Working Hours</h3>
                    <p>Monday - Friday: {contactInfo?.workingHours?.mondayFriday || 'N/A'}</p>
                    <p>Saturday: {contactInfo?.workingHours?.saturday || 'N/A'}</p>
                    <p>Sunday: {contactInfo?.workingHours?.sunday || 'Closed'}</p>
                  </div>
                </div>
              </div>
            ) : <p>Loading contact information...</p>}
          </motion.div>

          {/* Social Links */}
                <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInBottom}
        className="bg-gray-100 p-8 rounded-lg"
      >
             <h2 className="text-3xl font-bold text-[#1A2A6C] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>Connect With Us</h2>
             <p className="text-gray-600 mb-4">Follow us on social media to stay updated with our latest activities and events.</p>
             <div className="flex space-x-4">
              {contactInfo?.socialLinks?.facebook && <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition"><FaFacebookF /></a>}
              {contactInfo?.socialLinks?.twitter && <a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-4 rounded-md hover:bg-sky-600 transition"><FaTwitter /></a>}
              {contactInfo?.socialLinks?.instagram && <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-4 rounded-md hover:bg-pink-600 transition"><FaInstagram /></a>}
              {contactInfo?.socialLinks?.youtube && <a href={contactInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white p-4 rounded-md hover:bg-red-700 transition"><FaYoutube /></a>}
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;