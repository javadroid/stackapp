import React from "react";
import { Link } from "react-router-dom";
import { Union, Aid } from "../../assets/images";

const Link2Dashboard = () => {
  return (
    <div className="mb-4 flex flex-col">
      <div className="py-3 md:pb-2 ">
        <span>Congratulations! Your Appointment have been Successfully Scheduled.</span>
      </div>
      <div className="py-8">
        <Link to="/dashboard/main">
          {" "}
          <button className="rounded bg-red-500 text-white md:px-16 py-2 w-full">
            Go To Dashboard
          </button>
        </Link>
      </div>

      <div className="flex items-center w-full md:justify-between justify-evenly gap-4 md:px-8 md:-ml-6 pb-10">
        <div>
          <img src={Aid} alt="" />
        </div>
        <div>
          <img src={Union} alt="" />
        </div>
      </div>
      <div className="pt-2 text-sm italic">
        <span className="font-bold capitalize">Note:</span> After booking your appointment
        with donation center, blood bank or hospital you’ll need to log into
        your dashboard to be able to view or cancel appointments.
      </div>
    </div>
  );
};

export default Link2Dashboard;
