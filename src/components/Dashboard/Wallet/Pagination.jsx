/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  recordsPerPage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const frm = () => {
    if (currentPage === 1) {
      return 1;
    }
    return currentPage * 7 - recordsPerPage + 1;
  };

  return (
    <div className="py-3 flex sm:flex-row flex-col justify-between gap-4 items-center sm:place-items-center border-gray-200 text-sm ">
      <div className="sm:mr-auto">
        <span className="text-sm text-gray-700 ">
          Showing <span className="font-semibold text-gray-900">{frm()}</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 ">
            {currentPage === 1 ? 7 : currentPage * 7}
          </span>{" "}
          of <span className="font-semibold text-gray-900 ">{nPages}</span>{" "}
          Pages
        </span>
      </div>
      <div className="flex justify-between items-center gap-2 md:gap-0">
        <span className="text-sm md:hidden">The page you’re on</span>
        <select
          className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight md:hidden focus:outline-none focus:shadow-outline"
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
        >
          {pageNumbers.map((pgNumber, index) => (
            <option value={pgNumber} key={index} className="hover:bg-gray-300">
              {pgNumber}
            </option>
          ))}
        </select>
        <div className="flex items-center">
          <button
            className=" px-4 py-2 border border-r-0 border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100 text-sm font-medium rounded-l-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {" "}
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <div className="hidden md:block">
            <ul className="inline-flex items-center rounded-md -space-x-px cursor-pointer ">
              {pageNumbers.map((pgNumber, index) => (
                <li
                  onClick={() => setCurrentPage(pgNumber)}
                  key={index}
                  className="hover:cursor-pointer"
                >
                  <span
                    className={`py-2 px-3 ${
                      currentPage === pgNumber
                        ? "text-white bg-red-500"
                        : "text-gray-500 bg-white"
                    } cursor-pointer border border-gray-300`}
                  >
                    {pgNumber}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`items-center px-4 py-2 border border-l-0 disabled:bg-gray-100 border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-gray-50`}
            onClick={nextPage}
            disabled={currentPage === nPages}
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
