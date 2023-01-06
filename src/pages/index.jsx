import Head from "next/head";
import { Footer, Header } from "../components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import { Hero, Projects, About, Skills } from "../components/Main";
import {
  fetchGithub,
  fetchLinkedIn,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchTimelineInfo,
} from "../utils/Fetch";

export default function Home({
  skills,
  pageInfo,
  timelineInfo,
  projects,
  github,
  linkedIn,
}) {
  const { firstName, role, heroShortDescription } = pageInfo;
  const { phoneNumber, email } = pageInfo;

  const heroInfo = { firstName, role, heroShortDescription };

  const contactInfo = { phoneNumber, email };

  const socials = { github, linkedIn };

  const themeCtx = useContext(ThemeContext);
  return (
    <div
      className={`${themeCtx.themeClasses.scrollbar} h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jacek Grafender - Inspired frontend developer looking for a job"
        />
        <title>{`Jacek Grafender - Portfolio`}</title>
      </Head>

      <Header socials={socials} contactInfo={contactInfo} />
      <main className={`${themeCtx.themeClasses.darkBg}`} id={"home"}>
        <div className="mx-auto container" id="container">
          <Hero heroInfo={heroInfo} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <About timelineInfo={timelineInfo} pageInfo={pageInfo} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const skills = await fetchSkills();
    const pageInfo = await fetchPageInfo();
    const github = await fetchGithub();
    const linkedIn = await fetchLinkedIn();
    const timelineInfo = await fetchTimelineInfo();
    const projects = await fetchProjects();

    const fetchData = [
      skills,
      pageInfo,
      github,
      linkedIn,
      timelineInfo,
      projects,
    ];
    if (!fetchData) {
      return { notFound: true };
    }
    return {
      props: {
        skills,
        pageInfo,
        github,
        linkedIn,
        timelineInfo,
        projects,
      },
      revalidate: 600,
    };
  } catch (_) {
    return { notFound: true };
  }
}
