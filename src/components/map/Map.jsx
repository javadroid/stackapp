import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import { DonationCenter, Hospital, BloodBag } from "../../assets/images";

import Center from "./Center";
import Schedule from "./Schedule";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text text-white w-auto">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel, CenterList }) => {
  const [show, setShow] = useState(true);
  const [centerId, setCenterId] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="">
      <div className="flex flex-col h-full md:h-screen justify-between border-t-red-500 border-4 md:border-b-gray-500 border-b-0 border-x-0  md:flex-row-reverse w-full pl-10 my-5 md:my-5">
        <div className="md:w-[75%] flex flex-col justify-between md:-ml-0 border-b-red-500 border-4 border-x-0 -ml-10">
          <div className=" flex flex-col justify-between w-full h-[50vh]  md:h-[75%]">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </div>
          <div className="flex h-[25%] w-full text-sm ">
            <div className="bg-red-600 text-white flex flex-col gap-4 items-center justify-center w-[33%] ">
              <img src={BloodBag} alt="" className="md:w-14 md:h-14 w-7 h-7" />
              <span className="text-white text-center">
                CONNECT WITH BLOOD BANK
              </span>
            </div>
            <div className="bg-white text-white flex flex-col gap-4 items-center justify-center w-[33%] ">
              <img
                src={DonationCenter}
                alt=""
                className="md:w-14 md:h-14 w-7 h-7 "
              />
              <span className="text-gray-500 text-center">
                CONNECT WITH DONATION CENTER
              </span>
            </div>
            <div className=" border-r-gray-500 border my-4"></div>
            <div className="bg-white text-white flex flex-col gap-4 items-center justify-center w-[33%] ">
              <img src={Hospital} alt="" className="md:w-14 md:h-14 w-7 h-7" />
              <span className="text-gray-500 text-center">
                CONNECT WITH HOSPITAL
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-[25%] w-full md:h-full  flex  flex-col pr-6 md:overflow-scroll float-left">
          <div className=" pt-6 pb-0 md:py-3">
            {show ? (
              <span className="text-black">Donation Center Near You</span>
            ) : (
              <span className="text-black">Schedule Appointment</span>
            )}{" "}
          </div>
          <div className="md:border-b-red-500 border-0 md:border mb-6"></div>
          <div>
            {show ? (
              <Center
                handleClick={handleClick}
                setCenterId={setCenterId}
                CenterList={CenterList}
              />
            ) : (
              <Schedule centerId={centerId} CenterList={CenterList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
