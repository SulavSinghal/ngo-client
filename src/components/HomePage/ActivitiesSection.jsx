import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Animation variants for staggering cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center text-[#1A2A6C] mb-4"
        style={{ fontFamily: "'Merriweather', serif" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Recent Activities
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore our latest initiatives and see how we're making a difference in communities through various programs.
      </motion.p>

      {loading ? (
        <p className="text-center text-gray-600">Loading activities...</p>
      ) : displayActivities.length === 0 ? (
        <p className="text-center text-gray-600">No activities found.</p>
      ) : (
        <motion.div
          className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {displayActivities.map((activity) => (
            <motion.div key={activity._id} variants={cardVariants}   whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(26, 42, 108, 0.2)" }}
  transition={{ type: "spring", stiffness: 300 }}>
              <ActivityCard activity={activity} />
            </motion.div>
          ))}
        </motion.div>
      )}

 <div className="text-center">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{ display: "inline-block" }}
  >
    <Link
      to="/activities"
      className="text-[#1A2A6C] hover:underline mt-3 text-sm font-thin"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      View All Activities &rarr;
    </Link>
  </motion.div>
</div>


    </section>
  );
};

export default ActivitiesSection;
