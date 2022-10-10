import React from "react";
import Timeline from "./about/Timeline";

const About = () => {
  return (
    <div
      name="about"
      className="w-full mb-20 bg-slate-50 dark:bg-[#191a1f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-sky-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-gray-500 dark:text-gray-400">
            <p>Hi. I'm Nils, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-medium font-medium text-gray-500 dark:text-gray-400">
              I am currently studying computer science in Bremerhaven, Germany
              and plan to be a full Stack Developer after my bachelor's degree.
              I am passionate about building excellent software that improves
              the lives of those around me and learning new technologies!
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full flex justify-center mt-36">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
