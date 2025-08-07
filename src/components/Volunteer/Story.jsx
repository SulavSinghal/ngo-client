import React, { useEffect, useState } from "react";

// API base path (adjust as needed)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function VolunteerStoriesSection() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/volunteer-stories`)
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full bg-[#f7fafc] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-[#1F316C]"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Volunteer Stories
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-10 text-sm sm:text-base">
          Hear from our volunteers about their experiences and the impact they've made.
        </p>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="text-gray-500">Loading stories...</div>
          </div>
        ) : stories.length === 0 ? (
          <div className="text-gray-500 text-center py-10 w-full">No stories yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {stories.map((story) => (
              <div
                key={story._id}
                className="bg-white rounded-xl shadow-md flex flex-col justify-between w-full max-w-sm lg:w-[395px] lg:h-[384px] lg:max-w-none min-h-[350px] lg:min-h-[384px]"
              >
                <div className="rounded-t-xl overflow-hidden w-full h-48 lg:h-[224px]">
                  {story.imageUrl ? (
                    <img
                      src={
                        story.imageUrl.startsWith("http")
                          ? story.imageUrl
                          : `${API_URL}/${story.imageUrl.replace(/\\/g, "/")}`
                      }
                      alt={story.name}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-200 w-full h-full text-gray-500 text-sm">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                  <p className="italic text-gray-600 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
                    <span className="text-yellow-600 text-base md:text-lg font-semibold mr-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>"</span>
                    {story.quote}
                    <span className="text-yellow-600 text-base md:text-lg font-semibold ml-1">"</span>
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap text-xs md:text-sm text-gray-700 mt-2 items-center">
                      <span className="font- text-[#1F316C]" style={{ fontFamily: "'Quicksand', sans-serif" }}>{story.name}</span>
                      {story.role && (
                        <span className="ml-2 text-gray-500"  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}> {story.role}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
