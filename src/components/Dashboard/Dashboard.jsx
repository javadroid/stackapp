import { useState, useEffect, lazy, Suspense, Fragment } from "react";
import { Gradient, Patient } from "../../assets/images";
import { Link } from "react-router-dom";
import GaugeChart from "react-gauge-chart";
import Calendar from "react-calendar";
import "./Calendar.css";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import {
  useGetDonorsAppointmentsQuery,
  useDeleteAppointmentMutation,
} from "../../features/apiSlices/appointmentApiSlice";
import DeleteModal from "./DeleteModal";
import { useUserQuery } from "../../features/user/useUser";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import EmptyState from "../../utils/EmptyState";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const AreaChart = lazy(() =>
  import("recharts").then((module) => {
    return { default: module.AreaChart };
  })
);

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page C",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page D",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page E",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page F",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 0,
    amt: 0,
  },
];

const PerformanceData = [
  {
    name: "Jan",
    pv: 0,
  },
  {
    name: "Feb",
    pv: 0,
  },
  {
    name: "Mar",
    pv: 0,
  },
  {
    name: "Apr",
    pv: 0,
  },
  {
    name: "May",
    pv: 0,
  },
  {
    name: "Jun",
    pv: 0,
  },
  {
    name: "Jul",
    pv: 0,
  },
  {
    name: "Aug",
    pv: 0,
  },
];
const init = {
  id: "",
  first_name: "",
  center_name: "",
  account_type: "",
};

