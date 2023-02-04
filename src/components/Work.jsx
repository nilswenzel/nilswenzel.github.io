import { React } from "react";

import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as HTMLIcon } from "../assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css.svg";
import { ReactComponent as TailwindCSSIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as VueJSIcon } from "../assets/icons/vuejs.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as PHPIcon } from "../assets/icons/php.svg";
import { ReactComponent as LaravelIcon } from "../assets/icons/laravel.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as DjangoIcon } from "../assets/icons/django.svg";
import { ReactComponent as MySQLIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as TensorflowIcon } from "../assets/icons/tensorflow.svg";
import { ReactComponent as NumpyIcon } from "../assets/icons/numpy.svg";
import { ReactComponent as PandasIcon } from "../assets/icons/pandas.svg";
import { ReactComponent as GoogleChromeIcon } from "../assets/icons/googlechrome.svg";

import covid19DataVisualizationImage from "../assets/work/covid-19-data-visualization.jpg";
import cryptoPortfolioRemadeImage from "../assets/work/crypto-portfolio-remade.jpg";
import parqetDarkmodeImage from "../assets/work/parqet-darkmode.jpg";
import ownPortfolioImage from "../assets/work/own-portfolio.jpg";
import cryptoPortfolioOldImage from "../assets/work/crypto-portfolio-old.jpg";
import emotionRecognitionImage from "../assets/work/emotion-recognition.jpg";

import ProjectCard from "./work/ProjectCard";

const Work = () => {
  return (
    <div
      name="work"
      className="w-screen h-screen bg-slate-50 dark:bg-[#1d1f24] text-gray-300 snap-start scroll-m-[80px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-teal-500">
            Projects
          </p>
          <p className="py-4 font-medium text-gray-500 dark:text-gray-400">
            // Check out some of my work
          </p>
        </div>
        <div className="flex flex-nowrap justify-start gap-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-teal-500 dark:scrollbar-track-[#23242a] scrollbar-track-white">
          <ProjectCard
            image={{
              image_src: cryptoPortfolioRemadeImage,
              image_alt: "project-crypto-portfolio-remade",
            }}
            title="Cryptocurrency Portfolio (Remade)"
            description="A remade of a previous Cryptocurrency Portfolio project. This time proper restful API calls to a Laravel or Django API."
            icons={[
              <VueJSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <LaravelIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <DjangoIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <NumpyIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <PandasIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <TailwindCSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <DockerIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://gitfront.io/r/user-2434316/Hk1cGwzCA33T/crypto-portfolio-reworked/"
          />
          <ProjectCard
            image={{
              image_src: covid19DataVisualizationImage,
              image_alt: "project-covid19-data-visualization",
            }}
            title="Covid-19 Data Visualization"
            description="Web visualization of Covid-19 data of the world and Germany."
            icons={[
              <HTMLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <JavaScriptIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <PHPIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://gitfront.io/r/user-2434316/7F2GZHXK1eWg/covid-19-web-visualisation/"
            demoLink="https://informatik.hs-bremerhaven.de/nwenzel/projects/covid-19-web-visualisation/coronavirus.html"
          />
          <ProjectCard
            image={{
              image_src: parqetDarkmodeImage,
              image_alt: "project-parqet-darkmode",
            }}
            title="Darkmode for Parqet"
            description="A Chrome extension which adds a darkmode for a website I personally use."
            icons={[
              <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <JavaScriptIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <GoogleChromeIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://github.com/nilswenzel/parqet-darkmode-chrome-extension"
            demoLink="https://chrome.google.com/webstore/detail/parqet-darkmode/jfhpcliegfecjhjehclnhnngbjndodoj"
          />
          <ProjectCard
            image={{
              image_src: ownPortfolioImage,
              image_alt: "project-own-portfolio",
            }}
            title="Own Portfolio"
            description="My portfolio you're currently looking at."
            icons={[
              <ReactIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <TailwindCSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://gitfront.io/r/user-2434316/p45yfGTT9PTs/nilswenzel.github.io/"
            demoLink="https://nilswenzel.github.io/"
          />
          <ProjectCard
            image={{
              image_src: cryptoPortfolioOldImage,
              image_alt: "project-crypto-portfolio-old",
            }}
            title="Cryptocurrency Portfolio (Old)"
            description="A Cryptocurrency Portfolio (visualisation and calculation)."
            icons={[
              <ReactIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <CSSIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <PHPIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <MySQLIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://gitfront.io/r/user-2434316/yj9cvdzf7vUv/crypto-portfolio/"
            demoLink="https://informatik.hs-bremerhaven.de/nwenzel/projects/crypto-portfolio/portfolio.html?uuid=0"
          />
          <ProjectCard
            image={{
              image_src: emotionRecognitionImage,
              image_alt: "project-emotion-recognition",
            }}
            title="Emotion Recognition with Machine Learning"
            description="A Neural Network to recognize human emotions in real time. A group project for university."
            icons={[
              <TensorflowIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <PythonIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
              <NumpyIcon className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400" />,
            ]}
            gitHubLink="https://gitfront.io/r/user-2434316/E76DqZ8FETEY/ki-emotion-recognition/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
