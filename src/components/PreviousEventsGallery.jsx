"use client";

import React, { useEffect, useState } from "react";

export default function PreviousEventsGallery() {
  const [glightbox, setGlightbox] = useState(null);

  // Gallery images data - using optimized images
  const galleryImages = [
    {
      id: 1,
      title: "Opening Ceremony",
      category: "ceremony",
      webp: "/assets/img/previous-events/2025/optimized/DSC01671.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01671.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01671-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01671-placeholder.webp",
    },
    {
      id: 2,
      title: "Keynote Session",
      category: "keynote",
      webp: "/assets/img/previous-events/2025/optimized/DSC01672.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01672.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01672-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01672-placeholder.webp",
    },
    {
      id: 3,
      title: "Technical Session",
      category: "session",
      webp: "/assets/img/previous-events/2025/optimized/DSC01673.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01673.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01673-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01673-placeholder.webp",
    },
    {
      id: 4,
      title: "Audience Engagement",
      category: "audience",
      webp: "/assets/img/previous-events/2025/optimized/DSC01674.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01674.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01674-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01674-placeholder.webp",
    },
    {
      id: 5,
      title: "Panel Discussion",
      category: "panel",
      webp: "/assets/img/previous-events/2025/optimized/DSC01675.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01675.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01675-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01675-placeholder.webp",
    },
    {
      id: 6,
      title: "Networking Session",
      category: "networking",
      webp: "/assets/img/previous-events/2025/optimized/DSC01676.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01676.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01676-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01676-placeholder.webp",
    },
    {
      id: 7,
      title: "Research Presentation",
      category: "research",
      webp: "/assets/img/previous-events/2025/optimized/DSC01677.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01677.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01677-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01677-placeholder.webp",
    },
    {
      id: 8,
      title: "Participants Discussion",
      category: "participants",
      webp: "/assets/img/previous-events/2025/optimized/DSC01678.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01678.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01678-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01678-placeholder.webp",
    },
    {
      id: 9,
      title: "Conference Hall",
      category: "venue",
      webp: "/assets/img/previous-events/2025/optimized/DSC01680.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01680.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01680-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01680-placeholder.webp",
    },
    {
      id: 10,
      title: "Expert Interaction",
      category: "interaction",
      webp: "/assets/img/previous-events/2025/optimized/DSC01681.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01681.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01681-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01681-placeholder.webp",
    },
    {
      id: 11,
      title: "Award Ceremony",
      category: "awards",
      webp: "/assets/img/previous-events/2025/optimized/DSC01682.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01682.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01682-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01682-placeholder.webp",
    },
    {
      id: 12,
      title: "Group Photo",
      category: "group",
      webp: "/assets/img/previous-events/2025/optimized/DSC01683.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01683.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01683-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01683-placeholder.webp",
    },
    {
      id: 13,
      title: "Technical Workshop",
      category: "workshop",
      webp: "/assets/img/previous-events/2025/optimized/DSC01684.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01684.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01684-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01684-placeholder.webp",
    },
    {
      id: 14,
      title: "Registration Counter",
      category: "registration",
      webp: "/assets/img/previous-events/2025/optimized/DSC01685.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01685.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01685-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01685-placeholder.webp",
    },
    {
      id: 15,
      title: "Exhibition Hall",
      category: "exhibition",
      webp: "/assets/img/previous-events/2025/optimized/DSC01686.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01686.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01686-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01686-placeholder.webp",
    },
    {
      id: 16,
      title: "Poster Session",
      category: "posters",
      webp: "/assets/img/previous-events/2025/optimized/DSC01687.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01687.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01687-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01687-placeholder.webp",
    },
    {
      id: 17,
      title: "Closing Remarks",
      category: "closing",
      webp: "/assets/img/previous-events/2025/optimized/DSC01688.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01688.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01688-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01688-placeholder.webp",
    },
    {
      id: 18,
      title: "Team Group Photo",
      category: "team",
      webp: "/assets/img/previous-events/2025/optimized/DSC01689.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01689.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01689-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01689-placeholder.webp",
    },
    {
      id: 19,
      title: "Attendees",
      category: "attendance",
      webp: "/assets/img/previous-events/2025/optimized/DSC01690.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01690.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01690-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01690-placeholder.webp",
    },
    {
      id: 20,
      title: "Product Demo",
      category: "demo",
      webp: "/assets/img/previous-events/2025/optimized/DSC01691.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01691.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01691-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01691-placeholder.webp",
    },
    {
      id: 21,
      title: "Collaborative Work",
      category: "collaboration",
      webp: "/assets/img/previous-events/2025/optimized/DSC01692.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01692.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01692-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01692-placeholder.webp",
    },
    {
      id: 22,
      title: "Farewell",
      category: "farewell",
      webp: "/assets/img/previous-events/2025/optimized/DSC01693.webp",
      jpg: "/assets/img/previous-events/2025/optimized/DSC01693.jpg",
      thumb:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01693-thumb.webp",
      placeholder:
        "/assets/img/previous-events/2025/optimized/thumbnails/DSC01693-placeholder.webp",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  // Initialize GLightbox
  useEffect(() => {
    const loadGLightbox = async () => {
      const { GLightbox } = await import("glightbox");
      const lightbox = new GLightbox({
        selector: ".glightbox-image",
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        plyr: {
          config: {
            ratio: "16:9",
          },
        },
      });
      setGlightbox(lightbox);
    };

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(loadGLightbox, 100);
    return () => clearTimeout(timer);
  }, []);

  // Update lightbox when filtered images change
  useEffect(() => {
    if (glightbox) {
      // Destroy and reinitialize to capture new elements
      glightbox.destroy();
      setTimeout(() => {
        const { GLightbox } = require("glightbox");
        const newLightbox = new GLightbox({
          selector: ".glightbox-image",
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
        });
        setGlightbox(newLightbox);
      }, 100);
    }
  }, [filteredImages]);

  // Filter images
  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === category),
      );
    }
  };

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "ceremony", label: "Ceremony" },
    { value: "keynote", label: "Keynote" },
    { value: "session", label: "Sessions" },
    { value: "audience", label: "Audience" },
  ];

  return (
    <section
      id="previous-events"
      className="py-14 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="mb-3">
            <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full mb-4">
              ✨ Memory Moments
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Previous{" "}
            <span className="text-[#fd7e14] bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Conference
            </span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-3 mb-6">
            Highlights
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Relive the moments from our past conferences — where ideas were
            shared, connections were made, and innovation thrived
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilter(cat.value)}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === cat.value
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-200 aspect-video"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Optimized Image with WebP support */}
              <a
                href={image.webp}
                className="glightbox-image block w-full h-full cursor-pointer"
                data-gallery="conference-gallery"
                data-description={image.title}
                title={image.title}
              >
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <source srcSet={image.jpg} type="image/jpeg" />
                  <img
                    src={image.jpg}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-base line-clamp-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <svg
                        className="w-4 h-4 text-[#fd7e14] mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-300">
                        Click to view
                      </span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="text-3xl font-bold text-blue-600">22+</div>
              <p className="text-gray-600 text-sm mt-1">Photos</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <div className="text-3xl font-bold text-[#fd7e14]">100+</div>
              <p className="text-gray-600 text-sm mt-1">Attendees</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="text-3xl font-bold text-green-600">12+</div>
              <p className="text-gray-600 text-sm mt-1">Sessions</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="text-3xl font-bold text-purple-600">2025</div>
              <p className="text-gray-600 text-sm mt-1">Event Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
