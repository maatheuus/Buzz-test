import { links } from "@/components/menu/utils/links";
import ScrollSection from "@/components/ui/ScrollSection";

function Links() {
  return (
    <div className="py-4 flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-lg text-neutral-50">About</h3>
        <ul className="w-full list-none space-y-3">
          {links.map((item) => (
            <li key={item.label}>
              <ScrollSection
                key={item.to}
                to={item.to}
                label={item.label}
                className="cursor-pointer font-bold text-[#AEB6C2] hover:text-gray-100 transition-colors duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Links;
