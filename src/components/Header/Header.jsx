import Navbar from "./Navbar/Navbar";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  return (
    <header className={`w-screen fixed z-40`}>
      <HeaderButtons />
      <Navbar />
    </header>
  );
}
