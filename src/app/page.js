import Hero from "../components/Hero";
import About from "../components/About";
import ImportantDates from "../components/ImportantDates";
import CallForPapers from "../components/CallForPapers";
import Tracks from "../components/Tracks";
import SubmissionGuidelines from "../components/SubmissionGuidelines";
import Registration from "../components/Registration";
import KeynoteSpeakers from "../components/KeynoteSpeakers";
import Editors from "../components/Editors";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import TechnicalReviewCommittee from "../components/TechnicalReviewCommittee";
import AdvisoryCommittee from "../components/AdvisoryCommittee";
import OrganizingCommittee from "../components/OrganizingCommittee";
import SDG from "../components/SDG";
import ContactUs from "../components/ContactUs";
import ConferenceDescription from "../components/ConferenceDescription";
import ScrollToTop from "../components/ScrollToTop";
import LeftSideImportantDatesButton from "../components/LeftSideImportantDatesButton";

export default function Home() {
  return (
    <>
      <Hero />
      <ConferenceDescription />
      <About />
      <ImportantDates />
      <CallForPapers />
      <Tracks />
      <SubmissionGuidelines />
      <Registration />
      <KeynoteSpeakers />
      <Editors />
      <OrganizingCommittee />
      <TechnicalProgramCommittee />
      <TechnicalReviewCommittee />
      <AdvisoryCommittee />
      <SDG />
      <ContactUs />
      <LeftSideImportantDatesButton />
      <ScrollToTop />
    </>
  );
}
