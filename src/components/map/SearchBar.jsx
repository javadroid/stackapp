import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = ({ CenterList, setCenters }) => {
  const handleChange = (e) => {
    if (e.target.value.trim() === "") return setCenters(CenterList);
    const centerListTemp = CenterList.filter(
      (Centers) =>
        Centers.center_name
          .toLowerCase()
          .indexOf(e.target.value.trim().toLowerCase()) !== -1
    );
    setCenters(centerListTemp);
    console.log("Okay");
  };
  return (
    <div className="my-5 mx-10">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10"
            placeholder="Search for donation center or hospital..."
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
