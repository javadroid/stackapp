/* eslint-disable jsx-a11y/alt-text */
import React, { useState, Fragment } from "react";
import { Heart, BloodCells, WeightIcon } from "../../assets/images";
import { BsPeople } from "react-icons/bs";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import { UploadIcon, DownloadIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";

import MedicalInfo from "../Modal/MedicalInfo";

const MedicalsPage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const personData = {
    bloodGroup: "O+",
    heartRate: "80",
    weight: "120kg",
    bloodCount: "9,567/ml",
  };
  return (
    <>
      <MedicalInfo
        isModalOpen={isOpen}
        closeModalFunc={closeModal}
        // openAppointmentModal={openAppointmentModal}
        // closeAppointmentModal={closeAppointmentModal}
      />
      <div className="w-full  h-full p-4 overflow-x-hidden">
        <h1 className="font-[500] text-xl md:text-2xl">Medical Report</h1>
        {/* Grid of Cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 w-full md:max-w-7xl mt-4 mb-8">
          {/*Blood Group */}
          <div className="w-full h-48 rounded-[4px]">
            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light  text-xl"> Blood Group</span>
              <div className="flex items-center justify-between w-full text-[#F00530]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.bloodGroup}
                </span>
                <BsPeople className="w-16 h-16 md:w-12 md:h-12" />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Heart Rate */}

            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Heart Rate</span>
              <div className="flex items-center justify-between w-full text-[#44C13C]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.heartRate}bmp
                </span>
                <img src={Heart} className="w-16 h-16 md:w-12 md:h-12" alt="" />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Weight */}

            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Weight</span>
              <div className="flex items-center justify-between w-full text-[#FB9637]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.weight}
                </span>
                <img
                  src={WeightIcon}
                  className="w-16 h-16 md:w-12 md:h-12"
                  alt=""
                />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Blood Count */}
            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Blood Count</span>
              <div className="flex items-center justify-between w-full text-[#61A0FF]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.bloodCount}
                </span>
                <img
                  src={BloodCells}
                  className="w-16 h-16 md:w-12 md:h-12"
                  alt=""
                />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
        </div>
        {/* Create a report, Download a report and View Report Card */}
        <div className="w-full bg-white min-h-[60vh]">
          {/* Heading */}
          <div className="py-4 w-full">
            <div className="flex items-center justify-between px-6 pb-6 border-b-2 border-[#EBEBEB]">
              {/* First Flex */}
              <div className="flex gap-4 items-center">
                <Popover className="relative ">
                  {({ open }) => (
                    <>
                      <Popover.Button className=" flex  gap-1 items-center px-3 py-1">
                        <span>View Medical Report</span>
                        <ChevronDownIcon className="w-6 h-6 text-[#445665]" />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-12  w-max rounded-2 ">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                            <div className="relative grid text-[14px] gap-4 bg-white p-2  ">
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                January
                              </div>
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                February
                              </div>
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                March
                              </div>
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                April
                              </div>
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                May
                              </div>
                              <div className=" px-4 py-2  hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                                June
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <div className="hidden lg:block cursor-pointer">
                  <div className="bttn bttn-black" onClick={openModal}>
                    <PlusIcon className="w-6 h-6" />
                    <span className="font-mod-light">
                      Create Medical Report
                    </span>
                  </div>
                </div>
              </div>
              {/* Second Flex */}

              <div className="hidden lg:flex gap-6 items-center">
                <div className="flex items-center gap-2 text-[#F00530] font-[600] mr-4 cursor-pointer">
                  <UploadIcon className="w-5 h-5" />
                  <span className="font-mod">Upload Report</span>
                </div>
                <button className="bttn bttn-primary">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  <span className="font-mod">Download Report</span>
                </button>
              </div>
              {/* Dropdown Icon for mobile */}
              <Popover className="relative block lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button className=" flex justify-between gap-2 items-center  text-gray-200 px-3 py-1">
                      <DotsVerticalIcon className="w-6 h-6 text-[#445665]" />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 pr-36 w-max ">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                          <div className="relative grid text-[14px] gap-4 bg-white p-2 text-gray-700">
                            <div className=" px-4 py-2 flex items-center justify-start gap-1 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                              <PlusIcon className="w-4 h-4" />{" "}
                              <span
                                className="font-mod-light"
                                onClick={openModal}
                              >
                                Create Medical Report
                              </span>
                            </div>
                            <div className=" px-4 py-2 flex justify-start items-center gap-1 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                              <UploadIcon className="w-5 h-5" /> Upload Report
                            </div>

                            <div className="px-4 py-2 flex justify-start items-center gap-1 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap">
                              <DownloadIcon className="w-5 h-5" /> Download
                              Report
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalsPage;
