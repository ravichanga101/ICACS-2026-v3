import React from "react";

export default function ImportantDates() {
  const importantDates = [
    {
      event: "Paper Submission Deadline",
      date: "July 20, 2026",
      previousDate: "July 10, 2026",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      event: "Acceptance Notification to Authors",
      date: "August 20, 2026",
      previousDate: "August 10, 2026",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-green-600",
    },
    {
      event: "Submission of Full Length Paper",
      date: "August 25, 2026",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-purple-600",
    },
    {
      event: "Conference Date",
      date: "September 18, 2026",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="impdates" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Important <span className="text-[#fd7e14]">Dates</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            2<sup className="text-xs md:text-sm">nd</sup> International
            Conference on Artificial Intelligence, Communication Technologies &
            Smart Cities (ICACS 2026)
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} p-3 text-white`}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                      {item.icon}
                    </div>
                    <h3 className="ml-3 text-lg font-bold">{item.event}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="text-center">
                      {item.previousDate && (
                        <p className="text-sm text-gray-500 line-through">
                          {item.previousDate}
                        </p>
                      )}
                      <p className="text-2xl font-bold text-gray-800">
                        {item.date}
                      </p>
                      {item.previousDate && (
                        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                          Extended
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-lg shadow-md">
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
                <strong>Note:</strong> All dates are tentative and subject to
                change. Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
