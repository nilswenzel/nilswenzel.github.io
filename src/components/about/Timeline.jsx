import { React, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import TimelineEducation from "./TimelineEducation";
import TimelineWork from "./TimelineWork";

const Timeline = () => {
  const [timeline, setTimeline] = useState("education"); // "education" or "work"
  const toggleTimeline = () => {
    setTimeline(timeline === "education" ? "work" : "education");
  };

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="mb-4 border-b border-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-base font-medium text-center">
            <li className="mr-2">
              <button
                className={
                  timeline === "education"
                    ? "inline-block p-4 rounded-t-lg border-b-2 border-teal-500"
                    : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:border-gray-300 hover:border-gray-700 dark:hover:text-gray-300"
                }
                onClick={toggleTimeline}
              >
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaGraduationCap className="h-5 w-5 mr-2" />
                  Education
                </div>
              </button>
            </li>
            <li className="mr-2">
              <button
                className={
                  timeline === "work"
                    ? "inline-block p-4 rounded-t-lg border-b-2 border-teal-500"
                    : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:border-gray-300 hover:border-gray-700 dark:hover:text-gray-300"
                }
                onClick={toggleTimeline}
              >
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaBriefcase className="h-5 w-5 mr-2" />
                  Work
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-[300px]">
        {timeline === "education" ? <TimelineEducation /> : <TimelineWork />}
      </div>
    </div>
  );
};

export default Timeline;
