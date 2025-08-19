import React from "react";

function BlogFilterBar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 mt-8">
      {/* LHS: Static Text */}
      <div className="mb-3 md:mb-0">
        <span className=" text-[#1F316C] text-lg"  style={{ fontFamily: "'Merriweather', serif" }}>Blog Categories</span>
      </div>
      {/* RHS: Pill Buttons */}
      <div className="flex gap-3 flex-wrap">
        {["All Blogs", ...categories].map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border transition font-medium
              ${selectedCategory === cat
                ? "bg-blue-900 text-white shadow"
                : "bg-white border-blue-300 text-blue-900 hover:bg-blue-50"}`} 
            onClick={() => setSelectedCategory(cat)} style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogFilterBar;
