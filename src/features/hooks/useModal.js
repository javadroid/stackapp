import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/Modal/SignIn";
import SignUp from "../../components/Modal/SignUp";

const useModal = () => {
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

  const SignInModal = () => {
    return (
      <SignIn
        isModalOpen={isOpen}
        closeModalFunc={closeModal}
        openSignUpModalFunc={openSignUpModal}
        closeSignUpModalFunc={closeSignUpModal}
      />
    );
  };
  const SignUpModal = () => {
    return (
      <SignUp
        isModalOpen={SignUpOpen}
        closeModalFunc={closeSignUpModal}
        openLoginModalFunc={openModal}
        closeLoginModalFunc={closeModal}
      />
    );
  };
  return {
    SignInModal,
    SignUpModal,
    toAppointmentPage,
    toRequestPage,
    openSignUpModal,
    openModal,
    closeModal,
    closeSignUpModal,
  };
};

export default useModal;
