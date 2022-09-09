import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { XIcon } from "@heroicons/react/outline";
import { GoogleIcon } from "../../assets/images";
import { useUserContext } from "../../context/user/UserContext";
import { loginAuth } from "../../api/Login";

export default function SignIn({
  isModalOpen,
  closeModalFunc,
  openSignUpModalFunc,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") return;

    const tokens = await loginAuth({ email, password });
    console.log(tokens);

    const mail = tokens.user.email;
    const name = tokens.user.first_name + " " + tokens.user.last_name;

    dispatch({
      type: "LOGIN",
      payload: { username: name, emailAddress: mail },
    });

    closeModalFunc();
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
                    <form>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          id="floating_email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                          placeholder=" "
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                          htmlFor="floating_email"
                          className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="password"
                          name="floating_password"
                          id="floating_password"
                          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                          placeholder=" "
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                          htmlFor="floating_password"
                          className="peer-focus:font-medium absolute text-base text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                            className="ml-2 text-sm font-medium text-black dark:text-black-300"
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
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
                      >
                        Login
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
