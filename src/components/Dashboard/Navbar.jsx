import { Fragment } from "react";
import { BellIcon, MenuIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ProfilePhoto, DropletIcon } from "../../assets/images";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import SideBarMobile from "./SideBarMobile";
import { UploadIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

const Navbar = () => {
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Popover className="flex items-center w-full justify-between px-6 py-6 bg-[#FCFCFC] relative lg:overflow-visible overflow-x-clip">
      <div className="flex items-center w-full justify-between bg-[#FCFCFC]">
        <div className="flex lg:hidden gap-2 items-center">
          <Link to="/">
            <img className="h-8 w-auto" src={DropletIcon} alt="Logo" />
          </Link>
          <Popover.Button className="flex items-center justify-center rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-8 w-8 text-[#575757]" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:block text-2xl">Dashboard</div>
        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-[#FFF5F7] py-2 px-4 rounded-full text-[#F00530] border border-transparent focus:border-[#F00530]">
            Connect STX Account
          </button>
          {/* Notifications Icon */}
          <div>
            <BellIcon className="text-[#575757] h-8 w-8 cursor-pointer" />
          </div>
          {/* Profile Icon */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-[#F00530]" : "text-gray-800",
                      "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                    )}
                  >
                    <div className="hidden md:flex items-center gap-2 cursor-pointer">
                      <div
                        className={`h-6 w-6 rounded-full overflow-hidden relative border border-black`}
                      >
                        <img
                          className="absolute h-full w-full object-center object-cover"
                          src={ProfilePhoto}
                          alt="menu"
                        />
                      </div>
                      <div className={`hidden md:flex trans`}>{username}</div>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180 transform" : " ",
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
                        <div className="relative grid gap-4 bg-white px-4 py-6">
                          <Link to="/dashboard/main">
                            <div className="text-[12px] lg:text-base text-gray-900">
                              Dashboard
                            </div>
                          </Link>
                          <div
                            className="flex items-center gap-1 text-[12px] lg:text-base text-gray-900 cursor-pointer"
                            onClick={handleLogout}
                          >
                            <UploadIcon className="rotate-90 h-4 w-4" />
                            Sign out
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
      <SideBarMobile />
    </Popover>
  );
};

export default Navbar;
