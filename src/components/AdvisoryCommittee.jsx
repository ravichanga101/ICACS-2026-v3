import React from "react";

export default function AdvisoryCommittee() {
  const internationalAdvisory = [
    {
      name: "Dr. Arokiaswami Alphones",
      affiliation: "Nanyang Technological University (NTU)",
      country: "Singapore"
    },
    {
      name: "Dr. Vladan Devedzic",
      affiliation: "University of Belgrade",
      country: "Serbia"
    },
    {
      name: "Dr. Satyam Panchal",
      affiliation: "University of Waterloo",
      country: "Canada"
    },
    {
      name: "Prof. Dr. Boris Tzankov",
      affiliation: "University of Architecture, Civil Engineering and Geodesy (UACEG)",
      country: "Bulgaria"
    },
    {
      name: "Prof. Dr. Eng. Julieta Mancheva",
      affiliation: "University of Architecture, Civil Engineering and Geodesy (UACEG)",
      country: "Bulgaria"
    }
  ];

  const nationalAdvisory = [
    {
      name: "Dr. Brijesh Kumbhani",
      affiliation: "IIT Ropar",
      country: "India"
    },
    {
      name: "Dr. Pinalkumar Engineer",
      affiliation: "SVNIT",
      country: "India"
    },
    {
      name: "Dr. Ajay M. Sidpara",
      affiliation: "IIT Kharagpur",
      country: "India"
    },
    {
      name: "Dr. Dilip Sharma",
      affiliation: "MNIT",
      country: "India"
    },
    // {
    //   name: "Dr. Amit Ganatra",
    //   affiliation: "Parul University",
    //   country: "India"
    // },
    {
      name: "Dr. Ankit Thakkar",
      affiliation: "Nirma University",
      country: "India"
    },
    {
      name: "Dr. Sudeep Tanwar",
      affiliation: "Nirma University",
      country: "India"
    },
    {
      name: "Dr. Narinder Sharma",
      affiliation: "Amritsar Group of Colleges",
      country: "India"
    },
    {
      name: "Dr. Sanjay Garg",
      affiliation: "Jaypee University of Engineering and Technology",
      country: "India"
    },
    {
      name: "Dr. Ketan Kotecha",
      affiliation: "Symbiosis International University",
      country: "India"
    },
    {
      name: "Dr. Vandana Sharma",
      affiliation: "CHRIST University",
      country: "India"
    },
    {
      name: "Dr. Ganesh D Kale",
      affiliation: "SVNIT",
      country: "India"
    }
  ];

  const industrialAdvisory = [
    {
      name: "Mr. Gaurang Joshipura",
      affiliation: "Managing Director, Zeppelin System India Pvt. Ltd., Vadodara",
      country: "Gujarat"
    },
    // {
    //   name: "Dr. Venkat Ramani",
    //   affiliation: "Proprietor, Plasma & Vacuum Technologies, Ahmedabad",
    //   country: "Gujarat"
    // },
    {
      name: "Mr. Ajit Radhakrishnan",
      affiliation: "Regional Head – Technical Services, UltraTech Cement Ltd, Vadodara",
      country: "Gujarat"
    },
    {
      name: "Mr. Dhaval Soni",
      affiliation: "Project Manager, AFCONS Infrastructure Limited - A Shapoorji Pallonji Group Company, Mumbai",
      country: "Maharashtra"
    },
    {
      name: "Mr. Sanjay Mahagaokar",
      affiliation: "Director, R&D and Engineering, Rotomotive Powerdrives India Ltd. Anand",
      country: "Gujarat"
    },
    {
      name: "Dr. Vijay Shah",
      affiliation: "Senior Principal Engineer, ABB India Ltd. Ahmedabad",
      country: "Gujarat"
    },
    {
      name: "Dr. Jayesh P. Pabari",
      affiliation: "Researcher and Scientist, Physical Research Laboratory, Ahmedabad",
      country: "Gujarat"
    },
    {
      name: "Dr. Abha Chhabra",
      affiliation: "Senior Scientist, Space Applications Centre (SAC), Indian Space Research Organisation (ISRO), Ahmedabad",
      country: "Gujarat"
    },
    {
      name: "Mr. Dvijesh Bhatt",
      affiliation: "Senior NLP Engineer, Turabit LLC, Ahmedabad",
      country: "Gujarat"
    }
  ];

  const renderCommitteeSection = (title, members, bgColor = "bg-white") => (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-3 mb-6 rounded">
        {title}
      </h3>
      <div className={`${bgColor} rounded-lg shadow-md p-6`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-md p-4 border-l-4 border-blue-600 hover:shadow-md transition-shadow duration-200"
            >
              <h4 className="font-semibold text-gray-800 mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                {member.affiliation}
              </p>
              <p className="text-xs text-blue-600 font-medium">
                {member.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="advisory-committee" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Advisory <span className="text-[#fd7e14]">Committees</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {renderCommitteeSection("International Advisory Committee", internationalAdvisory)}
          {renderCommitteeSection("National Advisory Committee", nationalAdvisory)}
          {renderCommitteeSection("Industrial Advisory Committee", industrialAdvisory)}
        </div>
      </div>
    </section>
  );
}
