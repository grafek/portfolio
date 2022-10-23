import { useContext } from "react";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";

export default function Contact({ className, iconsSize }) {
  const themeCtx = useContext(ThemeContext);

  const classes = `${className} ${themeCtx.themeClasses.text} flex justify-center gap-8`;
  return (
    <div className={classes}>
      <a href={"mailto:jacek.grafender@gmail.com"}>
        <BsEnvelopeFill
          className={`${iconsSize} duration-300 hover:scale-110`}
        />
      </a>
      <a href={"tel:+48737637407"}>
        <BsTelephoneFill
          className={`${iconsSize} duration-300 hover:scale-110`}
        />
      </a>
    </div>
  );
}
