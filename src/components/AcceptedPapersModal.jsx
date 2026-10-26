"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import acceptedPapers from "../data/acceptedPapers.json";

export default function AcceptedPapersModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeModal = useCallback(() => setIsOpen(false), []);

  // Portals require a browser document, so only render the popup after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key and lock body scroll while the popup is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="animate-blink bg-[#fd7e14] hover:bg-orange-600 text-white font-medium py-2 px-5 md:px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
      >
        Accepted Research Papers
      </button>

      {/* Full-screen popup, portaled to <body> so it is never affected by
          transformed ancestors (e.g. the Hero section's parallax effect),
          which would otherwise break `position: fixed` sizing. */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/70 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accepted-papers-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="bg-white w-screen h-screen flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-gray-200 bg-[#1869b4]">
              <h2
                id="accepted-papers-title"
                className="text-sm sm:text-xl font-bold text-white leading-tight"
              >
                List of Accepted ICACS 2026 Research Papers
              </h2>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close popup"
                title="Close (Esc)"
                className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X size={28} strokeWidth={2.5} />
              </button>
            </div>

            {/* Scrollable table body */}
            <div className="overflow-auto flex-1 bg-gray-50 md:bg-white">
              {/* Mobile: card list */}
              <ul className="md:hidden p-3 space-y-3">
                {acceptedPapers.map((paper, index) => (
                  <li
                    key={paper.paperId}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white bg-[#1869b4] rounded-full px-2.5 py-0.5">
                        #{index + 1}
                      </span>
                      <span className="text-xs font-semibold text-[#fd7e14] bg-orange-50 border border-orange-200 rounded-full px-2.5 py-0.5">
                        Paper ID: {paper.paperId}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                      {paper.title}
                    </h3>
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-gray-500">
                          Primary Author
                        </dt>
                        <dd className="text-gray-800">{paper.author}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-gray-500">
                          Co-Authors
                        </dt>
                        <dd className="text-gray-800">{paper.coauthors}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>

              {/* Tablet/desktop: table */}
              <table className="hidden md:table min-w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-gray-100 z-10">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">
                      Sr. No.
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">
                      Paper ID
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 min-w-[280px]">
                      Paper Title
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">
                      Primary Author Name
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 min-w-[220px]">
                      Co-Author Names
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {acceptedPapers.map((paper, index) => (
                    <tr
                      key={paper.paperId}
                      className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-3 sm:px-4 py-3 border-b border-gray-100 text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-3 sm:px-4 py-3 border-b border-gray-100 text-gray-700">
                        {paper.paperId}
                      </td>
                      <td className="px-3 sm:px-4 py-3 border-b border-gray-100 text-gray-800">
                        {paper.title}
                      </td>
                      <td className="px-3 sm:px-4 py-3 border-b border-gray-100 text-gray-700 whitespace-nowrap">
                        {paper.author}
                      </td>
                      <td className="px-3 sm:px-4 py-3 border-b border-gray-100 text-gray-700">
                        {paper.coauthors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 border-t border-gray-200 bg-gray-50 text-xs sm:text-sm text-gray-600 flex items-center justify-between flex-wrap gap-2">
              <span>Total accepted papers: {acceptedPapers.length}</span>
              <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded border border-gray-300 font-semibold">Esc</kbd> or click the close button to exit</span>
            </div>
          </div>
          </div>,
          document.body
        )}
    </>
  );
}
