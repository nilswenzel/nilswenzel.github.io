import { React } from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen bg-slate-50 dark:bg-[#1d1f24] text-gray-300 snap-start"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-teal-500">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="p-4 sm:p-0 sm:text-right text-4xl font-bold text-gray-500 dark:text-gray-400">
            <p>Hi. I'm Nils, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="p-4 sm:p-0 text-medium font-medium text-gray-500 dark:text-gray-400">
              I am currently studying computer science in Bremerhaven, Germany
              and plan to be a software developer after my bachelor's degree.
              I am passionate about building software that improves
              the lives of those around me and learning new technologies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
