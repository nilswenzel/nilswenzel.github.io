import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-screen h-screen bg-gray-50 dark:bg-[#1d1f24] snap-start scroll-m-[80px]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="mb-2 font-mono font-bold text-4xl text-gray-700 dark:text-gray-100 md:text-6xl">
          hi, I&apos;m <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500">
              Nils Wenzel
            </span>
            <span className="cursor absolute -bottom-0 left-0 -top-1 dark:bg-[#1d1f24] inline-block w-full motion-safe:animate-typewriter will-change"></span>
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-10 py-4 max-w-[700px] font-medium">
          I’m currently studying computer science and plan to be a Full Stack
          developer.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-lg text-[#1d1f24] font-bold group flex items-center px-4 py-2 rounded-md">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 w-6 h-6" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
