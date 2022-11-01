import Layout from "../components/Layout";
import { Hero, Projects, About, Skills } from "../components/Main";

export default function Home() {
  return (
    <Layout pageTitle="Jacek Grafender - Portfolio">
      <Hero />
      <Projects />
      <Skills />
      <About />
    </Layout>
  );
}
