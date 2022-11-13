import { useContext } from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/Theme";

export default function EnvelopeIcon({ className = "" }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a href={"#contact"} title={"mail"}>
      <BsEnvelopeFill
        className={`${className} ${themeCtx.themeClasses.text}`}
      />
    </a>
  );
}
