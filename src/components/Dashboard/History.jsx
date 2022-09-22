import React, { useState } from "react";
import {
  BloodDroplet,
  Award,
  Badge,
  Certificate,
  Nft,
  Pdf,
} from "../../assets/images";
import { TrashIcon, DownloadIcon } from "@heroicons/react/outline";

const summaryData = {
  donation: 3,
  award: 4,
  badge: 2,
  certficate: 2,
};
const historyData = [
  {
    location: "Ikeja General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Surulere General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Ikeja General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Surulere General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Surulere General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Surulere General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
  {
    location: "Surulere General Hospital",
    bloodType: "O+",
    amountDonated: "2 Pints",
    date: "12.04.2022",
    time: "1:30 - 2:30pm",
  },
];

const awardData = [
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "pdf",
  },
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "nft",
  },
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "pdf",
  },
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "pdf",
  },
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "pdf",
  },
  {
    title: "Appreciation Award.jpg",
    filesize: "2mb",
    fileType: "pdf",
  },
];

const History = () => {
  //eslint-disable-next-line
  const [summary, setSummary] = useState(summaryData);
  //eslint-disable-next-line
  const [donationHistory, setDonationHistory] = useState(historyData);
  //eslint-disable-next-line
  const [award, setAward] = useState(awardData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-full p-4">
      <span className="font-[500] hidden md:inline h-fit text-xl md:text-2xl whitespace-nowrap">
        My History
      </span>
      <span className="font-[500] inline md:hidden h-fit md:mb-4 text-xl md:text-2xl whitespace-nowrap">
        Dashboard {">>"} History
      </span>

      <div className="grid grid-cols-1 col-span-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:max-w-7xl ">
        <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-red-500 p-8 items-center">
          <div className="flex justify-center sm:justify-between items-center gap-2">
            <span className="text-6xl">{summary.donation}</span>
            <img src={BloodDroplet} alt="" className="w-[65%] h-[90%] pt-2 " />
          </div>
          <span className=" text-sm pt-6 ">Total Blood Donated</span>{" "}
        </div>
        <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#44C13C] p-8 items-center">
          <div className="flex justify-center sm:justify-between items-center gap-8">
            <span className="text-6xl ">{summary.award}</span>
            <img src={Award} alt="" className="w-[70%] h-[90%] pt-2 " />
          </div>
          <span className=" text-sm pt-6 ">Total Awards</span>{" "}
        </div>
        <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#FB9637] p-8 items-center">
          <div className="flex justify-center sm:justify-between items-center gap-8 ">
            <span className="text-6xl ">{summary.badge}</span>
            <img src={Badge} alt="" className="w-[70%] h-[90%] pt-2 " />
          </div>
          <span className="col-span-3 text-sm pt-6 ">Total Badge</span>{" "}
        </div>
        <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#61A0FF] p-8 items-center">
          <div className="flex justify-center sm:justify-between items-center gap-8">
            <span className="text-6xl">{summary.certficate}</span>
            <img src={Certificate} alt="" className="w-[70%] h-[90%] pt-2" />
          </div>
          <span className="col-span-3 text-sm pt-6 ">Total Certificate</span>{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-4 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full md:max-w-7xl">
        <div className="bg-white rounded  ">
          <div className="pl-4 py-6">
            <span className="text-2xl">Donation History</span>
          </div>
          <div className="overflow-x-auto  relative md:col-span-2 col-span-1 bg-white rounded md:items-start">
            <table className="w-full text-sm text-left whitespace-nowrap text-gray-500 ">
              <thead className="text-xs  text-gray-700 border-b   ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 sticky left-0 z-10  bg-white"
                  >
                    Location
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Blood Type
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Amount Donated
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Time
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {donationHistory.map((history, index) => {
                  return (
                    <tr className="bg-white py-4 " key={index}>
                      <th
                        scope="row"
                        className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-10 bg-white"
                      >
                        {history.location}
                      </th>
                      <td className=" py-3 text-center">
                        {" "}
                        {history.bloodType}
                      </td>
                      <td className="py-3  text-center">
                        {" "}
                        {history.amountDonated}
                      </td>
                      <td className="py-3 px-6 "> {history.date}</td>
                      <td className="py-3 px-6">{history.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded ">
          <div className=" flex flex-col justify-between gap-4 px-4 py-6 w-full">
            <div className="flex justify-between  font-mod-bold font-[500] items-center">
              <span>Awards Recieved</span>
              <span className="text-red-500">View All</span>
            </div>
            <div className="text-[#BFBFBF] text-sm">
              <span>This award is given to you for being brave and heroic</span>
            </div>
            {award.map((award, index) => {
              return (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex items-center gap-4 justify-between">
                    <img src={award.fileType === "pdf" ? Pdf : Nft} alt="" />
                    <div className="flex flex-col justify-between items-start">
                      <div>
                        <span>{award.title}</span>
                      </div>
                      <div>
                        <span className="text-[#BFBFBF]">{award.filesize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-center">
                    <div className="bg-[#333333] bg-opacity-5 rounded p-2">
                      <span>
                        <DownloadIcon className="h-6 w-6 text-[#575757]" />
                      </span>
                    </div>
                    <div className="bg-[#333333] bg-opacity-5 rounded p-2">
                      <span className=" ">
                        <TrashIcon className="h-6 w-6 text-[#575757]" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default History;
