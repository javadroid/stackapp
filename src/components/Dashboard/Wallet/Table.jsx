import React from "react";

const Table = ({ record }) => {
  // User is currently on this page

  return (
    <div className="overflow-x-auto  relative py-4 bg-white rounded md:items-start">
      <table className="w-full text-sm text-left whitespace-nowrap text-gray-500 ">
        <thead className="text-xs  text-gray-700 border-b   ">
          <tr>
            <th scope="col" className="py-3 px-6   bg-white ">
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 focus:ring-rose-600  "
              />
            </th>
            <th scope="col" className="py-3 px-6   z-10  bg-white ">
              Transaction ID
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Type
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Date
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Receiver Address
            </th>
            <th scope="col" className="py-3 px-6">
              Payment Type
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="hover:bg-[#dadada]">
          {record.map((history, index) => {
            return (
              <tr
                className="py-6 text-[#BFBFBF] hover:bg-gray-200  hover:text-black bg-white "
                key={index}
              >
                <th
                  scope="row"
                  className="py-5 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 focus:ring-rose-600  "
                  />
                </th>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium  whitespace-nowrap "
                >
                  {history.id}
                </th>
                <td className=" py-4 px-6 text-black ">
                  {" "}
                  {history.transactionType}
                </td>
                <td className="py-4  px-6 "> {history.date}</td>
                <td className="py-4 px-6  text-black">
                  {" "}
                  {history.amount} ≈ {" "}
                  <span className="font-semibold font-sans">{"₦"}</span>
                {history.ngn}</td>
                <td className="py-4 px-6 ">{history.receiverAddress}</td>
                <td className="py-4 px-6 text-black">{history.paymentType}</td>
                <td className="py-4 px-6">
                  <span
                    className={`py-2 px-4 rounded-md font-semibold  ${
                      history.status === "Completed"
                        ? "text-[#44C13C] bg-[#F8FDF7] px-3"
                        : history.status === "Cancelled"
                        ? "text-[#F01E1E] bg-[#FEF5F5]"
                        : "text-[#F5B81D] bg-[#FFFCF5] px-6"
                    }`}
                  >
                    {history.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
