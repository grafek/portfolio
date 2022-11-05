import { SectionHeading } from "../../UI";
import { DUMMY_PROJECTS } from "../../../constants";
import Project from "./Project";

export default function Projects() {
  let content;

  content = DUMMY_PROJECTS.map((prj) => {
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
    <section id={"projects"} className={"h-screen my-auto"}>
      <SectionHeading>Projects</SectionHeading>
      <div className="overflow-x-scroll w-11/12 m-auto flex items-center h-[80%] gap-8 ">
        {content}
      </div>
    </section>
  );
}
