import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const TimelineEducation = () => {
  return (
    <div>
      <ol className="relative border-l-4 z-0 border-sky-600 inline-block text-left">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-sky-600 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-sky-600"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> - April 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Graduating from school (Abitur)
          </h3>
          <p className="flex items-center mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Waldschule
            Hagen-Beverstedt
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-sky-600 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-sky-600"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> October 2019 -
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Starting university
          </h3>
          <p className="flex items-center mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Hochschule Bremerhaven
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineEducation;
