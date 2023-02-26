import { Slider } from "../../UI";
import Project from "./Project";
import { getImgUrl } from "../../../lib/sanityConfig";
import SectionWrap from "../../../hoc/SectionWrap";

const projectsSliderVariants = {
  sliderHidden: { opacity: 0, scale: 0.5 },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: [0, -60, 30, 0],
    transition: {
      delay: 1.5,
      duration: 1.2,
      type: "spring",
      stiffnes: 300,
    },
  },
};

function Projects({ projects }) {
  const projectsContent = projects?.map((prj) => {
    return (
      <Project
        key={prj._id}
        id={prj._id}
        title={prj.title}
        hasBackdrop={true}
        img={getImgUrl(prj.image).url()}
        demoUrl={prj.demoLink}
        codeUrl={prj.codeLink}
        tags={prj.technologies.map((tech) => tech.title)}
        description={prj.description}
      />
    );
  });

  return (
    <Slider
      innerSliderClasses="h-[calc(100vh-12rem)] gap-8 w-11/12 mx-auto"
      outerSliderClasses="pt-16"
      sliderVariants={projectsSliderVariants}
    >
      {projectsContent}
    </Slider>
  );
}

export default SectionWrap(Projects, "projects", "Projects");
