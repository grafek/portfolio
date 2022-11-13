import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  GithubIcon,
  LinkedInIcon,
  PhoneCallIcon,
} from "../UI/Icons";
import { ChangeThemeButton } from "../UI";

export default function HeaderButtons() {
  const headerIconClasses =
    "text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 opacity-70";

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute flex gap-4 md:gap-6 top-0 right-0 p-4 md:px-6 z-20 "
    >
      <ChangeThemeButton className={headerIconClasses} />
      <EnvelopeIcon className={headerIconClasses} />
      <PhoneCallIcon className={headerIconClasses} />
      <GithubIcon className={headerIconClasses} />
      <LinkedInIcon className={headerIconClasses} />
    </motion.div>
  );
}
