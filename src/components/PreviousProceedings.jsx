"use client";

import React from "react";
import { BookOpen, ExternalLink, Calendar, FileText } from "lucide-react";

export default function PreviousProceedings() {
  // Previous conference proceedings data
  const proceedings = [
    {
      year: "2025",
      title: "ICACS 2025 - Proceedings",
      description:
        "International Conference on Artificial Intelligence, Communication Technologies & Smart Cities",
      publisher: "Springer",
      series: "Lecture Notes in Networks and Systems",
      doi: "10.1007/978-981-96-9196-8",
      link: "https://link.springer.com/book/10.1007/978-981-96-9196-8",
      isbn: "978-981-96-9196-8",
      coverImage:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-981-96-9196-8?as=webp",
      papers: 45,
      pages: 520,
    },
  ];

  return (
    <section
      id="previous-proceedings"
      className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3">
            <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full">
              📚 Published Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Previous Year{" "}
            <span className="text-[#1869b4] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Proceedings
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our previously published conference proceedings in
            prestigious journals and platforms
          </p>
        </div>

        {/* Proceedings Cards */}
        <div className="flex justify-center max-w-7xl mx-auto">
          {proceedings.map((proceeding) => (
            <div
              key={proceeding.year}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:scale-105 transform w-full max-w-md"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Year {proceeding.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{proceeding.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6 flex justify-center">
                  <img
                    src={proceeding.coverImage}
                    alt={`${proceeding.title} cover`}
                    className="h-80 w-auto rounded-md border border-gray-100 shadow-sm"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                  {proceeding.description}
                </p>

                {/* Publisher Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <BookOpen className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700">
                        Publisher:
                      </span>
                      <span className="text-gray-600 ml-1">
                        {proceeding.publisher}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700">
                        Series:
                      </span>
                      <span className="text-gray-600 ml-1">
                        {proceeding.series}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2 text-sm">
                      ISBN:
                    </span>
                    <span className="text-gray-600 text-sm">
                      {proceeding.isbn}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2 text-sm">
                      DOI:
                    </span>
                    <span className="text-gray-600 text-sm break-all">
                      {proceeding.doi}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={proceeding.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center group-hover:shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    View Proceedings
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
