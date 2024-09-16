import { motion } from "framer-motion";
import { perspective } from "./anim";
import { links } from "./links";
import ScrollSection from "@/components/ui/ScrollSection";

function LinksMenu({ setIsActive }) {
  return (
    <div className="flex flex-col justify-between pt-24 px-10 pb-11 h-full box-border">
      <div className="flex gap-y-3 flex-col">
        {links.map((item, i) => (
          <div key={i} className="linkMenu">
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => {
                setIsActive(false);
              }}
              role="menuitem"
            >
              <ScrollSection
                key={item.to}
                to={item.to}
                label={item.label}
                className="text-white text-3xl sm:text-5xl"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LinksMenu;
