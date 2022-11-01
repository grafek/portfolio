import {Card, SectionHeading} from "../../UI";
import { DUMMY_PROJECTS } from "../../../constants";

export default function Projects() {
  let content;

  content = DUMMY_PROJECTS.map((prj) => {
    return (
      <Card
        key={prj.id}
        id={prj.id}
        title={prj.name}
        hasBackdrop={prj.hasBackdrop}
        img={prj.img}
        url={prj.url}
        tags={prj.tags}
      >
        {prj.description}
      </Card>
    );
  });

  return (
    <section id={"projects"}>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">{content}</div>
    </section>
  );
}
