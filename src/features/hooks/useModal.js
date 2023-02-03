import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/Modal/SignIn";
import SignUp from "../../components/Modal/SignUp";
import { useUserQuery } from "../user/useUser";

const useModal = () => {
  const { isLoading, isError, data } = useUserQuery();
  let loginState = data?.loginState;
  isError && (loginState = !1);
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
