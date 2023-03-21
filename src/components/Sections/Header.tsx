import { SocialMedia } from '../../../types';
import { motion, useCycle } from 'framer-motion';
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsMoonFill,
  BsSunFill,
  BsTelephoneFill,
} from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { headerButtonsVariants, sidebarVariants, variantsUl, varitantsLi } from '../../utils/framer';

type HeaderProps = { socials: SocialMedia[]; phoneNumber: string };

const Header: React.FC<HeaderProps> = ({ socials, phoneNumber }) => {
  const themeCtx = useContext(ThemeContext);

  const [isNavShown, toggleNav] = useCycle(false, true);

  const github = socials.find((social) => social.title === 'Github');
  const linkedin = socials.find((social) => social.title === 'LinkedIn');

  const HEADER_ICONS = [
    {
      title: 'mail',
      href: '#contact',
      Icon: BsEnvelopeFill,
    },
    {
      title: 'phone',
      href: `tel:${phoneNumber}`,
      Icon: BsTelephoneFill,
    },
    {
      title: github?.title,
      href: github?.socialLink,
      rel: 'noreferrer',
      target: '_blank',
      Icon: BsGithub,
    },
    {
      title: linkedin?.title,
      href: linkedin?.socialLink,
      rel: 'noreferrer',
      target: '_blank',
      Icon: BsLinkedin,
    },
  ];

  const NAV_ITEMS = ['home', 'projects', 'skills', 'about', 'contact'];

  return (
    <header className={`fixed z-40 w-screen`}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={headerButtonsVariants}
        className="absolute top-0 right-0 z-20 flex gap-4 p-4 md:gap-6 md:px-6 "
      >
        <button
          onClick={themeCtx.toggleDarkTheme}
          className={`cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl xl:text-3xl ${themeCtx.themeClasses.text}`}
          title="change-theme"
        >
          {themeCtx.darkTheme === 'dark' ? (
            <BsSunFill className="text-slate-200" />
          ) : (
            <BsMoonFill />
          )}
        </button>
        {HEADER_ICONS.map((item, idx) => (
          <a
            href={item.href}
            className={`cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl xl:text-3xl ${themeCtx.themeClasses.text}`}
            key={idx}
            rel={item.rel}
            target={item.target}
          >
            <item.Icon />
          </a>
        ))}
      </motion.div>

      {/* NAVBAR */}

      <motion.nav
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={isNavShown ? 'open' : 'closed'}
          initial={false}
          className={`${themeCtx.themeClasses.lightDarkBg} absolute top-0 left-0 bottom-0 h-screen w-1/3 md:w-1/5`}
          variants={sidebarVariants}
        >
          <div className="absolute top-0 left-0 z-20 p-[18px] md:p-[16px]">
            {isNavShown ? (
              <CgClose
                onClick={() => toggleNav()}
                className={`${themeCtx.themeClasses.text} cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl`}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => toggleNav()}
                className={`${themeCtx.themeClasses.text} cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl`}
              />
            )}
          </div>
          <motion.ul
            variants={variantsUl}
            className={`relative flex h-full flex-col items-center justify-center space-y-10`}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.li
                variants={varitantsLi}
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${themeCtx.themeClasses.text} border-b border-indigo-900 font-semibold uppercase`}
              >
                <a href={`#${item}`} onClick={() => toggleNav()}>
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Header;
