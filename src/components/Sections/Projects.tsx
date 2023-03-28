import { Slider, Pill } from '../UI';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import Image from 'next/image';
import { HiOutlineCode } from 'react-icons/hi';
import { type Project } from '../../../types';
import { projectsSliderVariants } from '../../utils/framer';
import { useEffect, useState } from 'react';

type ProjectsProps = { projects: Project[] };

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Slider
      innerSliderClasses="gap-8 mx-auto h-full"
      outerSliderClasses="h-[95%]"
      sliderVariants={projectsSliderVariants}
    >
      {projects?.map((prj) => (
        <Project
          key={prj._id}
          title={prj.title}
          img={getImgUrl(prj.image).url()}
          demoUrl={prj.demoLink}
          codeUrl={prj.codeLink}
          tags={prj.technologies.map((tech) => tech.name)}
          description={prj.description}
        />
      ))}
    </Slider>
  );
};

export default SectionWrap(Projects, 'projects', 'Projects', '');

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  let desc = <p>{description}</p>;

  if (isMounted && window.innerWidth < 768) {
    desc = (
      <p>
        {description.slice(0, 160)}
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
      className={`flex w-[260px] min-w-[260px] flex-shrink-0 grow flex-col rounded-md bg-[#dfdef8] shadow-md shadow-[#00000025] transition-colors dark:bg-gray-900 dark:shadow-[#ffffff15] md:w-[600px] xl:w-[900px]`}
    >
      {/* PROJECT IMAGE/TITLE */}
      <div className="relative flex-1" title={title}>
        <div className="absolute z-30 flex h-full w-full justify-center">
          <h2 className="my-auto text-center text-3xl font-bold capitalize italic text-slate-200 md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="relative z-20 flex h-full w-full justify-center bg-black opacity-60"></div>
        <Image
          fill
          alt={title}
          className="object-cover"
          src={img}
          sizes="(max-width: 768px) 260px,
              (max-width: 1280px) 600px,
              900px"
        />
      </div>
      {/* PROJECT DESCRIPTION */}
      <div className={`p-4 leading-6 lg:text-lg `}>
        {desc}
        {/* PROJECT TAGS */}
        <div className="flex flex-row flex-wrap items-center gap-2 pt-4 md:justify-between">
          <div>
            {tags.map((tag, i) => (
              <Pill className="m-1" key={i}>
                #{tag}
              </Pill>
            ))}
          </div>
          {/* PROJECT LINKS */}
          <div className="flex w-full items-center justify-between md:gap-6 xl:w-auto">
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
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
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
