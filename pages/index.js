import Layout from "../components/Sections/Layout";
import Projects from "../components/Projects";
import Qualities from "../components/Qualities";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout pageTitle="Jacek Grafender - Portfolio">
      <Hero />
      <Projects />
      <Qualities />
    </Layout>
  );
}
