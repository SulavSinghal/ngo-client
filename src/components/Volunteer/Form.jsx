import React, { useState } from "react";
import { motion } from "framer-motion";
// Replace with your actual image path in your public folder or import as a module
const VOLUNTEER_IMAGE = "/assets/form.png";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  availability: []
};

export default function VolunteerForm() {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        availability: checked
          ? [...prev.availability, value]
          : prev.availability.filter(a => a !== value)
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_URL}/api/volunteer-applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess("Thank you for signing up!");
        setForm(initialState);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  }
const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  return (
    <div id="volunteer-form" className="min-h-screen bg-[#1F316C] flex items-center justify-center py-8 px-2">
      <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white max-w-4xl w-full mx-auto">
        {/* Form Section */}
        <motion.form
          className="flex-1 p-8 flex flex-col justify-center min-w-[320px] w-full md:w-[448px]"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideFromLeft}
        >
          <h2 className="text-2xl font-bold mb-1 text-[#1F316C]"  style={{ fontFamily: "'Merriweather', serif" }}>Join Us</h2>
          <p className="mb-5 text-sm text-gray-700">
            Fill out this form to express your interest in volunteering with us. We'll get back to you soon!
          </p>
          <div className="mb-4">
            <p className="mb-2 text-sm"style={{ fontFamily: "'Quicksand', sans-serif" }}> Full Name</p>
            <input
              type="text"
              name="fullName"
              placeholder=" Your Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
             <p className="mb-2 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}> Email Address</p>
            <input
              type="email"
              name="email"
              placeholder=" Your Email Address"
              value={form.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
             <p className="mb-2 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}> Phone Number</p>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
             <p className="mb-2 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}> Area of Interest</p>
            <input
              type="text"
              name="areaOfInterest"
              placeholder="Area of Interest"
              value={form.areaOfInterest}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-5">
            <div className="text-sm font-medium mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>Availability</div>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="availability"
                  value="Weekdays"
                  checked={form.availability.includes("Weekdays")}
                  onChange={handleChange}
                  className="mr-1"
                />
                Weekdays
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="availability"
                  value="Weekends"
                  checked={form.availability.includes("Weekends")}
                  onChange={handleChange}
                  className="mr-1"
                />
                Weekends
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="availability"
                  value="Remote"
                  checked={form.availability.includes("Remote")}
                  onChange={handleChange}
                  className="mr-1"
                />
                Remote
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-2 bg-[#F3D91C] hover:bg-yellow-300 text-gray-900 font-semibold rounded-full transition"
          >
            Submit Form
          </button>
          {success && (
            <div className="text-green-600 mt-4 text-center">{success}</div>
          )}
          {error && (
            <div className="text-red-500 mt-4 text-center">{error}</div>
          )}
        </motion.form>

        {/* Image Section */}
        <motion.div className="hidden md:block md:w-[400px] bg-gray-100 relative"  initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideFromRight}>
          <img
            src={VOLUNTEER_IMAGE}
            alt="Volunteering"
            className="w-full h-full object-cover"
            style={{ minHeight: 430, maxHeight: 620 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
