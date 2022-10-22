import Layout from "../components/Sections/Layout";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout pageTitle="Jacek Grafender - Portfolio">
      <Hero />
      <Projects />
      <Resume />
    </Layout>
  );
}
