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
        <h1 className="mb-2 font-mono font-bold text-4xl text-gray-100 md:text-6xl">
          hi, I&apos;m <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-sky-600">
              Nils Wenzel
            </span>
            <span className="cursor absolute -bottom-0 left-0 -top-1 dark:bg-[#191a1f] inline-block w-full motion-safe:animate-typewriter will-change"></span>
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-10 py-4 max-w-[700px] font-medium">
          I’m currently studying computer science and plan to be a Full Stack
          developer.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="bg-sky-500 hover:bg-sky-600 font-semibold text-lg text-white group flex items-center px-4 py-2 rounded-md">
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
