import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { customToast } from "../../utils/customToast";

const RequestLayout = () => {
  const { loginState } = useSelector((state) => state.user);
  if (!loginState) {
    customToast(
      "You are not logged in. Please login to continue or sign-up if you don't have an account"
    );
    return <Navigate to="/" replace />;
  }
  return (
    <div className="w-full">
      <Navbar2 textColor="black" bgColor="white" />
      <Outlet />
    </div>
  );
};

export default RequestLayout;
