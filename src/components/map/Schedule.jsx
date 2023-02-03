import React, { useState } from "react";
import { useUserQuery } from "../../features/user/useUser";
import { toast } from "react-hot-toast";
import { getUserDetailsQuery } from "../../features/user/useUser";
import { useMutation } from "@tanstack/react-query";
import { useCreateAppointmentsMutation } from "../../features/apiSlices/appointmentApiSlice";

import Link2Dashboard from "./Link2Dashboard";

const init = { first_name: "", last_name: "", phone: "", id: "" };
const Schedule = ({ CenterList, centerId }) => {
  const [show, setShow] = useState(!1);
  const { isSuccess, isError: Error, data } = useUserQuery();

  const { first_name, last_name, phone, id } = isSuccess ? data : init;
  const username = `${first_name} ${last_name}`;

  const { mutate, isLoading } = useMutation({
    mutationKey: "createAppointment",
    mutationFn: useCreateAppointmentsMutation,
    onMutate: () => {
      toast.loading("Scheduling your appointment, Please wait...", {
        id: "loadingToast",
      });
    },
    onSuccess: () => {
      setShow(!show);
      toast.dismiss();
    },
  });

  const [bookingInfo, setBookingInfo] = useState({
    donor: id,
    phone: phone,
    blood_center: centerId,
    approval: "pending",
    status: "pending",
    time: "",
    date: "",
    reason_for_decline: "processing",
  });

  const handleChange = (event) => {
    setBookingInfo({ ...bookingInfo, [event.target.name]: event.target.value });
  };

  const book = async (e) => {
    e.preventDefault();
    await mutate(bookingInfo);
  };
  return (
    <>
      {!show ? (
        CenterList.filter((center) => center.id === centerId).map(
          ({ center_name, id }) => {
            return (
              <form className="mb-4 flex flex-col" key={id} onSubmit={book}>
                <div className="py-3 md:pb-2 ">
                  <span className="text-1xl font-bold uppercase">
                    {center_name}
                  </span>
                </div>
                <div className=" pt-2 pb-6 text-sm">
                  <span>Appointment Schedule</span>
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border border-opacity-5 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                    id="Fullname"
                    type="text"
                    defaultValue={username}
                    readOnly
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border  border-opacity-5 rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="phone"
                    defaultValue={phone}
                  />
                </div>
                <div className="mb-6 flex-col justify-between gap-2">
                  <label htmlFor="date" className="mb-2">
                    Pick Date | Time
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    placeholder="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={bookingInfo.date}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                    type="time"
                    placeholder="00:00"
                    name="time"
                    value={bookingInfo.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pb-4">
                  <button
                    className="rounded bg-red-500 text-white px-8 py-2"
                    disabled={isLoading}
                  >
                    Schedule Appointment
                  </button>
                </div>
                <div className="pt-2 text-sm italic">
                  <span className="font-bold capitalize">Note:</span> After
                  booking your appointment with donation center, blood bank or
                  hospital you’ll need to log into your dashboard to be able to
                  view or cancel appointments.
                </div>
              </form>
            );
          }
        )
      ) : (
        <Link2Dashboard />
      )}
      {}
    </>
  );
};

export default Schedule;
