import React, { useState, useEffect } from "react";
import BlogFilter from "./BlogFilter";
import BlogCard from "../BlogCard";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ITEMS_PER_PAGE = 6;

function BlogPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch categories on mount
  useEffect(() => {
    fetch(`${API_URL}/api/blog/categories`)
      .then((res) => res.json())
      .then((cats) => setCategories(cats))
      .catch(() => setCategories([]));
  }, []);

  // Fetch activities whenever filter changes
  useEffect(() => {
    setLoading(true);
    setCurrentPage(1); // Reset to first page on filter change
    let url = `${API_URL}/api/blog`;
    if (selectedCategory !== "All Blogs") {
      url += `?category=${encodeURIComponent(selectedCategory)}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);

  // Calculate paginated activities
  const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedActivities = activities.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Helper to change page safely
  const gotoPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };

  return (
    <section className="px-4 max-w-6xl mx-auto">
      <BlogFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <p className="text-center text-gray-500">Loading Blogs...</p>
      ) : paginatedActivities.length === 0 ? (
        <p className="text-center text-gray-500">No Blogs found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedActivities.map((activity) => (
              <BlogCard key={activity._id} activity={activity} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 gap-2 pb-16">
  {/* Prev */}
  <button
    onClick={() => gotoPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`w-10 h-10 rounded-full flex items-center justify-center border transition
      ${currentPage === 1
        ? "text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed"
        : "text-blue-700 border-blue-200 hover:bg-blue-100"}
    `}
    aria-label="Previous page"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, idx) => {
    const pageNum = idx + 1;
    const isActive = currentPage === pageNum;
    return (
      <button
        key={pageNum}
        onClick={() => gotoPage(pageNum)}
        className={`w-10 h-10 rounded-full border transition
          ${isActive
            ? "bg-blue-900 text-white border-blue-900 shadow"
            : "bg-white text-blue-900 border-blue-200 hover:bg-blue-100"}
          font-semibold flex items-center justify-center`}
      >
        {pageNum}
      </button>
    );
  })}

  {/* Next */}
  <button
    onClick={() => gotoPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`w-10 h-10 rounded-full flex items-center justify-center border transition
      ${currentPage === totalPages
        ? "text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed"
        : "text-blue-700 border-blue-200 hover:bg-blue-100"}
    `}
    aria-label="Next page"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
</div>

        </>
      )}
    </section>
  );
}

export default BlogPage;
