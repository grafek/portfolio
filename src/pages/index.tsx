/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from 'next/head';
import {
  Hero,
  Projects,
  About,
  Skills,
  Footer,
  Header,
} from '../components/Sections';
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
import Script from 'next/script';

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
  const { firstName, role, phoneNumber } = pageInfo;

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-b from-[#9693eb] to-[#dfdef8] font-gt-walsheim text-slate-700 transition-colors scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-indigo-600 dark:from-[#110c3b] dark:to-darkBg dark:text-slate-400 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-indigo-600`}
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
      <Script src="/theme.js" strategy="beforeInteractive" />
      <Header socials={socials} phoneNumber={phoneNumber} />
      <main className={`relative z-20 `} id={'home'}>
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
