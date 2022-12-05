import React, { useState, useEffect } from "react";
import { Gradient, Patient } from "../../assets/images";
import { Link } from "react-router-dom";
import GaugeChart from "react-gauge-chart";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Calendar from "react-calendar";
import "./Calendar.css";
import { ArrowUpIcon, TrashIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import {
  useGetDonorAppointmentsQuery,
  useDeleteAppointmentMutation,
} from "../../features/apiSlices/appointmentApiSlice";
import DeleteModal from "./DeleteModal";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const PerformanceData = [
  {
    name: "Jan",
    pv: 58,
  },
  {
    name: "Feb",
    pv: 98,
  },
  {
    name: "Mar",
    pv: 38,
  },
  {
    name: "Apr",

    pv: 68,
  },
  {
    name: "May",

    pv: 48,
  },
  {
    name: "Jun",
  },
  {
    name: "Jul",
  },
  {
    name: "Aug",
  },
];
const Dashboard = () => {
  const { username, center_name, id } = useSelector((state) => state.user);
  const names = username.split(" ");
  const firstname = names[0];
  const [show, setShow] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({
    id: "",
    elIndex: "",
  });

  const { data: getDonorAppointments = [], refetch } =
    useGetDonorAppointmentsQuery(id);

  const [deleteAppointment, isLoading] = useDeleteAppointmentMutation();

  const [appointment, setAppointment] = useState(getDonorAppointments);

  const deleteAppointmentFunc = async () => {
    try {
      await deleteAppointment(deleteInfo.id).unwrap();
      setAppointment((prev) => {
        return prev.filter((data) => data.id !== deleteInfo.id);
      });

      setShow(false);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    refetch();

    setAppointment(getDonorAppointments);
  }, [getDonorAppointments, refetch]);

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
        <div className=" md:col-span-2 space-y-4 ">
          <span className="font-[500] h-fit hidden md:inline md:mb-4 text-xl md:text-2xl">
            Hello,{" "}
            {firstname.length > 0
              ? firstname
              : center_name + ", Welcome to your Dashboard"}
          </span>
          <span className="font-[600] text-base h-fit inline-flex items-center justify-between md:hidden md:mb-4 w-full">
            <span>
              {" "}
              Dashboard {">>"} {firstname.length > 0 ? firstname : center_name}
            </span>

            <span className="ml-auto">
              <Link to="/book-appointment">
                <button className=" text-base text-center px-2 bg-red-500  py-1 rounded  text-white block">
                  Book new appointment
                </button>{" "}
              </Link>
            </span>
          </span>{" "}
          <div className="h-[250px] relative rounded">
            <img
              src={Gradient}
              alt=""
              className=" object-cover w-full h-full "
            />
            <div className=" text-white absolute inset-0 w-full md:w-[90%] mx-auto h-full  px-4 py-4 md:py-6 items-center flex justify-center">
              <div className="flex flex-col  justify-between xl:py-2 w-[60%] sm:w-[70%]">
                <span className="pb-2 xl:pb-4 text-xl xl:text-2xl">
                  Donate blood and earn STX
                </span>
                <div className="pb-4 xl:pb-8 max-w-sm">
                  <span className="text-sm">
                    Not all heros wear cape, help save a life and get paid in
                    STX for every donation you make.
                  </span>
                </div>
                <Link to="/who-can-donate">
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
          <div className="py-2 lg:hidden h-full w-full">
            <Calendar />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-2 gap-2 items-start md:col-span-2">
            <div className="flex flex-col justify-between bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6 ">
                <div className="flex flex-col justify-between">
                  <span>Total donations</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center  justify-between text-[#61A0FF] ">
                  <span className="text-3xl  ">{data.length}</span>
                  <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart
                  // width={225}
                  // height={150}
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
            </div>
            <div className="flex flex-col justify-between bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6">
                <div className="flex flex-col justify-between">
                  <span>Total donations</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center justify-between text-[#FB9637] ">
                  <span className="text-3xl  ">{data.length}</span>
                  <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart
                  // width={225}
                  // height={150}
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
                    stroke="#FB9637"
                    fill="#FEEDDC"
                  />
                  <Tooltip />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-between bg-white rounded ">
              <div className="flex justify-between px-2 pt-4 pb-6">
                <div className="flex flex-col justify-between">
                  <span>Total donations</span>
                  <span className="text-[12px]">Last Month</span>
                </div>
                <div className="flex items-center justify-between text-[#F00530] ">
                  <span className="text-3xl  ">{data.length}</span>
                  <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart
                  // width={225}
                  // height={150}
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
                    stroke="#F00530"
                    fill="#FDE3E3"
                  />
                  <Tooltip />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded mt-4">
            <div className="pl-4 pt-2">
              <span className="text-2xl">Pending Appointments</span>
            </div>

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
                    <th scope="col" className="py-3 px-4">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Appointment id
                    </th>
                    <th scope="col" className="py-3 pl-2 pr-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {appointment.map((data, index) => {
                    return (
                      <tr className="bg-white border-b " key={data.id}>
                        <th
                          scope="row"
                          className="py-4 px-4 font-medium text-gray-700 whitespace-nowrap  sticky left-0 z-10 bg-white"
                        >
                          {data.center_name || "Donation Center"}
                        </th>
                        <td className="py-3 px-4">{data.date}</td>
                        <td className="py-3 px-4">{data.time}</td>
                        <td
                          className={`py-3 px-4 ${
                            data.status === "Accepted"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {data.status}
                        </td>
                        <td className="py-3 px-6">{data.id.substring(0, 6)}</td>
                        <td
                          className="py-3 pl-2 pr-6 text-red-500 cursor-pointer"
                          onClick={() => {
                            setShow(true);
                            setDeleteInfo({ id: data.id, elIndex: index });
                          }}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {appointment.length === 0 && (
                <div className="flex justify-center items-center h-20 md:h-40">
                  <span className="text-gray-500">
                    You don't have any appointments
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[102%]">
          <div className=" hidden lg:flex items-center justify-center">
            <span>
              <Link to="/book-appointment">
                <button className=" text-base text-center px-2 bg-red-500  py-1 rounded  text-white block">
                  Book new appointment
                </button>{" "}
              </Link>
            </span>
          </div>
          <div className="py-2 hidden lg:block  h-auto w-full mt-[7px] mb-[9px]">
            <Calendar />
          </div>

          <div className="bg-white rounded hidden flex-col justify-between md:flex h-min w-full p-5 ">
            <div className="pb-4">
              <span className="items-start text-xl">Performance Stats</span>
            </div>{" "}
            <div className=" flex flex-col justify-center  text-gray-700 px-4 py-2">
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
                <span className="xl:pl-4">0%</span>
                <span className="pl-20 xl:pl-28">100%</span>
              </div>
              <div className="flex justify-around items-center mt-4 ">
                <span className="">Completed</span>
                <span className="pl-20">In Progress</span>
              </div>
              <div className="flex justify-around items-center mt-2 ">
                <span className="">0%</span>
                <span className="pl-20">100%</span>
              </div>
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
        <div className="bg-white rounded flex flex-col justify-between md:hidden h-full w-full ">
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
              <span className="">0%</span>
              <span className="pl-20">100%</span>
            </div>
            <div className="flex justify-around items-center mt-4 ">
              <span className="">Completed</span>
              <span className="pl-20">In Progress</span>
            </div>
            <div className="flex justify-around items-center mt-2 ">
              <span className="">0%</span>
              <span className="pl-20">100%</span>
            </div>
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
