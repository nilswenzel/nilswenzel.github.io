import React from "react";
import EducationTimeline from "./education/EducationTimeline";

const Education = () => {
  return (
    <div
      name="education"
      className="h-screen bg-slate-50 dark:bg-[#1d1f24] text-gray-300 snap-start"
    >
      <div className="max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-teal-500">
            Education
          </p>
          <p className="py-4 font-medium text-gray-500 dark:text-gray-400">
            {"// Explore my academic journey"}
          </p>
        </div>
        <div className="max-w-[1000px] w-full flex justify-start mt-14 sm:mt-36">
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
};

export default Education;
