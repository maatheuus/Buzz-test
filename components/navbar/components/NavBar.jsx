import { links } from "../../menu/utils/links";
import ScrollSection from "../../ui/ScrollSection";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="text-white hidden sm:block">
      <div className="flex justify-between gap-4 px-8 py-5">
        <Logo />

        <ul className="flex w-full justify-center list-none gap-x-4">
          {links.map((item) => (
            <li key={item.label}>
              <ScrollSection
                key={item.to}
                to={item.to}
                label={item.label}
                className="cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
