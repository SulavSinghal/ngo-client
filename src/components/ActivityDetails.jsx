import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ActivityDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/activities/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Activity not found");
        return res.json();
      })
      .then((data) => {
        setActivity(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading activity details...</p>;
  if (!activity) return <p>Activity not found.</p>;

  return (
    <article style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h1>{activity.title}</h1>
      <div style={{ marginBottom: 16, color: "#444" }}>
        <span>{activity.category}</span> |{" "}
        <span>{new Date(activity.date).toLocaleDateString()}</span> |{" "}
        <span>{activity.location}</span>
      </div>
      {activity.imageUrl && (
        <img
          src={activity.imageUrl}
          alt={activity.title}
          style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 8 }}
        />
      )}
      <div style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>{activity.details}</div>
      <p style={{ marginTop: 24 }}>
        <Link to="/activities" style={{ color: "#2948c7", textDecoration: "none" }}>
          &larr; Back to Activities
        </Link>
      </p>
    </article>
  );
};

export default ActivityDetails;
