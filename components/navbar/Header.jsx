import Menu from "../menu/Menu";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-sm">
      <Navbar />
      <Menu />
    </header>
  );
}

export default Header;
