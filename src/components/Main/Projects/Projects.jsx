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
    <section
      id={"projects"}
      className={"snap-center h-screen my-auto relative overflow-hidden"}
    >
      <SectionHeading>Projects</SectionHeading>
      <div
        className={
          "h-[80%] w-11/12 mx-auto flex space-x-6 snap-x snap-mandatory overflow-x-scroll"
        }
      >
        {content}
      </div>
    </section>
  );
}
