import { useCallback, useEffect, useState } from "react";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const res = await fetch("https://api.github.com/users/grafek/repos");
    const projectsData = await res.json();

    const projectsList = [];

    projectsData.map((prj) => {
      projectsList.push({
        id: prj.id,
        name: prj.name,
        description: prj.description,
        url: prj.html_url,
      });
    });
    setProjects(projectsList);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let content;

  console.log(projects);

  content = projects.map((prj) => {
    return (
      <Card key={prj.id} id={prj.id} title={prj.name}>
        {prj.description}
      </Card>
    );
  });
  if (!projects || projects.length < 1) {
    content = (
      <p className="text-center my-10 text-slate-500">No projects found!</p>
    );
  }

  return (
    <>
      <SectionHeading title={"My Projects"} />
      <section className="mx-auto grid grid-flow-row auto-cols-auto  md:grid-cols-2 lg:grid-cols-3">
        {content}
      </section>
    </>
  );
}
