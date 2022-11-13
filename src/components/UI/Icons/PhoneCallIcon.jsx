import { useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/Theme";

export default function PhoneCallIcon({ className = "", phoneNumber }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a href={`tel:${phoneNumber}`} title={`phone`}>
      <BsTelephoneFill
        className={`${className} ${themeCtx.themeClasses.text}`}
      />
    </a>
  );
}
