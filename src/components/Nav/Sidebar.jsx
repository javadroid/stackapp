import React, { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import { LogoDark } from "../../assets/images";

import { Link } from "react-router-dom";
import { solutions, resources } from "./NavbarData";
import { useSelector } from "react-redux";

const Sidebar = ({ openModal, openSignUpModal }) => {
  const { loginState } = useSelector((state) => state.user);

  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
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
        className="absolute top-0 right-0 w-[85%] h-screen transition overflow-x-hidden lg:hidden z-20 md:hidden"
      >
        <div className="">
          <div className="shadow-lg ring-1 h-screen  ring-black ring-opacity-5 bg-white">
            <div className="pt- pb-6  ">
              <div className="flex pt-4 px-8 mb-5 items-center justify-between">
                <div className="">
                  <img className="h-10 w-auto" src={LogoDark} alt="Logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#575757]  hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-2">
                <nav className="flex flex-col justify-between items-left">
                  <Disclosure
                    as="div"
                    className="mt-2 py-5 border-t border-solid"
                  >
                    {({ open }) => (
                      <>
                        <div className=" py-auto px-2 rounded-md ">
                          <Disclosure.Button
                            as="div"
                            className={`transition duration-100 ease-in-out ${
                              open ? "text-red-600 " : "text-black "
                            } w-full flex justify-between px-2 items-center"
                            } `}
                          >
                            <span className="float-left text-base font-medium ">
                              <h4>Make an Appointment</h4>
                            </span>
                            <ChevronUpIcon
                              className={`transition duration-300 ease-in-out text-gray-500 ${
                                open ? "rotate-180 transform text-red-600" : ""
                              } h-6 w-6  shrink float-right right-0`}
                            />
                          </Disclosure.Button>
                        </div>
                        {solutions.map((item, index) => {
                          return (
                            <Disclosure.Panel
                              className="text-left px-7 pt-6 text-base text-black"
                              key={index}
                            >
                              <Link to={item.href}>
                                {" "}
                                <Popover.Button>{item.name}</Popover.Button>
                              </Link>
                            </Disclosure.Panel>
                          );
                        })}
                      </>
                    )}
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className="mt-2 py-4 border-t border-solid"
                  >
                    {({ open }) => (
                      <>
                        <div className=" py-auto px-2 rounded-md ">
                          <Disclosure.Button
                            as="div"
                            className={`${
                              open ? "text-red-600 " : "text-black "
                            } w-full flex justify-between px-2  items-center"
                            } `}
                          >
                            <span className="float-left text-base font-medium ">
                              <h4>Who can donate blood</h4>
                            </span>
                            <ChevronUpIcon
                              className={`transition duration-300 ease-in-out text-gray-500 ${
                                open ? "rotate-180 transform text-red-600" : ""
                              } h-6 w-6 shrink float-right right-0`}
                            />
                          </Disclosure.Button>
                        </div>
                        {resources.map((item, index) => {
                          return (
                            <Disclosure.Panel
                              className="text-left px-7 pt-6 text-base text-black"
                              key={index}
                            >
                              <Link to={item.href}>
                                {" "}
                                <Popover.Button>{item.name}</Popover.Button>
                              </Link>
                            </Disclosure.Panel>
                          );
                        })}
                      </>
                    )}
                  </Disclosure>
                  <div className="mt-2 py-5  border-t border-solid">
                    <Link
                      to="/aboutus"
                      className="text-black text-base font-medium px-4"
                    >
                      <Popover.Button>About us</Popover.Button>
                    </Link>
                  </div>
                  <div className="mt-2 py-5 border-t-2 border-solid">
                    <div className="text-black text-base font-medium px-4">
                      <Popover.Button>Blog</Popover.Button>
                    </div>
                  </div>
                  {!loginState && (
                    <>
                      <div className="mt-2 py-5 border-t-2 border-solid">
                        <div
                          className="text-black text-base font-medium px-4"
                          onClick={openSignUpModal}
                        >
                          <Popover.Button>Sign Up</Popover.Button>
                        </div>
                      </div>
                      <div className="mt-2 py-5 border-t-2 border-solid">
                        <div
                          className="text-black text-base font-medium px-4"
                          onClick={openModal}
                        >
                          <Popover.Button>Login</Popover.Button>
                        </div>
                      </div>
                    </>
                  )}
                  {loginState && (
                    <>
                      <div className="mt-2 py-5 border-t-2 border-solid">
                        <Link
                          className="text-black text-base font-medium px-4"
                          to="/dashboard/main"
                        >
                          <Popover.Button>Dashboard</Popover.Button>
                        </Link>
                      </div>
                      <div className="mt-2 py-5 border-t-2 border-solid">
                        <div
                          className="text-black text-base font-medium px-4"
                          onClick={handleLogout}
                        >
                          <Popover.Button>Logout</Popover.Button>
                        </div>
                      </div>
                    </>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default Sidebar;
