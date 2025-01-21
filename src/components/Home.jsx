import React from "react";
import ScrollDownIndicator from "./home/ScrollDownIndicator";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gray-50 dark:bg-[#1d1f24] snap-start"
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
        <ScrollDownIndicator />
      </div>
    </div>
  );
};

export default Home;
