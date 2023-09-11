import { Slider, Pill } from "../UI";
import { getImgUrl } from "../../lib/sanityConfig";
import SectionWrap from "../../hoc/SectionWrap";
import { HiOutlineCode } from "react-icons/hi";
import type { Project } from "../../../types";
import { projectsSliderVariants } from "../../utils/framer";

type ProjectsProps = { projects: Project[] };

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Slider
      innerSliderClasses="gap-6 mx-auto pb-2"
      sliderVariants={projectsSliderVariants}
    >
      {projects?.map((prj) => (
        <Project
          key={prj._id}
          title={prj.title}
          img={getImgUrl(prj.image).url()}
          demoUrl={prj.demoLink}
          codeUrl={prj.codeLink}
          tags={prj.technologies?.map((tech) => tech.name)}
          description={prj.description}
        />
      ))}
    </Slider>
  );
};

export default SectionWrap(Projects, "projects", "Projects", "");

type ProjectItemProps = {
  title: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  img: string;
  description: string;
};

const Project: React.FC<ProjectItemProps> = ({
  title,
  tags,
  demoUrl,
  codeUrl,
  img,
  description,
}) => {
  let desc = <p>{description}</p>;

  if (window.innerWidth < 768) {
    desc = (
      <p>
        {description.slice(0, 120)}
        <a
          href={`${codeUrl}#readme`}
          target="_blank"
          rel="noreferrer"
          className="px-1 font-bold underline decoration-indigo-700 decoration-[3px] underline-offset-4"
          title={`${title} description link`}
        >
          ...
        </a>
      </p>
    );
  }

  return (
    <div
      className={`flex w-[calc(100%-2rem)] flex-shrink-0 flex-col items-center rounded-md bg-[#dfdef8] shadow-md shadow-[#00000025] dark:bg-gray-900 dark:shadow-[#ffffff15] md:w-[36rem] md:flex-row`}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-42 w-full bg-cover bg-center md:h-full md:w-60"
      >
        <div className="flex h-40 w-full items-center justify-center backdrop-brightness-[0.3] md:h-full md:w-60">
          <span className="text-center text-4xl tracking-wider text-slate-200">
            {title}
          </span>
        </div>
      </div>

      <div
        className={`flex h-full flex-col justify-between p-4 leading-6 lg:text-lg`}
      >
        {desc}
        <div className="flex flex-row flex-wrap items-center gap-2 pt-4 md:justify-between">
          <div>
            {tags?.map((tag, i) => (
              <Pill className="m-1" key={i}>
                #{tag}
              </Pill>
            ))}
          </div>

          <div className="flex w-full items-center justify-between md:gap-6 xl:w-auto">
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                title={`${title} source link`}
              >
                <Pill
                  className={`text-indigo-600 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500`}
                >
                  Source
                </Pill>
              </a>
            ) : null}
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto"
              title={`${title} code link`}
            >
              <Pill
                className={`flex text-indigo-600 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500`}
              >
                <HiOutlineCode className="text-xl" />
              </Pill>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
