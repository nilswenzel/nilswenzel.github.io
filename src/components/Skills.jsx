import { React } from "react";

import TabMenu from "./skills/TabMenu";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-screen h-fit sm:h-screen bg-slate-50 dark:bg-[#1d1f24] text-gray-300 snap-start scroll-m-[80px]"
    >
      {/* Container */}
      <div className="max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-teal-500">
            Skills
          </p>
          <p className="py-4 font-medium text-gray-500 dark:text-gray-400">
            {"// These are the technologies I've worked the most with"}
          </p>
        </div>
        <div className="mt-10 md:mt-20">
          <TabMenu />
        </div>
      </div>
    </div>
  );
};

export default Skills;
