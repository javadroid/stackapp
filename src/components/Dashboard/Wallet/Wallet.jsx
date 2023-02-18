/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { BsClipboardPlus } from "react-icons/bs";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";

import {
  Dollar,
  FundAccount,
  Transfer,
  Vault,
  Withdraw,
} from "../../../assets/images";
import Record from "./Record";
import Pagination from "./Pagination";
import Table from "./Table";
import ReceiveWallet from "./ReceiveWallet";
import SendWallet from "./SendWallet";

const Wallet = () => {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(7);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = Record.slice(indexOfFirstRecord, indexOfLastRecord);
  // const currentRecords = [];

  // no of items on a page
  const itemsNo = currentRecords.length;

  // Calculate the number of pages.

  const nPages = Math.ceil(Record.length / recordsPerPage);

  const [receive, setReceive] = useState(false);

  const handlereceive = () => {
    setReceive(!receive);
  }

   const [send, setSend] = useState(false);

  const handlesend = () => {
    setSend(!send);
  }

  return (
    <>
      {receive && <ReceiveWallet setReceive={setReceive } />}
      {send && <SendWallet setSend={ setSend} />}
       <div className="w-full h-full p-4 overflow-x-hidden">
      <div className="pb-4 pt-1">
        <span className="font-[500] hidden md:inline text-xl md:text-2xl whitespace-nowrap">
          My Wallet
        </span>
        <span className="font-[500] inline md:hidden  md:mb-4 text-xl md:text-2xl whitespace-nowrap">
          Dashboard {">>"} STX Wallet
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-2 gap-x-8 gap-y-4 w-full mb-8">
        <div className="bg-[#FCFCFC] flex flex-col py-2 px-4  gap-2 justify-evenly rounded shadow-sm ">
          <div className="flex justify-between py-4 ">
            <span>Total Balance</span>
          </div>
          <div className="">
            <span className="tracking-wide">
              <span className="text-5xl font-semibold">0.00</span>
              <span className="text-1xl">
                STX<span className="px-2 inline md:hidden lg:inline">≈</span>
              </span>
              <span className="text-gray-500 text-1xl inline md:block lg:inline">
                <span className="font-semibold font-sans">{"₦"}</span>0.00
              </span>
            </span>
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap py-4">
            <span className="text-gray-500">Q0GP2DPPE4H9N0G...</span>
            <FiCopy className="ml-2 text-[#BFBFBF]" />
          </div>handle
          <div className="flex w-[60%] md:w-full items-center gap-6 md:gap-4 py-4 text-white">
            <button onClick={handlesend} className="align-center bg-red-500 w-[50%] py-3 px-3 lg:px-6 md:px-4 rounded flex gap-1 justify-center items-center ">
              <ArrowUpIcon className="h-5 w-5 mr-1" />
              Send
            </button>
            <button onClick={handlereceive} className="bg-red-500 w-[50%] py-3 px-1 lg:px-5 md:px-2 rounded flex gap-1 justify-center items-center">
              <ArrowDownIcon className="h-5 w-5 mr-1" />
              Receive
            </button>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-4 justify-start md:justify-center bg-[#FCFCFC] rounded shadow-sm px-4 py-6">
          <div className="mr-auto">
            <span>Quick Links</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-4 gap-y-7">
            <div className="bg-white flex justify-center lg:flex-col lg:justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Buy STX</span>
            </div>
            <div className="bg-white flex justify-center lg:flex-col lg:justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Withdraw} className="h-10 w-10" alt="dollar" />
              </span>
              <span className="">Withdraw Fund</span>
            </div>
            <div className="bg-white flex justify-center lg:flex-col lg:justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={FundAccount} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Fund account</span>
            </div>
            <div className="bg-white flex justify-center lg:flex-col lg:justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Transfer} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Bank transfer</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[white] px-4 py-6 sm:col-span-4 rounded">
          <div className="flex justify-between">
            <div className="font-semibold">Transactions</div>

            {currentRecords.length ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className=" flex justify-between gap-2 items-center rounded-xl text-zinc-500 border px-4 py-2 border-zinc-600">
                      <BsClipboardPlus className="h-5 w-5 " />
                      Export
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
                      <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 pl-2 pr-12 w-max ">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                          <div className="relative grid text-[14px] gap-4 bg-white p-2 text-zinc-600  ">
                            <div className=" px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                              Export as .xlsx
                            </div>

                            <div className="px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap">
                              Export as .doc
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap">
                              Export as .pdf
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ): ("")}
          </div>
          {currentRecords.length ? (
            <>
              <Table record={currentRecords} />
              <div className="sm:col-span-3">
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  recordsPerPage={itemsNo}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-12 py-8">
              <img src={Vault} alt="vault" />
              <div className="text-[#BFBFBF] flex flex-col gap-1 justify-center items-center">
                <span>This is where you’ll see all your transactions.</span>
                <span>Get some STX to get started.</span>
              </div>
              <div>
                <button className="text-red-500 bg-rose-100 shadow-sm font-semibold px-6 rounded py-2 text-sm">
                  Fund your account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Wallet;
