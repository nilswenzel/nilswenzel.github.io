import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import TimelineInfoModal from "../timelines/TimelineInfoModal";

import { work } from '../../data/work';

const WorkTimeline = () => {
  return (
    <div>
      <ol className="relative z-0 border-l-4 border-teal-500 inline-block text-left">
        {work.map((entry) => (
          <TimelineWorkEntry
            date={entry.date}
            title={entry.title}
            location={entry.location}
            Modal={
              <TimelineInfoModal
                title={entry.modal.title}
                location={entry.modal.location}
                bulletpoints={entry.modal.bulletpoints}
              />
            }
            icons={entry.icons}
          />
        ))}
      </ol>
    </div>
  );
};

const TimelineWorkEntry = ({ date, title, location, Modal, icons }) => {
  return (
    <li className="mb-10 ml-4 cursor-default">
      <div className="absolute w-4 h-4 bg-teal-500 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-teal-500"></div>
      <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        <FaRegCalendarAlt className="h-3 w-3 mr-1" /> {date}
      </time>
      <div className="flex items-center">
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {title}
        </span>
        {Modal}
      </div>
      <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
        <IoLocationSharp className="h-4 w-4 mr-1" /> {location}
      </p>
      <div className="flex items-center mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {icons.map((Icon, key) => (
          <Icon key={key} className="h-4 w-4 mr-2" />
        ))}
      </div>
    </li>
  );
};
export default WorkTimeline;
