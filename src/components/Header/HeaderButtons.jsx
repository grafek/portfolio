import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { SocialIcons } from "../UI";
import { motion } from "framer-motion";

export default function HeaderButtons() {
  const themeCtx = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute flex gap-6 top-0 right-0 p-4 z-20"
    >
      {themeCtx.changeThemeBtn}
      <SocialIcons iconsSize={"text-2xl md:text-3xl"} />
    </motion.div>
  );
}
