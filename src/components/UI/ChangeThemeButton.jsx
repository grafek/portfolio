import { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/Theme";

function ChangeThemeButton({ className = "" }) {
  const themeCtx = useContext(ThemeContext);

  const changeThemeBtn =
    themeCtx.darkTheme === "dark" ? (
      <BsSunFill className={`${className} text-slate-200`} />
    ) : (
      <BsMoonFill className={className} />
    );

  return (
    <button onClick={themeCtx.toggleDarkTheme} title="change-theme">
      {changeThemeBtn}
    </button>
  );
}

export default ChangeThemeButton;
