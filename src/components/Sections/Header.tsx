import { SocialMedia } from "../../../types";
import { motion as m, useCycle } from "framer-motion";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsMoonFill,
  BsSunFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  headerButtonsVariants,
  sidebarVariants,
  variantsUl,
  varitantsLi,
} from "../../utils/framer";

type HeaderProps = { socials: SocialMedia[]; phoneNumber: string };

const getLocalStorageTheme = localStorage.theme ?? "dark";

const Header: React.FC<HeaderProps> = ({ socials, phoneNumber }) => {
  const [theme, setTheme] = useState(getLocalStorageTheme);

  useEffect(() => {
    const root = document.querySelector("#body")!;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [isNavShown, toggleNav] = useCycle(false, true);

  const toggleTheme = () => {
    setTheme((prev: string) => (prev === "dark" ? "light" : "dark"));
  };

  const github = socials.find((social) => social.title === "Github");
  const linkedin = socials.find((social) => social.title === "LinkedIn");

  const HEADER_ICONS = [
    {
      title: "mail",
      href: "#contact",
      Icon: BsEnvelopeFill,
    },
    {
      title: "phone",
      href: `tel:${phoneNumber}`,
      Icon: BsTelephoneFill,
    },
    {
      title: github?.title,
      href: github?.socialLink,
      rel: "noreferrer",
      target: "_blank",
      Icon: BsGithub,
    },
    {
      title: linkedin?.title,
      href: linkedin?.socialLink,
      rel: "noreferrer",
      target: "_blank",
      Icon: BsLinkedin,
    },
  ];

  const NAV_ITEMS = ["home", "projects", "skills", "about", "contact"];

  return (
    <header className={`fixed z-40 w-screen`}>
      <m.div
        initial="initial"
        animate="animate"
        variants={headerButtonsVariants}
        className="fixed right-0 top-0 z-20 flex gap-4 p-4 md:gap-6 md:px-6"
      >
        <button
          onClick={toggleTheme}
          className={`cursor-pointer text-xl text-slate-900 opacity-70 duration-300 hover:scale-110 dark:text-gray-50 md:text-2xl`}
          title={`Toggle ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
        </button>
        {HEADER_ICONS.map((item, idx) => (
          <a
            href={item.href}
            className={`cursor-pointer text-xl text-slate-900 opacity-70 duration-300 hover:scale-110 dark:text-gray-50 md:text-2xl`}
            key={idx}
            rel={item.rel}
            title={item.title}
            target={item.target}
          >
            <item.Icon />
          </a>
        ))}
      </m.div>

      <m.nav
        animate={isNavShown ? "animate" : "initial"}
        initial={"initial"}
        className={`fixed bottom-0 left-0 top-0 h-screen w-1/3 bg-gradient-to-b from-[#827fe0] to-[#c0bef3] opacity-95 dark:from-[#1f1769]/80 dark:to-darkBg/80 md:w-1/5`}
        variants={sidebarVariants}
      >
        <div className="fixed left-0 top-0 z-20 cursor-pointer p-[18px] text-xl text-slate-900 opacity-70 duration-300 hover:scale-110 dark:text-gray-50 md:p-[16px] md:text-2xl">
          {isNavShown ? (
            <CgClose onClick={() => toggleNav()} />
          ) : (
            <GiHamburgerMenu onClick={() => toggleNav()} />
          )}
        </div>
        <m.ul
          variants={variantsUl}
          className={` flex h-full flex-col items-center justify-center`}
        >
          {NAV_ITEMS.map((item, i) => (
            <m.li
              variants={varitantsLi}
              key={i}
              className={`flex w-full text-center`}
            >
              <a
                className="w-full py-4 font-semibold uppercase text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#000] active:scale-95 dark:text-gray-200 dark:hover:text-[#fff]"
                href={`#${item}`}
                onClick={() => toggleNav()}
              >
                {item}
              </a>
            </m.li>
          ))}
        </m.ul>
      </m.nav>
    </header>
  );
};

export default Header;
