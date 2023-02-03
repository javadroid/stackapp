import { Link, NavLink } from "react-router-dom";
import { RiHistoryLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsWallet } from "react-icons/bs";
import { TbHeartbeat } from "react-icons/tb";

import { LogoDark } from "../../assets/images";

const SideBar = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-start gap-4 h-full">
        <Link to="/" className="py-5 px-4">
          <img className="h-10 w-auto" src={LogoDark} alt="Logo" />
        </Link>

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
            <div className="flex items-center gap-2 w-full h-full py-3 px-2">
              <MdOutlineSpaceDashboard className="h-6 w-6 ml-2" />
              <p>Dashboard</p>
            </div>
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
            <div className="flex items-center gap-2 w-full py-3 px-2">
              <TbHeartbeat className="h-6 w-6 ml-2" />
              <p>Medicals</p>
            </div>
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
            <div className="flex items-center gap-2 w-full py-3 px-2">
              <BsWallet className="h-6 w-6 ml-2" />
              <p>Wallet</p>
            </div>
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
            <div className="flex items-center gap-2 w-full py-3 px-2">
              <RiHistoryLine className="h-6 w-6 ml-2" />
              <p>History</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
