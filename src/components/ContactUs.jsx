import React from "react";

export default function ContactUs() {
  const contactPersons = [
    {
      name: "Dr. V. R. Panchal",
      title: "Co-Convener, ICACS 2026",
      designation: "Head, Department of Civil Engineering",
      department: "CSPIT, CHARUSAT, Gujarat, India",
      phone: "02692-265081"
    },
    {
      name: "Dr. Amit Thakkar",
      title: "Co-Convener, ICACS 2026",
      designation: "Head, Department of Computer Science & Engineering",
      department: "CSPIT, CHARUSAT, Gujarat, India",
      phone: "02692-265360"
    },
    {
      name: "Dr. Dweepna Garg",
      title: "Co-Convener, ICACS 2026",
      designation: "Head, Department of Information Technology",
      department: "DEPSTAR, CHARUSAT, Gujarat, India",
      phone: "02692-265321"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Contact <span className="text-[#fd7e14]">Us</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Persons Section */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {contactPersons.map((person, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center space-y-2 shadow-md">
                <h3 className="font-bold text-xl text-gray-800">
                  {person.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm">
                  {person.title}
                </p>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  {person.designation}
                  <br />
                  {person.department}
                </p>
                <p className="text-gray-800 font-medium text-sm">
                  Office No.: {person.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Email Highlight */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center text-blue-600 px-6 py-3 font-bold text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              icacs@charusat.ac.in
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4391461861524!2d72.81707641496007!3d22.600070685168678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1646532324505!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="CHARUSAT Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
