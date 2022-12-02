import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { XIcon } from "@heroicons/react/outline";

export default function MedicalInfo({ isModalOpen, closeModalFunc }) {
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

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex h-auto sm:min-h-full items-center justify-center md:p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:w-[80%] sm:mx-auto h-screen sm:h-auto px-5 md:px-16 max-w-2xl transform overflow-hidden sm:rounded-[4px] py-2 bg-[#FCFCFC]  text-left align-middle shadow-xl">
                  <Dialog.Title
                    as="h2"
                    className=" w-full my-5  flex md:text-3xl text-xl justify-between font-extrabold text-gray-900"
                  >
                    <span className="pl-7">Personal Information</span>
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
                  <p className="text-black text-md py-3 px-6 md:px-8">
                    This contains your personal information this will be also be
                    used to contact you so kindly provide the correct
                    information.
                  </p>
                  <div className="flex flex-col gap-2 items-center h-full py-8 px-6 md:px-8">
                    <form className="flex flex-col gap-4 items-center w-full">
                      <div className="grid grid-cols-2 justify-between gap-4 w-full">
                        <label>First Name</label>
                        <label>Last Name</label>
                        <input
                          className="appearance-none bg-transparent rounded w-full px-4 py-2  placeholder-[#BFBFBF]  mb-3 leading-tight focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                          type="text"
                          placeholder="First Name"
                          required
                        />
                        <input
                          className="appearance-none bg-transparent rounded w-full px-4 py-2  placeholder-[#BFBFBF] mb-3 leading-tight  focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                          type="text"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 justify-between gap-4 w-full">
                        <label>Blood Group</label>
                        <label>State</label>
                        <select
                          placeholder="Blood Type"
                          className=" px-4 py-2 bg-transparent rounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>

                        <select className=" px-4 py-2 bg-transparentrounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0">
                          <option value="Lagos">Lagos</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Kaduna">Kaduna</option>
                          <option value="Anambra">Anambra</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 justify-between gap-4 w-full">
                        <label>Blood Pressure</label>
                        <label>Blood Sugar</label>
                        <select
                          placeholder="Blood Type"
                          className=" px-4 py-2 bg-transparent rounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                        >
                          <option value="125mmHg">125mmHg</option>
                          <option value="135mmHg">135mmHg</option>
                          <option value="155mmHg">155mmHg</option>
                        </select>

                        <select className=" px-4 py-2 bg-transparentrounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0">
                          <option value="Pre-pandial">Pre-pandial</option>
                          <option value="Post-pandial">Post-prandial</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-3 justify-between gap-4 w-full">
                        <label>Age</label>
                        <label>Weight (kg) </label>
                        <label>Height (cm)</label>
                        <input
                          className=" px-4 py-2 bg-transparent rounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                          type="number"
                          placeholder="Age"
                          required
                        />
                        <input
                          className=" px-4 py-2 bg-transparent rounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                          type="number"
                          placeholder="Weight"
                          required
                        />
                        <input
                          className=" px-4 py-2 bg-transparent rounded focus:outline-none focus:shadow-outline border-1 border-[#BFBFBF] focus:ring-0"
                          type="number"
                          placeholder="Height"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="text-white mt-6 px-4 transform sm:uppercase text-md bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-2 text-center"
                      >
                        Submit
                      </button>
                    </form>
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
