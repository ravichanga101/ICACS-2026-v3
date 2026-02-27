import PreviousEventsGallery from "../../components/PreviousEventsGallery";

export const metadata = {
  title: "Gallery - ICACS 2026",
  description: "Photo gallery from previous ICACS conference events",
};

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <PreviousEventsGallery />
    </main>
  );
}
