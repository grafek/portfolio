import { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../../contexts/Theme';

function ChangeThemeButton() {
  const themeCtx = useContext(ThemeContext);

  const changeThemeBtn =
    themeCtx.darkTheme === 'dark' ? (
      <BsSunFill className="text-slate-200" />
    ) : (
      <BsMoonFill />
    );

  return (
    <button
      onClick={themeCtx.toggleDarkTheme}
      className={`duration-300hover:scale-110 cursor-pointer text-xl opacity-70 md:text-2xl xl:text-3xl`}
      title="change-theme"
    >
      {changeThemeBtn}
    </button>
  );
}

export default ChangeThemeButton;
