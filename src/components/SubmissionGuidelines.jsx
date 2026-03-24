import React from "react";

const submissionPortalUrl = "https://cmt3.research.microsoft.com/SICACS2026";

const SubmissionGuidelines = () => {
  const guidelines = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      title: "Paper Submission",
      description:
        "The authors are invited to submit the Full Length Research/Review Papers. The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Plagiarism Policy",
      description:
        "The organizers of ICACS 2026 regard plagiarism as serious professional misconduct. All submissions will be screened for plagiarism and when identified, the submissions will be rejected.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      ),
      title: "Withdrawal Policy",
      description:
        "The ICACS 2026 doesn't encourage withdrawals after the paper is accepted.",
    },
  ];

  const submissionProcess = [
    "We use the Microsoft CMT for submission of papers and the review process.",
    "Unregistered authors should first create an account on Microsoft CMT to log in.",
    "All submissions need to be submitted through the Microsoft CMT Portal.",
  ];

  const importantNotes = [
    "At least one of the authors of an accepted paper needs to register for the conference and to present the paper(s), through an Online Mode presentation.",
    "NOTE: Acceptance of a full-length submission is strictly based on the reviewers' comments.",
  ];

  return (
    <section id="submission-guidelines" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Submission <span className="text-[#fd7e14]">Guidelines</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Guidelines Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {guidelines.map((guideline) => (
              <div
                key={guideline.title}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                  {guideline.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
                  {guideline.title}
                </h3>
                <p className="text-gray-600 text-sm text-justify leading-relaxed">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>

          {/* Submission Process Section */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-600 p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Submission Process
              </h3>
            </div>
            <ul className="space-y-3">
              {submissionProcess.map((step, index) => (
                <li key={step} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notes Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg shadow-md border-l-4 border-orange-500 p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Important Notes
              </h3>
            </div>
            <ul className="space-y-3">
              {importantNotes.map((note) => (
                <li key={note} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className={`text-gray-700 ${note.includes("NOTE:") ? "font-semibold" : ""}`}
                  >
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CMT Portal Button */}
          <div className="text-center">
            <a
              href={submissionPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Submit Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
