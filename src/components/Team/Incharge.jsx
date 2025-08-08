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
      <h1 className="text-center text-4xl font-extrabold text-blue-900 leading-tight mb-2">
        Executive members
      </h1>
      <p className="text-center text-blue-800 text-lg font-normal mb-10">
        Meet the dedicated individuals who lead our initiatives and drive our mission forward.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 place-items-center">
        {members.map(member => (
          <div
            key={member._id}
            className="bg-white rounded-[12px] shadow-[0_2px_4px_rgba(0,0,0,0.10),0_4px_6px_rgba(0,0,0,0.10)] flex flex-col md:flex-row w-full max-w-[480px] min-h-[260px] overflow-hidden md:h-[208px]"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0 flex items-center justify-center bg-[#F5F6FB] w-full h-[160px] md:w-[140px] md:h-auto">
              {member.image && (
                <img
                  src={UPLOADS_URL + member.image}
                  alt={`Profile of ${member.name}`}
                  className="w-[110px] h-[110px] rounded-[13px] object-cover border-[1.5px] border-gray-200"
                />
              )}
            </div>
            {/* Details Section */}
            <div className="flex-1 flex flex-col justify-between px-5 py-6">
              <div>
                <h3 className="text-[20px] md:text-[19px] font-bold text-[#25326b] mb-1 leading-tight">{member.name}</h3>
                <div className="text-[#00A7AD] text-[15.5px] font-semibold mb-[4px]">{member.title}</div>
                <p className="text-[#383C52] text-[15px] font-normal mb-3">{member.bio}</p>
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
                    {/* ...LinkedIn SVG... */}
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
                    {/* ...Twitter SVG... */}
                  </a>
                )}
                {member.socials?.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    aria-label="Email"
                    className="text-[#25326b] hover:text-[#00A7AD] transition-colors duration-200"
                  >
                    {/* ...Email SVG... */}
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
