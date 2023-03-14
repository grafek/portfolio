import { Slider, Pill } from '../UI';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { HiOutlineCode } from 'react-icons/hi';
import { type Project } from '../../../types';

const projectsSliderVariants = {
  sliderHidden: { opacity: 0, scale: 0.5 },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: [0, -60, 30, 0],
    transition: {
      delay: 1.5,
      duration: 1.2,
      type: 'spring',
      stiffnes: 300,
    },
  },
};

type ProjectsProps = { projects: Project[] };

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectsContent = projects?.map((prj) => {
    return (
      <Project
        key={prj._id}
        title={prj.title}
        hasBackdrop={true}
        img={getImgUrl(prj.image).url()}
        demoUrl={prj.demoLink}
        codeUrl={prj.codeLink}
        tags={prj.technologies.map((tech) => tech.name)}
        description={prj.description}
      />
    );
  });

  return (
    <Slider
      innerSliderClasses="h-[calc(100vh-12rem)] gap-8 w-11/12 mx-auto"
      sliderVariants={projectsSliderVariants}
    >
      {projectsContent}
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
  hasBackdrop: boolean;
  description: string;
  className?: string;
};

const Project: React.FC<ProjectItemProps> = ({
  title,
  tags,
  demoUrl,
  codeUrl,
  img,
  hasBackdrop = true,
  description,
  className = '',
}) => {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;
  let imgContent;

  if (tags && tags.length >= 1) {
    tagsContent = (
      <div>
        {tags.map((tag, i) => (
          <Pill
            className={` ${themeCtx.themeClasses.darkBg} ${themeCtx.themeClasses.subText} mb-2 mr-2 `}
            key={i}
          >
            #{tag}
          </Pill>
        ))}
      </div>
    );
  }

  if (img && hasBackdrop) {
    imgContent = (
      <div className="relative flex-1" title={title}>
        <div className="absolute z-30 flex h-full w-full justify-center">
          <h2 className="l my-auto text-center text-3xl font-bold capitalize italic text-slate-200 md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="relative z-20 flex h-full w-full justify-center bg-black opacity-60"></div>
        <Image layout="fill" objectFit="cover" alt={title} src={img} />
      </div>
    );
  }
  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg}  ${className} ${themeCtx.themeClasses.shadow}  m-auto flex h-full min-h-[450px] w-[260px] min-w-[260px] flex-shrink-0 flex-col rounded-md shadow-md transition-colors md:w-[600px] xl:w-[900px]`}
    >
      {imgContent}
      <div className={`p-4 leading-6 lg:text-lg `}>
        <p
          className={`${themeCtx.themeClasses.subText} max-h-[160px] select-none pr-2 ${themeCtx.themeClasses.scrollbar} overflow-y-auto`}
        >
          {description}
        </p>
        <div className="flex flex-col items-center justify-between gap-4 pt-4 md:flex-row">
          {tagsContent}
          <div className="flex w-full justify-between md:w-auto md:items-center md:gap-6">
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              title={`${title} source link`}
            >
              <Pill
                className={`text-indigo-600 hover:bg-indigo-500 hover:text-white`}
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
                className={`flex text-indigo-600 hover:bg-indigo-500 hover:text-white`}
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
