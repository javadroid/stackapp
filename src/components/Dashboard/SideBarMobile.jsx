import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { LogoDark } from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
import { RiHistoryLine, RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsWallet } from "react-icons/bs";
import { TbHeartbeat } from "react-icons/tb";
import {Logout} from "../../features/user/Logout";

const SideBarMobile = () => {
  const LG = Logout();
  const handleLogout = async () => {
    LG.mutate();
  };

  return (
    <Transition
      as={Fragment}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="-translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="-translate-x-0"
      leaveTo="translate-x-full"
    >
      <Popover.Panel
        focus
        className="absolute top-0 right-0 w-[75%] sm:w-[50%] h-[100vh] transition overflow-x-clip z-20 lg:hidden"
      >
        <div className="bg-black fixed inset bg-opacity-30 " />
        <div className="flex flex-col items-start gap-4 h-full bg-slate-50">
          <div className="flex items-center justify-between px-5 w-full py-4 ">
            <div>
              <Link to="/dashboard" className="focus:outline-none focus:ring-0">
                <img className="h-8 w-auto" src={LogoDark} alt="Logo" />
              </Link>
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-ld rounded-md p-2 inline-flex items-center justify-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-6 w-full">
            <NavLink
              to="/dashboard/main"
              className={({ isActive }) =>
                "flex items-center gap-x-3 w-full trans " +
                (isActive
                  ? "bg-[#F00530] bg-opacity-10 text-[#F00530] before-sidebar"
                  : "text-[#333333] bg-transparent")
              }
            >
              {" "}
              <Popover.Button>
                <div className="flex items-center gap-2 w-full h-full py-3 px-2">
                  <MdOutlineSpaceDashboard className="h-6 w-6 ml-2" />
                  <p>Dashboard</p>
                </div>
              </Popover.Button>
            </NavLink>
            <NavLink
              to="/dashboard/medical"
              className={({ isActive }) =>
                "flex items-center gap-x-3 w-full trans " +
                (isActive
                  ? "bg-[#F00530] bg-opacity-10 text-[#F00530] before-sidebar"
                  : "text-[#333333] bg-transparent")
              }
            >
              <Popover.Button>
                <div className="flex items-center gap-2 w-full py-3 px-2">
                  <TbHeartbeat className="h-6 w-6 ml-2" />
                  <p>Medicals</p>
                </div>
              </Popover.Button>
            </NavLink>
            <NavLink
              to="/dashboard/wallet"
              className={({ isActive }) =>
                "flex items-center gap-x-3 w-full trans " +
                (isActive
                  ? "bg-[#F00530] bg-opacity-10 text-[#F00530] before-sidebar"
                  : "text-[#333333] bg-transparent")
              }
            >
              <Popover.Button>
                <div className="flex items-center gap-2 w-full py-3 px-2">
                  <BsWallet className="h-6 w-6 ml-2" />
                  <p>Wallet</p>
                </div>{" "}
              </Popover.Button>
            </NavLink>
            <NavLink
              to="/dashboard/history"
              className={({ isActive }) =>
                "flex items-center gap-x-3 w-full trans " +
                (isActive
                  ? "bg-[#F00530] bg-opacity-10 text-[#F00530] before-sidebar"
                  : "text-[#333333] bg-transparent")
              }
            >
              <Popover.Button>
                <div className="flex items-center gap-2 w-full py-3 px-2">
                  <RiHistoryLine className="h-6 w-6 ml-2" />
                  <p>History</p>
                </div>
              </Popover.Button>
            </NavLink>

            <div
              className="flex items-center gap-x-3 w-full trans"
              onClick={handleLogout}
            >
              <Popover.Button>
                <div className="flex items-center gap-2 w-full py-3 px-2">
                  <RiLogoutCircleLine className="h-6 w-6 ml-2" />
                  <p>Logout</p>
                </div>
              </Popover.Button>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default SideBarMobile;
