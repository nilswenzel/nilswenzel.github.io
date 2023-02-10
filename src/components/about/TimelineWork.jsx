import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { ReactComponent as LinuxIcon } from "../../assets/icons/linux.svg";
import { ReactComponent as DockerIcon } from "../../assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "../../assets/icons/kubernetes.svg";
import { ReactComponent as GitLabIcon } from "../../assets/icons/gitlab.svg";
import { ReactComponent as JiraIcon } from "../../assets/icons/jira.svg";
import { ReactComponent as VueJSIcon } from "../../assets/icons/vuejs.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript.svg";

import TimelineInfoModal from "./TimelineInfoModal";

const TimelineWork = () => {
  return (
    <div>
      <ol className="relative z-0 border-l-4 border-teal-500 inline-block text-left">
        <li className="mb-10 ml-4 cursor-default">
          <div className="absolute w-4 h-4 bg-teal-500 rounded-full mt-1.5 -left-2.5 border border-sky-50 dark:border-[#191a1f] dark:bg-teal-500"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> April 2022 - August
            2022
          </time>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Practical Semester/Internship
            </span>
            <TimelineInfoModal
              title="Practical Semester/Internship  (Software Engineer)"
              location="Alfred Wegener Institut, Bremerhaven"
              bulletpoints={[
                "Setting up and managing a small baremetal Kubernetes cluster using Helm",
                "Building CI/CD pipelines with GitLab & Kubernetes to automatically build packages, run tests, build Docker images and deploy review apps",
                "Building Docker environments for developing",
                "Using Jira as project management tool",
              ]}
            />
          </div>
          <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Alfred Wegener
            Institut, Bremerhaven
          </p>
          <div className="flex items-center mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <LinuxIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <DockerIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <KubernetesIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <GitLabIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <JiraIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
          </div>
        </li>
        <li className="mb-10 ml-4 cursor-default">
          <div className="absolute w-4 h-4 bg-teal-500 rounded-full mt-1.5 -left-2.5 border border-slate-50 dark:border-[#191a1f] dark:bg-teal-500"></div>
          <time className="flex items-center mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
            <FaRegCalendarAlt className="h-3 w-3 mr-1" /> September 2022 -
          </time>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Software Engineer
            </span>
            <TimelineInfoModal
              title="Software Engineer"
              location="Alfred Wegener Institut, Bremerhaven"
              bulletpoints={[
                "Setting up and managing a small baremetal Kubernetes cluster using Helm",
                "Building CI/CD pipelines with GitLab & Kubernetes to automatically build packages, run tests, build Docker images and deploy review apps",
                "Building Docker environments for developing",
                "Building Vue.js components",
                "Using Jira as project management tool",
              ]}
            />
          </div>
          <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <IoLocationSharp className="h-4 w-4 mr-1" /> Alfred Wegener
            Institut, Bremerhaven
          </p>
          <div className="flex items-center mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <LinuxIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <DockerIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <KubernetesIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <GitLabIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <JiraIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <VueJSIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            <JavaScriptIcon className="h-4 w-4 mr-2 fill-gray-500 dark:fill-gray-400" />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimelineWork;
