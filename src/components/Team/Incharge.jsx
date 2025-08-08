import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/InchargeMember';
const UPLOADS_URL = 'http://localhost:5000/uploads/';

function ExecutiveMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setMembers(res.data))
      .catch(err => console.error('Failed to fetch members:', err));
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-center text-4xl font-bold text-[#1F316C] leading-tight mb-2"  style={{ fontFamily: "'Merriweather', serif" }}>
        Incharges for various field
      </h1>
      <p className="text-center text-lg font-[18px] mb-10" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        Our advisors and mentors provide guidance and expertise to help us maximize our impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {members.map(member => (
          <div
            key={member._id}
            className="bg-white rounded-[12px] shadow-[0_2px_4px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col w-full max-w-[360px] min-h-[340px] mx-auto"
          >
            {/* Image Covers Entire Top Div */}
            <div className="w-full h-[256px] bg-[#F5F6FB] flex items-center justify-center object-cover">
              {member.image && (
                <img
                  src={UPLOADS_URL + member.image}
                  alt={`Profile of ${member.name}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {/* Details Section, Left Aligned */}
            <div className="flex-1 flex flex-col justify-between px-5 py-6 text-left">
              <div>
                <h3 className="text-[20px] md:text-[19px] font-bold text-[#25326b] mb-1 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>{member.name}</h3>
                <div className="text-[#1F817C] text-[15.5px]  mb-[4px]" style={{fontFamily: "'IBM Plex Sans', sans-serif" }}>{member.title}</div>
                <p className="text-[#383C52] text-[15px] font-normal mb-3" style={{fontFamily: "'IBM Plex Sans', sans-serif" }}>{member.bio}</p>
              </div>
              <div className="flex gap-4 mt-2">
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#25326b] hover:text-[#00A7AD] transition-colors duration-200"
                  >
                     <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.5-.68-1.5-1.52 0-.86.55-1.52 1.55-1.52s1.5.66 1.53 1.52c0 .84-.54 1.52-1.53 1.52zm13.5 11.28h-3v-5.68c0-1.43-.51-2.41-1.8-2.41-1.01 0-1.61.68-1.87 1.35-.1.23-.13.55-.13.87v5.87h-3s.04-9.53 0-10.5h3v1.49c.4-.64 1.13-1.55 2.75-1.55 2 0 3.5 1.31 3.5 4.13v6.43z" />
                    </svg>
                  </a>
                )}
                {member.socials?.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-[#25326b] hover:text-[#00A7AD] transition-colors duration-200"
                  >
                     <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.384 4.482c-4.083-.205-7.699-2.164-10.126-5.144a4.822 4.822 0 0 0-.666 2.475 4.919 4.919 0 0 0 2.188 4.1 4.904 4.904 0 0 1-2.228-.616c-.053 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.085c.627 1.956 2.445 3.377 4.6 3.416a9.876 9.876 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.212c9.055 0 14-7.496 14-13.986 0-.214-.006-.425-.016-.637a9.935 9.935 0 0 0 2.46-2.548z" />
                    </svg>
                  </a>
                )}
                {member.socials?.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    aria-label="Email"
                    className="text-[#25326b] hover:text-[#00A7AD] transition-colors duration-200"
                  >
                       <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExecutiveMembers;
