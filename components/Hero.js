import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import BackgroundAnimation from "./BackgroundAnimation.js";

export default function Hero() {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className="md:pt-0 h-screen">
      <div className="flex relative z-20 flex-col px-4 2xl:px-0 justify-center content-center md:flex-row text-center w-full h-full">
        <div className="md:w-2/3 md:flex md:flex-col justify-evenly md:justify-center ">
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
              Big web development passionate - looking for a first job as a
              front-end engineer.
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
              Contact
            </a>
          </div>
        </div>
        <div className="absolute w-full -z-10 top-0 lg:static m-auto xl:w-1/2">
          <div className="h-full w-full relative">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
