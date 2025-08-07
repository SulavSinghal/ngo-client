import React, { useEffect, useState } from "react";

// Backend API endpoint
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function VolunteerOpportunitiesSection() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/volunteer-opportunities`)
      .then(res => res.json())
      .then(data => {
        setOpportunities(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold md:text-3xl text-center mb-2 text-[#1F316C]" style={{ fontFamily: "'Merriweather', serif" }}>
          Open Volunteer Opportunities
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find the perfect role that matches your skills, interests, and availability.
        </p>

        {loading ? (
          <div className="flex justify-center py-10">Loading opportunities...</div>
        ) : opportunities.length === 0 ? (
          <div className="text-gray-500 text-center py-10 w-full">No opportunities yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {opportunities.map(op => (
              <div
                key={op._id}
                className=" rounded-xl shadow p-6 flex flex-col justify-between border border-gray-100 bg-[#132B9C1A]">
              
                <div className="flex items-center mb-3">
                  <span className={`inline-block w-8 h-8 rounded flex items-center justify-center mr-2`}>
                    {/* Render an icon or fallback */}
                    {op.icon ? (
                      <img src={op.icon} alt="" className="w-6 h-6" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="4" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M8 17v1M16 17v1M9.5 12h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                  <h3 className="font-bold text-lg text-[#1F316C]">{op.title}</h3>
                  {op.badge && (
                    <span className="ml-auto text-xs bg-[#F3D91C33] text-[#1F316C] rounded px-2 py-1">{op.badge}</span>
                  )}
                </div>
                <p className="text-gray-700 mb-3 text-sm">{op.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-1">
                  {op.category && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-500">{op.category}</span>
                  )}
                  {op.time && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-500">{op.time}</span>
                  )}
                  {op.hoursPerWeek && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-500">{op.hoursPerWeek}</span>
                  )}
                </div>
                {/* No Learn More button, no CRUD controls here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
