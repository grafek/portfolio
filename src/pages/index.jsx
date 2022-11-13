import Head from "next/head";
import { Footer, Header } from "../components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import { Hero, Projects, About, Skills } from "../components/Main";
import {
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
  fetchTimelineInfo,
} from "../utils/Fetch";

export default function Home({
  skills,
  pageInfo,
  socials,
  timelineInfo,
  projects,
}) {
  const themeCtx = useContext(ThemeContext);
  return (
    <div
      className={`${themeCtx.themeClasses.scrollbar} h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Jacek Grafender - Inspired frontend developer looking for a job"
        />
        <title>{`Jacek Grafender - Portfolio`}</title>
      </Head>

      <Header socials={socials} />
      <main className={`${themeCtx.themeClasses.darkBg}`} id={"home"}>
        <div className="mx-auto container" id="container">
          <Hero />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <About timelineInfo={timelineInfo}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const skills = await fetchSkills();
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const timelineInfo = await fetchTimelineInfo();
  const projects = await fetchProjects();
  return {
    props: {
      skills,
      pageInfo,
      socials,
      timelineInfo,
      projects,
    },
    revalidate: 60,
  };
}
