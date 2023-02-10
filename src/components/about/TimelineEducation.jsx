import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const TimelineEducation = () => {
  return (
    <div>
      <ol className="relative border-l-4 z-0 border-teal-500 inline-block text-left">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-teal-500"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> April 2019
          </time>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Graduating from school (Abitur)
            </span>
          </div>
          <p className="flex items-center mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Waldschule
            Hagen-Beverstedt
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-teal-500"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> October 2019 -
          </time>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Starting university
            </span>
          </div>
          <p className="flex items-center mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Hochschule Bremerhaven
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineEducation;
