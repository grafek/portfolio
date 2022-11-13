import { useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/Theme";

export default function PhoneCallIcon({ className = "" }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a href={"tel:+48737637407"} title={`phone`}>
      <BsTelephoneFill
        className={`${className} ${themeCtx.themeClasses.text}`}
      />
    </a>
  );
}
