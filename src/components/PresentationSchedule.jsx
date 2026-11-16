import Image from "next/image";
import {
  ArrowDown,
  CalendarDays,
  Clock3,
  MapPin,
  UserRound,
  Video,
} from "lucide-react";
import schedule from "../data/presentationSchedule.json";

// Presenting author photos, cropped to square thumbnails via scripts/process-author-photos.js
// and matched to each paper by cross-checking co-author names in the source spreadsheet.
const presenterPhotos = {
  219: "/assets/img/authors-photo/optimized/paper-219.jpg",
  577: "/assets/img/authors-photo/optimized/paper-577.jpg",
  142: "/assets/img/authors-photo/optimized/paper-142.jpg",
  430: "/assets/img/authors-photo/optimized/paper-430.jpg",
  502: "/assets/img/authors-photo/optimized/paper-502.jpg",
  155: "/assets/img/authors-photo/optimized/paper-155.jpg",
  484: "/assets/img/authors-photo/optimized/paper-484.jpg",
  501: "/assets/img/authors-photo/optimized/paper-501.jpg",

  338: "/assets/img/authors-photo/optimized/paper-338.jpg",
  73: "/assets/img/authors-photo/optimized/paper-73.jpg",
  467: "/assets/img/authors-photo/optimized/paper-467.jpg",
  188: "/assets/img/authors-photo/optimized/paper-188.jpg",
  617: "/assets/img/authors-photo/optimized/paper-617.jpg",
  409: "/assets/img/authors-photo/optimized/paper-409.jpg",
  453: "/assets/img/authors-photo/optimized/paper-453.jpg",

  141: "/assets/img/authors-photo/optimized/paper-141.jpg",
  425: "/assets/img/authors-photo/optimized/paper-425.jpg",
  660: "/assets/img/authors-photo/optimized/paper-660.jpg",
  596: "/assets/img/authors-photo/optimized/paper-596.jpg",
  693: "/assets/img/authors-photo/optimized/paper-693.jpg",
  638: "/assets/img/authors-photo/optimized/paper-638.jpg",
  600: "/assets/img/authors-photo/optimized/paper-600.jpg",
  353: "/assets/img/authors-photo/optimized/paper-353.jpg",

  358: "/assets/img/authors-photo/optimized/paper-358.jpg",
  571: "/assets/img/authors-photo/optimized/paper-571.jpg",

  499: "/assets/img/authors-photo/optimized/paper-499.jpg",
  179: "/assets/img/authors-photo/optimized/paper-179.jpg",
  340: "/assets/img/authors-photo/optimized/paper-340.jpg",
  503: "/assets/img/authors-photo/optimized/paper-503.jpg",
  422: "/assets/img/authors-photo/optimized/paper-422.jpg",
  585: "/assets/img/authors-photo/optimized/paper-585.jpg",
  663: "/assets/img/authors-photo/optimized/paper-663.jpg",

  278: "/assets/img/authors-photo/optimized/paper-278.jpg",
  510: "/assets/img/authors-photo/optimized/paper-510.jpg",
  582: "/assets/img/authors-photo/optimized/paper-582.jpg",
  640: "/assets/img/authors-photo/optimized/paper-640.jpg",
  586: "/assets/img/authors-photo/optimized/paper-586.jpg",
  513: "/assets/img/authors-photo/optimized/paper-513.jpg",

  512: "/assets/img/authors-photo/optimized/paper-512.jpg",

  652: "/assets/img/authors-photo/optimized/paper-652.jpg",
};

