import { React, useEffect } from "react";
import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as HTMLIcon } from "../assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css.svg";
import { ReactComponent as TailwindCSSIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as VueJSIcon } from "../assets/icons/vuejs.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as JQueryIcon } from "../assets/icons/jquery.svg";
import { ReactComponent as JavaIcon } from "../assets/icons/java.svg";
import { ReactComponent as CPlusPlusIcon } from "../assets/icons/cplusplus.svg";
import { ReactComponent as PHPIcon } from "../assets/icons/php.svg";
import { ReactComponent as LaravelIcon } from "../assets/icons/laravel.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as DjangoIcon } from "../assets/icons/django.svg";
import { ReactComponent as MySQLIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "../assets/icons/kubernetes.svg";
import { ReactComponent as GitLabIcon } from "../assets/icons/gitlab.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as LinuxIcon } from "../assets/icons/linux.svg";
import { ReactComponent as JiraIcon } from "../assets/icons/jira.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/icons/stackoverflow.svg";

import { ReactComponent as TensorflowIcon } from "../assets/icons/tensorflow.svg";
import { ReactComponent as NumpyIcon } from "../assets/icons/numpy.svg";
import { ReactComponent as PandasIcon } from "../assets/icons/pandas.svg";
import { ReactComponent as UbuntuIcon } from "../assets/icons/ubuntu.svg";
import { ReactComponent as BashIcon } from "../assets/icons/bash.svg";

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
            // These are the technologies I've worked the most with
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8">
          {/* frontend */}
          <div className="rounded-md shadow-md p-1 bg-gradient-to-r from-emerald-500 to-teal-400">
            <div className="h-full w-full pt-4 rounded-md bg-white dark:bg-[#131519]">
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                frontend
              </h1>
              <ul className="flex flex-col gap-7 m-4 ml-8 mt-7">
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <JavaScriptIcon className="h-16 w-16 mr-2 fill-[#F7DF1E]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      JavaScript
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      intermediate
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <HTMLIcon className="h-16 w-16 mr-2 fill-[#E34F26]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      HTML
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      intermediate
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <CSSIcon className="h-16 w-16 mr-2 fill-[#1572B6]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      CSS
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <TailwindCSSIcon className="h-16 w-16 mr-2 fill-[#06B6D4]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Tailwind CSS
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <VueJSIcon className="h-16 w-16 mr-2 fill-[#4FC08D]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Vue.js
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <ReactIcon className="h-16 w-16 mr-2 fill-[#61DAFB]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      React
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <JQueryIcon className="h-16 w-16 mr-2 fill-[#0769AD]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      jQuery
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* backend */}
          <div className="rounded-md shadow-md p-1 bg-gradient-to-r from-teal-400 to-emerald-500">
            <div className="h-full w-full pt-4 rounded-md bg-white dark:bg-[#131519]">
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                backend
              </h1>
              <ul className="flex flex-col gap-7 m-4 ml-8 mt-7">
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <JavaIcon className="h-16 w-16 mr-2 fill-[#C01818]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Java
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      intermediate
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <CPlusPlusIcon className="h-16 w-16 mr-2 fill-[#00599C]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      C++
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <PHPIcon className="h-16 w-16 mr-2 fill-[#777BB4]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      PHP
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <LaravelIcon className="h-16 w-16 mr-2 fill-[#FF2D20]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Laravel
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <PythonIcon className="h-16 w-16 mr-2 fill-[#3776AB]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Python
                    </p>
                    <div className="flex items-center">
                      <TensorflowIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                      <NumpyIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                      <PandasIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <DjangoIcon className="h-16 w-16 mr-2 fill-[#092E20]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Django
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base">
                      very basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <MySQLIcon className="h-16 w-16 mr-2 fill-[#4479A1]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      MySQL
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base">
                      basic
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* other */}
          <div className="rounded-md shadow-md p-1 bg-gradient-to-r from-emerald-500 to-teal-400">
            <div className="h-full w-full pt-4 rounded-md bg-white dark:bg-[#131519]">
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                other
              </h1>
              <ul className="flex flex-col gap-7 m-4 ml-8 mt-7">
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <DockerIcon className="h-16 w-16 mr-2 fill-[#2496ED]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Docker
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      intermediate
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <KubernetesIcon className="h-16 w-16 mr-2 fill-[#326CE5]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Kubernetes + Helm
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <GitLabIcon className="h-16 w-16 mr-2 fill-[#FC6D26]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Gitlab CI/CD
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <GitIcon className="h-16 w-16 mr-2 fill-[#F05032]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Git
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <LinuxIcon className="h-16 w-16 mr-2 fill-[#FCC624]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Linux + Shell
                    </p>
                    <div className="flex items-center">
                      <UbuntuIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                      <BashIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base">
                      basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <JiraIcon className="h-16 w-16 mr-2 fill-[#0052CC]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Jira
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      very basic
                    </p>
                  </div>
                </li>
                <li className="flex flex-row w-full">
                  <div className="basis-1/3">
                    <StackOverflowIcon className="h-16 w-16 mr-2 fill-[#F58025]" />
                  </div>
                  <div className="flex flex-col basis-2/3 text-left justify-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xl">
                      Stack Overflow
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-base mt-1">
                      expert
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
