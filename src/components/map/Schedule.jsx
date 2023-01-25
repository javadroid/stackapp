import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from "../../features/apiSlices/appointmentApiSlice";

import Link2Dashboard from "./Link2Dashboard";

const Schedule = ({ CenterList, centerId }) => {
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const {
    username,
    phone,
    id,
    center_name: HospitalName,
  } = useSelector((state) => state.user);

  const [createAppointment, isLoading] = useCreateAppointmentMutation();

  const [bookingInfo, setBookingInfo] = useState({
    donor: id,
    phone: phone,
    blood_center: centerId,
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
    if (bookingInfo.date === "" || bookingInfo.time === "") {
      alert("Please fill in all fields");
      return;
    }
    if (Loading) return;
    try {
      setLoading(true);
      const response = await createAppointment(bookingInfo).unwrap();
      setShow(!show);
    } catch (err) {
    }
    setLoading(false);
  };
  return (
    <>
      {!show ? (
        CenterList.filter((center) => center.id === centerId).map(
          ({ center_name, id }) => {
            return (
              <form
                className="mb-4 flex flex-col  md:border-0 border border-x-0 border-b-0 border-t-gray-500 "
                key={id}
                onSubmit={book}
              >
                <div className="py-3 md:pb-2 ">
                  <span>{center_name}</span>
                </div>
                <div className=" pt-2 pb-6 text-sm">
                  <span>Appointment Schedule</span>
                </div>
                <div className="mb-4">
                  {username.length > 2 ? (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="Fullname"
                      type="text"
                      value={username}
                      readOnly
                    />
                  ) : (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="Fullname"
                      type="text"
                      value={HospitalName}
                      readOnly
                    />
                  )}
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="phone"
                    value={phone}
                    readOnly
                  />
                </div>
                <div className="mb-6 grid grid-cols-2 justify-between gap-2">
                  <label htmlFor="date">Pick Date | Time</label>
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
                    placeholder="08:00"
                    name="time"
                    min="08:00:00" max="16:00:00"
                    value={bookingInfo.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pb-4">
                  <button className="rounded bg-red-500 text-white px-8 py-2">
                    Schedule Appointment
                  </button>
                </div>
                <div className="pt-2 text-sm">
                  <span className="font-bold">Note :</span> After booking your
                  appointment with donation center, blood bank or hospital
                  you’ll need to log into your dashboard to be able to view or
                  cancel appointments.
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
