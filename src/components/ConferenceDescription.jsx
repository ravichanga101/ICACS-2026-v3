import React from "react";

export default function ConferenceDescription() {
  const highlights = [
    {
      title: "Best Research Paper Award",
      description: "Will be awarded with a Commendation Certificate and a Cash Prize.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-orange-600",
    },
    // {
    //   title: "Scopus Indexed Proceedings",
    //   description: "All accepted, registered, presented and plagiarism free papers will be published in the Scopus Indexed Proceedings per the quality of articles.",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //     </svg>
    //   ),
    //   gradient: "from-blue-500 to-blue-600",
    // },
    {
      title: "Participation Certificates",
      description: "Certificates will be given to all authors who will present the papers and participate in the conference.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-green-500 to-green-600",
    },

    // {
    //   title: "Springer Publication",
    //   description: "All peer reviewed, accepted, and presented papers will be published with Springer in their prestigious book series.",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    //     </svg>
    //   ),
    //   gradient: "from-purple-500 to-purple-600",
    //   link: {
    //     text: "Lecture Notes in Networks and Systems",
    //     url: "https://www.springer.com/series/15179",
    //   },
    // },

  ];

  return (
    <section id="about_conference" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            About <span className="text-[#fd7e14]">ICACS 2026</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            International Conference on Artificial Intelligence, Communication Technologies & Smart Cities
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Conference Description */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 shadow-md border-l-4 border-blue-600">
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed text-justify">
                The International Conference on Artificial Intelligence, Communication Technologies & Smart Cities (ICACS 2026) is a
                multidisciplinary platform which brings together academicians,
                industry leaders, researchers, technocrats, and experts belonging to
                various disciplines of Engineering. The conference provides an
                opportunity for exploring and discussing the advances and
                innovations in the field of Engineering. Young engineers are
                encouraged to present their ideas and interact with national and
                international peers.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                The ICACS 2026 will help in fostering connections on a global scale
                between the participants drawn from various countries leading to
                networking between them.
              </p>
            </div>
          </div>

          {/* Conference Highlights */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Conference <span className="text-[#fd7e14]">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${highlight.gradient} p-3 text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                        {highlight.icon}
                      </div>
                      <h4 className="text-lg font-bold">
                        {highlight.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {highlight.description}
                    </p>
                    {/* {highlight.link && (
                      <a
                        href={highlight.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-2 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {highlight.link.text}
                      </a>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-md">
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
                <strong className="text-blue-700">Note:</strong> The conference presentations and deliberations will be in English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
