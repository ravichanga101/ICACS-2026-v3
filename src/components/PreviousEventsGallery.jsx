"use client";

import React, { useEffect } from "react";

export default function PreviousEventsGallery() {
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
    // {
    //   id: 2,
    //   title: "Keynote Session",
    //   category: "keynote",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01672.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01672.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01672-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01672-placeholder.webp",
    // },
    // {
    //   id: 3,
    //   title: "Technical Session",
    //   category: "session",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01673.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01673.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01673-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01673-placeholder.webp",
    // },
    // {
    //   id: 4,
    //   title: "Audience Engagement",
    //   category: "audience",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01674.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01674.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01674-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01674-placeholder.webp",
    // },
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
    // {
    //   id: 8,
    //   title: "Participants Discussion",
    //   category: "participants",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01678.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01678.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01678-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01678-placeholder.webp",
    // },
    // {
    //   id: 9,
    //   title: "Conference Hall",
    //   category: "venue",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01680.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01680.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01680-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01680-placeholder.webp",
    // },
    // {
    //   id: 10,
    //   title: "Expert Interaction",
    //   category: "interaction",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01681.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01681.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01681-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01681-placeholder.webp",
    // },
    // {
    //   id: 11,
    //   title: "Award Ceremony",
    //   category: "awards",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01682.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01682.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01682-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01682-placeholder.webp",
    // },
    // {
    //   id: 12,
    //   title: "Group Photo",
    //   category: "group",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01683.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01683.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01683-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01683-placeholder.webp",
    // },
    // {
    //   id: 13,
    //   title: "Technical Workshop",
    //   category: "workshop",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01684.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01684.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01684-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01684-placeholder.webp",
    // },
    // {
    //   id: 14,
    //   title: "Registration Counter",
    //   category: "registration",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01685.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01685.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01685-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01685-placeholder.webp",
    // },
    // {
    //   id: 15,
    //   title: "Exhibition Hall",
    //   category: "exhibition",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01686.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01686.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01686-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01686-placeholder.webp",
    // },
    // {
    //   id: 16,
    //   title: "Poster Session",
    //   category: "posters",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01687.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01687.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01687-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01687-placeholder.webp",
    // },
    // {
    //   id: 17,
    //   title: "Closing Remarks",
    //   category: "closing",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01688.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01688.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01688-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01688-placeholder.webp",
    // },
    // {
    //   id: 18,
    //   title: "Team Group Photo",
    //   category: "team",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01689.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01689.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01689-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01689-placeholder.webp",
    // },
    // {
    //   id: 19,
    //   title: "Attendees",
    //   category: "attendance",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01690.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01690.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01690-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01690-placeholder.webp",
    // },
    // {
    //   id: 20,
    //   title: "Product Demo",
    //   category: "demo",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01691.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01691.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01691-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01691-placeholder.webp",
    // },
    // {
    //   id: 21,
    //   title: "Collaborative Work",
    //   category: "collaboration",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01692.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01692.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01692-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01692-placeholder.webp",
    // },
    // {
    //   id: 22,
    //   title: "Farewell",
    //   category: "farewell",
    //   webp: "/assets/img/previous-events/2025/optimized/DSC01693.webp",
    //   jpg: "/assets/img/previous-events/2025/optimized/DSC01693.jpg",
    //   thumb:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01693-thumb.webp",
    //   placeholder:
    //     "/assets/img/previous-events/2025/optimized/thumbnails/DSC01693-placeholder.webp",
    // },
  ];

  // Keynote address details
  const keynoteAddresses = [
    {
      id: 1,
      name: "Dr. Rajendra M. Sonar",
      affiliation: "Professor IIT Bombay",
      title: "Making GenAI work for Intelligent Systems",
      date: "1 March 2025",
      youtubeLink: "https://youtu.be/7haz5qdNdPo",
      thumbnail:
        "/assets/img/previous-events/2025/optimized/thumbnails/keynote/keynote-AI-recording.png",
    },
    {
      id: 2,
      name: "Nilanjan Dey",
      affiliation:
        "Associate Professor, Techno International New Town, Kolkata",
      title: "The bigger, The better?",
      date: "1 March 2025",
      youtubeLink: "https://youtu.be/URJ8hyU8zVk",
      thumbnail:
        "/assets/img/previous-events/2025/optimized/thumbnails/keynote/keynote-CommunicationTechnologies-recording.png",
    },
    {
      id: 3,
      name: "Vasant A. Matsagar",
      affiliation: "Professor and Head of the Department, IIT Delhi",
      title:
        "Exploring Contemporary Themes in Smart Cities: A Structural Engineering Perspective",
      date: "1 March 2025",
      youtubeLink: "https://youtu.be/EMH2W4PACEU",
      thumbnail:
        "/assets/img/previous-events/2025/optimized/thumbnails/keynote/Keynote-SmartCities-recording.png",
    },
  ];

  // Initialize GLightbox with optimized settings and error handling
  useEffect(() => {
    let lightboxInstance = null;

    const loadGLightbox = async () => {
      try {
        const glightboxModule = await import("glightbox");
        const GLightbox = glightboxModule.default;

        lightboxInstance = new GLightbox({
          selector: ".glightbox-image, .glightbox-video",
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          preload: true,
          openEffect: "fade",
          closeEffect: "fade",
          slideEffect: "slide",
          moreLength: 0,
          videosWidth: "100%",
        });
      } catch (error) {
        console.error("Failed to load GLightbox:", error);
      }
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(loadGLightbox, 100);

    return () => {
      clearTimeout(timer);
      if (lightboxInstance) {
        try {
          lightboxInstance.destroy();
        } catch (error) {
          console.error("Error destroying GLightbox:", error);
        }
      }
    };
  }, []);

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
            ICACS{" "}
            <span className="text-[#fd7e14] bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              2025
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-200 aspect-video"
            >
              {/* Optimized Image with WebP support */}
              <a
                href={image.webp}
                className="glightbox-image block w-full h-full cursor-pointer"
                data-gallery="conference-gallery"
              >
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <source srcSet={image.jpg} type="image/jpeg" />
                  <img
                    src={image.thumb || image.jpg}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "auto"}
                  />
                </picture>
              </a>
            </div>
          ))}
        </div>

        {/* Keynote Address Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="mb-3">
              <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full mb-4">
                🎤 Keynote Addresses
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-3">
              Recorded <span className="text-[#fd7e14]">Keynote Addresses</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keynoteAddresses.map((keynote, index) => (
              <div
                key={keynote.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900"
              >
                <a
                  href={keynote.youtubeLink}
                  className="glightbox-video block relative cursor-pointer"
                  data-gallery="keynote-videos"
                  data-title={`${keynote.name} - ${keynote.title}`}
                  data-description={`${keynote.affiliation} | ${keynote.date}`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video">
                    <img
                      src={keynote.thumbnail}
                      alt={`${keynote.name} - ${keynote.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-xl">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-white">
                    <h4 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">
                      {keynote.name}
                    </h4>
                    <p className="text-xs opacity-90 line-clamp-1">
                      {keynote.affiliation}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
