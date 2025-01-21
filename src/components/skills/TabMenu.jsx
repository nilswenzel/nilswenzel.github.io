import { React, useState } from "react";
import { FaCode, FaCodepen, FaLanguage } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

import SkillModal from "./SkillModal";

import { skills } from '../../data/skills'

const TabMenu = () => {
  const [tab, setTab] = useState("programmingLanguages");

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="mb-4 border-b border-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-base font-medium text-center">
            <TabMenuEntry
              activeTab={tab}
              name={"programmingLanguages"}
              title={"Programming Languages"}
              Icon={FaCode}
              onClick={() => {
                setTab("programmingLanguages");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"frameworks"}
              title={"Frameworks"}
              Icon={FaCodepen}
              onClick={() => {
                setTab("frameworks");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"other"}
              title={"Other Technologies"}
              Icon={BsFillGearFill}
              onClick={() => {
                setTab("other");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"languages"}
              title={"Languages"}
              Icon={FaLanguage}
              onClick={() => {
                setTab("languages");
              }}
            />
          </ul>
        </div>
      </div>
      <div className="flex justify-center sm:min-h-[350px]">
        <Tab skills={skills[tab]} />
      </div>
    </div>
  );
};

const TabMenuEntry = ({ activeTab, name, title, Icon, onClick }) => {
  const isActive = activeTab === name;
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
              : "flex items-center text-gray-500 dark:text-gray-400"
          }
        >
          <Icon className="h-5 w-5 mr-2" />
          <span>{title}</span>
        </div>
      </button>
    </li>
  );
};

const Tab = ({ skills }) => {
  const [openModalKey, setOpenModalKey] = useState(null);

  const toggleModal = (key) => {
    setOpenModalKey(openModalKey === key ? null : key); 
  };

  const closeModal = () => {
    setOpenModalKey(null);
  };

  return (
    <div className="flex flex-wrap items-start justify-center content-start gap-3 sm:max-w-[50%]">
      {skills.map((skill, key) => {
        const { name, Icon } = skill;
        return (
          <div
            key={key}
            onClick={() => toggleModal(key)}
            className={`flex rounded-md w-fit shadow-md px-3 sm:px-6 sm:py-3 py-1 bg-white dark:bg-[#131519] border border-transparent ${
              skill.modalBulletPoints?.length > 0 ? 'hover:border-teal-500 cursor-pointer' : ''
            }`}
          >
            <div className="flex items-center justify-center">
              {Icon == null ? <></> : <Icon className="h-6 sm:h-8 w-6 sm:w-8 mr-2 sm:mr-4" />}
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg whitespace-normal md:whitespace-nowrap">
                {name}
              </span>
            </div>
            {skill.modalBulletPoints && openModalKey === key && (
              <SkillModal skill={skill} closeModal={closeModal}/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
