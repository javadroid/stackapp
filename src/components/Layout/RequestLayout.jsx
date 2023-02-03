import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet, Navigate } from "react-router-dom";
import { useUserQuery } from "../../features/user/useUser";
import { customToast } from "../../utils/customToast";

const RequestLayout = () => {
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
        <div className="w-full">
          <Navbar2 textColor="black" bgColor="white" />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default RequestLayout;
