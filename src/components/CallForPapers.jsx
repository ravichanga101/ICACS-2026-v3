import React from "react";

export default function CallForPapers() {
  const guidelines = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Prospective authors from India and abroad are invited to submit their full papers describing original, previously unpublished, complete work by electronic submission."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "The minimum number of pages for conference paper is 10 pages.",
      highlight: true,
      links: [
        {
          text: "Download Manuscript Template",
          url: "/assets/files/Word+Latex-Template.zip"
        },
        {
          text: "Download Copyright Form",
          url: "/assets/files/springer-copyright-form-revised.pdf"
        }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: "A submission implies intent to register and present upon acceptance; withdrawals are discouraged."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "All submissions will be rigorously peer-reviewed."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      text: "Manuscripts should not contain embedded links, scanned images, header or footer."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Email submissions will not be accepted; use the CMT portal."
    }
  ];

  const documents = [
    {
      title: "Manuscript Template",
      description: "Template for preparing conference manuscripts",
      url: "https://www.ieee.org/conferences/publishing/templates",
      target: "_blank",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Copyright Form",
      description: "Form for copyright agreement",
      url: "https://www.ieee.org/publications/rights/copyright-main",
      target: "_blank",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="cfp" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Call for <span className="text-[#fd7e14]">Papers</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            International Conference on Artificial Intelligence, Communication Technologies & Smart Cities (ICACS 2026)
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Guidelines Section */}
          <div className="mb-6">
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Submission Guidelines
              </h3>
              <div className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-3 rounded-lg transition-all duration-200 ${
                      guideline.highlight 
                        ? 'bg-blue-50 border-l-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      guideline.highlight ? 'bg-blue-600 text-white' : 'bg-gray-100 text-blue-600'
                    }`}>
                      {guideline.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`text-gray-700 ${guideline.highlight ? 'font-semibold' : ''}`}>
                        {guideline.text}
                      </p>
                      {guideline.link && (
                        <a
                          href={guideline.link.url}
                          target="_blank"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-2"
                          download>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {guideline.link.text}
                        </a>
                      )}
                      {guideline.links && (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {guideline.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                              download
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
