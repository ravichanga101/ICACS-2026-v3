import React from "react";

export default function TechnicalProgramCommittee() {
  const committeeMembers = [
    {
      srNo: 1,
      name: "Ajay Sidpara",
      affiliation: "Indian Institute of Technology, Kharagpur",
      country: "India"
    },
    {
      srNo: 2,
      name: "Arokiaswami Alphones",
      affiliation: "Nanyang Technological University, Singapore",
      country: "Singapore"
    },
    {
      srNo: 3,
      name: "Ashok Kherodia",
      affiliation: "Indian Institute of Information Technology, Kota",
      country: "India"
    },
    {
      srNo: 4,
      name: "Barnali Chetia",
      affiliation: "Indian Institute of Information Technology, Vadodara",
      country: "India"
    },
    {
      srNo: 5,
      name: "Sanjay Patel",
      affiliation: "SBC Global",
      country: "USA"
    },
    {
      srNo: 6,
      name: "Boris Tzankov",
      affiliation: "University of Architecture",
      country: "Bulgaria"
    },
    {
      srNo: 7,
      name: "R. S. Jangid",
      affiliation: "Indian Institute of Technology, Bombay",
      country: "India"
    },
    {
      srNo: 8,
      name: "Sivavenkateswara Rao",
      affiliation: "Indian Institute of Information Technology Surat",
      country: "India"
    },
    {
      srNo: 9,
      name: "Uday Pratap",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 10,
      name: "Chetan Kale",
      affiliation: "Kaletech LLC, Chicago",
      country: "USA"
    },
    {
      srNo: 11,
      name: "Ganesh Kale",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 12,
      name: "Dilip Sharma",
      affiliation: "Malaviya National Institute of Technology, Jaipur",
      country: "India"
    },
    {
      srNo: 13,
      name: "Jay Patel",
      affiliation: "Ericsson",
      country: "USA"
    },
    {
      srNo: 14,
      name: "Harshita Joshi",
      affiliation: "Infenion Technologies",
      country: "Germany"
    }
  ];

  return (
    <section id="technical-program-committee" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Technical Program <span className="text-[#fd7e14]">Committee</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Name of Committee Member
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Affiliation
                  </th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-300">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="py-3 px-4 border-b border-gray-200 font-medium text-gray-600 text-center">
                      {member.srNo}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 font-medium text-gray-800">
                      {member.name}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 text-gray-600">
                      {member.affiliation}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-gray-600">
                      {member.country}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
