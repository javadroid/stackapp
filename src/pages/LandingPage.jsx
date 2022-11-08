import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Hero,
  Details,
  WhoWeAre,
  KnowOurPatients,
  MakeADiff,
} from "../components/LandingPage";
import SignIn from "../components/Modal/SignIn";
import SignUp from "../components/Modal/SignUp";

const LandingPage = () => {
  const { loginState } = useSelector((state) => state.user);
  const navigate = useNavigate();

  let [SignUpOpen, setSignUpOpen] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeSignUpModal() {
    setSignUpOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openSignUpModal() {
    setSignUpOpen(true);
  }

  const toAppointmentPage = () => {
    if (!loginState) {
      openModal();
      return;
    }

    navigate("/book-appointment");
  };
  const toRequestPage = () => {
    if (!loginState) {
      openModal();
      return;
    }

    navigate("/request-blood");
  };
  return (
    <>
      <SignIn
        isModalOpen={isOpen}
        closeModalFunc={closeModal}
        openSignUpModalFunc={openSignUpModal}
        closeSignUpModalFunc={closeSignUpModal}
      />
      <SignUp
        isModalOpen={SignUpOpen}
        closeModalFunc={closeSignUpModal}
        openLoginModalFunc={openModal}
        closeLoginModalFunc={closeModal}
      />
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
