import React from "react";
import { motion } from "framer-motion";
function BlogsFilterBar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 mt-8">
      {/* LHS: Static Text */}
      <div className="mb-3 md:mb-0">
        <span
          className="text-[#1F316C] text-lg"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Filter Blogs
        </span>
      </div>
      {/* RHS: Pill Buttons */}
      <div className="flex gap-3 flex-wrap">
        {["All Blogs", ...categories].map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <motion.button
              key={cat}
              className={`px-5 py-2 rounded-full border transition font-medium ${
                isSelected
                  ? "bg-blue-900 text-white shadow"
                  : "bg-white border-blue-300 text-blue-900 hover:bg-blue-50"
              }`}
              onClick={() => setSelectedCategory(cat)}
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsFilterBar;
