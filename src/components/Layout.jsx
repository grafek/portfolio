import Head from "next/head";
import { Footer, Header } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

export default function Layout({ children, pageTitle }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className={`${themeCtx.themeClasses.darkBg}`} id={"home"}>
        <div className="mx-auto container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
