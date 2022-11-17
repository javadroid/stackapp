import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { XIcon } from "@heroicons/react/outline";
import { GoogleIcon } from "../../assets/images";
import { useLoginAuthMutation } from "../../features/apiSlices/userApiSlice";
import { useBloodCentersMutation } from "../../features/apiSlices/appointmentApiSlice";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

export default function SignIn({
  isModalOpen,
  closeModalFunc,
  openSignUpModalFunc,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginAuth, { isLoading }] = useLoginAuthMutation();
  const [bloodCenters] = useBloodCentersMutation();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoading) return;
    try {
      const response = await loginAuth({ email, password }).unwrap();

      const name = response?.user?.first_name + " " + response?.user?.last_name;
      const payload = {
        username: name,
        email: response?.user?.email,
        pk: response?.user?.pk,
        access_token: response?.access_token,
        refresh_token: response?.refresh_token,
      };
      dispatch(login(payload));
      //Get user account details like account type, rc number, etc
      const getUser = await fetch(`${process.env.REACT_APP_API_URL}/user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${response?.access_token}`,
        },
      });
      const user = await getUser.json();
      console.log(user);
      closeModalFunc();
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalFunc}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen sm:min-h-full items-center justify-center md:p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:w-[80%] sm:mx-auto h-full sm:h-auto px-5 md:px-28 max-w-3xl transform overflow-hidden sm:rounded-[4px] py-9 bg-white p-6 text-left align-middle shadow-xl">
                  <Dialog.Title
                    as="h2"
                    className=" w-full my-5 flex md:text-3xl text-xl justify-between font-extrabold text-gray-900"
                  >
                    <span>Sign in to continue </span>
                    <button
                      type="button"
                      className="justify-center"
                      onClick={() => {
                        closeModalFunc();
                      }}
                    >
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Dialog.Title>
                  <div className="mb-5">
                    <h2>
                      Not a member yet?{" "}
                      <span
                        className="text-red-600 cursor-pointer"
                        onClick={() => {
                          closeModalFunc();
                          setTimeout(() => {
                            openSignUpModalFunc();
                          }, 500);
                        }}
                      >
                        Sign up now
                      </span>
                    </h2>
                  </div>
                  <div className="mt-2">
                    <form onSubmit={handleLogin}>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          id="floating_email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-red-600 peer"
                          placeholder=" "
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                          htmlFor="floating_email"
                          className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="password"
                          name="floating_password"
                          id="floating_password"
                          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-600 peer"
                          placeholder=" "
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                          htmlFor="floating_password"
                          className="peer-focus:font-medium absolute text-base text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Password
                        </label>
                      </div>
                      <div className="flex items-center justify-between my-10">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-red-600 accent-red-500 bg-gray-100 rounded border-gray-300 focus:ring-0 focus:outline-none"
                          />
                          <label
                            htmlFor="checkbox-1"
                            className="ml-2 text-sm font-medium text-black "
                          >
                            <span className=" text-bold">
                              Keep me logged in
                            </span>
                          </label>
                        </div>
                        <div>
                          <h3 className="text-sm text-[#F00530] cursor-pointer">
                            Forgot your password?
                          </h3>
                        </div>
                      </div>
                      <button className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center">
                        {isLoading ? (
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
                              Logging in
                              <span className="sr-only">Logging in...</span>
                            </div>
                          </>
                        ) : (
                          "Login"
                        )}
                      </button>
                      <div className="relative my-12">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-b border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-4 text-sm text-black">
                            Or sign in with
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="flex gap-2 sm:px-auto justify-center w-full mb-7 items-center">
                      <div>
                        <button className="text-white sm:px-12 px-4 text-sm sm:text-md  bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-md    py-5 text-center">
                          <div className="flex items-center space-between">
                            <img
                              src={GoogleIcon}
                              alt="google"
                              className="h-6 w-6"
                            />
                            <span className="pl-2">Google</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="text-white sm:px-12 px-4 text-sm sm:text-md bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md py-5 text-center"
                        >
                          <div className="flex items-center space-between">
                            <FiFacebook />{" "}
                            <span className="pl-2">Facebook</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="text-white sm:px-12 px-4 text-sm sm:text-md bg-blue-500 hover:bg-red-700 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md py-5 text-center">
                          <div className="flex items-center space-between">
                            <FiTwitter /> <span className="pl-2">Twitter</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
