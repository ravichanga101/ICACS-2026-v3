import React from "react";

export default function FinancialSupport() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 bg-gray-50 rounded-lg shadow-md p-5 border border-gray-100">
          <img
            src="/assets/img/gujcost-logo.jfif"
            alt="GUJCOST Logo"
            className="h-20 w-20 object-contain flex-shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Sponsored By
            </p>
            <p className="text-lg font-bold text-[#1869b4]">
              Gujarat Council on Science and Technology (GUJCOST)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
