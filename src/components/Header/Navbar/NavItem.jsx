import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { motion } from "framer-motion";

const variants = {
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

export default function NavItem({ children, href, onClick }) {
  const themeCtx = useContext(ThemeContext);

  const classes = ` ${themeCtx.themeClasses.text} border-b border-indigo-900 uppercase font-semibold`;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </motion.li>
  );
}
