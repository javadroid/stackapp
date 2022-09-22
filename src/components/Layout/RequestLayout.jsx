import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequestLayout = () => {
  
  const { loginState } = useSelector((state) => state.user);
  if (!loginState) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-full">
      <Navbar2 textColor="black" bgColor="white" />
      <Outlet />
    </div>
  );
};

export default RequestLayout;
