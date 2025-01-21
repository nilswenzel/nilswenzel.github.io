import { ReactComponent as JavaIcon } from "../assets/icons/java.svg";
import { ReactComponent as CPlusPlusIcon } from "../assets/icons/cplusplus.svg";
import { ReactComponent as CIcon } from "../assets/icons/c.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as PHPIcon } from "../assets/icons/php.svg";
import { ReactComponent as HTMLIcon } from "../assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css.svg";
import { ReactComponent as BashIcon } from "../assets/icons/bash.svg";

import { ReactComponent as LaravelIcon } from "../assets/icons/laravel.svg";
import { ReactComponent as SpringBootIcon } from "../assets/icons/spring-boot.svg";
import { ReactComponent as VueJSIcon } from "../assets/icons/vuejs.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as TailwindCSSIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as BootstrapIcon } from "../assets/icons/bootstrap.svg";

import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "../assets/icons/kubernetes.svg";
import { ReactComponent as GitLabIcon } from "../assets/icons/gitlab.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as LinuxIcon } from "../assets/icons/linux.svg";
import { ReactComponent as JiraIcon } from "../assets/icons/jira.svg";

import { ReactComponent as GermanIcon } from "../assets/icons/germany.svg";
import { ReactComponent as EnglishIcon } from "../assets/icons/britain.svg";
import { ReactComponent as FrenchIcon } from "../assets/icons/france.svg";

export const skills = {
    programmingLanguages: [
      {
        name: "Java",
        Icon: JavaIcon,
        modalBulletPoints: [
          "Extensively used during academic projects and coursework e.g. for algorithms and data structures.",
          "Experience with parallel algorithms, multithreading / concurrency, and OOP.",
          "Worked with Java EE, JAX-RS, Spring Boot, Hibernate, JPA, and JDBC."
        ]
      },
      {
        name: "C++",
        Icon: CPlusPlusIcon,
        modalBulletPoints: [
          "Utilized during academic projects for implementing algorithms and data structures."
        ]
      },
      {
        name: "C",
        Icon: CIcon,
        modalBulletPoints: [
          "Utilized during academic coursework for embedded systems programming."
        ]
      },
      {
        name: "Python",
        Icon: PythonIcon,
        modalBulletPoints: [
          "Used during academic coursework for the development of regression models, AI solutions (using scikit-learn, Keras, TensorFlow), and data visualizations (Matplotlib, Pyplot) during academic projects.",
          "Also used in personal projects for OOP, data analysis (NumPy, Pandas), and web development with Django."
        ]
      },
      {
        name: "JavaScript",
        Icon: JavaScriptIcon,
        modalBulletPoints: [
          "Experience with Vanilla JavaScript during academic projects.",
          "Proficient in React, used in both academic and personal projects.",
          "Hands-on experience with Vue.js in personal projects, the prototype of the bachelor’s thesis, and professional work at Alfred-Wegener-Institut."
        ]
      },
      {
        name: "PHP",
        Icon: PHPIcon,
        modalBulletPoints: [
          "Applied during academic projects for web development.",
          "Used Laravel extensively for personal projects and for the prototype of the bachelor’s thesis."
        ]
      },
      {
        name: "HTML",
        Icon: HTMLIcon,
        modalBulletPoints: [
          "Used extensively in a lot of projects."
        ]
      },
      {
        name: "CSS",
        Icon: CSSIcon,
        modalBulletPoints: [
          "Used extensively in a lot of projects."
        ]
      },
      {
        name: "SQL",
        modalBulletPoints: [
          "Used extensively for database management in academic, personal, and professional settings with MySQL/MariaDB and PostgreSQL."
        ]
      },
      {
        name: "Bash",
        Icon: BashIcon,
        modalBulletPoints: [
          "Used extensively for automations, scripting, and Docker image creation in academic, personal, and professional environments."
        ]
      }
    ],
    frameworks: [
      {
        name: "Laravel",
        Icon: LaravelIcon,
        modalBulletPoints: [
          "Used for personal projects and extensively for the prototype of the bachelor’s thesis."
        ]
      },
      {
        name: "Spring Boot",
        Icon: SpringBootIcon,
        modalBulletPoints: [
          "Applied in personal projects and coursework at Hochschule Bremerhaven."
        ]
      },
      {
        name: "Vue.js",
        Icon: VueJSIcon,
        modalBulletPoints: [
          "Utilized in personal projects and professional work at Alfred-Wegener-Institut."
        ]
      },
      {
        name: "React",
        Icon: ReactIcon,
        modalBulletPoints: [
          "Applied in personal projects, including this website, and in coursework at Hochschule Bremerhaven."
        ]
      },
      {
        name: "Tailwind CSS",
        Icon: TailwindCSSIcon,
        modalBulletPoints: [
          "Implemented in personal projects, including this website, and in coursework at Hochschule Bremerhaven."
        ]
      },
      {
        name: "Bootstrap",
        Icon: BootstrapIcon,
        modalBulletPoints: [
          "Utilized during professional work at Alfred-Wegener-Institut."
        ]
      }
    ],
    other: [
      {
        name: "Docker",
        Icon: DockerIcon,
        modalBulletPoints: [
          "Extensively used in professional work, academic projects, and personal environments.",
          "Experience with Docker Compose and DevContainers for dev environments."
        ]
      },
      {
        name: "Kubernetes & Helm",
        Icon: KubernetesIcon,
        modalBulletPoints: [
          "Used in professional work at Alfred-Wegener-Institut and the prototype of the bachelor’s thesis."
        ]
      },
      {
        name: "GitLab CI/CD Pipelines",
        Icon: GitLabIcon,
        modalBulletPoints: [
          "Configured and managed pipelines during professional work at Alfred-Wegener-Institut."
        ]
      },
      {
        name: "Git",
        Icon: GitIcon,
        modalBulletPoints: [
          "Used the basics in professional, academic, and personal projects for version control."
        ]
      },
      {
        name: "Linux & Shell",
        Icon: LinuxIcon,
        modalBulletPoints: [
          "Gained experience with Linux virtual machines (mainly Ubuntu) during coursework, personal projects, and professional work.",
          "Set up Kubernetes clusters and performed sysadmin tasks such as setting up firewalls, web servers, and databases.",
          "Integrated shell scripting with Docker for automation."
        ]
      },
      {
        name: "Jira",
        Icon: JiraIcon,
        modalBulletPoints: [
          "Experience with Jira for project management at Alfred-Wegener-Institut."
        ]
      }
    ],
    languages: [
      {
        name: "German",
        Icon: GermanIcon,
        modalBulletPoints: [
          "Native language."
        ]
      },
      {
        name: "English",
        Icon: EnglishIcon,
        modalBulletPoints: [
          "Fluent in speaking, reading, and writing."
        ]
      },
      {
        name: "French",
        Icon: FrenchIcon,
        modalBulletPoints: [
          "Basic understanding of the language."
        ]
      }
    ]
};