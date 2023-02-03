import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet, Navigate } from "react-router-dom";
import { Footer } from "../map";
import { useUserQuery } from "../../features/user/useUser";
import { customToast } from "../../utils/customToast";

const AppointmentLayout = () => {
  const { isLoading, isError, data } = useUserQuery();
  let loginState = data?.loginState;
  isError && (loginState = !1);

  if (!isLoading) {
    if (!loginState) {
      customToast(
        "You have been logged out. Please login to continue or sign-up if you don't have an account."
      );
      return <Navigate to="/" replace />;
    }
  }
  return (
    <>
      {!isLoading && (
        <div className="w-full max-h-full min-h-auto overflow-y-hidden">
          <Navbar2 textColor="black" bgColor="white" />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppointmentLayout;
