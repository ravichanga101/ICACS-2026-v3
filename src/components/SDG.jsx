import React from "react";

export default function SDG() {
  const sdgs = [
    {
      number: 4,
      title: "Quality Education",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      image: "/assets/img/sdg/sdg-4.webp",
      color: "from-red-500 to-red-600"
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
      image: "/assets/img/sdg/sdg-7.webp",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
      image: "/assets/img/sdg/sdg-9.webp",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
      image: "/assets/img/sdg/sdg-11.webp",
      color: "from-yellow-600 to-orange-500"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts.",
      image: "/assets/img/sdg/sdg-13.webp",
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <section id="sdg" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Sustainable Development <span className="text-[#fd7e14]">Goals</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Contributing to UN SDGs through Engineering & Technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${sdg.color} p-3 flex items-center justify-center`}>
                  <img
                    src={sdg.image}
                    alt={`SDG ${sdg.number}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    {sdg.number}. {sdg.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-md inline-block">
              <p className="text-gray-700 text-sm">
                <strong className="text-blue-700">ICACS 2026</strong> aligns with the United Nations Sustainable Development Goals, 
                focusing on education, innovation, sustainable cities, clean energy, and climate action through cutting-edge research and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
