import React from "react";

export default function Tracks() {
  const tracks = [
    {
      number: 1,
      title: "AI and Machine Learning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      topics: [
        "Deep Learning and Neural Networks",
        "Natural Language Processing",
        "Computer Vision and Image Processing",
        "Reinforcement Learning",
        "Knowledge Representation and Reasoning",
        "Explainable AI and Ethical Considerations"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "AI in Communication Technologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      topics: [
        "5G/6G Networks and Beyond",
        "Wireless Sensor Networks",
        "Internet of Things (IoT) Communication",
        "Network Security and Privacy",
        "Optical Communications",
        "Satellite and Space Communications"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      number: 3,
      title: "AI in Smart Cities and Infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      topics: [
        "Smart Urban Planning and Development",
        "Intelligent Transportation Systems",
        "Smart Energy Management",
        "Smart Healthcare and Emergency Services",
        "Environmental Monitoring and Sustainability",
        "Smart Buildings and Infrastructure"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 4,
      title: "Data Science and Analytics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      topics: [
        "Big Data Analytics",
        "Predictive Analytics",
        "Data Mining and Knowledge Discovery",
        "Business Intelligence",
        "Statistical Modeling and Analysis",
        "Data Visualization and Interpretation"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Cybersecurity and Blockchain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      topics: [
        "Network and Infrastructure Security",
        "Cryptography and Data Protection",
        "Blockchain Applications and Technologies",
        "IoT Security",
        "Threat Intelligence and Incident Response",
        "Security in Cloud Computing"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      number: 6,
      title: "Emerging Technologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      topics: [
        "Quantum Computing",
        "Extended Reality (AR/VR/MR)",
        "Edge Computing",
        "Digital Twins",
        "Human-Computer Interaction",
        "Robotics and Autonomous Systems"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="tracks" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Conference <span className="text-[#fd7e14]">Tracks</span>
          </h2>
          <p className="text-3xl font-bold text-gray-800 mt-4">
            Theme: Artificial Intelligence (AI)
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div
                key={track.number}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${track.color} p-6 text-white relative`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl font-bold opacity-50">
                      {String(track.number).padStart(2, '0')}
                    </span>
                    <div className="bg-white bg-opacity-20 p-3 rounded-full backdrop-blur-sm">
                      {track.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">
                    {track.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg 
                          className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Download Button
          <div className="mt-10 text-center">
            <a
              href="/assets/files/Conference Tracks_30_8_2023.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Complete Track Details
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
