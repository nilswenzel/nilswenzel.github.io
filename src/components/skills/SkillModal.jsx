import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SkillModal = ({skill, closeModal}) => {
  return (
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => closeModal()} // Schließt das Modal bei Klick auf den Hintergrund
        ></div>

        <div className="max-w-2xl relative z-50">
          <div className="pt-6 pb-3 px-6 rounded-lg shadow-lg relative w-full bg-white dark:bg-[#131519]">
            <div className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
              <AiOutlineClose
                onClick={() => closeModal()}
                className="text-teal-500 hover:text-teal-400 w-5 h-5"
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              { skill.name }
            </span>
            <ul className="mt-3 ml-4 list-disc list-outside marker:text-teal-600 text-base font-normal text-gray-500 dark:text-gray-400">
              {skill.modalBulletPoints.map((point, key) => (
                <li key={key} className="px-0 py-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default SkillModal;
