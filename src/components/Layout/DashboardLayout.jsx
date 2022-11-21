import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../Dashboard";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { customToast } from "../../utils/customToast";

const DashboardLayout = () => {
  const { loginState } = useSelector((state) => state.user);

  if (!loginState) {
    customToast(
      "You are logged out. Please login to continue or sign-up if you don't have an account"
    );
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex items-center h-auto md:h-screen">
      <div className="w-[0%] lg:w-[15%] h-full">
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-full lg:w-[85%] h-full">
        <Navbar />
        <div className="bg-[#F0F0F0] w-full h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
