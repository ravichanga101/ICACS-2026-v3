import React from "react";

const sponsors = [
  {
    src: "/assets/img/logos/gujcos_logo.jpeg",
    alt: "GUJCOST Logo",
    name: "Gujarat Council on Science and Technology (GUJCOST)",
  },
  {
    src: "/assets/img/logos/dst_logo.jpeg",
    alt: "DST Logo",
    name: "Department of Science and Technology (DST)",
  },
];

export default function FinancialSupport() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wide mb-6">
          Sponsored By
        </p>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 border border-gray-100"
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-32 w-32 object-contain flex-shrink-0"
              />
              <p className="text-lg font-bold text-[#1869b4] text-center sm:text-left">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
