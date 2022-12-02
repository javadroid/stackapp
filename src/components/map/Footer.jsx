import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-around px-10 py-10 mb-6 sm:justify-center sm:text-base text-sm">
      <Link to="/" className="sm:px-6 pr-1">Home</Link>
      <div className=" border-r-gray-500 border-2 py-2  "></div>

      <div className="sm:px-6 pr-1">Eligibilty</div>
      <div className=" border-r-gray-500 border-2 py-2  "></div>
      <div className="sm:px-6 pr-1">Email Us</div>
      <div className=" border-r-gray-500 border-2 py-2  "></div>
      <div className="sm:px-6">9909988888</div>
    </div>
  );
};

export default Footer;
