import { SectionHeading, Slider } from "../../UI";
import { DUMMY_PROJECTS } from "../../../constants";
import Project from "./Project";

export default function Projects() {
  let content = DUMMY_PROJECTS.map((prj) => {
    return (
      <Project
        key={prj.id}
        id={prj.id}
        title={prj.name}
        hasBackdrop={prj.hasBackdrop}
        img={prj.img}
        url={prj.url}
        tags={prj.tags}
        description={prj.description}
      />
    );
  });

  return (
    <section
      id={"projects"}
      className={"snap-center h-screen my-auto relative overflow-hidden"}
    >
      <SectionHeading>Projects</SectionHeading>
      <Slider
        innerSliderClasses="h-[calc(100vh-10rem)] gap-8 w-11/12 mx-auto"
        outerSliderClasses="pt-3"
      >
        {content}
      </Slider>
    </section>
  );
}
