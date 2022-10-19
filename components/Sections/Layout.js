import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function Layout({ children, pageTitle }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main
        className={`min-h-screen ${themeCtx.themeClasses.darkBg}`}
        id={"main"}
      >
        <div className="mx-auto" id={"container"}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
