import React from "react";
import { Lab } from "../../assets/images";

import { ChevronRightIcon } from "@heroicons/react/outline";

const WhoWeAre = ({ toAppointmentPage, toRequestPage }) => {
  return (
    <div className=" relative my-10 md:my-20 " id="about">
      <div className="flex flex-row max-w-7xl mx-auto px-4 sm:px-6 md:px-10 justify-between gap-4">
        <div className="text-left mt-20 basis-full lg:basis-1/2">
          <h1 className="text-2xl md:text-3xl font-[700] text-semibold my-5 text-center lg:text-left">
            WHO WE ARE
          </h1>
          <div className="">
            <h4 className="text-semibold font-mod-light text-[#333333] mb-4">
              At BloodFuse, we know how important blood is for life and we
              believe every Individual should be given an opportunity to stay
              alive, which is why we:
            </h4>
            <div className="my-5 w-[90%] md:w-[300px] h-[300px] mx-auto block lg:hidden">
              <img
                src={Lab}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <ul className="marker:text-red-400 list-disc pl-5 space-y-6 text-[#333333] font-mod-light">
              <li>
                Connect Blood Donors & Recipients in a convenient and safe way.
              </li>
              <li>Increase communication with our members.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>Perform extra care from a multi-disciplinary team.</li>
              <li>Are a community based organization.</li>
              <li>
                Are incorporating blockchain technology to our platform, for
                transparency, security of data and decentralization.
              </li>
            </ul>
            <div className="lg:mr-auto hidden lg:flex mt-4 sm:mt-8 flex-col gap-4 sm:flex-row items-center justify-center lg:justify-start w-[70%] sm:w-auto">
              <button onClick={toAppointmentPage} className="bttn bttn-primary">
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">
                  Donate Now
                </span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </button>
              <button onClick={toRequestPage} className="bttn bttn-tertiary">
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">
                  Request Blood
                </span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="my-20 hidden lg:block basis-1/2">
          <img src={Lab} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
