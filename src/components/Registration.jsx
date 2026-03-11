"use client";

import React from "react";
import {
  CheckCircle,
  CreditCard,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function Registration() {
  const registrationFees = [
    {
      category: "Students / Academicians ",
      indianFee: "₹ 9,000",
    },
    {
      category: "Industrial Representatives",
      indianFee: "₹ 12,000",
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

        {/* Registration Fees (aligned with source site) */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-100">
            <div className="px-4 py-3 sm:px-6 bg-gradient-to-r from-blue-700 to-blue-600">
              <p className="text-white text-sm sm:text-base font-semibold tracking-wide">
                Registration Fees
              </p>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[640px]">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-sm sm:px-6 sm:py-4 sm:text-base font-extrabold text-blue-900 border-b border-blue-100">
                      Category
                    </th>
                    <th className="px-3 py-3 text-center text-sm sm:px-6 sm:py-4 sm:text-base font-extrabold text-blue-900 border-b border-blue-100">
                      Indian Delegates (₹)
                    </th>
                    <th className="px-3 py-3 text-center text-sm sm:px-6 sm:py-4 sm:text-base font-extrabold text-blue-900 border-b border-blue-100">
                      Foreign Delegates ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={fee.category}
                      className="odd:bg-white even:bg-blue-50/40"
                    >
                      <td className="px-3 py-3 text-sm sm:px-6 sm:py-4 sm:text-base text-gray-800 border-b border-blue-50">
                        {fee.category}
                      </td>
                      <td className="px-3 py-3 text-center border-b border-blue-50 sm:px-6 sm:py-4">
                        <span className="text-lg sm:text-2xl font-extrabold text-blue-700">
                          {fee.indianFee}
                        </span>
                      </td>
                      {index === 0 && (
                        <td
                          rowSpan={registrationFees.length}
                          className="px-3 py-3 text-center align-middle border-b border-blue-50 sm:px-6 sm:py-4 bg-blue-50/50"
                        >
                          <span className="text-lg sm:text-2xl font-extrabold text-blue-700">
                            $ 150
                          </span>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 border-t border-orange-100 px-4 py-4 sm:px-6">
              <p className="text-sm sm:text-base text-orange-900 leading-relaxed">
                <span className="font-semibold">Note:</span> Payment is to be
                made after acceptance of the full length paper. There is no
                separate fee for publication. Registration Fee Includes GST.
              </p>
            </div>
          </div>
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
                  NEFT/RTGS/IMPS (Use the bank details provided below)
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

        {/* Payment Details */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
              Payment Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank A/c Number</p>
                <p className="font-semibold text-gray-800">30875081005</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank A/c Type</p>
                <p className="font-semibold text-gray-800">Current A/c</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600">Bank A/c Name</p>
                <p className="font-semibold text-gray-800">
                  Charotar University of Science & Technology
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600">Bank Branch Address</p>
                <p className="font-semibold text-gray-800">
                  Darshan Hostel, Changa-Valetva Road, Changa, Dist. Anand
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600">Bank Telephone No.</p>
                <p className="font-semibold text-gray-800">
                  (02697) 248540, (M) 7600037508
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600">Bank Email ID</p>
                <p className="font-semibold text-gray-800">
                  sbil0961@sbi.co.in
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank Branch Code</p>
                <p className="font-semibold text-gray-800">10961</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank MICR Code</p>
                <p className="font-semibold text-gray-800">388002502</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank IFSC Code</p>
                <p className="font-semibold text-gray-800">SBIN0010961</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Bank Swift Code</p>
                <p className="font-semibold text-gray-800">SBIN INBB718</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">PAN</p>
                <p className="font-semibold text-gray-800">AABTC1178Q</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">GST</p>
                <p className="font-semibold text-gray-800">24AABTC1178Q1ZG</p>
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
