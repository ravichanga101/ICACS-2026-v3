"use client";

import React from "react";

export default function OrganizingCommittee() {
  const chiefPatrons = [
    {
      name: "Shri Surendra M. Patel",
      affiliation: "President, Kelavani Mandal and CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/SurendraMPatel.png"
    },
    {
      name: "Dr. M. C. Patel",
      affiliation: "Hon. Secretary, Kelavani Mandal, Matrusanstha & CHRF, Gujarat, India",
      image: "/assets/img/orgcmt/MCPatel.png"
    }
  ];

  const patrons = [
    {
      name: "Dr. Atul M. Patel",
      affiliation: "Provost, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/AtulMPatel.png"
    },
    {
      name: "Dr. Binit Patel",
      affiliation: "Registrar, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/BinitPatel.png"
    }
  ];

  const conveners = [
    {
      name: "Dr. Vijay Chaudhary",
      affiliation: "Dean, FTE, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/VijayChaudhary.png"
    },
    {
      name: "Dr. Trushit Upadhyaya",
      affiliation: "Principal, CSPIT, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/TrushitUpadhyaya.png"
    },
    {
      name: "Dr. Bankim Patel",
      affiliation: "Principal, DEPSTAR, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/BankimPatel.png"
    }
  ];

  const coConveners = [
    {
      name: "Dr. V. R. Panchal",
      affiliation: "Head, Civil Engineering Department, CSPIT, CHARUSAT, Gujarat, India",
      image: "/assets/img/orgcmt/VijayPanchal.png"
    },
    {
      name: "Dr. Amit Thakkar",
      affiliation: "Head, Department of Computer Science & Engineering, CSPIT, CHARUSAT",
      image: "/assets/img/icacs-coordinators-imgs/AmitThakkar.png"
    },
    {
      name: "Dr. Nilay Patel",
      affiliation: "Head, Department of Electrical Engineering, CSPIT, CHARUSAT",
      image: "/assets/img/icacs-coordinators-imgs/NilayPatel.png"
    },
    {
      name: "Dr. Upesh Patel",
      affiliation: "Head, Department of Electronics & Communication Engineering, CSPIT, CHARUSAT, India",
      image: "/assets/img/icacs-coordinators-imgs/UpeshPatel.png"
    },
    {
      name: "Dr. Nirav Bhatt",
      affiliation: "Head, Department of AI & ML Engineering, CSPIT, CHARUSAT, India",
      image: "/assets/img/icacs-coordinators-imgs/NiravBhatt.png"
    },
    {
      name: "Dr. Nikita Bhatt",
      affiliation: "Head, Department of Computer Engineering, CSPIT, CHARUSAT, India",
      image: "/assets/img/icacs-coordinators-imgs/NikitaBhatt.png"
    },
    {
      name: "Dr. Purvi Prajapati",
      affiliation: "Head, Department of Information Technology, CSPIT, CHARUSAT",
      image: "/assets/img/icacs-coordinators-imgs/PurviPrajapati.png"
    },
    {
      name: "Dr. Amit Nayak",
      affiliation: "Head, Computer Science and Engineering Department, DEPSTAR, CHARUSAT, India",
      image: "/assets/img/icacs-coordinators-imgs/AmitNayak.png"
    },
    {
      name: "Dr. Dweepna Garg",
      affiliation: "Head, Department of Information Technology, DEPSTAR, CHARUSAT, Gujarat, India",
      image: "/assets/img/icacs-coordinators-imgs/DweepnaGarg.png"
    },
    {
      name: "Dr. Chirag Patel",
      affiliation: "Head, Computer Engineering Department, DEPSTAR, CHARUSAT, Gujarat, India",
      image: "/assets/img/icacs-coordinators-imgs/ChiragPatel.png"
    }
  ];


  const renderMemberCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]"
    >
      <div className="p-4 flex flex-col items-center">
        <div className="w-48 h-48 relative mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center rounded-lg"
            onError={(e) => {
              e.target.src = "/assets/img/orgcmt/default-avatar.jpg";
            }}
          />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            {member.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {member.affiliation}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="orgcmt" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Organizing <span className="text-[#fd7e14]">Committee</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Chief Patrons */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Chief Patrons
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {chiefPatrons.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>

          {/* Patron */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Patrons
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {patrons.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>

          {/* Conveners Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Conveners
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {conveners.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>

          {/* Co-Conveners */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Co-Conveners
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coConveners.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
