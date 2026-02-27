"use client";

import React from "react";
import {
  BookOpen,
  ExternalLink,
  CheckCircle,
  Award,
  Database,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";

export default function PublicationSection() {
  // Publishers and indexing information
  const publishers = [
    {
      name: "Springer",
      series: "Lecture Notes in Networks and Systems (LNNS)",
      logo: "/assets/img/Logos_Place/springer.png",
      description:
        "Selected papers will be published in Springer's prestigious LNNS series",
      link: "https://www.springer.com/series/15179",
      features: [
        "Indexed in Scopus",
        "Indexed in Web of Science",
        "Fast publication process",
        "Wide global distribution",
      ],
    },
  ];

  const indexedIn = [
    {
      name: "Scopus",
      icon: Database,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "Web of Science",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Google Scholar",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "DBLP",
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const publicationProcess = [
    {
      step: "1",
      title: "Paper Submission",
      description: "Submit your research paper through the conference portal",
    },
    {
      step: "2",
      title: "Peer Review",
      description: "Papers undergo rigorous double-blind peer review process",
    },
    {
      step: "3",
      title: "Acceptance Notification",
      description: "Authors receive notification about paper acceptance",
    },
    {
      step: "4",
      title: "Camera-Ready Submission",
      description: "Submit final version following Springer guidelines",
    },
    {
      step: "5",
      title: "Publication",
      description: "Papers published in Springer LNNS series",
    },
  ];

  const guidelines = [
    "Papers must be original and not submitted elsewhere",
    "Follow Springer LNNS formatting guidelines",
    "Maximum paper length: 12-15 pages",
    "All papers will undergo plagiarism check",
    "At least one author must register for the conference",
    "Present the paper at the conference (virtual/physical)",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3">
            <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full">
              📖 Get Published
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Publication{" "}
            <span className="text-[#1869b4] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Publish your research in internationally recognized, indexed
            journals and conference proceedings
          </p>
        </div>

        {/* Publisher Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Award className="w-8 h-8 text-[#fd7e14] mr-3" />
            Official Publisher
          </h2>

          {publishers.map((publisher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {publisher.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      {publisher.series}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {publisher.description}
                    </p>
                    <a
                      href={publisher.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Visit Publisher Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-4 border border-gray-200">
                      <span className="text-2xl font-bold text-gray-700">
                        {publisher.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray-200">
                  {publisher.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indexed In */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Indexed In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {indexedIn.map((index, idx) => (
              <div
                key={idx}
                className={`${index.bgColor} rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex justify-center mb-3">
                  <index.icon className={`w-12 h-12 ${index.color}`} />
                </div>
                <h3 className={`font-bold text-lg ${index.color}`}>
                  {index.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Process */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Users className="w-8 h-8 text-[#1869b4] mr-3" />
            Publication Process
          </h2>
          <div className="relative">
            {/* Process Steps */}
            <div className="space-y-6">
              {publicationProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    <div className="ml-6 flex-1 bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                  {index < publicationProcess.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-6 bg-blue-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publication Guidelines */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-[#fd7e14] mr-3" />
            Publication Guidelines
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start">
              <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All accepted papers will go through a rigorous review process
                  to ensure the highest quality standards. Papers must be
                  presented at the conference (physically or virtually) to be
                  included in the proceedings. The conference maintains high
                  publishing standards and only accepts original, unpublished
                  research work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
