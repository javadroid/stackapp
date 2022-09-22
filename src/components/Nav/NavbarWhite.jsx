/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ViewListIcon, UploadIcon } from "@heroicons/react/outline";
import {LogoDark, ProfilePhoto } from "../../assets/images";
import { Link } from "react-router-dom";
import SignIn from "../Modal/SignIn";
import SignUp from "../Modal/SignUp";
import Sidebar from "./Sidebar";
import { solutions, resources } from "./NavbarData";
import { useSelector } from "react-redux";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ bgColor, textColor }) {
  const { username, loginState } = useSelector((state) => state.user);

  const handleLogout = () => {
    // dispatch({ type: 'LOGOUT'})
  }
  let [SignUpOpen, setSignUpOpen] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeSignUpModal() {
    setSignUpOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openSignUpModal() {
    setSignUpOpen(true);
  }

  return (
    <>
      <SignIn
        isModalOpen={isOpen}
        closeModalFunc={closeModal}
        openSignUpModalFunc={openSignUpModal}
        closeSignUpModalFunc={closeSignUpModal}
      />
      <SignUp
        isModalOpen={SignUpOpen}
        closeModalFunc={closeSignUpModal}
        openLoginModalFunc={openModal}
        closeLoginModalFunc={closeModal}
      />
      <Popover
        className={`relative bg-${bgColor} h-full md:overflow-visible overflow-x-clip text-${textColor} text-[14px]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6  md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-10 w-auto" src={LogoDark} alt="Logo" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button
                className={`bg--${bgColor} rounded-md p-2 inline-flex items-center justify-center text--${textColor} hover:text-white-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500`}
              >
                <span className="sr-only">Open menu</span>
                <ViewListIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group
              as="nav"
              className="hidden md:flex md:items-center space-x-10"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-[#F00530]" : "text-white-500",
                        "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                      )}
                    >
                      <span className="text-[12px] lg:text-base font-[400]">
                        Make an appointment
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white-600" : "text-white-400",
                          "ml-1 lg:ml-2 h-5 w-5 group-hover:text-white-500"
                        )}
                        aria-hidden="true"
                      />
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
                      <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200"
                              >
                                <div className="">
                                  <p className="text-[12px] lg:text-base text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-[#F00530]" : "text-white-500",
                        "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                      )}
                    >
                      <span className="text-[12px] lg:text-base font-[400]">
                        Who can donate blood
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white-600" : "text-white-400",
                          "ml-1 lg:ml-2 h-5 w-5 group-hover:text-white-500"
                        )}
                        aria-hidden="true"
                      />
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
                      <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full max-w-md sm:px-0">
                        <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.link}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="ml-1">
                                  <p className="text-[12px] lg:text-base text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                to="/aboutus"
                className="text-[12px] lg:text-base text-white-500 hover:text-white-900"
              >
                About Us
              </Link>
            </Popover.Group>
              {/* Display signup and sign-in button when loginState is false */}
              {!loginState && <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                onClick={openSignUpModal}
                className="whitespace-nowrap text-white-500 hover:text-white-900 text-[12px] lg:text-base"
              >
                Sign up
              </button>
              <button
                onClick={openModal}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-sm shadow-sm text-[12px] lg:text-base font-normal text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </button>
            </div>}
            {/* else display user avatar and name popover when a user is not signed in */}
            {/* Profile Icon */}
          {/* Profile Icon */}
          {loginState && (
              <Popover className="relative">
                {({ open }) => (
                  <>
                  <Popover.Button
                  className={classNames(
                    open ? "text-[#F00530]" : `tex-${textColor}`,
                    "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                  )}
                >
                  <div
                    className="hidden md:flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`h-6 w-6 rounded-full overflow-hidden relative border border-${textColor}`}
                    >
                      <img
                        className="absolute h-full w-full object-center object-cover"
                        src={ProfilePhoto}
                        alt="menu"
                      />
                    </div>
                    <div className={`hidden md:flex trans`}>
                      {username}
                    </div>
                    <ChevronDownIcon
                        className={classNames(
                          open
                            ? "rotate-180 transform"
                            : " ",
                          "h-5 w-5 transition-all duration-200 ease-in-out"
                        )}
                        aria-hidden="true"
                      />
                  </div>
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
                   <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full max-w-md sm:px-0">
                     <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                       <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8">
                          <Link to="/dashboard/main">
                         <div className="text-[12px] lg:text-base text-gray-900">Dashboard</div>
                          </Link>
                          <div
                            className="flex items-center gap-1 text-[12px] lg:text-base text-gray-900 cursor-pointer"
                            onClick={handleLogout}
                          >
                            <UploadIcon className="rotate-90 h-4 w-4"/>
                            Sign out
                          </div>
                       </div>
                     </div>
                   </Popover.Panel>
                 </Transition>
                 </>
                )}
              </Popover>
            )}
          </div>
        </div>
        <Sidebar
          openModal={openModal}
          openSignUpModal={openSignUpModal}
          closeModal={closeModal}
          closeSignUpModal={closeSignUpModal}
        />
      </Popover>
    </>
  );
}
