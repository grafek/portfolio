import { useState } from "react";
import Navbar from "../../Navbar";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  const [isNavShown, setIsNavShown] = useState("MOUNTED");

  const toggleNavHandler = () => {
    isNavShown === "HIDE" || isNavShown === "MOUNTED"
      ? setIsNavShown("SHOW")
      : setIsNavShown("HIDE");
  };

  return (
    <header className={`w-screen fixed opacity-95 z-40`}>
      <HeaderButtons
        toggleNavHandler={toggleNavHandler}
        isNavShown={isNavShown}
      />
      <Navbar isNavShown={isNavShown} toggleNavHandler={toggleNavHandler} />
    </header>
  );
}
