import Link from "next/link";
import React from "react";

export default function ConferenceDescription() {
  return (
    <section id="about_conference" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            About <span className="text-[#fd7e14]">ICACS 2026</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            2<sup className="text-xs md:text-sm">nd</sup> International
            Conference on Artificial Intelligence, Communication Technologies &
            Smart Cities
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Conference Description */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 shadow-md border-l-4 border-blue-600">
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed text-justify">
                The 2<sup className="text-xs md:text-sm">nd</sup> International
                Conference on Artificial Intelligence, Communication
                Technologies & Smart Cities (ICACS 2026) is a multidisciplinary
                platform which brings together academicians, industry leaders,
                researchers, technocrats, and experts belonging to various
                disciplines of Engineering. The conference provides an
                opportunity for exploring and discussing the advances and
                innovations in the field of Engineering. Young engineers are
                encouraged to present their ideas and interact with national and
                international peers.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed text-justify">
                The ICACS 2026 will help in fostering connections on a global
                scale between the participants drawn from various countries
                leading to networking between them.
              </p>

              <div className="flex justify-center">
                <img
                  src="/assets/img/publication_LLNS.jpg"
                  alt="ICACS previous publication"
                  className="w-30 sm:w-32 rounded-lg border border-blue-100 shadow-md transition hover:shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://icacs.charusat.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Visit ICACS 2025 Website
                </a>
                <Link
                  href="/previous-proceedings"
                  className="inline-flex items-center justify-center rounded-md border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  View ICACS 2025 Proceedings
                </Link>
              </div>
            </div>
          </div>

          {/* Important Note */}
          {/* <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-700 text-sm">
                <strong className="text-blue-700">Note:</strong> The conference
                presentations and deliberations will be in English.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
