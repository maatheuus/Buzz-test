import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="text-white hidden sm:block">
      <div className="flex justify-between gap-4 px-8 py-5">
        <Logo />
      </div>
    </nav>
  );
}

export default NavBar;
