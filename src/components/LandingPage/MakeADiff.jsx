import { AboutWoman, MakeADiff1, MakeADiff2 } from "../../assets/images";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

const MakeADiff = () => {
  return (
    <div className="w-full pb-8">
      <h1 className="text-2xl md:text-3xl text-center py-6 px-2 font-bold hidden sm:block">
        MORE WAYS YOU CAN MAKE A DIFFERENCE
      </h1>
      <h1 className="text-2xl md:text-3xl text-center py-6 px-2 font-bold block sm:hidden">
        MORE WAYS TO MAKE A DIFFERENCE
      </h1>
      <div className="flex flex-col justify-center items-center gap-12 lg:gap-4 xl:gap-8 md:flex-row flex-wrap max-w-7xl px-6 py-16 mx-auto">
        <div className="w-[85%] h-[280px] sm:w-[60%] md:w-[40%] sm:h-[350px] lg:w-[300px] border-2 border-zinc-200 shadow-sm rounded-md flex flex-col items-start">
          <div className="w-full h-[60%] bg-blue-200 mb-5">
            <img
              src={MakeADiff1}
              alt=""
              className="w-full h-full object-center object-cover rounded-t-md"
            />
          </div>
          <p className="ml-2 py-4">Become a Volunteer</p>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            className="flex gap-3 items-center text-[#F00530] ml-2 text-[14px] cursor-pointer"
          >
            Learn More
            <ChevronDoubleRightIcon className="h-3 w-3" />
          </a>
        </div>
        <div className="w-[85%] h-[280px] sm:w-[60%] md:w-[40%] sm:h-[350px] lg:w-[300px] border-2 border-zinc-200 shadow-sm rounded-md flex flex-col items-start">
          <div className="w-full h-[60%] bg-blue-200 mb-5">
            <img
              src={AboutWoman}
              alt=""
              className="w-full h-full object-center object-cover rounded-t-md"
            />
          </div>
          <p className="ml-2 py-4">Make a Financial Donation</p>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            className="flex gap-3 items-center text-[#F00530] ml-2 text-[14px] cursor-pointer"
          >
            Learn More
            <ChevronDoubleRightIcon className="h-3 w-3" />
          </a>
        </div>
        <div className="w-[85%] h-[280px] sm:w-[60%] md:w-[40%] sm:h-[350px] lg:w-[300px] border-2 border-zinc-200 shadow-sm rounded-md flex flex-col items-start">
          <div className="w-full h-[60%] bg-blue-200 mb-5">
            <img
              src={MakeADiff2}
              alt=""
              className="w-full h-full object-center object-cover rounded-t-md"
            />
          </div>
          <p className="ml-2 py-4">Host blood drive</p>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            className="flex gap-3 items-center text-[#F00530] ml-2 text-[14px] cursor-pointer"
          >
            Learn More
            <ChevronDoubleRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MakeADiff;
