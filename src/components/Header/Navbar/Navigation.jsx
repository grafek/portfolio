import { motion } from "framer-motion";
import NavItem from "./NavItem";

const navItems = ["home", "projects", "skills", "about", "contact"];

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const Navigation = ({ toggleNav }) => {
  return (
    <motion.ul
      variants={variantsUl}
      className={`space-y-10 flex flex-col h-full justify-center items-center relative`}
    >
      {navItems.map((item, i) => (
        <NavItem href={`#${item}`} onClick={toggleNav} key={i}>
          {item}
        </NavItem>
      ))}
    </motion.ul>
  );
};

export default Navigation;
