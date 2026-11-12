import Schedules from "../../components/Schedules";

export const metadata = {
  title: "Schedules - ICACS 2026",
  description:
    "View the conference program, accepted paper presentation schedule and keynote schedule for ICACS 2026",
};

export default function SchedulesPage() {
  return (
    <main className="pt-20">
      <Schedules />
    </main>
  );
}
