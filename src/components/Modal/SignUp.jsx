import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Tabs from "./Tab";

export default function SignUp({
  isModalOpen,
  closeModalFunc,
  openLoginModalFunc,
  closeLoginModalFunc,
}) {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModalFunc();
            closeLoginModalFunc();
          }}
        >
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
            <div className="flex w-full min-h-full items-center justify-center sm:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full px-10 md:px-28 max-w-3xl transform overflow-hidden rounded-[4px] py-9 bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-5">
                    <Tabs
                      closeModal={closeModalFunc}
                      openLoginModalFunc={openLoginModalFunc}
                      closeLoginModalFunc={closeLoginModalFunc}
                    />
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
