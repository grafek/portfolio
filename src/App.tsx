import {
  Hero,
  Projects,
  About,
  Skills,
  Footer,
  Header,
} from "./components/Sections";
import type { PageInfo, Project, Skill, SocialMedia, Timeline } from "../types";
import { sanityClient } from "./lib/sanityConfig";
import { useEffect, useRef, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { debounce } from "./utils/helpers";
import { Spinner } from "./components/UI";
import StarsCanvas from "./components/Canvas/Stars";

type QueryResult = {
  skills: Skill[];
  pageInfo: PageInfo;
  socials: SocialMedia[];
  projects: Project[];
  timeline: Timeline[];
};

const pageDataQueries = `{
    "skills": *[_type == 'skill'] | order(_createdAt asc),
    "pageInfo": *[_type == 'pageInfo'][0],
    "socials": *[_type == 'social'],
    "projects": *[_type == 'project'] | order(_createdAt desc) {
      ...,
      technologies[] ->
    },
    "timeline": *[_type == 'timeline'] | order(_createdAt desc)
  }`;

const App = () => {
  const [pageData, setPageData] = useState<undefined | QueryResult>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const data: QueryResult = await sanityClient.fetch(pageDataQueries);
      setPageData(data);
    })();
  }, []);

  if (!pageData) {
    return (
      <div className="grid min-h-screen place-items-center">
        <Spinner />
      </div>
    );
  }

  const { firstName, role, phoneNumber } = pageData?.pageInfo;

  const handleScroll = () => {
    if (containerRef.current)
      if (containerRef.current?.scrollTop > 100) {
        setIsVisible(true);
      } else setIsVisible(false);
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);

  return (
    <div
      onScroll={debouncedHandleScroll}
      ref={containerRef}
      className="h-screen overflow-x-hidden scroll-smooth bg-gradient-to-b from-[#9693eb] to-[#dfdef8] px-4 font-gt-walsheim text-slate-700 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-indigo-600 dark:from-[#110c3b] dark:to-darkBg dark:text-slate-400 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-indigo-600 md:px-16"
    >
      <Header socials={pageData.socials} phoneNumber={phoneNumber} />

      <div className="container relative z-0 mx-auto" id="container">
        <main id={"home"}>
          <Hero firstName={firstName} role={role} />
          <Projects projects={pageData.projects} />
          <Skills skills={pageData.skills} />
          <About
            timelineInfo={pageData.timeline}
            pageInfo={pageData.pageInfo}
          />
          <StarsCanvas />
        </main>
        <ScrollTopButton isVisible={isVisible} containerRef={containerRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

type Props = {
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
};

const ScrollTopButton = ({ containerRef, isVisible }: Props) => {
  const scrollToTop = () =>
    containerRef.current?.scrollTo({
      behavior: "smooth",
      top: 0,
    });

  return (
    <button
      onClick={scrollToTop}
      style={{ WebkitBackfaceVisibility: "hidden" }}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 right-4 z-[100] translate-y-0 rounded-full bg-indigo-600 p-2 md:p-3`}
    >
      <BsArrowUp className={`text-md text-white`} />
    </button>
  );
};
