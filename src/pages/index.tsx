import Head from 'next/head';
import { Footer, Header } from '../components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import { Hero, Projects, About, Skills } from '../components/Sections';
import {
  fetchSocials,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchTimelineInfo,
} from '../utils/Fetch';
import { BackgroundAnimation } from '../components/UI';
import { GetStaticProps, NextPage } from 'next';
import { PageInfo, Project, Skill, SocialMedia, Timeline } from '../../types';

type Props = {
  skills: Skill[];
  pageInfo: PageInfo;
  socials: SocialMedia[];
  timelineInfo: Timeline[];
  projects: Project[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  projects,
  skills,
  socials,
  timelineInfo,
}) => {
  const themeCtx = useContext(ThemeContext);

  const { firstName, role, phoneNumber } = pageInfo;

  return (
    <div
      className={`${themeCtx.themeClasses.scrollbar} ${themeCtx.themeClasses.subText} h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth font-gt-walsheim overflow-x-hidden`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jacek Grafender - Passionate frontend developer looking for a job"
        />
        <title>{`Jacek Grafender - Portfolio`}</title>
      </Head>
      <Header socials={socials} phoneNumber={phoneNumber} />
      <main
        className={`${themeCtx.themeClasses.darkBg} relative z-20`}
        id={'home'}
      >
        <BackgroundAnimation />
        <div className="container mx-auto" id="container">
          <Hero firstName={firstName} role={role} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <About timelineInfo={timelineInfo} pageInfo={pageInfo} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
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
    revalidate: 1,
  };
};
