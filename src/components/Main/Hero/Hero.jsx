import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import BackgroundAnimation from "./BackgroundAnimation";

export default function Hero() {
  const themeCtx = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className="h-screen flex relative z-20 flex-col 2xl:px-0 justify-center items-center md:flex-row text-center"
    >
      <div className="w-2/3 flex flex-col gap-14">
        <div>
          <h1
            className={`bg-gradient-to-r from-indigo-800 to-cyan-500 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold`}
          >
            Hi, I&apos;m Jacek
          </h1>
          <h3 className={`${themeCtx.themeClasses.text} italic py-5 text-2xl`}>
            IT Technician and Developer
          </h3>
          <p className={`${themeCtx.themeClasses.subText} leading-7 `}>
            Big web development passionate - looking for a first job as a
            front-end engineer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-2xl lg:mx-auto gap-8">
          <a
            className={`${themeCtx.themeClasses.btnFilled} w-3/4  mx-auto font-semibold hover:scale-105`}
            href={"#projects"}
          >
            Projects
          </a>
          <a
            className={`${themeCtx.themeClasses.btnTrans} w-3/4 mx-auto  font-semibold hover:scale-105`}
            href={`#contact`}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute -z-30 top-0 m-auto">
        <BackgroundAnimation />
      </div>
    </section>
  );
}
