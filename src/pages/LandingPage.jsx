import {
  Hero,
  Details,
  WhoWeAre,
  KnowOurPatients,
  MakeADiff,
} from "../components/LandingPage";
import useModal from "../features/hooks/useModal";

const LandingPage = () => {
  const { SignInModal, SignUpModal, toAppointmentPage, toRequestPage } =
    useModal();

  // const [toAppointmentPage, toRequestPage, SignInModal, SignUpModal] =
  //   useOutletContext();
  return (
    <>
      {/* <SignInModal />
      <SignUpModal /> */}
      <Hero
        toAppointmentPage={toAppointmentPage}
        toRequestPage={toRequestPage}
      />
      <Details
        toAppointmentPage={toAppointmentPage}
        toRequestPage={toRequestPage}
      />
      <WhoWeAre
        toAppointmentPage={toAppointmentPage}
        toRequestPage={toRequestPage}
      />
      <KnowOurPatients />
      <MakeADiff />
    </>
  );
};

export default LandingPage;
