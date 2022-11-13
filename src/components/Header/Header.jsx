import Navbar from "./Navbar/Navbar";
import HeaderButtons from "./HeaderButtons";

export default function Header({socials, contactInfo}) {
  return (
    <header className={`w-screen fixed z-40`}>
      <HeaderButtons socials={socials} contactInfo={contactInfo}/>
      <Navbar />
    </header>
  );
}
