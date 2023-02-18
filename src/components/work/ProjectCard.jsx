import { BiRightArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="min-w-[280px] mb-5 shadow-md bg-white dark:bg-[#131519] rounded-md">
      <img
        className="rounded-t-lg"
        src={props.image.image_src}
        alt={props.image.image_alt}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 h-16 min-h-0 max-h-16">
          {props.title}
        </h5>
        <div className="flex items-center mb-3">
          {props.icons.map((Icon, key) => (
              <Icon key={key} className="w-4 h-4 mr-2 fill-gray-700 dark:fill-gray-400"/>
          ))}
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-0 max-h-24">
          {props.description}
        </p>
        <div className="flex justify-start">
          <a href={props.gitHubLink} target="_blank" rel="noreferrer">
            <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-[#1d1f24] bg-teal-500 rounded-md hover:bg-teal-400 mr-3">
              GitHub
              <FaGithub className="ml-2" />
            </button>
          </a>
          {props.demoLink === undefined ? (
            <button className="hover:cursor-not-allowed inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-[#1d1f24] bg-teal-500 rounded-md hover:bg-teal-400">
              Demo
              <BiRightArrow className="ml-2" />
            </button>
          ) : (
            <a href={props.demoLink} target="_blank" rel="noreferrer">
              <button className="inline-flex items-center py-2 px-3 text-sm font-semibold text-center text-[#1d1f24] bg-teal-500 rounded-md hover:bg-teal-400">
                Demo
                <BiRightArrow className="ml-2" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
