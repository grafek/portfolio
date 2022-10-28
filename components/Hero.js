import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import BackgroundAnimation from "./BackgroundAnimation.js";

export default function Hero() {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className="md:pt-0 h-screen">
      <div className="flex relative z-20 flex-col px-4 2xl:px-0 justify-center content-center md:justify-start max-w-screen-2xl md:flex-wrap lg:mx-auto md:flex-row text-center w-full h-full lg:h-screen">
        <div className="md:w-1/2 md:flex-auto md:flex md:flex-col justify-evenly md:justify-center ">
          <div>
            <h1
              className={`bg-gradient-to-l from-cyan-500 to-indigo-800 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold`}
            >
              Hi, I&apos;m Jacek
            </h1>
            <h3
              className={`${themeCtx.themeClasses.text} italic py-5 text-2xl`}
            >
              IT Technician and Developer
            </h3>
            <p className={`${themeCtx.themeClasses.subText} leading-8 `}>
              As of now working as a L2 Support Specialist. Aspiring to get the
              first job as a front-end developer.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row justify-center w-1/2 h-full md:h-auto md:mt-20 md:w-full mx-auto">
            <a
              className={`${themeCtx.themeClasses.btnFilled} font-semibold hover:scale-105`}
              href={"#projects"}
            >
              Projects
            </a>
            <a
              className={`${themeCtx.themeClasses.btnTrans} font-semibold hover:scale-105`}
              href={`#about`}
            >
              About
            </a>
          </div>
        </div>
        <div className="absolute w-full -z-10 top-0 md:static mx-auto md:w-1/3">
          <div className="h-full w-full">
            <BackgroundAnimation isDark={themeCtx.darkTheme} />
          </div>
        </div>
      </div>
    </section>
  );
}
