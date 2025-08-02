import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ActivitiesSection = ({ limit = 3 }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/activities`)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const displayActivities = activities.slice(0, limit);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[#1A2A6C] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>Recent Activities</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-15">
        Explore our latest initiatives and see how we're making a difference in communities through various programs.
      </p>

      {loading ? (
        <p className="text-center text-gray-600">Loading activities...</p>
      ) : displayActivities.length === 0 ? (
        <p className="text-center text-gray-600">No activities found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto mb-8">
          {displayActivities.map((activity) => (
            <ActivityCard key={activity._id} activity={activity} />
          ))}
        </div>
      )}
      <div className="text-center">
        <Link
          to="/activities"
          className="inline-block text-[#1A2A6C] hover:underline mt-3 text-sm font-thin" style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          View All Activities &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ActivitiesSection;
