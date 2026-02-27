"use client";

import React from "react";

export default function LeftSideImportantDatesButton() {
  const handleClick = (targetId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback to hash navigation if element isn't found
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {/* Submit Paper Button */}
      <button
        aria-label="Submit Paper"
        onClick={handleClick("submission-guidelines")}
        className="relative w-12 h-40 bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg rounded-r-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 hover:w-14"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="transform -rotate-90 select-none text-sm font-semibold tracking-wider whitespace-nowrap">
            Submit Paper
          </span>
        </span>
      </button>

      {/* Important Dates Button */}
      <button
        aria-label="Go to Important Dates"
        onClick={handleClick("impdates")}
        className="relative w-12 h-44 bg-gradient-to-b from-[#fd7e14] to-orange-600 text-white shadow-lg rounded-r-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fd7e14] transition-all duration-300 hover:w-14"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="transform -rotate-90 select-none text-sm font-semibold tracking-wider">
            Important Dates
          </span>
        </span>
      </button>
    </div>
  );
}
