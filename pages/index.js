import AboutMe from "../components/AboutMe";
import Layout from "../components/Sections/Layout";
import Projects from "../components/Projects";
import Qualities from "../components/Qualities";

export default function Home() {
  return (
    <Layout pageTitle="Jacek Grafender - Portfolio">
      <AboutMe />
      <Projects />
      <Qualities />
    </Layout>
  );
}
