import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function ScheduleHighlight() {
  return (
    <section
      aria-labelledby="schedule-highlight-heading"
      className="bg-gradient-to-r from-[#1869b4] to-blue-800 px-4 py-8 text-white sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <CalendarDays
            className="mt-1 h-8 w-8 flex-shrink-0 text-orange-300"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-200">
              Schedule now available
            </p>
            <h2
              id="schedule-highlight-heading"
              className="mt-1 text-xl font-bold sm:text-2xl"
            >
              Plan your ICACS 2026 conference
            </h2>
            <p className="mt-1 text-sm text-blue-100 sm:text-base">
              Conference program, accepted paper presentations, and keynote
              sessions.
            </p>
          </div>
        </div>
        <Link
          href="/downloads#schedules"
          className="inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#1869b4] transition hover:bg-orange-100"
        >
          View schedules
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
