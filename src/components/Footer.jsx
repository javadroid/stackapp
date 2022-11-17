import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Footer = ({ toAppointmentPage, toRequestPage }) => {
  return (
    <footer className="bg-[#141414] w-full">
      <div className="flex flex-col items-center justify-center gap-8 w-full h-full py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 max-w-7xl gap-8 lg:gap-16 w-full mx-auto pb-8 md:pb-12 lg:pb-24 border-b border-[#FCFCFC]">
          {/* First Grid */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center h-full">
              <p className="text-white text-center lg:text-start text-2xl md:text-4xl pb-4">
                Sign up to our newsletter to stay
                <span className="lg:block">up to date</span>
              </p>
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                <p className="text-white text-center lg:mr-auto text-xl lg:text-2xl">
                  With our latest news
                </p>
                <div className="flex items-center w-full sm:w-[60%] lg:w-full">
                  <input
                    className="w-full mx-auto py-2 text-center focus:ring-0 focus:border-none"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  <div className=" px-4 py-2 bg-slate-600 flex items-center justify-center">
                    <ChevronRightIcon className="h-6 w-6 text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Grid */}
          <div className="lg:col-span-5 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 content-center md:grid-cols-3">
            <div className="flex flex-col items-center md:items-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3">
              <h1 className="text-xl text-white font-semibold">Donate Blood</h1>
              <button onClick={toAppointmentPage}>Make an appointment</button>
              <Link to="#">Why Donate?</Link>
              <button onClick={toAppointmentPage}>Where can I Donate?</button>
              <Link to="/who-can-donate">Eligibity</Link>
              <Link to="#">Donate Financially</Link>
              <Link to="#">Frequently Asked Questions</Link>
            </div>
            <div className="flex flex-col items-center md:items-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3">
              <h1 className="text-xl text-white font-semibold">About us</h1>
              <Link to="#">Our Objective</Link>
              <Link to="#">Our Partners</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Accomplishment</Link>
            </div>
            <div className="flex flex-col items-center md:items-start md:justify-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3">
              <h1 className="text-xl text-white font-semibold">Contact Us</h1>
              <div className="flex gap-2 justify-center items-center">
                <MailIcon className="h-6 w-6" />
                <span className="flex flex-col gap-0.5">
                  <span>donate@bloodfuse.com</span>
                  <span>support@bloodfuse.com</span>
                </span>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <LocationMarkerIcon className="h-6 w-6" />
                <span className="flex flex-col gap-0.5">
                  <span>WittyHub, 28 Jakpa Rd</span>
                  <span>Effurun, Warri, Delta, NG.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center text-[12px] pb-6 md:pb-10 lg:text-base font-light">
          Copyright © 2022 BloodFuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
