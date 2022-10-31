import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-screen h-screen bg-gray-50 dark:bg-[#191a1f] snap-start scroll-m-[80px]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-600 text-lg font-medium">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-800 dark:text-gray-200">
          Nils Wenzel
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-500 dark:text-gray-400">
          I'm a computer science student
        </h2>
        <p className="text-gray-500 dark:text-gray-400 py-4 max-w-[700px] font-medium">
          I’m currently studying computer science and plan to be a Full Stack
          developer.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="bg-sky-500 hover:bg-sky-600 font-semibold text-lg text-white group flex items-center px-4 py-2 rounded-md ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
