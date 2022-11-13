import Head from "next/head";
import { Footer, Header } from "../components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import { Hero, Projects, About, Skills } from "../components/Main";
import { fetchSkills } from "../utils/Fetch";

export default function Home({ skills }) {
  const themeCtx = useContext(ThemeContext);

  console.log(skills);
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

      <Header />
      <main className={`${themeCtx.themeClasses.darkBg}`} id={"home"}>
        <div className="mx-auto container" id="container">
          <Hero />
          <Projects />
          <Skills skills={skills} />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const skills = await fetchSkills();
  return {
    props: {
      skills,
    },
  };
}
