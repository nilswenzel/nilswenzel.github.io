import { React, useEffect } from "react";

import { BiRightArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdNoPhotography } from "react-icons/md";

import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as HTMLIcon } from "../assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css.svg";
import { ReactComponent as TailwindCSSIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as VueJSIcon } from "../assets/icons/vuejs.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as JavaIcon } from "../assets/icons/java.svg";
import { ReactComponent as PHPIcon } from "../assets/icons/php.svg";
import { ReactComponent as LaravelIcon } from "../assets/icons/laravel.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as DjangoIcon } from "../assets/icons/django.svg";
import { ReactComponent as MySQLIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as TensorflowIcon } from "../assets/icons/tensorflow.svg";
import { ReactComponent as NumpyIcon } from "../assets/icons/numpy.svg";
import { ReactComponent as PandasIcon } from "../assets/icons/pandas.svg";
import { ReactComponent as BashIcon } from "../assets/icons/bash.svg";
import { ReactComponent as GoogleChromeIcon } from "../assets/icons/googlechrome.svg";

import covid19DataVisualizationImage from "../assets/work/covid-19-data-visualization.jpg";
import cryptoPortfolioRemadeImage from "../assets/work/crypto-portfolio-remade.jpg";
import parqetDarkmodeImage from "../assets/work/parqet-darkmode.jpg";
import ownPortfolioImage from "../assets/work/own-portfolio.jpg";
import cryptoPortfolioOldImage from "../assets/work/crypto-portfolio-old.jpg";
import emotionRecognitionImage from "../assets/work/emotion-recognition.jpg";
import chatPrototypeImage from "../assets/work/chat-prototype.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-screen h-screen bg-slate-50 dark:bg-[#191a1f] text-gray-300 snap-start scroll-m-[80px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-sky-600">
            Projects
          </p>
          <p className="py-4 font-medium text-gray-500 dark:text-gray-400">
            // Check out some of my work
          </p>
        </div>

        <div className="flex flex-nowrap justify-start gap-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-[#23242a] scrollbar-track-white">
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={cryptoPortfolioRemadeImage}
              alt="project-crypto-portfolio-remade"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Cryptocurrency Portfolio (Remade)
              </h5>
              <div className="flex items-center mb-3">
                <VueJSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <LaravelIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <DjangoIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <NumpyIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <PandasIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <TailwindCSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <DockerIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                A remade of a previous Cryptocurrency Portfolio project. This
                time proper restful API calls to a Laravel or Django API.
              </p>
              <div className="flex justify-start">
                <a href="https://gitfront.io/r/user-2434316/Hk1cGwzCA33T/crypto-portfolio-reworked/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <button className="hover:cursor-not-allowed inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                  Demo
                  <BiRightArrow className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={covid19DataVisualizationImage}
              alt="project-covid19-data-visualization"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Covid-19 Data Visualization
              </h5>
              <div className="flex items-center mb-3">
                <HTMLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <JavaScriptIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <PHPIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                Web visualization of Covid-19 data of the world and Germany.
              </p>
              <div className="flex justify-start">
                <a href="https://gitfront.io/r/user-2434316/7F2GZHXK1eWg/covid-19-web-visualisation/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <a href="https://informatik.hs-bremerhaven.de/nwenzel/projects/covid-19-web-visualisation/coronavirus.html">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                    Demo
                    <BiRightArrow className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={parqetDarkmodeImage}
              alt="project-parqet-darkmode"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Darkmode for Parqet
              </h5>
              <div className="flex items-center mb-3">
                <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <JavaScriptIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <GoogleChromeIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                A Chrome extension which adds a darkmode for a website I
                personally use.
              </p>
              <div className="flex justify-start">
                <a href="https://github.com/nilswenzel/parqet-darkmode-chrome-extension">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <a href="https://chrome.google.com/webstore/detail/parqet-darkmode/jfhpcliegfecjhjehclnhnngbjndodoj">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                    Demo
                    <BiRightArrow className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={ownPortfolioImage}
              alt="project-own-portfolio"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Own Portfolio
              </h5>
              <div className="flex items-center mb-3">
                <ReactIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <TailwindCSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                My portfolio you're currently looking at.
              </p>
              <div className="flex justify-start">
                <a href="https://gitfront.io/r/user-2434316/p45yfGTT9PTs/nilswenzel.github.io/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <a href="https://nilswenzel.github.io/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                    Demo
                    <BiRightArrow className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={cryptoPortfolioOldImage}
              alt="project-crypto-portfolio-old"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Cryptocurrency Portfolio (Old)
              </h5>
              <div className="flex items-center mb-3">
                <ReactIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <PHPIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                A Cryptocurrency Portfolio (visualisation and calculation).
              </p>
              <div className="flex justify-start">
                <a href="https://gitfront.io/r/user-2434316/yj9cvdzf7vUv/crypto-portfolio/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <a href="https://informatik.hs-bremerhaven.de/nwenzel/projects/crypto-portfolio/portfolio.html?uuid=0">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                    Demo
                    <BiRightArrow className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="min-w-[280px] mb-5 shadow-sm bg-white dark:bg-[#23242a] rounded-md">
            <img
              className="rounded-t-lg"
              src={emotionRecognitionImage}
              alt="project-emotion-recognition"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
                Emotion Recognition (Machine Learning)
              </h5>
              <div className="flex items-center mb-3">
                <TensorflowIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <PythonIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                <NumpyIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
                A Neural Network to recognize human emotions in real time. A
                group project for university.
              </p>
              <div className="flex justify-start">
                <a href="https://gitfront.io/r/user-2434316/E76DqZ8FETEY/ki-emotion-recognition/">
                  <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700 mr-3">
                    GitHub
                    <FaGithub className="ml-2" />
                  </button>
                </a>
                <button className="hover:cursor-not-allowed inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-gray-100 bg-sky-600 rounded-md hover:bg-sky-700">
                  Demo
                  <BiRightArrow className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
