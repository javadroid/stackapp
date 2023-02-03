import { useState } from "react";
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
  certificate: 2,
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
    location: "Ikeja General Hospital",
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
    <>
      <div className="w-full p-4 overflow-x-hidden">
        <div className="w-full px-5 pt-4 pb-2">
          <span className="font-[500] hidden md:inline h-fit text-xl md:text-2xl whitespace-nowrap">
            My History
          </span>
          <span className="font-[500] inline md:hidden h-fit md:mb-4 text-xl md:text-2xl whitespace-nowrap">
            Dashboard {">>"} History
          </span>
        </div>
        <div className="grid gap-y-2 grid-cols-2 md:gap-x-2 gap-x-2 md:grid-cols-4 w-full h-full py-4">
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"> */}
          <div className="bg-white col-span-1 shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-red-500 p-8 items-center">
            <div className="flex justify-center sm:justify-between items-center gap-2">
              <span className="text-6xl">{summary.donation}</span>
              <img
                src={BloodDroplet}
                alt="donated"
                className="w-[65%] h-[90%] pt-2 "
              />
            </div>
            <span className=" text-sm pt-6 ">Total Blood Donated</span>{" "}
          </div>
          <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#44C13C] p-8 items-center">
            <div className="flex justify-center sm:justify-between items-center gap-8">
              <span className="text-6xl ">{summary.award}</span>
              <img src={Award} alt="awards" className="w-[70%] h-[90%] pt-2 " />
            </div>
            <span className=" text-sm pt-6 ">Total Awards</span>{" "}
          </div>
          <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#FB9637] p-8 items-center">
            <div className="flex justify-center sm:justify-between items-center gap-8 ">
              <span className="text-6xl ">{summary.badge}</span>
              <img src={Badge} alt="barges" className="w-[70%] h-[90%] pt-2 " />
            </div>
            <span className="col-span-3 text-sm pt-6 ">Total Badges</span>{" "}
          </div>
          <div className="bg-white shadow-sm flex flex-col justify-center h-48 rounded-[4px] gap-1 font-semibold text-[#61A0FF] p-8 items-center">
            <div className="flex justify-center sm:justify-between items-center gap-8">
              <span className="text-6xl">{summary.certificate}</span>
              <img
                src={Certificate}
                alt="certificates"
                className="w-[70%] h-[90%] pt-2"
              />
            </div>
            <span className="col-span-3 text-sm pt-6 ">Total Certificates</span>{" "}
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 col-span-4 lg:grid-cols-2 gap-2 w-full">
            <div className="bg-white rounded  ">
              <div className="pl-4 py-6">
                <span className="text-2xl">Donation History</span>
              </div>
              <div className="overflow-x-auto  relative md:col-span-2 col-span-1 bg-white rounded md:items-start">
                <table className="w-full text-sm text-left whitespace-nowrap text-gray-500">
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
                  <tbody className="">
                    {donationHistory.map((history, index) => {
                      return (
                        <tr className="bg-white py-4" key={index}>
                          <th
                            scope="row"
                            className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap left-0 z-10 bg-white"
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
              <div className="flex justify-center my-3">
                <button className="text-red-500 bg-rose-100 shadow-sm font-semibold px-6 rounded py-2 text-sm">
                  Load more
                </button>
              </div>
            </div>
            <div className="bg-white rounded ">
              <div className=" flex flex-col justify-between gap-4 px-4 py-6 w-full">
                <div className="flex justify-between  font-mod-bold font-[500] items-center">
                  <span>Awards Received</span>
                  <span className="text-red-500 cursor-pointer">View All</span>
                </div>
                <div className="text-[#BFBFBF] text-sm">
                  <span>
                    This award is given to you for being brave and heroic
                  </span>
                </div>
                <div>
                  {award.map((award, index) => {
                    return (
                      <div
                        className="flex items-center justify-between py-2"
                        key={index}
                      >
                        <div className="flex items-center gap-4 justify-between">
                          <img
                            src={award.fileType === "pdf" ? Pdf : Nft}
                            alt=""
                          />
                          <div className="flex flex-col justify-between items-start">
                            <div>
                              <span>{award.title}</span>
                            </div>
                            <div>
                              <span className="text-[#BFBFBF]">
                                {award.filesize}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center">
                          <div className="bg-[#333333] hover:bg-opacity-30 bg-opacity-5 hover:bg-rose-300 hover:text-red-700 text-[#575757] cursor-pointer rounded p-2">
                            <span>
                              <DownloadIcon className="h-6 w-6" />
                            </span>
                          </div>
                          <div className="bg-[#333333] hover:bg-opacity-30 bg-opacity-5 hover:bg-rose-300 hover:text-red-700 text-[#575757] cursor-pointer rounded p-2">
                            <span className=" ">
                              <TrashIcon className="h-6 w-6" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center my-3">
                <button className="text-red-500 bg-rose-100 shadow-sm font-semibold px-6 rounded py-2 text-sm">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
