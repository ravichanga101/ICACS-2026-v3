"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PresentationSchedule from "./PresentationSchedule";
import { CalendarDays, Eye, FileText, X } from "lucide-react";

const Schedules = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedSchedule) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedSchedule(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSchedule]);

  const scheduleFiles = [
    {
      id: "conference",
      name: "Conference Schedule",
      type: "HTML",
      description: "The overall ICACS 2026 conference program",
    },
    {
      id: "presentations",
      name: "Accepted Research Papers Presentation Schedule",
      type: "HTML",
      description: "Detailed schedule of accepted paper presentations",
    },
    {
      id: "keynotes",
      name: "Keynote Speaker Schedule",
      type: "HTML",
      description: "Schedule of ICACS 2026 keynote sessions",
    },
  ];

  const conferenceProgram = [
    { time: "10:30 AM – 10:45 AM", description: "Inaugural Ceremony" },
    { time: "11:00 AM – 11:40 AM", description: "Keynote Speeches" },
    { time: "11:40 AM – 12:10 PM", description: "Short Break" },
    {
      time: "12:10 PM – 1:10 PM",
      description:
        "Parallel presentations for Tracks 01, 02, and 03 (Hybrid mode)",
    },
    { time: "1:10 PM – 2:10 PM", description: "Lunch Break" },
    {
      time: "2:10 PM – 3:10 PM",
      description:
        "Parallel presentations for Tracks 01, 02, and 03 (Hybrid mode)",
    },
    { time: "3:10 PM – 3:30 PM", description: "Valedictory Session" },
  ];

  const keynoteProgram = [
    {
      time: "11:00 AM – 11:40 AM",
      speaker: "Dr. Atul Kumar",
      affiliation: [
        "Senior Research Scientist",
        "IBM Research India, Bengaluru",
      ],
      topic:
        "Dear AI, Let Me Help You (and Check Your Work): Verifiable Agents for Enterprise Software",
      track: "Artificial Intelligence",
    },
    {
      time: "11:00 AM – 11:40 AM",
      speaker: "Prof. Nithin V. George",
      affiliation: [
        "TEOCO Chair Professor",
        "Electrical Engineering Department",
        "Indian Institute of Technology Gandhinagar",
      ],
      topic: "Advances in Microphone Array Signal Processing",
      track: "Communication Technologies",
    },
    {
      time: "11:00 AM – 11:40 AM",
      speaker: "Prof. Mohammad Shafi Mir",
      affiliation: [
        "Professor",
        "Department of Civil Engineering",
        "National Institute of Technology, Srinagar",
      ],
      topic: "Intelligent transportation systems for Smart Cities",
      track: "Smart Cities",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="schedules"
          aria-labelledby="schedules-heading"
          className="scroll-mt-24 rounded-2xl border-2 border-[#1869b4]/20 bg-gradient-to-br from-blue-50 via-white to-orange-50 p-6 sm:p-8 shadow-lg"
        >
          <div className="mb-6 flex items-start gap-4">
            <div className="rounded-xl bg-[#1869b4] p-3 text-white shadow-md">
              <CalendarDays className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#fd7e14]">
                Important for authors and attendees
              </p>
              <h2
                id="schedules-heading"
                className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl"
              >
                ICACS 2026 Schedules
              </h2>
              <p className="mt-2 text-gray-600">
                View the conference program, paper presentation schedule, and
                keynote schedule online.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {scheduleFiles.map((schedule) => (
              <article
                key={schedule.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <FileText
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[#1869b4]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {schedule.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {schedule.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedSchedule(schedule)}
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#1869b4] px-4 py-2 font-medium text-white transition hover:bg-blue-800"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    View schedule
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {mounted &&
          selectedSchedule &&
          createPortal(
            <div
              className="fixed inset-0 z-[100] bg-black/70"
              role="dialog"
              aria-modal="true"
              aria-labelledby="schedule-dialog-title"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedSchedule(null);
                }
              }}
            >
              <div className="flex h-screen w-screen flex-col overflow-hidden bg-white">
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 bg-[#1869b4] px-4 py-3 text-white sm:px-6">
                  <h2
                    id="schedule-dialog-title"
                    className="text-lg font-bold sm:text-xl"
                  >
                    {selectedSchedule.name}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setSelectedSchedule(null)}
                    aria-label="Close schedule"
                    title="Close (Esc)"
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <X size={26} aria-hidden="true" />
                  </button>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto bg-gradient-to-b from-blue-50 to-white p-4 sm:p-8">
                  <article
                    className={`mx-auto w-full ${
                      selectedSchedule.id !== "conference"
                        ? "max-w-7xl"
                        : "max-w-4xl"
                    } overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg`}
                  >
                    <header className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-orange-50 px-5 py-6 text-center sm:px-8">
                      <p className="text-sm font-bold uppercase tracking-wider text-[#1869b4]">
                        Charotar University of Science and Technology
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Changa, Anand, Gujarat, India
                      </p>
                      <p className="mt-3 text-sm font-semibold text-gray-700">
                        Faculty of Technology and Engineering
                      </p>
                      <h3 className="mt-4 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                        2nd International Conference on Artificial Intelligence,
                        Communication Technologies &amp; Smart Cities
                      </h3>
                      <p className="mt-2 font-semibold text-[#fd7e14]">
                        ICACS 2026 · November 20, 2026
                      </p>
                      {selectedSchedule.id !== "conference" && (
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          Hybrid Mode
                        </p>
                      )}
                    </header>

                    <div className="p-4 sm:p-6 lg:p-8">
                      {selectedSchedule.id === "presentations" ? (
                        <PresentationSchedule />
                      ) : (
                        <>
                          <h4 className="mb-4 text-xl font-bold text-gray-900">
                            {selectedSchedule.id === "keynotes"
                              ? "Keynote Speech Schedule"
                              : "Conference Program"}
                          </h4>
                          {selectedSchedule.id === "keynotes" && (
                            <ul className="space-y-4 lg:hidden">
                              {keynoteProgram.map((item) => (
                                <li
                                  key={item.speaker}
                                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                                >
                                  <p className="text-sm font-semibold text-[#1869b4]">
                                    {item.time} (IST)
                                  </p>
                                  <h5 className="mt-2 text-lg font-bold text-gray-900">
                                    {item.speaker}
                                  </h5>
                                  <p className="mt-1 text-sm text-gray-600">
                                    {item.affiliation.join(" · ")}
                                  </p>
                                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                    Speech Topic
                                  </p>
                                  <p className="mt-1 text-gray-800">
                                    {item.topic}
                                  </p>
                                  <span className="mt-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-[#c45b00]">
                                    {item.track}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div
                            className={`overflow-x-auto rounded-lg border border-gray-200 ${
                              selectedSchedule.id === "keynotes"
                                ? "hidden lg:block"
                                : ""
                            }`}
                          >
                            <table className="w-full border-collapse text-left">
                              <thead className="bg-[#1869b4] text-white">
                                <tr>
                                  <th
                                    scope="col"
                                    className="whitespace-nowrap px-4 py-3 font-semibold sm:px-6"
                                  >
                                    {selectedSchedule.id === "keynotes"
                                      ? "Time"
                                      : "Time (IST)"}
                                  </th>
                                  {selectedSchedule.id === "keynotes" && (
                                    <>
                                      <th
                                        scope="col"
                                        className="min-w-[220px] px-4 py-3 font-semibold sm:px-6"
                                      >
                                        Keynote Speaker
                                      </th>
                                      <th
                                        scope="col"
                                        className="min-w-[280px] px-4 py-3 font-semibold sm:px-6"
                                      >
                                        Speech Topic
                                      </th>
                                    </>
                                  )}
                                  <th
                                    scope="col"
                                    className="px-4 py-3 font-semibold sm:px-6"
                                  >
                                    {selectedSchedule.id === "keynotes"
                                      ? "Track"
                                      : "Description"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {(selectedSchedule.id === "keynotes"
                                  ? keynoteProgram
                                  : conferenceProgram
                                ).map((item, index) => (
                                  <tr
                                    key={`${item.time}-${index}`}
                                    className={
                                      index % 2 === 0
                                        ? "bg-white"
                                        : "bg-gray-50"
                                    }
                                  >
                                    <td className="whitespace-nowrap border-t border-gray-200 px-4 py-4 font-semibold text-[#1869b4] sm:px-6">
                                      {item.time}
                                    </td>
                                    {selectedSchedule.id === "keynotes" && (
                                      <>
                                        <td className="border-t border-gray-200 px-4 py-4 text-gray-800 sm:px-6">
                                          <p className="font-semibold">
                                            {item.speaker}
                                          </p>
                                          <p className="mt-1 text-sm text-gray-600">
                                            {item.affiliation.map((line) => (
                                              <span
                                                key={line}
                                                className="block"
                                              >
                                                {line}
                                              </span>
                                            ))}
                                          </p>
                                        </td>
                                        <td className="border-t border-gray-200 px-4 py-4 text-gray-700 sm:px-6">
                                          {item.topic}
                                        </td>
                                      </>
                                    )}
                                    <td className="border-t border-gray-200 px-4 py-4 text-gray-700 sm:px-6">
                                      {selectedSchedule.id === "keynotes"
                                        ? item.track
                                        : item.description}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}
                    </div>
                  </article>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 sm:px-6">
                  {selectedSchedule.id === "keynotes" &&
                    "All keynote sessions are scheduled concurrently. "}
                  All times are in Indian Standard Time (IST). Press Esc or
                  close this window to exit.
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </section>
  );
};

export default Schedules;
