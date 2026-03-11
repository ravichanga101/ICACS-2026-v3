"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-[88vh] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/img/banner-bg.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Parallax overlay that moves at a different rate than scroll */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center justify-center">
        <div
          className="mx-auto text-center max-w-4xl"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        >
          <div className="bg-white/80 backdrop-blur-sm py-6 md:py-8 px-4 md:px-6 rounded-lg shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-blue-500/10 animate-fadeIn">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1869b4] leading-tight transition-all duration-300">
              <span className="block mb-2 animate-slideUp">ICACS 2026</span>
              <span className="block text-xl md:text-2xl lg:text-3xl text-gray-800 animate-slideUp animation-delay-100">
                2<sup className="text-xs md:text-sm">nd</sup> International
                Conference on
              </span>
              <span className="block mt-2 text-[#fd7e14] animate-slideUp animation-delay-200">
                Artificial Intelligence, Communication Technologies & Smart
                Cities (Hybrid)
              </span>
            </h1>

            <p className="text-lg md:text-xl font-semibold mt-4 text-gray-800 animate-slideUp animation-delay-300">
              19<sup>th</sup> September 2026 | CHARUSAT, India
            </p>

            <p className="mt-4 text-gray-700 text-base animate-fadeIn animation-delay-400">
              Bringing together researchers, practitioners, and industry experts
              to discuss the latest advancements in engineering and technology
              domains across multiple disciplines.
            </p>

            {/* <div className="mt-6 flex flex-wrap gap-3 md:gap-4 justify-center animate-fadeIn animation-delay-500">
              <a
                href="#cfp"
                className="bg-[#1869b4] hover:bg-[#145a96] text-white font-medium py-2 px-5 md:px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
              >
                Submit Paper
              </a>
              {
              <a
                href="#registration"
                className="bg-[#fd7e14] hover:bg-[#e67211] text-white font-medium py-2 px-5 md:px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
              >
                Register Now
              </a>
              }
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
