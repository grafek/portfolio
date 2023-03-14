import { MouseEventHandler, useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import { motion, useCycle } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

const sidebarVariants = {
  open: {
    opacity: 0.95,
    clipPath: `circle(1000px at 50px 50px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
      damping: 20,
    },
  },
  closed: {
    opacity: 0.95,
    clipPath: 'circle(20px at 28px 28px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const varitantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const navItems = ['home', 'projects', 'skills', 'about', 'contact'];

export default function Navbar() {
  const themeCtx = useContext(ThemeContext);
  const [isNavShown, toggleNav] = useCycle(false, true);

  const navBtn = isNavShown ? (
    <CgClose
      onClick={() => toggleNav()}
      className={`${themeCtx.themeClasses.text} cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl`}
    />
  ) : (
    <GiHamburgerMenu
      onClick={() => toggleNav()}
      className={`${themeCtx.themeClasses.text} cursor-pointer text-xl opacity-70 duration-300 hover:scale-110 md:text-2xl`}
    />
  );

  return (
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
          {navBtn}
        </div>
        <motion.ul
          variants={variantsUl}
          className={`relative flex h-full flex-col items-center justify-center space-y-10`}
        >
          {navItems.map((item, i) => (
            <NavItem
              destination={`#${item}`}
              onClick={() => toggleNav()}
              key={i}
            >
              {item}
            </NavItem>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  destination: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  destination,
  onClick,
}) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <motion.li
      variants={varitantsLi}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${themeCtx.themeClasses.text} border-b border-indigo-900 font-semibold uppercase`}
    >
      <a href={destination} onClick={onClick}>
        {children}
      </a>
    </motion.li>
  );
};
