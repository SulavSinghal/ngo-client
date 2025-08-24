import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/teamMembers';
const UPLOADS_URL = 'http://localhost:5000/uploads/';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, when: "beforeChildren" } 
  },
};

const cardVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 30 }
};
function ExecutiveMemberCard({ member }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-[12px] shadow flex flex-col sm:flex-row items-start gap-6 w-full max-w-[496px] min-h-[284px] relative px-6 py-6"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 15px 40px rgba(0,0,0,0.25)"
        
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {member.image && (
        <img
          src={UPLOADS_URL + member.image}
          alt={`Profile of ${member.name}`}
          className="w-full sm:w-[198px] h-[284px] rounded-[10px] object-cover border-[1.5px] border-gray-200 bg-[#F5F6FB] flex-shrink-0"
        />
      )}
      <div className="flex-1 flex flex-col justify-between h-full px-3 py-4">
        <div>
          <h3
            className="text-[19px] font-bold text-[#1F316C] mb-[1px] leading-tight"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {member.name}
          </h3>
          <div className="text-[#1F817C] text-[16px] font-medium mb-[6px]">{member.title}</div>
          <p
            className="text-[#383C52] text-[15px] font-normal mb-4"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            {member.bio}
          </p>
        </div>
        <div className="flex gap-5 mt-auto">
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#25326b] hover:text-[#F3D13C] transition-colors duration-200"
            >
          <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.5-.68-1.5-1.52 0-.86.55-1.52 1.55-1.52s1.5.66 1.53 1.52c0 .84-.54 1.52-1.53 1.52zm13.5 11.28h-3v-5.68c0-1.43-.51-2.41-1.8-2.41-1.01 0-1.61.68-1.87 1.35-.1.23-.13.55-.13.87v5.87h-3s.04-9.53 0-10.5h3v1.49c.4-.64 1.13-1.55 2.75-1.55 2 0 3.5 1.31 3.5 4.13v6.43z" />
                    </svg>
            </a>
          )}
          {/* Add other social icons similarly */}
           {member.socials?.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-[#25326b] hover:text-[#F3D13C] transition-colors duration-200"
                  >
                    <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.384 4.482c-4.083-.205-7.699-2.164-10.126-5.144a4.822 4.822 0 0 0-.666 2.475 4.919 4.919 0 0 0 2.188 4.1 4.904 4.904 0 0 1-2.228-.616c-.053 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.085c.627 1.956 2.445 3.377 4.6 3.416a9.876 9.876 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.212c9.055 0 14-7.496 14-13.986 0-.214-.006-.425-.016-.637a9.935 9.935 0 0 0 2.46-2.548z" />
                    </svg>
                  </a>
                )}
                {/* Email */}
                {member.socials?.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    aria-label="Email"
                    className="text-[#25326b] hover:text-[#F3D13C] transition-colors duration-200"
                  >
                    <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                )}
        </div>
      </div>
    </motion.div>
  );
}

function ExecutiveMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setMembers(res.data));
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <motion.h1
        className="text-center text-4xl font-bold text-[#1F316C] leading-tight mb-2"
        style={{ fontFamily: "'Merriweather', serif" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Executive Members
      </motion.h1>
      <motion.p
        className="text-center text-lg font-[18px] mb-10"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Meet the dedicated individuals who lead our initiatives and drive our mission forward.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 place-items-center justify-center">
        {members.map(member => (
          <ExecutiveMemberCard key={member._id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default ExecutiveMembers;