const Dashboard = () => {
  const { isSuccess, data: details } = useUserQuery();
  const { id, first_name, center_name, account_type } = isSuccess
    ? details
    : init;
  const firstname = first_name;
  const [show, setShow] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({
    id: "",
    elIndex: "",
  });
  const isLoading = !1;

  const { data: getDonorAppointments, isSuccess: Success } =
    useGetDonorsAppointmentsQuery({ donor_id: id, account_type });
  //   useGetDonorsAppointmentsQuery(id);

  // const [deleteAppointment, isLoading] = useDeleteAppointmentMutation();

  const [appointment, setAppointment] = useState([]);

  const deleteAppointmentFunc = async () => {
    try {
      // await deleteAppointment(deleteInfo.id).unwrap();
      setAppointment((prev) => {
        return prev.filter((data) => data.id !== deleteInfo.id);
      });

      setShow(false);
      // refetch();
    } catch (err) {}
  };
  useEffect(() => {
    Success && setAppointment(getDonorAppointments);
  }, [getDonorAppointments]);

  return (
    <>
      <DeleteModal
        show={show}
        setShow={setShow}
        isLoading={isLoading}
        deleteAppointmentFunc={deleteAppointmentFunc}
      />
      <div className="grid  grid-cols-1 lg:grid-cols-3  grid-flow-row gap-4 w-full  h-full p-4">
        {/* First Grid( Banner, 3 Cards and Pending Appointments) */}
        <div className=" md:col-span-2 sace-y-4 ">
          <span className="capitalize lg:flex lg:items-center font-[500] h-fit hidden md:inline md:mb-4 text-xl md:text-2xl">
            Hello,{" "}
            {firstname.length
              ? firstname
              : center_name + ", Welcome to your Dashboard"}
          </span>
          <span className="font-[600] text-base h-fit inline-flex items-center justify-between md:hidden md:mb-4 w-full">
            <span>
              {" "}
              Dashboard {">>"} {firstname.length > 0 ? firstname : center_name}
            </span>

            <span className="ml-auto">
              {account_type === "donor" ? (
                <Link to="/book-appointment">
                  <button className=" text-base text-center px-2 bg-red-500  py-1 rounded  text-white block">
                    Book new appointment
                  </button>{" "}
                </Link>
              ) : (
                <Link to="/request-blood">
                  <button className=" text-base text-center px-2 bg-red-500  py-1 rounded  text-white block">
                    Request blood
                  </button>{" "}
                </Link>
              )}
            </span>
          </span>
          <div className="mt-10 h-[250px] relative">
            <img
              src={Gradient}
              alt=""
              className=" object-cover w-full h-full rounded-md"
            />
            <div className="text-white absolute inset-0 w-full md:w-[90%] mx-auto h-full  px-4 py-4 md:py-6 items-center flex justify-center">
              <div className="flex flex-col  justify-between xl:py-2 w-[60%] sm:w-[70%]">
                <span className="pb-2 xl:pb-4 text-xl xl:text-2xl">
                  Donate Blood and earn STX
                </span>
                <div className="pb-4 xl:pb-8 max-w-sm">
                  <span className="text-sm">
                    Not all heros wear cape, help save a life and get paid in
                    STX for every donation you make.
                  </span>
                </div>
                <Link to="/book-appointment">
                  <button className="rounded bg-white text-red-500 w-fit px-8 py-2">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="-py-10 w-[40%] sm:w-[30%] ">
                <img src={Patient} alt="" className="h-36 xl:h-44 mr-auto" />
              </div>
            </div>
          </div>
          <div className="pb-3 lg:hidden h-auto w-full">
            <Calendar />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-2 gap-2 items-start md:col-span-2">
            <div className="flex flex-col justify-between bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6 ">
                <div className="flex flex-col justify-between">
                  <span>Total Paint Donated</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center  justify-between text-[#61A0FF] ">
                  <span className="text-3xl  ">{data.length}</span>
                  <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
                </div>
              </div>
              <Suspense fallback={<p>Loading data...</p>}>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#61A0FF"
                      fill="#CCE0FF"
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
            <div className="flex flex-col justify-between   bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6">
                <div className="flex flex-col justify-between">
                  <span>Total Amount Earned</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center justify-between text-[#FB9637] ">
                  <span className="text-3xl  ">
                    <span className="font-semibold font-sans">{"₦"}</span>
                    {data.length}
                  </span>
                  <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm" />
                </div>
              </div>
              <Suspense fallback={<p>Loading data...</p>}>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#FB9637"
                      fill="#FEEDDC"
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
            <div className="flex flex-col justify-between bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6">
                <div className="flex flex-col justify-between">
                  <span>Withdrawals</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center justify-between text-[#F00530] ">
                  <span className="text-3xl  ">{data.length}</span>
                  <ArrowDownIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
                </div>
              </div>
              <Suspense fallback={<p>Loading data...</p>}>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Area
                      type="monotone"
                      dataKey="amt"
                      stroke="#F00530"
                      fill="#FDE3E3"
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
          </div>
          <div className="bg-white rounded mt-4">
            <div className="pl-4 pt-2">
              <span className="text-2xl">Pending Appointments</span>
            </div>
            {appointment.length ? (
              account_type === "donor" ? (
                <div className="overflow-x-auto relative md:col-span-2 py-5 md:row-span-2 bg-white rounded md:items-start">
                  <table className="w-full whitespace-nowrap text-sm text-left text-gray-500">
                    <thead className="text-xs  text-gray-700 border-b uppercase  ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 sticky left-0 z-10  bg-white"
                        >
                          Center Name
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Date
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Time
                        </th>
                        <th scope="col" className="py-3 px-4 text-center">
                          Approval
                        </th>
                        <th scope="col" className="py-3 px-4 text-center">
                          Status
                        </th>
                        <th scope="col" className="text-center py-3 px-4">
                          Appointment id
                        </th>
                        <th scope="col" className="py-3 pl-2 pr-6"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointment.map((data, index) => {
                        return (
                          <tr
                            className={`bg-white ${
                              index + 1 === appointment.length ? "" : "border-b"
                            } `}
                            key={index}
                          >
                            <th
                              scope="row"
                              className="py-4 px-4 capitalize text-black font-semibold whitespace-nowrap  sticky left-0 z-10 "
                            >
                              {data.centerName}
                            </th>
                            <td className="py-3 px-4">{data.date}</td>
                            <td className="py-3 px-4">{data.time}</td>
                            <td>
                              <p
                                className={`py-1 px-1 rounded-lg text-center mx-3 capitalize ${
                                  data.approval === "accepted"
                                    ? "text-green-700 bg-green-200"
                                    : data.approval === "pending"
                                    ? "text-yellow-700 bg-yellow-200"
                                    : "text-red-700 bg-rose-200"
                                }`}
                              >
                                {data.approval}
                              </p>
                            </td>
                            <td>
                              <p
                                className={`py-1 px-1 rounded-lg text-center mx-3 capitalize ${
                                  data.status === "completed"
                                    ? "text-green-700 bg-green-200"
                                    : data.status === "in progress"
                                    ? "text-blue-700 bg-blue-200"
                                    : "text-black bg-zinc-300"
                                }`}
                              >
                                {data.status}
                              </p>
                            </td>
                            <td className="py-3 px-6 text-black font-semibold">
                              {data.id}
                            </td>
                            <td
                              className="py-3 pl-2 pr-6 text-red-500 cursor-pointer"
                              onClick={() => {
                                setShow(true);
                                setDeleteInfo({ id: data.id, elIndex: index });
                              }}
                            >
                              <TrashIcon className="h-6 w-6" />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto relative md:col-span-2 py-5 md:row-span-2 bg-white rounded md:items-start">
                  <table className="w-full whitespace-nowrap text-sm text-left text-gray-500">
                    <thead className="text-xs  text-gray-700 border-b uppercase  ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 sticky left-0 z-10  bg-white"
                        >
                          Donor
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Date
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Time
                        </th>
                        <th scope="col" className="py-3 px-4 text-center">
                          Approval
                        </th>
                        <th scope="col" className="py-3 px-4 text-center">
                          Status
                        </th>
                        <th scope="col" className="text-center py-3 px-4">
                          Appointment id
                        </th>
                        <th scope="col" className="py-3 pl-2 pr-6"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointment.map((data, index) => {
                        return (
                          <tr
                            className={`bg-white ${
                              index + 1 === appointment.length ? "" : "border-b"
                            } `}
                            key={index}
                          >
                            <th
                              scope="row"
                              className="py-4 px-4 capitalize text-black font-semibold whitespace-nowrap  sticky left-0 z-10 bg-white"
                            >
                              {data.donor}
                            </th>
                            <td className="py-3 px-4">{data.date}</td>
                            <td className="py-3 px-4">{data.time}</td>
                            <td>
                              <p
                                className={`py-1 px-1 rounded-lg text-center mx-3 capitalize ${
                                  data.approval === "accepted"
                                    ? "text-green-700 bg-green-200"
                                    : data.approval === "pending"
                                    ? "text-yellow-700 bg-yellow-200"
                                    : "text-red-700 bg-rose-200"
                                }`}
                              >
                                {data.approval}
                              </p>
                            </td>
                            <td>
                              <p
                                className={`py-1 px-1 rounded-lg text-center mx-3 capitalize ${
                                  data.status === "completed"
                                    ? "text-green-700 bg-green-200"
                                    : data.status === "in progress"
                                    ? "text-blue-700 bg-blue-200"
                                    : "text-black bg-zinc-300"
                                }`}
                              >
                                {data.status}
                              </p>
                            </td>
                            <td className="py-3 px-6 text-black font-semibold">
                              {data.id}
                            </td>
                            <td>
                              {data.approval === "pending" ? (
                                <Popover className="relative">
                                  {({ open }) => (
                                    <>
                                      <Popover.Button>
                                        <div className="flex gap-2 px-3 py-1">
                                          Action &nbsp;
                                          <ChevronDownIcon
                                            className={`${
                                              open
                                                ? "rotate-180 transform"
                                                : " "
                                            }
                                              h-5 w-5 transition-all duration-200 ease-in-out
                                            `}
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
                                            <div className=" relative px-4 py-2 text-[12px] lg:text-base text-gray-900 border-b bg-zinc-200">
                                              {data.approval}
                                            </div>
                                            <div className="relative grid gap-4 bg-white px-4 py-6">
                                              <div className="flex items-center gap-1 text-[12px] lg:text-base text-gray-900 cursor-pointer">
                                                Cancel
                                              </div>
                                              <div className="flex items-center gap-1 text-[12px] lg:text-base text-gray-900 cursor-pointer">
                                                Accept
                                              </div>
                                            </div>
                                          </div>
                                        </Popover.Panel>
                                      </Transition>
                                    </>
                                  )}
                                </Popover>
                              ) : (
                                ""
                              )}
                              {data.approval === "accepted" &&
                              data.status !== "completed" ? (
                                <button
                                  type="button"
                                  className="px-4 py-2 rounded-md shadow-sm text-green-500 bg-green-200 font-semibold"
                                >
                                  COMPLETED
                                </button>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )
            ) : (
              <EmptyState message={"No appointments yet"} />
            )}
          </div>
        </div>

        <div className="w-[102%]">
          <div className="py-4 hidden lg:flex items-center justify-center">
            <span>
              {account_type === "donor" ? (
                <Link to="/book-appointment">
                  <button className="outline xl:text-base text-center sm:text-sm sm:px-1 sm:py-2 outline-offset-6 xl:px-6 xl:py-2 rounded outline-red-500 text-red-500 block">
                    Book new appointment
                  </button>{" "}
                </Link>
              ) : (
                <Link to="/request-blood">
                  <button className="outline xl:text-base text-center sm:text-sm sm:px-1 sm:py-2 outline-offset-6 xl:px-6 xl:py-2 rounded outline-red-500 text-red-500 block">
                    Request blood
                  </button>{" "}
                </Link>
              )}
            </span>
          </div>
          <div className="pb-2 hidden lg:block  h-auto w-full">
            <Calendar />
          </div>

          <div className="bg-white rounded hidden flex-col justify-between md:flex h-min w-full p-5 ">
            <div className="pb-4">
              <span className="items-start text-xl">Performance Stats</span>
            </div>{" "}
            <div className=" flex flex-col justify-center  text-gray-700 px-4 py-2 md:my-2">
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={2}
                percent={0.26}
                colors={["red", "#FEE6EB"]}
                arcPadding={0}
                needleBaseColor="red"
                needleColor="gray"
                arcsLength={[0.26, 0.74]}
                textColor="gray"
              />
              <div className="flex justify-around items-center -mt-4 ">
                <span className="xl:pl-4">26%</span>
                <span className="pl-20 xl:pl-28">74%</span>
              </div>
              <div className="flex justify-around items-center mt-4 ">
                <span className="">Completed</span>
                <span className="pl-20">Not Completed</span>
              </div>
              {/* <div className="flex justify-around items-center mt-2 ">
                <span className="">74%</span>
                <span className="pl-20">100%</span>
              </div> */}
            </div>
            <div className="pb-6">
              <span className="items-start text-xl">Your Performance</span>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={PerformanceData}>
                  <XAxis dataKey="name" />
                  <CartesianGrid strokeDasharray="4 4" vertical={false} />
                  <YAxis axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#F00530"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Performance Stats and Your Performance */}
        <div className="p-5 bg-white rounded flex flex-col justify-between md:hidden h-full w-full ">
          <div className="pb-4">
            <span className="items-start text-xl">Performance Stats</span>
          </div>{" "}
          <div className=" flex flex-col justify-center text-gray-700 px-4 py-4 w-full">
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={2}
              percent={0.26}
              colors={["red", "#FEE6EB"]}
              arcPadding={0}
              needleBaseColor="red"
              needleColor="gray"
              arcsLength={[0.26, 0.74]}
              textColor="gray"
            />
            <div className="flex justify-around items-center -mt-4 ">
              <span className="">26%</span>
              <span className="pl-20">74%</span>
            </div>
            <div className="flex justify-around items-center mt-4 ">
              <span className="">Completed</span>
              <span className="pl-20">Not Completed</span>
            </div>
            {/* <div className="flex justify-around items-center mt-2 ">
              <span className="">0%</span>
              <span className="pl-20">100%</span>
            </div> */}
          </div>
          <div className="py-6">
            <span className="items-start text-xl">Your Performance</span>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={PerformanceData}>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <YAxis axisLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#F00530"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
