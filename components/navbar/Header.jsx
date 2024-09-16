import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-sm">
      <Navbar />
    </header>
  );
}

export default Header;
