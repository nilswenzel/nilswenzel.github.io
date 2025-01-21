import React, { useState } from "react";
import { IoInformationCircle, IoLocationSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const TimelineInfoModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <IoInformationCircle
        onClick={() => setShowModal(true)}
        className="text-teal-500 hover:text-teal-400 font-bold py-1 px-2 w-9 h-9 cursor-pointer"
      />

      {showModal ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowModal(false)} // Schließt das Modal bei Klick auf den Hintergrund
          ></div>

          <div className="max-w-2xl relative z-50">
            <div className="pt-6 pb-3 px-6 rounded-lg shadow-lg relative w-full bg-white dark:bg-[#131519]">
              <div className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                <AiOutlineClose
                  onClick={() => setShowModal(false)}
                  className="text-teal-500 hover:text-teal-400 w-5 h-5"
                />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {props.title}
              </span>
              <div className="flex items-center mt-1 mb-4">
                <IoLocationSharp className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {props.location}
                </span>
              </div>
              <ul className="ml-4 list-disc list-outside marker:text-teal-600 text-base font-normal text-gray-500 dark:text-gray-400">
                {props.bulletpoints.map((point, key) => (
                  <li key={key} className="px-0 py-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TimelineInfoModal;
