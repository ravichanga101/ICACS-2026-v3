"use client";

import React from "react";
import Link from "next/link";

const keynotes = [
  {
    session: 1,
    title:
      "Design and Automation in Material Selection for Oil and Gas Refineries",
    name: "Mr. Urvesh Vala",
    affiliation:
      "Head of Material Engineering Technology, L&T Energy Hydrocarbon Engineering Ltd., Vadodara",
    image: "/assets/img/keynote/UrveshVala.png",
  },
  {
    session: 2,
    title:
      "Development of adaptive signal processing and machine learning algorithms for audio signal processing",
    name: "Prof. Nitin V. George",
    affiliation:
      "Professor, Indian Institute of Technology Gandhinagar",
    image: "/assets/img/keynote/NitinVGeorge.png",
  },
  {
    session: 3,
    title:
      "From code to creativity: Rethinking how we can create and compete in the era of GenAI",
    name: "Dr. Atul Kumar",
    affiliation:
      "Manager and Senior Research Scientist, IBM Research, Bangalore",
    image: "/assets/img/keynote/AtulKumar.png",
  },
  {
    session: 4,
    title:
      "Mobility in Smart Cities: Electrification, Automation and Integration",
    name: "Dr. Subba Reddy",
    affiliation:
      "Chief Research Scientist, Indian Institute of Science, Bangalore",
    image: "/assets/img/keynote/SubbaReddy.png",
  },
  {
    session: 5,
    title:
      "Intelligent transportation systems for sustainable smart cities",
    name: "Dr. Tom V. Mathew",
    affiliation:
      "Professor, Department of Civil Engineering, Indian Institute of Technology Bombay",
    image: "/assets/img/keynote/TomVMathew.png",
  },
  {
    session: 6,
    title:
      "AI in Intelligent transportation systems for making our cities smart",
    name: "Dr. Mohammad Shafi Mir",
    affiliation:
      "Professor, Department of Civil Engineering, National Institute of Technology, Srinagar",
    image: "/assets/img/keynote/MohammadShafiMir.png",
  },
];

export default function KeynoteSpeakers() {
  return (
    <section id="speakers" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Galaxy of National and International{" "}
            <span className="text-[#fd7e14]">Keynote Speakers</span>
          </h2>
        </div>

        {/* <div className="flex justify-center mb-8">
          <Link
            href="/assets/files/Keynote_Speech_Schedule_2025.pdf"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition shadow-md"
          >
            Keynote Speech Schedule
          </Link>
        </div> */}

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keynotes.map((k) => (
              <div
                key={k.session}
                className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-48 h-48 relative mb-4">
                    <img
                      src={k.image}
                      alt={k.name}
                      className="w-full h-full object-cover object-center rounded-lg"
                      onError={(e) => {
                        e.target.src = "/assets/img/keynote/avatar.png";
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-700 mb-2">
                      Session {k.session} Keynote Speech
                      <span className="block font-normal text-gray-700">{k.title}</span>
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {k.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{k.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
