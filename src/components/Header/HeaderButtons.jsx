import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { ContactIcons, SocialIcons } from "../UI";
import { motion } from "framer-motion";

export default function HeaderButtons() {
  const themeCtx = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute flex gap-4 top-0 right-0 p-4 md:px-6 z-20 "
    >
      {themeCtx.changeThemeBtn}
      <ContactIcons iconsSize={"text-xl md:text-2xl opacity-70"} />
      <SocialIcons iconsSize={"text-xl md:text-2xl opacity-70"} />
    </motion.div>
  );
}
