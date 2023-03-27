import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import {
  Hero,
  Projects,
  About,
  Skills,
  Footer,
  Header,
} from '../components/Sections';
import { BackgroundAnimation } from '../components/UI';
import { GetStaticProps, NextPage } from 'next';
import type {
  PageInfo,
  Project,
  Skill,
  SocialMedia,
  Timeline,
} from '../../types';
import { groq } from 'next-sanity';
import { sanityClient } from '../lib/sanityConfig';

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

const pageInfoQuery = groq`
  *[_type == 'pageInfo'][0]
`;
const projectsQuery = groq`
  *[_type == 'project'] | order(_createdAt desc) {
    ...,
    technologies[] ->
  }
`;
const skillsQuery = groq`
*[_type == 'skill'] | order(_createdAt asc)
`;
const socialsQuery = groq`
  *[_type == 'social']
`;

const timelineQuery = groq`
*[_type == 'timeline'] | order(year asc)
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills = await sanityClient.fetch(skillsQuery);
  const pageInfo = await sanityClient.fetch(pageInfoQuery);
  const socials = await sanityClient.fetch(socialsQuery);
  const timelineInfo = await sanityClient.fetch(timelineQuery);
  const projects = await sanityClient.fetch(projectsQuery);

  return {
    props: {
      skills,
      pageInfo,
      socials,
      timelineInfo,
      projects,
    },
  };
};
