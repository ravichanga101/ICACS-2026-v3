"use client";

import React, { useState } from "react";
import {
  Users,
  Calendar,
  CheckCircle,
  CreditCard,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function Registration() {
  const [activeTab, setActiveTab] = useState("domestic");

  // Registration categories with pricing
  const domesticRates = [
    {
      category: "Early Bird Registration",
      deadline: "March 31, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "₹6,000" },
        { type: "Students (UG/PG)", price: "₹4,000" },
        { type: "Industry Professionals", price: "₹8,000" },
      ],
    },
    {
      category: "Regular Registration",
      deadline: "April 30, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "₹7,500" },
        { type: "Students (UG/PG)", price: "₹5,000" },
        { type: "Industry Professionals", price: "₹10,000" },
      ],
    },
    {
      category: "Late/Spot Registration",
      deadline: "After April 30, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "₹9,000" },
        { type: "Students (UG/PG)", price: "₹6,000" },
        { type: "Industry Professionals", price: "₹12,000" },
      ],
    },
  ];

  const internationalRates = [
    {
      category: "Early Bird Registration",
      deadline: "March 31, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "$200" },
        { type: "Students (UG/PG)", price: "$150" },
        { type: "Industry Professionals", price: "$250" },
      ],
    },
    {
      category: "Regular Registration",
      deadline: "April 30, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "$250" },
        { type: "Students (UG/PG)", price: "$180" },
        { type: "Industry Professionals", price: "$300" },
      ],
    },
    {
      category: "Late/Spot Registration",
      deadline: "After April 30, 2026",
      rates: [
        { type: "Academicians/Research Scholars", price: "$300" },
        { type: "Students (UG/PG)", price: "$220" },
        { type: "Industry Professionals", price: "$350" },
      ],
    },
  ];

  const registrationIncludes = [
    "Conference Kit & Certificate",
    "Access to All Technical Sessions",
    "Lunch & Refreshments",
    "Conference Proceedings (Digital)",
    "Networking Opportunities",
    "Publication in Conference Proceedings",
  ];

  const importantNotes = [
    "Registration fees are non-refundable and non-transferable",
    "At least one author must register for each accepted paper",
    "Student registration requires valid student ID proof",
    "Registration fee includes GST (for domestic participants)",
    "Additional pages will be charged separately",
    "Certificate of participation will be provided to all registered participants",
  ];

  return (
    <section
      id="registration"
      className="py-16 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3">
            <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full">
              🎟️ Join Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Conference{" "}
            <span className="text-[#1869b4] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Registration
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Secure your spot at ICACS 2026 and join leading researchers and
            practitioners
          </p>
        </div>

        {/* Tabs for Domestic/International */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "domestic"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Domestic Participants
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "international"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              International Participants
            </button>
          </div>
        </div>

        {/* Registration Tables */}
        <div className="max-w-6xl mx-auto mb-12">
          {(activeTab === "domestic" ? domesticRates : internationalRates).map(
            (category, idx) => (
              <div key={idx} className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      {category.category}
                    </h3>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      Deadline: {category.deadline}
                    </span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-b-lg overflow-hidden border border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                            Participant Type
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                            Registration Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.rates.map((rate, index) => (
                          <tr
                            key={index}
                            className="hover:bg-blue-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-gray-800 border-b">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 text-blue-600 mr-2" />
                                {rate.type}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right border-b">
                              <span className="text-lg font-bold text-blue-600">
                                {rate.price}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Two Column Layout for Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Registration Includes */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              Registration Includes
            </h3>
            <ul className="space-y-3">
              {registrationIncludes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
              Payment Methods
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Online Payment
                </h4>
                <p className="text-sm text-gray-600">
                  Credit Card, Debit Card, Net Banking, UPI
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Bank Transfer
                </h4>
                <p className="text-sm text-gray-600">
                  NEFT/RTGS/IMPS (Account details will be provided after
                  abstract acceptance)
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  International Payment
                </h4>
                <p className="text-sm text-gray-600">
                  Wire Transfer, PayPal (Additional charges may apply)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg max-w-6xl mx-auto mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-2">
                {importantNotes.map((note, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm flex items-start"
                  >
                    <span className="text-yellow-600 mr-2">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center">
          <a
            href="https://forms.gle/oub17amUCxDoLm1s8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            Register Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <p className="text-gray-600 text-sm mt-4">
            Click the button above to complete your conference registration
          </p>
        </div>
      </div>
    </section>
  );
}
