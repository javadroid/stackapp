import React from "react";
import { Navbar, Footer } from "../LandingPage";
import { Outlet } from "react-router-dom";
import useModal from "../../features/hooks/useModal";
const LandingLayout = () => {
  const {
    SignInModal,
    SignUpModal,
    toAppointmentPage,
    toRequestPage,
    openSignUpModal,
    openModal,
    closeModal,
    closeSignUpModal,
  } = useModal();
  return (
    <>
      <Navbar
        textColor="white"
        bgColor="primarybg"
        modalState={[
          SignUpModal,
          SignInModal,
          openModal,
          openSignUpModal,
          closeModal,
          closeSignUpModal,
        ]}
      />

      <Outlet />
      <Footer
        toAppointmentPage={toAppointmentPage}
        toRequestPage={toRequestPage}
      />
    </>
  );
};

export default LandingLayout;
