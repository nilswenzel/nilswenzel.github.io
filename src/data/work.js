import linux from "../assets/icons/linux.svg";
import docker from "../assets/icons/docker.svg";
import kubernetes from "../assets/icons/kubernetes.svg";
import gitlab from "../assets/icons/gitlab.svg";
import jira from "../assets/icons/jira.svg";
import vuejs from "../assets/icons/vuejs.svg";
import java from "../assets/icons/java.svg";

export const work = [
    {
        date: "April 2022 - August 2022",
        title: "Internship (Practical Semester)",
        location: "Alfred Wegener Institut, Bremerhaven",
        icons: [linux, docker, kubernetes, gitlab, jira],
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
        icons: [linux, docker, kubernetes, gitlab, jira, vuejs, java],
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