import { useContext } from "react";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/Theme";

export default function ContactIcons({ iconsSize }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <a href={"mailto:jacek.grafender@gmail.com"}>
        <BsEnvelopeFill
          className={`${iconsSize} ${themeCtx.themeClasses.text} duration-300 hover:scale-110`}
        />
      </a>
      <a href={"tel:+48737637407"}>
        <BsTelephoneFill
          className={`${iconsSize} ${themeCtx.themeClasses.text} duration-300 hover:scale-110`}
        />
      </a>
    </>
  );
}
