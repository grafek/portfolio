import Layout from "../components/Sections/Layout";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <Layout pageTitle="Jacek Grafender - Portfolio">
      <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
    </Layout>
  );
}
