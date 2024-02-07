import { React, useState } from "react";
import { FaDatabase, FaCodeBranch, FaCode } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as HTMLIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../../assets/icons/css.svg";
import { ReactComponent as TailwindCSSIcon } from "../../assets/icons/tailwindcss.svg";
import { ReactComponent as VueJSIcon } from "../../assets/icons/vuejs.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as JQueryIcon } from "../../assets/icons/jquery.svg";

import { ReactComponent as JavaIcon } from "../../assets/icons/java.svg";
import { ReactComponent as CPlusPlusIcon } from "../../assets/icons/cplusplus.svg";
import { ReactComponent as PHPIcon } from "../../assets/icons/php.svg";
import { ReactComponent as LaravelIcon } from "../../assets/icons/laravel.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/python.svg";
import { ReactComponent as BashIcon } from "../../assets/icons/bash.svg";
import { ReactComponent as DjangoIcon } from "../../assets/icons/django.svg";

import { ReactComponent as MySQLIcon } from "../../assets/icons/mysql.svg";
import { ReactComponent as OracleDBIcon } from "../../assets/icons/oracledb.svg";
import { ReactComponent as RedisIcon } from "../../assets/icons/redis.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodb.svg";
import { ReactComponent as ElasticsearchIcon } from "../../assets/icons/elasticsearch.svg";

import { ReactComponent as DockerIcon } from "../../assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "../../assets/icons/kubernetes.svg";
import { ReactComponent as TensorflowIcon } from "../../assets/icons/tensorflow.svg";
import { ReactComponent as GitLabIcon } from "../../assets/icons/gitlab.svg";
import { ReactComponent as GitIcon } from "../../assets/icons/git.svg";
import { ReactComponent as LinuxIcon } from "../../assets/icons/linux.svg";
import { ReactComponent as JiraIcon } from "../../assets/icons/jira.svg";
import { ReactComponent as StackOverflowIcon } from "../../assets/icons/stackoverflow.svg";

const SKILLS = {
  frontend: [
    {
      name: "HTML",
      Icon: HTMLIcon,
    },
    {
      name: "CSS",
      Icon: CSSIcon,
    },
    {
      name: "Tailwind CSS",
      Icon: TailwindCSSIcon,
    },
    {
      name: "JavaScript",
      Icon: JavaScriptIcon,
    },
    {
      name: "Vue.js",
      Icon: VueJSIcon,
    },
    {
      name: "React",
      Icon: ReactIcon,
    },
    {
      name: "jQuery",
      Icon: JQueryIcon,
    },
  ],
  backend: [
    {
      name: "Java",
      Icon: JavaIcon,
    },
    {
      name: "C++",
      Icon: CPlusPlusIcon,
    },
    {
      name: "PHP",
      Icon: PHPIcon,
    },
    {
      name: "Laravel",
      Icon: LaravelIcon,
    },
    {
      name: "Bash",
      Icon: BashIcon,
    },
    {
      name: "Python",
      Icon: PythonIcon,
    },
    {
      name: "Django",
      Icon: DjangoIcon,
    },
  ],
  databases: [
    {
      name: "MySQL / MariaDB",
      Icon: MySQLIcon,
    },
    {
      name: "H2 Database",
    },
    {
      name: "Oracle Database",
      Icon: OracleDBIcon,
    },
    {
      name: "Redis",
      Icon: RedisIcon,
    },
    {
      name: "MongoDB",
      Icon: MongoDBIcon,
    },
    {
      name: "Elasticsearch",
      Icon: ElasticsearchIcon,
    },
  ],
  other: [
    {
      name: "Docker",
      Icon: DockerIcon,
    },
    {
      name: "Kubernetes & Helm",
      Icon: KubernetesIcon,
    },
    {
      name: "Tensorflow",
      Icon: TensorflowIcon,
    },
    {
      name: "GitLab CI/CD Pipelines",
      Icon: GitLabIcon,
    },
    {
      name: "Git",
      Icon: GitIcon,
    },
    {
      name: "Linux & Shell",
      Icon: LinuxIcon,
    },
    {
      name: "Jira",
      Icon: JiraIcon,
    },
    {
      name: "Stack Overflow",
      Icon: StackOverflowIcon,
    },
  ],
};
const TabMenu = () => {
  const [tab, setTab] = useState("frontend");

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="mb-4 border-b border-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-base font-medium text-center">
            <TabMenuEntry
              activeTab={tab}
              name={"frontend"}
              title={"Frontend"}
              Icon={FaCode}
              onClick={() => {
                setTab("frontend");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"backend"}
              title={"Backend"}
              Icon={BsFillGearFill}
              onClick={() => {
                setTab("backend");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"databases"}
              title={"Databases"}
              Icon={FaDatabase}
              onClick={() => {
                setTab("databases");
              }}
            />
            <TabMenuEntry
              activeTab={tab}
              name={"other"}
              title={"Other"}
              Icon={FaCodeBranch}
              onClick={() => {
                setTab("other");
              }}
            />
          </ul>
        </div>
      </div>
      <div className="flex justify-center min-h-[350px]">
        <Tab skills={SKILLS[tab]} />
      </div>
    </div>
  );
};

const TabMenuEntry = ({ activeTab, name, title, Icon, onClick }) => {
  const isActive = activeTab === name;
  return (
    <li className="mr-2">
      <button
        className={
          isActive
            ? "inline-block p-4 rounded-t-lg border-b-2 border-teal-500"
            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:border-gray-300 hover:border-gray-700 dark:hover:text-gray-300"
        }
        onClick={onClick}
      >
        <div
          className={
            isActive
              ? "flex items-center text-gray-600 dark:text-gray-300"
              : "flex items-center text-gray-500 dark:text-gray-400"
          }
        >
          <Icon className="h-5 w-5 mr-2" />
          <span>{title}</span>
        </div>
      </button>
    </li>
  );
};

const Tab = ({ skills }) => {
  return (
    <div className="flex flex-wrap items-start justify-center content-start gap-3 max-w-[50%]">
      {skills.map((skill, key) => {
        const { name, Icon } = skill;
        return (
          <div
            key={key}
            className="flex rounded-md w-full md:w-fit shadow-md px-6 py-3 bg-white dark:bg-[#131519] border border-transparent hover:border-teal-500 cursor-pointer"
          >
            <div className="flex items-center justify-center">
              {Icon == null ? <></> : <Icon className="h-8 w-8 mr-4" />}
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg whitespace-normal md:whitespace-nowrap">
                {name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
