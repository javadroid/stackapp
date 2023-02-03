import { useState } from "react";
import { useCentersListQuery } from "../features/apiSlices/bloodCentersApiSlice";
import axios from "axios";
import { API_URL } from "../config";
import { useUserQuery } from "../features/user/useUser";
import toast from "react-hot-toast";

const init = {
  account_type: "",
};

const RequestBlood = () => {
  const [isSending, setIsSending] = useState(!1);
  const [requested, setRequested] = useState(!1);
  const { isSuccess, data: details } = useUserQuery();
  const { account_type } = isSuccess ? details : init;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSending(!0);
    try {
      const res = await axios.post(`${API_URL}appointments/requestblood/`);
      res.status === 200 && setRequested(!0);
      res.status === 200 && setIsSending(!1);
    } catch (err) {
      toast.error("Couldn't send your Blood Request.", { duration: 5000 });
      setIsSending(!1);
    }
  };
  //get centers list
  const { data: centersList, error, isLoading } = useCentersListQuery();
  return (
    <div className="flex flex-col items-center justify-start md:justify-center w-full min-h-[90vh]">
      <div className="w-full md:max-w-2xl h-full md:h-auto md:shadow-xl md:rounded-[6px]">
        <div className="flex flex-col gap-2 items-center h-full py-8 px-6 md:px-8">
          {account_type === "donor" ? (
            <h3 className="my-4 text-1xl md:text-[18px]">
              Great to have you here,
              <br /> But Donors are not eligible to request for blood, <br />
              You can make a difference by donating and saving lives.
            </h3>
          ) : (
            <>
              <h1 className="my-4 text-2xl md:text-[32px]">Request Blood</h1>
              {/* Create a form to get user's blood type, gender, center or hospital and phone number */}
              {requested && (
                <span className="m-2 text-lg text-green-700 italic ">
                  Your request has been sent successfully
                </span>
              )}
              <form
                className="flex flex-col gap-4 items-center w-full"
                onSubmit={onSubmit}
              >
                <select
                  className="w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0"
                  required
                >
                  <option value="">Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <select
                  className="w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0"
                  required
                >
                  <option value="" className="text-[#BFBFBF]">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Male">Female</option>
                </select>
                <select
                  className="w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0"
                  required
                >
                  {isLoading && (
                    <option value="" className="text-[#BFBFBF]">
                      Center and Hospitals
                    </option>
                  )}
                  {centersList &&
                    centersList.map((center, index) => (
                      <option
                        key={index}
                        value={center.center_name}
                        className="text-black"
                      >
                        {center.center_name}
                      </option>
                    ))}
                </select>
                {/* pattern="[0-9]{11 - 13}" */}
                <input
                  className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <button
                  type="submit"
                  className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
                >
                  {isSending ? (
                    <>
                      <div
                        role="status"
                        className="flex justify-center gap-2 items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className=" w-8 h-6 text-gray-200 animate-spin  fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>{" "}
                        Sending Request
                        <span className="sr-only">Sending Request ...</span>
                      </div>
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>
                <p className="text-[#333333] pt-4 md:pt-2 pb-4 md:pb-8">
                  We wil send a donor to the centre as given as soon as
                  possible.{" "}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
