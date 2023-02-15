import { React, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import TimelineEducation from "./TimelineEducation";
import TimelineWork from "./TimelineWork";

const TimelineMenu = () => {
  const [timeline, setTimeline] = useState("education"); // "education" or "work"

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="mb-4 border-b border-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-base font-medium text-center">
            <TimelineMenuEntry
              activeTimeline={timeline}
              name={"education"}
              title={"Education"}
              Icon={FaGraduationCap}
              onClick={() => setTimeline("education")}
            />
            <TimelineMenuEntry
              activeTimeline={timeline}
              name={"work"}
              title={"Work"}
              Icon={FaBriefcase}
              onClick={() => setTimeline("work")}
            />
          </ul>
        </div>
      </div>
      <div className="min-h-[300px]">
        {timeline === "education" ? <TimelineEducation /> : <TimelineWork />}
      </div>
    </div>
  );
};

const TimelineMenuEntry = ({ activeTimeline, name, title, Icon, onClick }) => {
  const isActive = activeTimeline === name;
  return (
    <li className="mr-2">
      <button
        className={
          isActive
            ? "inline-block p-4 rounded-t-lg border-b-2 border-teal-500"
            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:border-gray-300 hover:border-gray-700 dark:hover:text-gray-300"
        }
        onClick={onClick}
      >
        <div
          className={
            isActive
              ? "flex items-center text-gray-600 dark:text-gray-300"
              : "flex items-center text-gray-400 dark:text-gray-500"
          }
        >
          <Icon className="h-5 w-5 mr-2" />
          <span>{title}</span>
        </div>
      </button>
    </li>
  );
};

export default TimelineMenu;
