import React from "react";

export default function About() {
  const institutes = [
    {
      name: "CSPIT",
      fullName: "Chandubhai S Patel Institute of Technology",
      logo: "/assets/img/cspit_logo.png",
      description: "Chandubhai S Patel Institute of Technology (CSPIT) is the first institute established in 2000 at CHARUSAT campus, offering UG and PG programs in engineering and technology.",
      gradient: "from-blue-500 to-blue-600",
      url: "https://cspit.charusat.ac.in",
    },
    {
      name: "DEPSTAR",
      fullName: "Devang Patel Institute of Advance Technology and Research",
      logo: "/assets/img/depstar.png",
      description: "Devang Patel Institute of Advance Technology and Research (DEPSTAR) is a constituent of CHARUSAT focused on research and advanced technology programs.",
      gradient: "from-purple-500 to-purple-600",
      url: "https://depstar.charusat.ac.in",
    },
  ];

  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            About <span className="text-[#fd7e14]">Institution</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* CHARUSAT Main Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
              <div className="flex items-center justify-center gap-6">
                <div className="bg-white rounded-lg p-3 shadow-lg flex-shrink-0">
                  <img
                    src="/assets/img/charusat_logo.png"
                    alt="CHARUSAT"
                    className="w-80 h-100 object-contain"
                  />
                </div>
              </div>
            </div> */}

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="flex flex-col justify-center">
                <div className="space-y-3">
                  <img
                    src="/assets/img/charusat_logo.png"
                    alt="CHARUSAT"
                    className="w-80 h-100 object-contain"
                  />
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Charotar University of Science and Technology (CHARUSAT) is a
                    premier private university located in Gujarat, India. It is
                    awarded <strong className="text-blue-600">'Grade A+'</strong> by NAAC and recognized as a{" "}
                    <strong className="text-blue-600">Center of Excellence</strong> by the Govt. of Gujarat.
                  </p>
                  
                  <div className="flex items-start space-x-3 bg-blue-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 font-medium">
                        NAAC Grade A+ Accredited University
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Recognized as Center of Excellence by Government of Gujarat
                      </p>
                    </div>
                  </div>

                  <div className="text-left">
                    <a
                      href="https://charusat.ac.in"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      // inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                    >
                      Learn More ...
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/assets/img/3_.png"
                  alt="CHARUSAT Campus"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Constituent Institutes */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Constituent <span className="text-[#fd7e14]">Institutes</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {institutes.map((institute, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${institute.gradient} p-4 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-lg p-2 shadow-lg flex-shrink-0">
                      <img
                        src={institute.logo}
                        alt={institute.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">
                        {institute.name}
                      </h4>
                      <p className="text-sm opacity-90 mt-1">
                        {institute.fullName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {institute.description}
                  </p>
                  <div className="text-left">
                    <a
                      href={institute.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      // inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                    >
                      Learn More ...
                    </a>
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
