import { useCallback, useEffect, useState } from "react";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
export default function Projects() {
  const DUMMY_PROJECTS = [
    {
      id: "1",
      name: "Restaurant landing page",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/pizza.jpg",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "running blog",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/run.jpg",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "E-commerce store",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/ecommerce.png",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "Dj landing page",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/dj.jpg",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "Expenses list",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/expenses.jpg",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "Chatting app",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/chat.webp",
      tags: ["#react", "#next", "#tailwindcss"],
    },
    {
      id: "1",
      name: "TODO list",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url: "https://stackoverflow.com/",
      hasBackdrop: true,
      img: "/todo.jpg",
      tags: ["#react", "#next", "#tailwindcss"],
    },
  ];

  // const [projects, setProjects] = useState([]);

  // const fetchProjects = useCallback(async () => {
  //   const res = await fetch("https://api.github.com/users/grafek/repos");
  //   const projectsData = await res.json();

  //   const projectsList = [];

  //   projectsData.map((prj) => {
  //     projectsList.push({
  //       id: prj.id,
  //       name: prj.name,
  //       description: prj.description,
  //       url: prj.html_url,
  //     });
  //   });
  //   setProjects(projectsList);
  // }, []);

  // useEffect(() => {
  //   fetchProjects();
  // }, [fetchProjects]);

  let content;

  // console.log(DUMMY_PROJECTS);

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
  // if (!DUMMY_PROJECTS || DUMMY_PROJECTS.length < 1) {
  //   content = (
  //     <p className="text-center my-10 text-slate-500">No projects found!</p>
  //   );
  // }

  return (
    <section id={"projects"}>
      <SectionHeading title={"My Projects"} />
      <div className="mx-auto grid grid-flow-row auto-cols-auto py-10 gap-14 xl:grid-cols-2 ">
        {content}
      </div>
    </section>
  );
}
