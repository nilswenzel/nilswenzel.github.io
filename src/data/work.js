import { ReactComponent as LinuxIcon } from "../assets/icons/linux.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "../assets/icons/kubernetes.svg";
import { ReactComponent as GitLabIcon } from "../assets/icons/gitlab.svg";
import { ReactComponent as JiraIcon } from "../assets/icons/jira.svg";
import { ReactComponent as VueJSIcon } from "../assets/icons/vuejs.svg";
import { ReactComponent as JavaIcon } from "../assets/icons/java.svg";

export const work = [
    {
        date: "April 2022 - August 2022",
        title: "Internship (Practical Semester)",
        location: "Alfred Wegener Institut, Bremerhaven",
        icons: [LinuxIcon, DockerIcon, KubernetesIcon, GitLabIcon, JiraIcon],
        modal: {
            title: "Internship (Practical Semester)",
            location: "Alfred Wegener Institut, Bremerhaven",
            bulletpoints: [
                "Familiarization with Docker containers and Kubernetes, as well as setting up a Kubernetes cluster on virtual Ubuntu machines",
                "Development, documentation, and integration of CI/CD templates for GitLab based on Kubernetes",
                "Participation and contribution to the development team following a Scrum- and Git-based development process",
            ]
        }
    },
    {
        date: "April 2023 - March 2024",
        title: "Werkstudent",
        location: "Weser-Petrol Seehafentanklager GmbH, Bremen",
        icons: [],
        modal: {
            title: "Werkstudent",
            location: "Weser-Petrol Seehafentanklager GmbH, Bremen",
            bulletpoints: [
                "Digitalizing folders and setting up the data structure"
            ]
        }
    },
    {
        date: "September 2022 - March 2025",
        title: "Werkstudent",
        location: "Alfred Wegener Institut, Bremerhaven",
        icons: [LinuxIcon, DockerIcon, KubernetesIcon, GitLabIcon, JiraIcon, VueJSIcon, JavaIcon],
        modal: {
            title: "Werkstudent",
            location: "Alfred Wegener Institut, Bremerhaven",
            bulletpoints: [
                "Continuation of the CI/CD work initiated during the internship",
                "Integration of a dependency bot into the existing infrastructure",
                "Full-stack development for internal projects (frontend and backend) following a Scrum- and Git-based development process (Java, Vue.js, PostgreSQL)",
                "Writing the bachelor's thesis",
            ]
        }
    }
]