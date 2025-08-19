import React from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ActivityCard = ({ activity }) => {
  if (!activity) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="h-[224px] bg-gray-200">
        {activity.imageUrl ? (
          <img
            src={`${API_URL}${activity.imageUrl}`}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2 text-xs">
          <span className="bg-[#317D7C1A] text-[#2C7A7B] px-3 py-1 rounded-full font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {activity.category}
            </span>
    <span className="text-gray-500" style={{ fontFamily: "'Quicksand', sans-serif" }}>
  {new Date(activity.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
</span>

        </div>
        <h3 className="text-md text-[#1A2A6C] font-semibold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
          <Link
            to={`/activities/${activity._id}`}
            className="hover:underline"
          >
            {activity.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm flex-grow" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{activity.description}</p>
        <div className="mt-4">
          <Link
            to={`/activities/${activity._id}`}
            className="text-[#2C7A7B] hover:underline text-sm" style={{ fontFamily: "'Merriweather', serif" }}
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