function ScheduleText({ text }) {
  return text.split(/(https:\/\/[^\s]+)/g).map((part, index) =>
    part.startsWith("https://") ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-medium text-[#1869b4] underline underline-offset-2"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

// Authors strings mark the presenting author with **name** so it can be rendered in bold.
function AuthorsText({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

// Full class names so Tailwind can detect them.
const trackColors = {
  "01-A": "bg-[#1869b4]",
  "01-B": "bg-indigo-600",
  "01-C": "bg-rose-600",
  "02": "bg-teal-600",
  "03": "bg-purple-700",
  "04": "bg-orange-600",
};

function getTrackDetails(paragraphs) {
  return paragraphs.slice(4).reduce((details, paragraph) => {
    const match = paragraph.match(
      /^(Session Chair|Session Coordinator|Time \(IST\)|Microsoft Teams Meeting|Meeting ID|Passcode|Venue):\s*(.*)$/,
    );
    if (match) {
      details.push({ label: match[1], value: match[2] });
    } else if (details.length) {
      const last = details[details.length - 1];
      last.value = [last.value, paragraph].filter(Boolean).join(" ");
    }
    return details;
  }, []);
}

export default function PresentationSchedule() {
  const [overview, events, ...tracks] = schedule;

  return (
    <div className="space-y-8 sm:space-y-10">
      <section aria-labelledby="presentation-overview">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#c45b00]">
            Plan your day
          </p>
          <h4
            id="presentation-overview"
            className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Presentation schedule at a glance
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            Six parallel sessions · All times in Indian Standard Time (IST)
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between rounded-xl bg-[#1869b4] p-4 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-100">
              {overview.rows.at(-1)[0]}
            </p>
            <p className="mt-2 text-3xl font-bold leading-none">
              {overview.rows.at(-1)[1]}
            </p>
          </div>
          {events.paragraphs.slice(2, 5).map((slot) => {
            const [label, time] = slot.split(": ");
            return (
              <div
                key={slot}
                className="flex flex-col justify-between rounded-xl border border-blue-100 bg-blue-50/60 p-4"
              >
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1869b4]">
                  <Clock3 size={16} className="shrink-0" aria-hidden="true" />{" "}
                  {label.replace(/\s+/g, " ")}
                </p>
                <p className="mt-2 text-base font-bold leading-snug text-gray-900">
                  {time}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
          {events.paragraphs[0]}
        </p>
      </section>

      <section aria-labelledby="track-navigation-title">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c45b00]">
          Find your session
        </p>
        <h4
          id="track-navigation-title"
          className="mt-1 text-2xl font-bold text-gray-900"
        >
          Choose a track
        </h4>
        <p className="mt-2 text-sm text-gray-600">
          Select a track to see its session information and paper presentations.
        </p>
        <nav
          aria-label="Presentation tracks"
          className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {overview.rows.slice(1, -1).map(([number, name, mode, count]) => (
            <a
              key={number}
              href={`#presentation-track-${number}`}
              className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#1869b4] hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1869b4]"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold text-white ${trackColors[number] ?? "bg-[#1869b4]"}`}
                >
                  Track {number}
                </span>
                <ArrowDown
                  className="h-4 w-4 text-[#1869b4] transition group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 font-bold leading-snug text-gray-900">
                {name}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-600">
                {number === "04" ? (
                  <MapPin size={15} aria-hidden="true" />
                ) : (
                  <Video size={15} aria-hidden="true" />
                )}
                {number === "04" ? "Offline" : "Online"} · {count} papers
              </p>
              <span className="sr-only">{mode}</span>
            </a>
          ))}
        </nav>
      </section>

      {tracks.map((track) => {
        const [trackLabel, ...nameParts] = track.paragraphs[3].split(":");
        const number = trackLabel.replace("Track ", "");
        const name = nameParts.join(":").trim();
        const details = getTrackDetails(track.paragraphs);
        const breakIndex = track.rows.findIndex((row) => row.length === 1);
        const slots = [
          {
            label: "Slot I",
            rows: track.rows.slice(
              1,
              breakIndex === -1 ? undefined : breakIndex,
            ),
          },
          ...(breakIndex === -1
            ? []
            : [{ label: "Slot II", rows: track.rows.slice(breakIndex + 1) }]),
        ];

        return (
          <section
            key={number}
            id={`presentation-track-${number}`}
            aria-labelledby={`presentation-track-title-${number}`}
            className="scroll-mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
          >
            <header
              className={`${trackColors[number] ?? "bg-[#1869b4]"} px-5 py-5 text-white sm:px-6`}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100">
                {trackLabel} · {number === "04" ? "Offline" : "Online"}
              </p>
              <h4
                id={`presentation-track-title-${number}`}
                className="mt-1 text-xl font-bold sm:text-2xl"
              >
                {name}
              </h4>
            </header>
            <div className="p-4 sm:p-6">
              <h5 className="text-sm font-bold uppercase tracking-wide text-[#1869b4]">
                Session information
              </h5>
              <dl className="mt-3 grid gap-3 rounded-xl bg-gray-50 p-4 sm:grid-cols-2">
                {details.map(({ label, value }) => (
                  <div
                    key={label}
                    className={
                      label === "Session Chair" ||
                      label === "Venue" ||
                      label === "Microsoft Teams Meeting"
                        ? "sm:col-span-2"
                        : ""
                    }
                  >
                    <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-800">
                      <ScheduleText text={value} />
                    </dd>
                  </div>
                ))}
              </dl>
              <h5 className="mt-6 flex flex-wrap items-center gap-2 text-lg font-bold text-gray-900">
                Paper presentations
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold normal-case text-gray-600">
                  <strong className="font-bold text-gray-900">Bold</strong> name
                  = presenting author
                </span>
              </h5>
              {slots.map((slot, slotIndex) => (
                <div key={slot.label} className="mt-4">
                  {slotIndex > 0 && (
                    <p className="mb-4 rounded-lg bg-orange-50 px-4 py-2 text-sm font-semibold text-[#9a4700]">
                      {track.rows[breakIndex][0]} · 01:10 PM – 02:10 PM
                    </p>
                  )}
                  <h6 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#1869b4]">
                    <CalendarDays size={16} aria-hidden="true" /> {slot.label}
                  </h6>
                  <ul className="grid gap-3 lg:grid-cols-2">
                    {slot.rows.map(
                      ([serial, paperId, authors, title, time]) => {
                        const photo = presenterPhotos[paperId];
                        return (
                          <li
                            key={paperId}
                            className="min-w-0 rounded-xl border border-gray-200 bg-white p-4"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1869b4]">
                                {time} IST
                              </span>
                              <span className="text-xs font-bold text-[#9a4700]">
                                #{serial} · Paper ID {paperId}
                              </span>
                            </div>
                            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                              Paper title
                            </p>
                            <p className="mt-1 font-bold leading-snug text-gray-900">
                              {title}
                            </p>
                            <div className="mt-4 flex items-start gap-3 border-t border-gray-100 pt-4">
                              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-blue-50 text-[#1869b4]">
                                {photo ? (
                                  <Image
                                    src={photo}
                                    alt={`Presenter for paper ${paperId}`}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <UserRound
                                    size={32}
                                    aria-label="Presenter photo placeholder"
                                  />
                                )}
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                                  Authors
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                                  <AuthorsText text={authors} />
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <details className="rounded-xl border border-gray-200 bg-gray-50">
        <summary className="cursor-pointer p-4 font-bold text-gray-900">
          Full event schedule and meeting details
        </summary>
        <ul className="space-y-3 px-4 pb-4">
          {events.rows.slice(1).map(([time, description], index) => (
            <li
              key={`${time}-${index}`}
              className="rounded-lg bg-white p-4 text-sm"
            >
              <p className="font-bold text-[#1869b4]">{time} (IST)</p>
              <p className="mt-1 whitespace-pre-line leading-relaxed text-gray-700">
                <ScheduleText text={description} />
              </p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
